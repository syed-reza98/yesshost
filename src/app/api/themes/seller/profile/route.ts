import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { themeSellerProfiles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// PUT /api/themes/seller/profile – upsert seller profile
export async function PUT(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { displayName, slug, logoUrl, bioBn, bioEn, website, isPublic } = body;

  const name = String(displayName || "").trim();
  const slugClean = String(slug || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-");

  if (name.length < 2)
    return NextResponse.json({ error: "name_too_short" }, { status: 400 });
  if (!slugClean || slugClean.length < 2)
    return NextResponse.json({ error: "slug_invalid" }, { status: 400 });

  const userId = session.user.id;

  try {
    const existing = await db.query.themeSellerProfiles.findFirst({
      where: eq(themeSellerProfiles.userId, userId),
    });

    if (existing) {
      await db
        .update(themeSellerProfiles)
        .set({
          displayName: name,
          slug: slugClean,
          logoUrl: logoUrl || null,
          bioBn: bioBn || null,
          bioEn: bioEn || null,
          website: website || null,
          isPublic: isPublic !== false,
        })
        .where(eq(themeSellerProfiles.userId, userId));
    } else {
      await db.insert(themeSellerProfiles).values({
        id: crypto.randomUUID(),
        userId,
        displayName: name,
        slug: slugClean,
        logoUrl: logoUrl || null,
        bioBn: bioBn || null,
        bioEn: bioEn || null,
        website: website || null,
        isPublic: isPublic !== false,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    if (error.message?.includes("Duplicate"))
      return NextResponse.json({ error: "slug_taken" }, { status: 409 });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
