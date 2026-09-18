import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { services, servers, invoices, users } from "@/lib/db/schema";
import { eq, and, lte, gte, sql } from "drizzle-orm";
import { suspendAccount } from "@/lib/whm";

export async function POST(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  const cronSecret = process.env.CRON_SECRET || "yesshost-cron-secret-token-2026";

  if (!authHeader || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized: Invalid CRON_SECRET token" }, { status: 401 });
  }

  const now = new Date();
  const in14Days = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  const overdueThreshold = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000);

  let renewalInvoicesCreated = 0;
  let accountsSuspended = 0;
  const suspensionErrors: string[] = [];

  // 1. Generate Renewal Invoices (Services expiring within 14 days)
  const expiringServices = await db.query.services.findMany({
    where: and(eq(services.status, "active"), lte(services.expiryDate, in14Days)),
  });

  for (const service of expiringServices) {
    // Check if an unpaid invoice already exists for this service
    const existingUnpaid = await db.query.invoices.findFirst({
      where: and(eq(invoices.serviceId, service.id), eq(invoices.status, "unpaid")),
    });

    if (!existingUnpaid) {
      const invoiceNumber = `INV-${Date.now().toString().slice(-6)}-${Math.floor(1000 + Math.random() * 9000)}`;
      await db.insert(invoices).values({
        id: crypto.randomUUID(),
        userId: service.userId,
        serviceId: service.id,
        invoiceNumber,
        amountBdt: service.priceBdt,
        status: "unpaid",
        dueDate: service.expiryDate,
        description: `Renewal for ${service.name} (${service.domain || "Hosting"})`,
      });
      renewalInvoicesCreated++;
    }
  }

  // 2. Automated WHM Suspension (Invoices 3+ days overdue)
  const overdueInvoices = await db.query.invoices.findMany({
    where: and(eq(invoices.status, "unpaid"), lte(invoices.dueDate, overdueThreshold)),
  });

  for (const inv of overdueInvoices) {
    if (!inv.serviceId) continue;

    const service = await db.query.services.findFirst({
      where: and(eq(services.id, inv.serviceId), eq(services.status, "active")),
    });

    if (service && service.cpanelUsername) {
      const server = service.serverId
        ? await db.query.servers.findFirst({ where: eq(servers.id, service.serverId) })
        : await db.query.servers.findFirst({ where: eq(servers.isActive, true) });

      if (server) {
        try {
          const res = await suspendAccount(
            {
              hostname: server.hostname,
              username: server.whmUsername,
              apiToken: server.whmApiToken,
            },
            service.cpanelUsername,
            `Invoice #${inv.invoiceNumber} 3+ days overdue`
          );

          if (res.metadata.result === 1) {
            await db
              .update(services)
              .set({
                status: "suspended",
                suspendedAt: new Date(),
                suspensionReason: `Invoice #${inv.invoiceNumber} overdue`,
              })
              .where(eq(services.id, service.id));
            accountsSuspended++;
          } else {
            suspensionErrors.push(
              `WHM rejected suspension for ${service.cpanelUsername}: ${res.metadata.reason}`
            );
          }
        } catch (err: any) {
          suspensionErrors.push(
            `Network error suspending ${service.cpanelUsername}: ${err.message}`
          );
        }
      }
    }
  }

  return NextResponse.json({
    success: true,
    timestamp: now.toISOString(),
    renewalInvoicesCreated,
    accountsSuspended,
    suspensionErrors,
  });
}
