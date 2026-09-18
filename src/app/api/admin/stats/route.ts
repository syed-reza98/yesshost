import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users, services, invoices, supportTickets, servers } from "@/lib/db/schema";
import { eq, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden: Admin access required" }, { status: 403 });
  }

  try {
    const [allUsers, allServices, allInvoices, allTickets, allServers] = await Promise.all([
      db.query.users.findMany(),
      db.query.services.findMany(),
      db.query.invoices.findMany(),
      db.query.supportTickets.findMany(),
      db.query.servers.findMany(),
    ]);

    const activeServices = allServices.filter((s) => s.status === "active").length;
    const suspendedServices = allServices.filter((s) => s.status === "suspended").length;

    const paidInvoices = allInvoices.filter((i) => i.status === "paid");
    const unpaidInvoices = allInvoices.filter((i) => i.status === "unpaid" || i.status === "overdue");

    const totalRevenue = paidInvoices.reduce((acc, i) => acc + Number(i.amountBdt), 0);
    const totalDue = unpaidInvoices.reduce((acc, i) => acc + Number(i.amountBdt), 0);
    const openTickets = allTickets.filter((t) => t.status === "open" || t.status === "in_progress").length;

    return NextResponse.json({
      totalUsers: allUsers.length,
      totalServices: allServices.length,
      activeServices,
      suspendedServices,
      totalInvoices: allInvoices.length,
      unpaidInvoices: unpaidInvoices.length,
      totalRevenue,
      totalDue,
      totalTickets: allTickets.length,
      openTickets,
      serversCount: allServers.length,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
