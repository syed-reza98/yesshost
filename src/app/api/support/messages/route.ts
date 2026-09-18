import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { liveChatMessages } from "@/lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { chatId, senderType, message } = body;

    if (!chatId || !message) {
      return NextResponse.json({ error: "chatId and message are required" }, { status: 400 });
    }

    const newId = crypto.randomUUID();
    await db.insert(liveChatMessages).values({
      id: newId,
      chatId,
      senderType: senderType || "visitor",
      message,
    });

    return NextResponse.json({ success: true, messageId: newId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
