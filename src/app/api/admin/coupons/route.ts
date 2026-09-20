import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { coupons } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const list = await db.query.coupons.findMany({
      orderBy: [desc(coupons.validFrom)],
    });
    return NextResponse.json({ coupons: list });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { code, discountType, discountValue, minSpendBdt, validUntil, usageLimit } = body;

    if (!code || !discountValue) {
      return NextResponse.json({ error: "Code and discount value required" }, { status: 400 });
    }

    const upperCode = code.trim().toUpperCase();
    const newCoupon = {
      id: crypto.randomUUID(),
      code: upperCode,
      discountType: discountType === "fixed" ? "fixed" : "percentage",
      discountValue: String(discountValue),
      minSpendBdt: String(minSpendBdt || "0.00"),
      validUntil: validUntil ? new Date(validUntil) : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      usageLimit: usageLimit ? Number(usageLimit) : 100,
      isActive: true,
    };

    await db.insert(coupons).values(newCoupon);
    return NextResponse.json({ success: true, coupon: newCoupon });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: "Coupon ID required" }, { status: 400 });

    await db.delete(coupons).where(eq(coupons.id, id));
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
