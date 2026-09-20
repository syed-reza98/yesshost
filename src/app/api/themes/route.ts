import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { themes } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const list = await db.query.themes.findMany({
      where: eq(themes.isActive, true),
    });
    return NextResponse.json({ themes: list });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
