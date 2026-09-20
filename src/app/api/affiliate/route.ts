import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { affiliateProfiles, affiliateReferrals, affiliateCommissions, affiliatePayouts, affiliateClicks } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    let profile = await db.query.affiliateProfiles.findFirst({
      where: eq(affiliateProfiles.userId, userId),
    });

    if (!profile) {
      const code = `YH${userId.replace(/-/g, "").slice(0, 6).toUpperCase()}${Math.floor(10 + Math.random() * 90)}`;
      const newId = crypto.randomUUID();
      await db.insert(affiliateProfiles).values({
        id: newId,
        userId,
        referralCode: code,
        balanceBdt: "0.00",
        totalEarnedBdt: "0.00",
      });
      profile = await db.query.affiliateProfiles.findFirst({ where: eq(affiliateProfiles.id, newId) });
    }

    const [referrals, commissions, payouts, clicks] = await Promise.all([
      db.query.affiliateReferrals.findMany({
        where: eq(affiliateReferrals.referrerUserId, userId),
        orderBy: [desc(affiliateReferrals.createdAt)],
      }),
      db.query.affiliateCommissions.findMany({
        where: eq(affiliateCommissions.userId, userId),
        orderBy: [desc(affiliateCommissions.createdAt)],
      }),
      db.query.affiliatePayouts.findMany({
        where: eq(affiliatePayouts.userId, userId),
        orderBy: [desc(affiliatePayouts.createdAt)],
      }),
      db.query.affiliateClicks.findMany({
        where: eq(affiliateClicks.referrerUserId, userId),
      }),
    ]);

    return NextResponse.json({
      profile,
      clicksCount: clicks.length,
      referrals,
      commissions,
      payouts,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { amount, method, accountDetails } = body;
    const numAmount = Number(amount);

    if (!numAmount || numAmount < 500) {
      return NextResponse.json({ error: "Minimum payout threshold is 500 BDT" }, { status: 400 });
    }

    const profile = await db.query.affiliateProfiles.findFirst({
      where: eq(affiliateProfiles.userId, session.user.id),
    });

    if (!profile || Number(profile.balanceBdt) < numAmount) {
      return NextResponse.json({ error: "Insufficient affiliate balance" }, { status: 400 });
    }

    const payoutId = crypto.randomUUID();
    await db.insert(affiliatePayouts).values({
      id: payoutId,
      userId: session.user.id,
      amountBdt: numAmount.toFixed(2),
      method: method || "bkash",
      accountDetails: accountDetails || "",
      status: "requested",
    });

    // Deduct balance
    const newBal = (Number(profile.balanceBdt) - numAmount).toFixed(2);
    await db.update(affiliateProfiles).set({ balanceBdt: newBal }).where(eq(affiliateProfiles.id, profile.id));

    return NextResponse.json({ success: true, payoutId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
