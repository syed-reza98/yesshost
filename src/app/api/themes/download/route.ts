import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { themeOrders, themes } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

// GET /api/themes/download?themeId=xxx&orderId=xxx
// Returns a signed/temp download URL for theme files
export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const themeId = searchParams.get("themeId");
  const orderId = searchParams.get("orderId");

  if (!themeId || !orderId)
    return NextResponse.json({ error: "themeId and orderId are required" }, { status: 400 });

  try {
    // Verify this user owns this order
    const order = await db.query.themeOrders.findFirst({
      where: and(
        eq(themeOrders.id, orderId),
        eq(themeOrders.userId, session.user.id),
        eq(themeOrders.themeId, themeId)
      ),
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found or not authorized" }, { status: 404 });
    }

    if (order.status !== "paid" && order.status !== "completed") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 402 });
    }

    const theme = await db.query.themes.findFirst({
      where: eq(themes.id, themeId),
    });

    if (!theme?.filePath) {
      return NextResponse.json({ error: "Theme file not available yet" }, { status: 404 });
    }

    // For local file paths, return directly. In production this would be a signed CDN URL
    if (theme.filePath.startsWith("http")) {
      return NextResponse.json({ url: theme.filePath });
    }

    // Return a temporary download link via our own endpoint
    const token = Buffer.from(JSON.stringify({
      themeId,
      orderId,
      userId: session.user.id,
      exp: Date.now() + 5 * 60 * 1000, // 5 min
    })).toString("base64url");

    return NextResponse.json({
      url: `/api/themes/download/file?token=${token}`,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
