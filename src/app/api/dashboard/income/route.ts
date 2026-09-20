import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { invoices, orders, walletTransactions, users } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const [userRecord, userInvoices, userOrders, userWallet] = await Promise.all([
      db.query.users.findFirst({ where: eq(users.id, userId) }),
      db.query.invoices.findMany({ where: eq(invoices.userId, userId) }),
      db.query.orders.findMany({ where: eq(orders.userId, userId) }),
      db.query.walletTransactions.findMany({ where: eq(walletTransactions.userId, userId) }),
    ]);

    const signupAt = userRecord?.createdAt ? userRecord.createdAt.toISOString() : null;

    const paidInvoicesList = userInvoices.filter((i) => i.status === "paid");
    const paidInvoices = paidInvoicesList.reduce((s, i) => s + Number(i.amountBdt || 0), 0);
    const pendingDue = userInvoices
      .filter((i) => i.status === "unpaid" || i.status === "overdue")
      .reduce((s, i) => s + Number(i.amountBdt || 0), 0);

    const walletCompleted = userWallet.filter((w) => w.status === "completed" && w.type === "deposit");
    const walletDeposits = walletCompleted.reduce((s, w) => s + Number(w.amountBdt || 0), 0);

    const events = [
      ...paidInvoicesList.map((i) => ({
        id: i.id,
        reference: i.invoiceNumber,
        amount: Number(i.amountBdt || 0),
        method: i.paymentMethod || "online",
        at: (i.paidAt || i.createdAt).toISOString(),
        source: "invoice",
      })),
      ...userOrders
        .filter((o) => o.status === "completed" && !o.invoiceId)
        .map((o) => ({
          id: o.id,
          reference: o.orderNumber,
          amount: Number(o.totalBdt || 0),
          method: "online",
          at: o.createdAt.toISOString(),
          source: "order",
        })),
    ].sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime());

    const lifetimeSpend = events.reduce((s, e) => s + e.amount, 0);
    const firstPaymentAt = events.length ? events[events.length - 1].at : null;
    const daysToFirstPayment =
      signupAt && firstPaymentAt
        ? Math.max(
            0,
            Math.round(
              (new Date(firstPaymentAt).getTime() - new Date(signupAt).getTime()) / 86_400_000
            )
          )
        : null;

    const monthlyMap = new Map<string, { amount: number; count: number }>();
    for (const e of events) {
      const key = e.at.slice(0, 7);
      const cur = monthlyMap.get(key) ?? { amount: 0, count: 0 };
      cur.amount += e.amount;
      cur.count += 1;
      monthlyMap.set(key, cur);
    }
    const monthly = [...monthlyMap.entries()]
      .map(([month, v]) => ({ month, ...v }))
      .sort((a, b) => a.month.localeCompare(b.month));

    const methodMap = new Map<string, { amount: number; count: number }>();
    for (const e of events) {
      const key = e.method ?? "unknown";
      const cur = methodMap.get(key) ?? { amount: 0, count: 0 };
      cur.amount += e.amount;
      cur.count += 1;
      methodMap.set(key, cur);
    }
    const byMethod = [...methodMap.entries()]
      .map(([method, v]) => ({ method, ...v }))
      .sort((a, b) => b.amount - a.amount);

    return NextResponse.json({
      signupAt,
      totals: {
        lifetimeSpend,
        paidInvoices,
        pendingDue,
        walletDeposits,
        firstPaymentAt,
        daysToFirstPayment,
      },
      monthly,
      byMethod,
      recent: events.slice(0, 20),
    });
  } catch (error: any) {
    console.error("Dashboard income API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
