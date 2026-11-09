import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { themes } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const list = await db.query.themes.findMany({
      orderBy: [desc(themes.createdAt)],
    });
    return NextResponse.json({ themes: list });
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
    const { name, slug, category, priceBdt, previewUrl, descriptionEn, descriptionBn } = body;

    if (!name || !priceBdt) {
      return NextResponse.json({ error: "Name and price required" }, { status: 400 });
    }

    const themeSlug = slug || name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newTheme = {
      id: crypto.randomUUID(),
      sellerUserId: (session?.user as any)?.id || "admin-system",
      name,
      slug: themeSlug,
      category: category || "business",
      priceBdt: String(priceBdt),
      previewUrl: previewUrl || null,
      isActive: true,
    };

    await db.insert(themes).values(newTheme);
    return NextResponse.json({ success: true, theme: newTheme });
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
    if (!id) return NextResponse.json({ error: "Theme ID required" }, { status: 400 });

    await db.delete(themes).where(eq(themes.id, id));
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
