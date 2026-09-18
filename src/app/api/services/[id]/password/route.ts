import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services, servers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { changePassword } from "@/lib/whm";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: serviceId } = await params;
  const { newPassword } = await request.json();

  if (!newPassword || newPassword.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 });
  }

  const service = await db.query.services.findFirst({
    where: eq(services.id, serviceId),
  });

  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  if (service.userId !== session.user.id && (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  if (!service.cpanelUsername) {
    return NextResponse.json({ error: "No cPanel account associated with this service" }, { status: 400 });
  }

  const server = service.serverId
    ? await db.query.servers.findFirst({ where: eq(servers.id, service.serverId) })
    : await db.query.servers.findFirst({ where: eq(servers.isActive, true) });

  if (!server) {
    return NextResponse.json({ error: "No active WHM server found" }, { status: 500 });
  }

  try {
    const res = await changePassword(
      {
        hostname: server.hostname,
        username: server.whmUsername,
        apiToken: server.whmApiToken,
      },
      service.cpanelUsername,
      newPassword
    );

    if (res.metadata.result !== 1) {
      return NextResponse.json({ error: res.metadata.reason || "WHM failed to update password" }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "cPanel password updated successfully!" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "Failed to update cPanel password" }, { status: 500 });
  }
}
