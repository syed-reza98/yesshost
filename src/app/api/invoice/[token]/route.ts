import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { invoices, users } from "@/lib/db/schema";
import { eq, and, gt } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ token: string }> }
) {
  try {
    const { token } = await params;
    if (!token || token.length < 16) {
      return NextResponse.json({ error: "Invalid token" }, { status: 400 });
    }

    const invoice = await db.query.invoices.findFirst({
      where: and(
        eq(invoices.shareToken, token),
        gt(invoices.shareExpiresAt, new Date())
      ),
    });

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found or link has expired" }, { status: 404 });
    }

    const user = await db.query.users.findFirst({
      where: eq(users.id, invoice.userId),
    });

    return NextResponse.json({
      invoice: {
        id: invoice.id,
        invoiceNumber: invoice.invoiceNumber,
        amountBdt: invoice.amountBdt,
        status: invoice.status,
        paymentMethod: invoice.paymentMethod,
        dueDate: invoice.dueDate,
        paidAt: invoice.paidAt,
        description: invoice.description,
        createdAt: invoice.createdAt,
        clientName: user?.name || "Client",
        clientEmail: user?.email,
      },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
