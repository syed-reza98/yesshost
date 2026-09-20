import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { themeOrders, themes } from "@/lib/db/schema";
import { eq, inArray } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET /api/themes/my-purchases – theme orders for logged-in user
export async function GET() {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const orders = await db.query.themeOrders.findMany({
      where: eq(themeOrders.userId, session.user.id),
      orderBy: (o, { desc }) => [desc(o.createdAt)],
    });

    // Fetch themes separately for each order
    const themeIds = [...new Set(orders.map((o) => o.themeId))];
    const themeMap: Record<string, typeof themes.$inferSelect> = {};
    if (themeIds.length) {
      const themeRows = await db.query.themes.findMany({
        where: inArray(themes.id, themeIds),
      });
      for (const t of themeRows) themeMap[t.id] = t;
    }

    return NextResponse.json({
      orders: orders.map((o) => {
        const t = themeMap[o.themeId];
        return {
          id: o.id,
          status: o.status,
          amountBdt: Number(o.amountBdt),
          createdAt: o.createdAt.toISOString(),
          paidAt: null,
          invoiceId: null,
          themeId: o.themeId,
          theme: t
            ? {
                id: t.id,
                name: t.name,
                slug: t.slug,
                filePath: t.filePath,
                previewUrl: t.previewUrl,
              }
            : null,
        };
      }),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
