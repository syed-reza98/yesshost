import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { themeSellerPayouts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// POST /api/themes/seller/payout – request a seller payout
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { amount, method, account } = body;

  const amountNum = Number(amount);
  if (!amountNum || amountNum < 500)
    return NextResponse.json(
      { error: "Minimum payout is ৳500" },
      { status: 400 }
    );
  if (!method || !account)
    return NextResponse.json(
      { error: "method and account are required" },
      { status: 400 }
    );

  try {
    await db.insert(themeSellerPayouts).values({
      id: crypto.randomUUID(),
      userId: session.user.id,
      amountBdt: String(amountNum.toFixed(2)),
      method: String(method),
      accountDetails: String(account).trim(),
      status: "requested",
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
