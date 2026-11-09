import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { kbCategories, kbArticles } from "@/lib/db/schema";
import { desc, eq, like, or } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  const slug = request.nextUrl.searchParams.get("slug")?.trim();

  try {
    if (slug) {
      const article = await db.query.kbArticles.findFirst({
        where: eq(kbArticles.slug, slug),
      });
      return NextResponse.json({ article });
    }

    const categories = await db.query.kbCategories.findMany();

    let articles;
    if (q) {
      const pattern = `%${q}%`;
      articles = await db.query.kbArticles.findMany({
        where: or(
          like(kbArticles.title, pattern),
          like(kbArticles.contentBn, pattern),
          like(kbArticles.contentEn, pattern)
        ),
      });
    } else {
      articles = await db.query.kbArticles.findMany();
    }

    return NextResponse.json({
      categories,
      articles,
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
    const body = await request.json();
    const { title, slug, categoryId, contentEn, contentBn } = body;

    if (!title) return NextResponse.json({ error: "Title required" }, { status: 400 });

    const articleSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const newArticle = {
      id: crypto.randomUUID(),
      title,
      slug: articleSlug,
      categoryId: categoryId || "cpanel",
      contentEn: contentEn || "",
      contentBn: contentBn || "",
    };

    await db.insert(kbArticles).values(newArticle);
    return NextResponse.json({ success: true, article: newArticle });
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
    if (!id) return NextResponse.json({ error: "Article ID required" }, { status: 400 });

    await db.delete(kbArticles).where(eq(kbArticles.id, id));
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
