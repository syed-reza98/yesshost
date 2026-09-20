import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { supportTickets, ticketReplies, users } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin" && (session?.user as any)?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const ticketId = request.nextUrl.searchParams.get("ticketId");

  try {
    if (ticketId) {
      const ticket = await db.query.supportTickets.findFirst({
        where: eq(supportTickets.id, ticketId),
      });
      if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

      const user = await db.query.users.findFirst({ where: eq(users.id, ticket.userId) });
      const replies = await db.query.ticketReplies.findMany({
        where: eq(ticketReplies.ticketId, ticketId),
        orderBy: [desc(ticketReplies.createdAt)],
      });

      const enrichedReplies = await Promise.all(
        replies.map(async (r) => {
          const author = await db.query.users.findFirst({ where: eq(users.id, r.userId) });
          return {
            ...r,
            userName: author?.name || (r.isStaff ? "Support Staff" : "Client"),
          };
        })
      );

      return NextResponse.json({
        ticket: {
          ...ticket,
          userName: user?.name,
          userEmail: user?.email,
          replies: enrichedReplies.reverse(),
        },
      });
    }

    const allTickets = await db.query.supportTickets.findMany({
      orderBy: [desc(supportTickets.createdAt)],
    });

    const enriched = await Promise.all(
      allTickets.map(async (t) => {
        const user = await db.query.users.findFirst({ where: eq(users.id, t.userId) });
        return {
          ...t,
          userName: user?.name,
          userEmail: user?.email,
        };
      })
    );

    return NextResponse.json({ tickets: enriched });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin" && (session?.user as any)?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { id, status, priority } = body;

    if (!id) return NextResponse.json({ error: "Ticket ID is required" }, { status: 400 });

    const updates: any = {};
    if (status) updates.status = status;
    if (priority) updates.priority = priority;

    await db.update(supportTickets).set(updates).where(eq(supportTickets.id, id));
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  const user = session?.user as any;
  if (user?.role !== "admin" && user?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { ticketId, message } = body;

    if (!ticketId || !message) {
      return NextResponse.json({ error: "ticketId and message are required" }, { status: 400 });
    }

    const newReplyId = crypto.randomUUID();
    await db.insert(ticketReplies).values({
      id: newReplyId,
      ticketId,
      userId: user.id,
      message,
      isStaff: true,
    });

    // Update ticket status to waiting_client
    await db.update(supportTickets).set({ status: "waiting_client" }).where(eq(supportTickets.id, ticketId));

    return NextResponse.json({ success: true, replyId: newReplyId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
