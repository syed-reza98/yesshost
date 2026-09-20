import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  themes,
  themeOrders,
  themeSellerPayouts,
  themeSellerProfiles,
} from "@/lib/db/schema";
import { eq, inArray } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET /api/themes/seller – current user's themes, sales, payouts, profile
export async function GET() {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const userId = session.user.id;

  try {
    const [profile, myThemes] = await Promise.all([
      db.query.themeSellerProfiles.findFirst({
        where: eq(themeSellerProfiles.userId, userId),
      }),
      db.query.themes.findMany({
        where: eq(themes.sellerUserId, userId),
        orderBy: (t, { desc }) => [desc(t.createdAt)],
      }),
    ]);

    const themeIds = myThemes.map((t) => t.id);

    const [sales, payouts] = await Promise.all([
      themeIds.length
        ? db.query.themeOrders.findMany({
            where: inArray(themeOrders.themeId, themeIds),
            orderBy: (o, { desc }) => [desc(o.createdAt)],
          })
        : Promise.resolve([]),
      db.query.themeSellerPayouts.findMany({
        where: eq(themeSellerPayouts.userId, userId),
        orderBy: (p, { desc }) => [desc(p.createdAt)],
      }),
    ]);

    return NextResponse.json({ profile, themes: myThemes, sales, payouts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/themes/seller – list a new theme
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const {
    name,
    slug,
    category,
    priceBdt,
    previewUrl,
    thumbnailUrl,
    filePath,
    descriptionBn,
    descriptionEn,
  } = body;

  if (!name || !slug || !priceBdt)
    return NextResponse.json(
      { error: "name, slug, and priceBdt are required" },
      { status: 400 }
    );

  const slugClean = String(slug)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-");

  try {
    const id = crypto.randomUUID();
    await db.insert(themes).values({
      id,
      sellerUserId: session.user.id,
      name: String(name).trim().slice(0, 255),
      slug: slugClean,
      category: String(category || "business"),
      priceBdt: String(Number(priceBdt).toFixed(2)),
      previewUrl: previewUrl || null,
      filePath: filePath || null,
      approvalStatus: "pending",
      isActive: false,
    });

    return NextResponse.json({ ok: true, id });
  } catch (error: any) {
    if (error.message?.includes("Duplicate"))
      return NextResponse.json({ error: "slug_taken" }, { status: 409 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/themes/seller?id=xxx – remove a theme owned by the user
export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const id = new URL(req.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  try {
    const theme = await db.query.themes.findFirst({
      where: eq(themes.id, id),
    });
    if (!theme || theme.sellerUserId !== session.user.id)
      return NextResponse.json({ error: "Not found" }, { status: 404 });

    await db.delete(themes).where(eq(themes.id, id));
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
