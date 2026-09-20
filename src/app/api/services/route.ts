import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services, servers } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isAdmin = (session.user as any)?.role === "admin";

  try {
    const userServices = await db.query.services.findMany({
      where: isAdmin ? undefined : eq(services.userId, session.user.id),
      orderBy: [desc(services.createdAt)],
    });

    const enriched = await Promise.all(
      userServices.map(async (srv) => {
        let serverInfo = null;
        if (srv.serverId) {
          serverInfo = await db.query.servers.findFirst({
            where: eq(servers.id, srv.serverId),
          });
        }
        return {
          ...srv,
          serverHostname: serverInfo?.hostname || "yesshost-cpanel.eastasia.cloudapp.azure.com",
          serverIp: serverInfo?.ipAddress || "20.205.120.22",
        };
      })
    );

    return NextResponse.json({ services: enriched });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
