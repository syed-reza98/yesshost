import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { orders, orderItems, invoices, services, walletTransactions } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";
import { provisionHostingService } from "@/lib/whm";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const body = await request.json();
    const { items, paymentMethod } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const totalBdt = items.reduce((sum: number, it: any) => sum + Number(it.price || it.price_bdt || 0), 0);
    const orderNumber = `ORD-${Date.now().toString().slice(-6)}`;
    const orderId = crypto.randomUUID();
    const invoiceId = crypto.randomUUID();
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;

    // If payment method is wallet, check balance inside a transaction
    if (paymentMethod === "wallet") {
      const balanceRow = await db
        .select({
          credits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('deposit', 'refund') THEN amount_bdt ELSE 0 END), 0)`,
          debits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('payment', 'withdrawal') THEN amount_bdt ELSE 0 END), 0)`,
        })
        .from(walletTransactions)
        .where(eq(walletTransactions.userId, userId));

      const currentBalance = Number(balanceRow[0]?.credits || 0) - Number(balanceRow[0]?.debits || 0);

      if (currentBalance < totalBdt) {
        return NextResponse.json(
          { error: `Insufficient wallet balance. Required: ৳${totalBdt}, Available: ৳${currentBalance.toFixed(2)}` },
          { status: 400 }
        );
      }
    }

    // 1. Create Order
    await db.insert(orders).values({
      id: orderId,
      userId,
      orderNumber,
      status: paymentMethod === "wallet" ? "completed" : "pending",
      subtotalBdt: totalBdt.toFixed(2),
      discountBdt: "0.00",
      totalBdt: totalBdt.toFixed(2),
    });

    // 2. Insert Order Items & Create Service/Domain Records
    const createdServiceIds: string[] = [];
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);

    for (const item of items) {
      const itemId = crypto.randomUUID();
      const itemPrice = Number(item.price || item.price_bdt || 0).toFixed(2);
      const isDomain = item.type === "domain";
      const srvId = crypto.randomUUID();

      await db.insert(orderItems).values({
        id: itemId,
        orderId,
        itemType: item.type || "hosting",
        itemName: item.name || item.domain || "Web Hosting Package",
        domain: item.domain || null,
        billingCycle: item.billingCycle || "annually",
        priceBdt: itemPrice,
      });

      await db.insert(services).values({
        id: srvId,
        userId,
        name: item.name || (isDomain ? "Domain Registration" : "Web Hosting Plan"),
        domain: item.domain || null,
        packageName: item.plan || (isDomain ? "domain" : "default"),
        serviceType: isDomain ? "domain" : "hosting",
        billingCycle: item.billingCycle || "annually",
        priceBdt: itemPrice,
        status: paymentMethod === "wallet" ? "active" : "pending",
        startDate: new Date(),
        expiryDate: oneYearLater,
        specs: isDomain
          ? { nameservers: ["ns1.yesshost.com", "ns2.yesshost.com"], autoRenew: true }
          : undefined,
      });

      createdServiceIds.push(srvId);
    }

    // 3. Create Invoice
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    await db.insert(invoices).values({
      id: invoiceId,
      userId,
      serviceId: createdServiceIds[0] || null,
      invoiceNumber,
      amountBdt: totalBdt.toFixed(2),
      status: paymentMethod === "wallet" ? "paid" : "unpaid",
      paymentMethod: paymentMethod || "wallet",
      dueDate,
      paidAt: paymentMethod === "wallet" ? new Date() : null,
      description: `Order #${orderNumber}`,
    });

    // 4. If Wallet Paid, record debit and trigger auto-provisioning
    if (paymentMethod === "wallet") {
      await db.insert(walletTransactions).values({
        id: crypto.randomUUID(),
        userId,
        type: "payment",
        amountBdt: totalBdt.toFixed(2),
        description: `Payment for Order #${orderNumber} (Invoice #${invoiceNumber})`,
        status: "completed",
      });

      // Auto-provision services in background
      for (const srvId of createdServiceIds) {
        provisionHostingService(srvId).catch((err) =>
          console.error(`Checkout auto-provision failed for ${srvId}:`, err)
        );
      }
    }

    return NextResponse.json({
      success: true,
      orderNumber,
      orderId,
      invoiceNumber,
      totalBdt,
      isPaid: paymentMethod === "wallet",
    });
  } catch (err: any) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
