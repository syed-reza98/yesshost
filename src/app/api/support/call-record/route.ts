import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { callHistory } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, chatId, callType, recordId, durationSeconds, status } = body;

    if (action === "start") {
      const newId = crypto.randomUUID();
      await db.insert(callHistory).values({
        id: newId,
        chatId: chatId || null,
        callType: callType || "inbound",
        durationSeconds: 0,
        status: "in_progress",
      });
      return NextResponse.json({ id: newId });
    }

    if (action === "update" && recordId) {
      await db
        .update(callHistory)
        .set({
          durationSeconds: durationSeconds ? Number(durationSeconds) : 0,
          status: status || "completed",
        })
        .where(eq(callHistory.id, recordId));
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
