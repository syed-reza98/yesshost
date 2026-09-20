import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { paymentGatewaySettings } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const settings = await db.query.paymentGatewaySettings.findMany();
    // Default list if none configured yet
    const defaults = ["bkash", "nagad", "sslcommerz", "rocket"];
    const result = defaults.map((gw) => {
      const found = settings.find((s) => s.gateway === gw);
      return {
        gateway: gw,
        enabled: found?.enabled ?? false,
        isSandbox: found?.isSandbox ?? true,
        credentials: found?.credentials ?? {},
        updatedAt: found?.updatedAt,
      };
    });

    return NextResponse.json({ gateways: result });
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
    const { gateway, enabled, isSandbox, credentials } = await request.json();
    if (!gateway) {
      return NextResponse.json({ error: "Gateway identifier required" }, { status: 400 });
    }

    const existing = await db.query.paymentGatewaySettings.findFirst({
      where: eq(paymentGatewaySettings.gateway, gateway),
    });

    if (existing) {
      await db
        .update(paymentGatewaySettings)
        .set({
          enabled: Boolean(enabled),
          isSandbox: Boolean(isSandbox),
          credentials: credentials || {},
        })
        .where(eq(paymentGatewaySettings.gateway, gateway));
    } else {
      await db.insert(paymentGatewaySettings).values({
        id: crypto.randomUUID(),
        gateway,
        enabled: Boolean(enabled),
        isSandbox: Boolean(isSandbox),
        credentials: credentials || {},
      });
    }

    return NextResponse.json({ success: true, gateway });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
