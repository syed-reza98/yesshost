import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { operatingExpenses } from "@/lib/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const expenses = await db.query.operatingExpenses.findMany({
      orderBy: [desc(operatingExpenses.expenseDate)],
    });

    return NextResponse.json({ expenses });
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
    const { title, category, amountBdt, expenseDate, vendor, note } = body;

    if (!title || !category || !amountBdt) {
      return NextResponse.json({ error: "Title, category and amount are required" }, { status: 400 });
    }

    const id = crypto.randomUUID();
    await db.insert(operatingExpenses).values({
      id,
      title,
      category,
      amountBdt: String(amountBdt),
      expenseDate: expenseDate ? new Date(expenseDate) : new Date(),
      vendor: vendor || null,
      note: note || null,
    });

    return NextResponse.json({ success: true, id });
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
    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    await db.delete(operatingExpenses).where(eq(operatingExpenses.id, id));
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
