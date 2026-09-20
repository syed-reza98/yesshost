import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { invoices } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import crypto from "crypto";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { invoiceId } = await request.json();
    if (!invoiceId) {
      return NextResponse.json({ error: "Invoice ID required" }, { status: 400 });
    }

    const invoice = await db.query.invoices.findFirst({
      where: eq(invoices.id, invoiceId),
    });

    if (!invoice) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    // Role check: customer can only share own invoice; admin can share any
    const userRole = (session.user as any)?.role;
    if (userRole !== "admin" && invoice.userId !== session.user.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    let token = invoice.shareToken;
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    if (!token || !invoice.shareExpiresAt || invoice.shareExpiresAt < new Date()) {
      token = crypto.randomBytes(32).toString("hex");
      await db.update(invoices).set({
        shareToken: token,
        shareExpiresAt: expiresAt,
      }).where(eq(invoices.id, invoiceId));
    }

    return NextResponse.json({
      token,
      expiresAt: expiresAt.toISOString(),
      shareUrl: `/invoice/${token}`,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
