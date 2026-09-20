import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin" && (session?.user as any)?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const list = await db.query.contactMessages.findMany({
      orderBy: [desc(contactMessages.createdAt)],
    });
    return NextResponse.json({ messages: list });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin" && (session?.user as any)?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const { id, reply } = await request.json();
    if (!id || !reply) {
      return NextResponse.json({ error: "Message ID and reply required" }, { status: 400 });
    }

    await db
      .update(contactMessages)
      .set({ status: "replied" })
      .where(eq(contactMessages.id, id));

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
