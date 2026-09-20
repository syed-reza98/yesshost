import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { services } from "@/lib/db/schema";
import { eq, and, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isAdmin = (session.user as any)?.role === "admin";

  try {
    const list = await db.query.services.findMany({
      where: isAdmin
        ? eq(services.serviceType, "domain")
        : and(eq(services.userId, session.user.id), eq(services.serviceType, "domain")),
      orderBy: [desc(services.createdAt)],
    });

    const formatted = list.map((s) => {
      const specs: any = s.specs || {};
      return {
        id: s.id,
        domain: s.domain || s.name,
        status: s.status,
        autoRenew: specs.autoRenew ?? true,
        registrationDate: s.startDate,
        expiryDate: s.expiryDate,
        nameservers: specs.nameservers || ["ns1.yesshost.com", "ns2.yesshost.com"],
      };
    });

    return NextResponse.json({ domains: formatted });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, nameservers, autoRenew } = body;

    if (!id) {
      return NextResponse.json({ error: "Domain ID is required" }, { status: 400 });
    }

    const domain = await db.query.services.findFirst({
      where: eq(services.id, id),
    });

    if (!domain) {
      return NextResponse.json({ error: "Domain not found" }, { status: 404 });
    }

    const isAdmin = (session.user as any)?.role === "admin";
    if (domain.userId !== session.user.id && !isAdmin) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const currentSpecs: any = domain.specs || {};
    const newSpecs = {
      ...currentSpecs,
      ...(nameservers ? { nameservers } : {}),
      ...(autoRenew !== undefined ? { autoRenew: Boolean(autoRenew) } : {}),
    };

    await db.update(services).set({ specs: newSpecs }).where(eq(services.id, id));

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
