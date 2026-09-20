import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { supportTickets, ticketReplies, users } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const ticketId = request.nextUrl.searchParams.get("id");
  const isAdmin = (session.user as any)?.role === "admin";

  try {
    if (ticketId) {
      const ticket = await db.query.supportTickets.findFirst({
        where: eq(supportTickets.id, ticketId),
      });

      if (!ticket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
      }

      if (ticket.userId !== session.user.id && !isAdmin) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }

      const replies = await db.query.ticketReplies.findMany({
        where: eq(ticketReplies.ticketId, ticketId),
        orderBy: [ticketReplies.createdAt],
      });

      return NextResponse.json({ ticket, replies });
    }

    const tickets = await db.query.supportTickets.findMany({
      where: isAdmin ? undefined : eq(supportTickets.userId, session.user.id),
      orderBy: [desc(supportTickets.createdAt)],
    });

    return NextResponse.json({ tickets });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { action, ticketId, subject, message, priority, department } = body;

    // Post a reply
    if (action === "reply" && ticketId && message) {
      const ticket = await db.query.supportTickets.findFirst({
        where: eq(supportTickets.id, ticketId),
      });

      if (!ticket) {
        return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
      }

      const replyId = crypto.randomUUID();
      await db.insert(ticketReplies).values({
        id: replyId,
        ticketId,
        userId: session.user.id,
        message,
        isStaff: (session.user as any)?.role === "admin",
      });

      await db
        .update(supportTickets)
        .set({ status: (session.user as any)?.role === "admin" ? "answered" : "open" })
        .where(eq(supportTickets.id, ticketId));

      return NextResponse.json({ success: true, replyId });
    }

    // Create a new ticket
    if (!subject || !message) {
      return NextResponse.json({ error: "Subject and message are required" }, { status: 400 });
    }

    const newTicketId = crypto.randomUUID();
    const ticketNumber = `TICK-${Date.now().toString().slice(-6)}`;

    await db.insert(supportTickets).values({
      id: newTicketId,
      userId: session.user.id,
      ticketNumber,
      subject,
      department: department || "Technical Support",
      priority: priority || "medium",
      status: "open",
    });

    await db.insert(ticketReplies).values({
      id: crypto.randomUUID(),
      ticketId: newTicketId,
      userId: session.user.id,
      message,
      isStaff: false,
    });

    return NextResponse.json({ success: true, ticketId: newTicketId, ticketNumber });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
