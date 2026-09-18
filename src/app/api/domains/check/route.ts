import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { domainPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import dns from "dns/promises";

export async function GET(request: NextRequest) {
  const domain = request.nextUrl.searchParams.get("domain")?.toLowerCase().trim();

  if (!domain) {
    return NextResponse.json({ error: "Domain parameter is required" }, { status: 400 });
  }

  // Extract TLD
  const parts = domain.split(".");
  if (parts.length < 2) {
    return NextResponse.json({ error: "Invalid domain format" }, { status: 400 });
  }

  const tld = "." + parts.slice(1).join(".");
  const pricing = await db.query.domainPricing.findFirst({
    where: eq(domainPricing.tld, tld),
  });

  // Check DNS resolution
  let available = false;
  try {
    const addresses = await dns.resolve4(domain);
    available = !addresses || addresses.length === 0;
  } catch (err: any) {
    // ENOTFOUND or ENODATA usually means no DNS record exists (available)
    if (err.code === "ENOTFOUND" || err.code === "ENODATA") {
      available = true;
    } else {
      available = false;
    }
  }

  return NextResponse.json({
    domain,
    tld,
    available,
    priceBdt: pricing?.registrationPriceBdt || "1250.00",
    renewalPriceBdt: pricing?.renewalPriceBdt || "1450.00",
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const domain = (body.domain || "").toLowerCase().trim();
    const fakeReq = new NextRequest(new URL(`/api/domains/check?domain=${encodeURIComponent(domain)}`, request.url));
    return GET(fakeReq);
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}

