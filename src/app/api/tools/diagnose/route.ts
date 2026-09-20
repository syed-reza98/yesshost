import { NextRequest, NextResponse } from "next/server";
import dns from "dns/promises";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { domain, expected_ip } = body;

    if (!domain) {
      return NextResponse.json({ error: "Domain is required" }, { status: 400 });
    }

    domain = domain.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "").replace(/\/.*$/, "").trim();

    const checks: any[] = [];

    // 1. A record check
    try {
      const aRecords = await dns.resolve4(domain);
      const matches = expected_ip ? aRecords.includes(expected_ip) : true;
      checks.push({
        id: "a",
        status: matches ? "ok" : "warn",
        values: aRecords,
        note_en: matches ? `Points to ${aRecords.join(", ")}` : `Points to ${aRecords.join(", ")}, expected ${expected_ip}`,
        note_bn: matches ? `${aRecords.join(", ")} আইপিতে পয়েন্ট করছে` : `প্রত্যাশিত আইপি ${expected_ip} এর সাথে মিলছে না`,
      });
    } catch (e: any) {
      checks.push({
        id: "a",
        status: "fail",
        values: [],
        note_en: "No A record found or domain not resolving",
        note_bn: "কোনো A রেকর্ড পাওয়া যায়নি",
      });
    }

    // 2. NS records
    try {
      const nsRecords = await dns.resolveNs(domain);
      checks.push({
        id: "ns",
        status: "ok",
        values: nsRecords,
        note_en: `Delegated to ${nsRecords.join(", ")}`,
        note_bn: `${nsRecords.join(", ")} নেমসার্ভারে সক্রিয়`,
      });
    } catch (e) {
      checks.push({
        id: "ns",
        status: "fail",
        values: [],
        note_en: "Nameservers resolution failed",
        note_bn: "নেমসার্ভার পাওয়া যায়নি",
      });
    }

    // 3. MX records
    try {
      const mxRecords = await dns.resolveMx(domain);
      checks.push({
        id: "mx",
        status: mxRecords.length > 0 ? "ok" : "warn",
        values: mxRecords.map(m => `${m.exchange} (pri: ${m.priority})`),
        note_en: mxRecords.length > 0 ? `${mxRecords.length} mail servers configured` : "No MX records found",
        note_bn: mxRecords.length > 0 ? `${mxRecords.length}টি মেইল এক্সচেঞ্জার রয়েছে` : "কোনো MX রেকর্ড পাওয়া যায়নি",
      });
    } catch (e) {
      checks.push({
        id: "mx",
        status: "warn",
        values: [],
        note_en: "No mail exchange (MX) configured",
        note_bn: "কোনো মেইল রেকর্ড নেই",
      });
    }

    // 4. TXT records (SPF/DKIM)
    try {
      const txtRecords = await dns.resolveTxt(domain);
      const flattened = txtRecords.map(t => t.join(" "));
      const hasSpf = flattened.some(t => t.includes("v=spf1"));
      checks.push({
        id: "txt",
        status: hasSpf ? "ok" : "warn",
        values: flattened.slice(0, 3),
        note_en: hasSpf ? "SPF verification record present" : "SPF record recommended for email delivery",
        note_bn: hasSpf ? "SPF রেকর্ড পাওয়া গেছে" : "ইমেইল ডেলিভারির জন্য SPF রেকর্ড প্রস্তাবিত",
      });
    } catch (e) {
      checks.push({
        id: "txt",
        status: "warn",
        values: [],
        note_en: "No TXT records configured",
        note_bn: "কোনো TXT রেকর্ড পাওয়া যায়নি",
      });
    }

    const hasFails = checks.some(c => c.status === "fail");
    const hasWarns = checks.some(c => c.status === "warn");
    const summary = hasFails ? "fail" : hasWarns ? "warn" : "ok";

    return NextResponse.json({
      domain,
      summary,
      checks,
      checked_at: new Date().toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
