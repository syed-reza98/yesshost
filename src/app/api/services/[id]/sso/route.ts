import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services, servers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { createCpanelSession } from "@/lib/whm";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id: serviceId } = await params;
  const target = request.nextUrl.searchParams.get("target") || "cpanel";

  const service = await db.query.services.findFirst({
    where: eq(services.id, serviceId),
  });

  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  // Ownership verification: must own the service or be admin
  const isOwner = service.userId === session.user.id;
  const isAdmin = (session.user as any).role === "admin";
  if (!isOwner && !isAdmin) {
    return NextResponse.json({ error: "Forbidden: You do not own this service" }, { status: 403 });
  }

  if (!service.cpanelUsername) {
    return NextResponse.json({ error: "Service has no assigned cPanel username" }, { status: 400 });
  }

  const server = service.serverId
    ? await db.query.servers.findFirst({ where: eq(servers.id, service.serverId) })
    : await db.query.servers.findFirst({ where: eq(servers.isActive, true) });

  if (!server) {
    return NextResponse.json({ error: "No active WHM server found for this service" }, { status: 500 });
  }

  const serverConfig = {
    hostname: server.hostname,
    username: server.whmUsername,
    apiToken: server.whmApiToken,
  };

  try {
    let ssoUrl: string;

    if (target === "filemanager") {
      ssoUrl = await createCpanelSession(serverConfig, {
        username: service.cpanelUsername,
        service: "cpaneld",
        app: "FileManager_Home",
      });
    } else if (target === "phpmyadmin") {
      ssoUrl = await createCpanelSession(serverConfig, {
        username: service.cpanelUsername,
        service: "cpaneld",
        app: "Database_phpMyAdmin",
      });
    } else if (target === "webmail") {
      ssoUrl = await createCpanelSession(serverConfig, {
        username: service.cpanelUsername,
        service: "webmaild",
      });
    } else {
      // Default: cPanel Home
      ssoUrl = await createCpanelSession(serverConfig, {
        username: service.cpanelUsername,
        service: "cpaneld",
      });
    }

    return NextResponse.redirect(ssoUrl, 302);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Failed to generate SSO session" },
      { status: 500 }
    );
  }
}
