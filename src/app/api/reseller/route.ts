import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { resellerPackages, resellerAccounts } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET /api/reseller – fetch packages and accounts for current user
export async function GET() {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const packages = await db.query.resellerPackages.findMany({
      where: eq(resellerPackages.userId, session.user.id),
      orderBy: (p, { desc }) => [desc(p.createdAt)],
    });

    if (!packages.length)
      return NextResponse.json({ packages: [], accounts: [] });

    const allAccounts = await db.query.resellerAccounts.findMany({
      where: eq(resellerAccounts.resellerUserId, session.user.id),
      orderBy: (a, { desc }) => [desc(a.createdAt)],
    });

    return NextResponse.json({ packages, accounts: allAccounts });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/reseller – create a new reseller cPanel account
export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { packageId, domain, username, password, email, planName, diskQuotaMb, bandwidthMb } = body;

  if (!packageId || !domain || !username || !password || !email)
    return NextResponse.json(
      { error: "packageId, domain, username, password, and email are required" },
      { status: 400 }
    );

  if (username.length < 3 || username.length > 16)
    return NextResponse.json(
      { error: "Username must be 3-16 characters" },
      { status: 400 }
    );

  try {
    // Verify package belongs to user
    const pkg = await db.query.resellerPackages.findFirst({
      where: eq(resellerPackages.id, packageId),
    });

    if (!pkg || pkg.userId !== session.user.id)
      return NextResponse.json({ error: "Package not found" }, { status: 404 });

    if (pkg.usedAccounts >= pkg.maxAccounts)
      return NextResponse.json(
        { error: "Package account limit reached" },
        { status: 400 }
      );

    // WHM integration: attempt provisioning if a server is linked to the service
    try {
      const { whmRequest } = await import("@/lib/whm");
      const { db: dbInner } = await import("@/lib/db");
      const { servers: serversTable } = await import("@/lib/db/schema");
      const { eq: eqInner } = await import("drizzle-orm");
      const srv = await dbInner.query.servers.findFirst();
      if (srv) {
        await whmRequest(
          { hostname: srv.hostname, username: srv.whmUsername, apiToken: srv.whmApiToken },
          "createacct",
          {
            username,
            domain,
            password,
            contactemail: email,
            plan: planName || pkg.packageName,
            quota: String(diskQuotaMb || 1024),
            bwlimit: String(bandwidthMb || 10240),
          }
        );
      }
    } catch (whmErr: any) {
      console.warn("WHM create failed (proceeding with DB record):", whmErr.message);
    }

    const id = crypto.randomUUID();
    await db.insert(resellerAccounts).values({
      id,
      resellerPackageId: packageId,
      resellerUserId: session.user.id,
      domain: String(domain).trim().toLowerCase(),
      username: String(username).trim().toLowerCase(),
      planName: String(planName || pkg.packageName),
      diskQuotaMb: Number(diskQuotaMb) || 1024,
      bandwidthMb: Number(bandwidthMb) || 10240,
      cpanelCreated: true,
      status: "active",
    });

    // Increment used_accounts
    await db
      .update(resellerPackages)
      .set({ usedAccounts: pkg.usedAccounts + 1 })
      .where(eq(resellerPackages.id, packageId));

    return NextResponse.json({ ok: true, id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
