import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { servers } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { checkServerHealth } from "@/lib/whm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden: Admin access required" }, { status: 403 });
  }

  try {
    const allServers = await db.query.servers.findMany();
    return NextResponse.json({ servers: allServers });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden: Admin access required" }, { status: 403 });
  }

  try {
    const body = await request.json();
    const { action, serverId } = body;

    if (action === "test") {
      const server = await db.query.servers.findFirst({
        where: eq(servers.id, serverId),
      });

      if (!server) {
        return NextResponse.json({ error: "Server not found" }, { status: 404 });
      }

      const res = await checkServerHealth({
        hostname: server.hostname,
        username: server.whmUsername,
        apiToken: server.whmApiToken,
      });

      return NextResponse.json({
        success: res.metadata.result === 1,
        version: res.data?.version,
        reason: res.metadata.reason,
      });
    }

    if (action === "create") {
      const { name, hostname, ipAddress, whmUsername, whmApiToken, location, maxAccounts } = body;
      const newServerId = crypto.randomUUID();
      await db.insert(servers).values({
        id: newServerId,
        name,
        hostname,
        ipAddress,
        whmUsername: whmUsername || "root",
        whmApiToken,
        location: location || "Global Cloud",
        maxAccounts: maxAccounts ? Number(maxAccounts) : 500,
        activeAccounts: 0,
        isActive: true,
        status: "online",
      });

      return NextResponse.json({ success: true, serverId: newServerId });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
