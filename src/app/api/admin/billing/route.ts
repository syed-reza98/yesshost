import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { invoices, users, services, paymentEvents } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const allInvoices = await db.query.invoices.findMany({
      orderBy: [desc(invoices.createdAt)],
    });

    const enriched = await Promise.all(
      allInvoices.map(async (inv) => {
        const [user, srv] = await Promise.all([
          db.query.users.findFirst({ where: eq(users.id, inv.userId) }),
          inv.serviceId ? db.query.services.findFirst({ where: eq(services.id, inv.serviceId) }) : null,
        ]);
        return {
          ...inv,
          user: user ? { id: user.id, name: user.name, email: user.email } : null,
          service: srv ? { id: srv.id, name: srv.name, domain: srv.domain } : null,
        };
      })
    );

    return NextResponse.json({ invoices: enriched });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { id, status, paymentMethod } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Invoice ID and status are required" }, { status: 400 });
    }

    const updates: any = { status };
    if (status === "paid") {
      updates.paidAt = new Date();
      if (paymentMethod) updates.paymentMethod = paymentMethod;
    }

    await db.update(invoices).set(updates).where(eq(invoices.id, id));

    // If marked as paid, activate linked service if pending/suspended
    const invoice = await db.query.invoices.findFirst({ where: eq(invoices.id, id) });
    if (invoice?.serviceId && status === "paid") {
      await db.update(services).set({ status: "active", suspendedAt: null }).where(eq(services.id, invoice.serviceId));
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { userId, amountBdt, description, dueDays = 7, serviceId } = body;

    if (!userId || !amountBdt) {
      return NextResponse.json({ error: "userId and amountBdt are required" }, { status: 400 });
    }

    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Number(dueDays));

    const newId = crypto.randomUUID();
    await db.insert(invoices).values({
      id: newId,
      userId,
      serviceId: serviceId || null,
      invoiceNumber,
      amountBdt: Number(amountBdt).toFixed(2),
      status: "unpaid",
      dueDate,
      description: description || "Custom administrative invoice",
    });

    return NextResponse.json({ success: true, invoiceId: newId, invoiceNumber });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
