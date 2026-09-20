import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users, services, orders, supportTickets, invoices } from "@/lib/db/schema";
import { like, or } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin" && (session?.user as any)?.role !== "call_center") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const q = request.nextUrl.searchParams.get("q")?.trim();
  if (!q) {
    return NextResponse.json({ users: [], services: [], orders: [], tickets: [], invoices: [] });
  }

  const queryPattern = `%${q}%`;

  try {
    const [foundUsers, foundServices, foundOrders, foundTickets, foundInvoices] = await Promise.all([
      db.query.users.findMany({
        where: or(like(users.name, queryPattern), like(users.email, queryPattern)),
        limit: 5,
      }),
      db.query.services.findMany({
        where: or(like(services.name, queryPattern), like(services.domain, queryPattern)),
        limit: 5,
      }),
      db.query.orders.findMany({
        where: like(orders.orderNumber, queryPattern),
        limit: 5,
      }),
      db.query.supportTickets.findMany({
        where: or(like(supportTickets.ticketNumber, queryPattern), like(supportTickets.subject, queryPattern)),
        limit: 5,
      }),
      db.query.invoices.findMany({
        where: like(invoices.invoiceNumber, queryPattern),
        limit: 5,
      }),
    ]);

    return NextResponse.json({
      users: foundUsers.map(u => ({ id: u.id, full_name: u.name, email: u.email })),
      services: foundServices.map(s => ({ id: s.id, name: s.name, domain: s.domain, status: s.status, service_type: s.serviceType })),
      orders: foundOrders.map(o => ({ id: o.id, order_number: o.orderNumber, status: o.status, total_bdt: o.totalBdt })),
      tickets: foundTickets.map(t => ({ id: t.id, ticket_number: t.ticketNumber, subject: t.subject, status: t.status })),
      invoices: foundInvoices.map(i => ({ id: i.id, invoice_number: i.invoiceNumber, status: i.status, amount_bdt: i.amountBdt })),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
