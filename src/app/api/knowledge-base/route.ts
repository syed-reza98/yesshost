import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { kbCategories, kbArticles } from "@/lib/db/schema";
import { eq, like, or } from "drizzle-orm";

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
