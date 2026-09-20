import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { orders, orderItems } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isAdmin = (session.user as any)?.role === "admin";

  try {
    const list = await db.query.orders.findMany({
      where: isAdmin ? undefined : eq(orders.userId, session.user.id),
      orderBy: [desc(orders.createdAt)],
    });

    const enriched = await Promise.all(
      list.map(async (ord) => {
        const items = await db.query.orderItems.findMany({
          where: eq(orderItems.orderId, ord.id),
        });
        return {
          ...ord,
          items,
        };
      })
    );

    return NextResponse.json({ orders: enriched });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
