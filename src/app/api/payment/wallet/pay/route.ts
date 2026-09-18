import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { invoices, walletTransactions, paymentEvents, services, orders } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { provisionHostingService } from "@/lib/whm";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { invoiceId } = body;

  if (!invoiceId) {
    return NextResponse.json({ error: "invoiceId is required" }, { status: 400 });
  }

  const invoice = await db.query.invoices.findFirst({
    where: eq(invoices.id, invoiceId),
  });

  if (!invoice) {
    return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
  }

  if (invoice.userId !== session.user.id) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (invoice.status === "paid") {
    return NextResponse.json({ error: "Invoice is already paid" }, { status: 400 });
  }

  const userId = session.user.id;
  const payableAmount = Number(invoice.amountBdt);

  // Execute ACID transaction
  try {
    const result = await db.transaction(async (tx) => {
      // 1. Calculate current wallet balance
      const [balanceResult] = await tx
        .select({
          credits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('deposit', 'refund') THEN amount_bdt ELSE 0 END), 0)`,
          debits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('payment', 'withdrawal') THEN amount_bdt ELSE 0 END), 0)`,
        })
        .from(walletTransactions)
        .where(eq(walletTransactions.userId, userId));

      const currentBalance = Number(balanceResult.credits) - Number(balanceResult.debits);

      if (currentBalance < payableAmount) {
        throw new Error(
          `Insufficient wallet balance. Available: ৳${currentBalance.toFixed(2)}, Required: ৳${payableAmount.toFixed(2)}`
        );
      }

      // 2. Insert debit transaction
      const txnId = `WLT_${crypto.randomUUID().slice(0, 8)}_${Date.now()}`;
      await tx.insert(walletTransactions).values({
        id: crypto.randomUUID(),
        userId: userId,
        type: "payment",
        amountBdt: payableAmount.toFixed(2),
        status: "completed",
        paymentMethod: "wallet",
        transactionId: txnId,
        description: `Payment for Invoice #${invoice.invoiceNumber}`,
      });

      // 3. Mark invoice as paid
      await tx
        .update(invoices)
        .set({
          status: "paid",
          paidAt: new Date(),
          paymentMethod: "wallet",
        })
        .where(eq(invoices.id, invoiceId));

      // 4. Update linked order if exists
      await tx
        .update(orders)
        .set({ status: "completed" })
        .where(eq(orders.invoiceId, invoiceId));

      // 5. Log payment event
      await tx.insert(paymentEvents).values({
        id: crypto.randomUUID(),
        invoiceId: invoice.id,
        userId: userId,
        gateway: "wallet",
        transactionId: txnId,
        amountBdt: payableAmount.toFixed(2),
        status: "success",
        verified: true,
        payload: { method: "wallet", paidAt: new Date().toISOString() },
      });

      return { success: true, txnId };
    });

    // 6. Post-transaction provisioning hook
    if (invoice.serviceId) {
      // Run provisioning asynchronously so client receives immediate response
      provisionHostingService(invoice.serviceId).catch((err) => {
        console.error("Auto-provisioning failed for service:", invoice.serviceId, err);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Invoice paid successfully with Account Wallet",
      transactionId: result.txnId,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Wallet payment failed" }, { status: 400 });
  }
}
