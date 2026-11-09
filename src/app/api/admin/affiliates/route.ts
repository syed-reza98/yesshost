import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { affiliateProfiles, affiliatePayouts, affiliateReferrals, users } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const [profiles, payouts, referrals, allUsers] = await Promise.all([
      db.query.affiliateProfiles.findMany({
        orderBy: [desc(affiliateProfiles.createdAt)],
      }),
      db.query.affiliatePayouts.findMany({
        orderBy: [desc(affiliatePayouts.createdAt)],
      }),
      db.query.affiliateReferrals.findMany(),
      db.query.users.findMany(),
    ]);

    const enrichedProfiles = profiles.map((p) => {
      const u = allUsers.find((usr) => usr.id === p.userId);
      const userReferrals = referrals.filter((r) => r.referrerUserId === p.userId);
      return {
        ...p,
        userName: u?.name || "Client",
        userEmail: u?.email || "",
        referralCount: userReferrals.length,
      };
    });

    const enrichedPayouts = payouts.map((pay) => {
      const u = allUsers.find((usr) => usr.id === pay.userId);
      return {
        ...pay,
        userName: u?.name || "Client",
        userEmail: u?.email || "",
      };
    });

    return NextResponse.json({
      affiliates: enrichedProfiles,
      payouts: enrichedPayouts,
    });
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
    const { action, payoutId, status } = await request.json();
    if (action === "update_payout" && payoutId && status) {
      await db
        .update(affiliatePayouts)
        .set({ status, processedAt: new Date() })
        .where(eq(affiliatePayouts.id, payoutId));
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
