import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { domainPricing } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import dns from "dns/promises";

export async function GET(request: NextRequest) {
  let query = request.nextUrl.searchParams.get("domain")?.toLowerCase().trim() || "";

  if (!query) {
    return NextResponse.json({ error: "Domain parameter is required" }, { status: 400 });
  }

  // Strip protocol and www
  query = query.replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/.*$/, "");

  const parts = query.split(".");
  const baseName = parts[0];
  const requestedExt = parts.length > 1 ? "." + parts.slice(1).join(".") : null;

  // List of TLDs to check
  const allPricing = await db.query.domainPricing.findMany({
    where: eq(domainPricing.isActive, true),
  });

  const targetTlds = requestedExt
    ? [requestedExt, ...allPricing.map(p => p.tld).filter(t => t !== requestedExt)]
    : allPricing.map(p => p.tld);

  const results = await Promise.all(
    targetTlds.slice(0, 5).map(async (tld) => {
      const fullDomain = `${baseName}${tld}`;
      const pricing = allPricing.find(p => p.tld === tld);
      let available = false;
      try {
        const addresses = await dns.resolve4(fullDomain);
        available = !addresses || addresses.length === 0;
      } catch (err: any) {
        if (err.code === "ENOTFOUND" || err.code === "ENODATA" || err.code === "ESERVFAIL") {
          available = true;
        } else {
          available = false;
        }
      }

      const priceBdt = pricing?.registrationPriceBdt || "1250.00";
      const renewalBdt = pricing?.renewalPriceBdt || "1450.00";
      const priceUsd = (Number(priceBdt) / 120).toFixed(2);

      return {
        domain: fullDomain,
        ext: tld,
        available,
        price_bdt: priceBdt,
        price_usd: priceUsd,
        renewal_bdt: renewalBdt,
      };
    })
  );

  const primary = results[0];
  return NextResponse.json({
    domain: primary.domain,
    tld: primary.ext,
    available: primary.available,
    priceBdt: primary.price_bdt,
    renewalPriceBdt: primary.renewal_bdt,
    results,
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

