import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { liveChats } from "@/lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    const newChatId = crypto.randomUUID();
    await db.insert(liveChats).values({
      id: newChatId,
      visitorName: name || "Visitor",
      visitorEmail: email || null,
      visitorPhone: phone || null,
      status: "open",
    });

    return NextResponse.json({ success: true, chatId: newChatId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
