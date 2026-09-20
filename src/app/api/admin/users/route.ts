import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users, profiles, userRoles, walletTransactions } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const allUsers = await db.query.users.findMany({
      orderBy: [desc(users.createdAt)],
    });

    const enriched = await Promise.all(
      allUsers.map(async (u) => {
        const [prof, r] = await Promise.all([
          db.query.profiles.findFirst({ where: eq(profiles.userId, u.id) }),
          db.query.userRoles.findFirst({ where: eq(userRoles.userId, u.id) }),
        ]);
        return {
          id: u.id,
          name: u.name,
          email: u.email,
          role: r?.role || "user",
          phone: prof?.phone,
          company: prof?.companyName,
          supportPin: prof?.supportPin,
          createdAt: u.createdAt,
        };
      })
    );

    return NextResponse.json({ users: enriched });
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
    const { action, userId, role, creditAmount, reason } = body;

    if (action === "set_role" && userId && role) {
      const existing = await db.query.userRoles.findFirst({
        where: eq(userRoles.userId, userId),
      });

      if (existing) {
        await db.update(userRoles).set({ role }).where(eq(userRoles.userId, userId));
      } else {
        await db.insert(userRoles).values({
          id: crypto.randomUUID(),
          userId,
          role,
        });
      }
      return NextResponse.json({ success: true });
    }

    if (action === "credit_wallet" && userId && creditAmount) {
      await db.insert(walletTransactions).values({
        id: crypto.randomUUID(),
        userId,
        type: "deposit",
        amountBdt: Number(creditAmount).toFixed(2),
        description: reason || "Administrative wallet credit adjustment",
        status: "completed",
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
