import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services, invoices, supportTickets, walletTransactions } from "@/lib/db/schema";
import { eq, and, sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const [
      userServices,
      userInvoices,
      userTickets,
      walletBalanceResult,
    ] = await Promise.all([
      db.query.services.findMany({ where: eq(services.userId, userId) }),
      db.query.invoices.findMany({ where: eq(invoices.userId, userId) }),
      db.query.supportTickets.findMany({ where: eq(supportTickets.userId, userId) }),
      db
        .select({
          credits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('deposit', 'refund') THEN amount_bdt ELSE 0 END), 0)`,
          debits: sql<number>`COALESCE(SUM(CASE WHEN type IN ('payment', 'withdrawal') THEN amount_bdt ELSE 0 END), 0)`,
        })
        .from(walletTransactions)
        .where(eq(walletTransactions.userId, userId)),
    ]);

    const activeServices = userServices.filter((s) => s.status === "active").length;
    const unpaidInvoices = userInvoices.filter((i) => i.status === "unpaid" || i.status === "overdue");
    const unpaidTotal = unpaidInvoices.reduce((sum, i) => sum + Number(i.amountBdt), 0);
    const openTickets = userTickets.filter((t) => t.status === "open" || t.status === "in_progress").length;

    const balanceRow = walletBalanceResult[0];
    const walletBalance = Number(balanceRow?.credits || 0) - Number(balanceRow?.debits || 0);

    return NextResponse.json({
      servicesCount: userServices.length,
      activeServicesCount: activeServices,
      invoicesCount: userInvoices.length,
      unpaidInvoicesCount: unpaidInvoices.length,
      unpaidTotal,
      ticketsCount: userTickets.length,
      openTicketsCount: openTickets,
      walletBalance,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
