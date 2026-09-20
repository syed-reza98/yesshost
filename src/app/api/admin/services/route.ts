import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services, users, servers } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { suspendAccount, unsuspendAccount } from "@/lib/whm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const allServices = await db.query.services.findMany({
      orderBy: [desc(services.createdAt)],
    });

    const enriched = await Promise.all(
      allServices.map(async (s) => {
        const user = await db.query.users.findFirst({
          where: eq(users.id, s.userId),
        });
        return {
          ...s,
          user: user ? { id: user.id, name: user.name, email: user.email } : null,
        };
      })
    );

    return NextResponse.json({ services: enriched });
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
    const { id, status, suspensionReason, packageName } = body;

    if (!id) {
      return NextResponse.json({ error: "Service ID is required" }, { status: 400 });
    }

    const service = await db.query.services.findFirst({
      where: eq(services.id, id),
    });

    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    const updates: any = {};
    if (status) {
      updates.status = status;
      if (status === "suspended") {
        updates.suspendedAt = new Date();
        updates.suspensionReason = suspensionReason || "Administrative suspension";
      } else if (status === "active") {
        updates.suspendedAt = null;
        updates.suspensionReason = null;
      }
    }
    if (packageName) updates.packageName = packageName;

    await db.update(services).set(updates).where(eq(services.id, id));

    // If service has cpanelUsername, optionally sync with WHM
    if (service.cpanelUsername && status) {
      try {
        const server = service.serverId
          ? await db.query.servers.findFirst({ where: eq(servers.id, service.serverId) })
          : await db.query.servers.findFirst({ where: eq(servers.isActive, true) });

        if (server) {
          const config = {
            hostname: server.hostname,
            username: server.whmUsername,
            apiToken: server.whmApiToken,
          };

          if (status === "suspended") {
            await suspendAccount(config, service.cpanelUsername, suspensionReason || "Admin suspension");
          } else if (status === "active") {
            await unsuspendAccount(config, service.cpanelUsername);
          }
        }
      } catch (whmErr) {
        console.warn("WHM sync warning:", whmErr);
      }
    }

    return NextResponse.json({ success: true, service: { ...service, ...updates } });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
