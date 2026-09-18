import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactMessages } from "@/lib/db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });
    }

    await db.insert(contactMessages).values({
      id: crypto.randomUUID(),
      name,
      email,
      phone: phone || null,
      subject: subject || "General Inquiry",
      message,
      status: "unread",
    });

    return NextResponse.json({ success: true, message: "Your message has been sent successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
