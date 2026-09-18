import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { pricingPlans, domainPricing, faqs, testimonials } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const [plans, domains, faqList, testimonialList] = await Promise.all([
      db.query.pricingPlans.findMany({ where: eq(pricingPlans.isActive, true) }),
      db.query.domainPricing.findMany({ where: eq(domainPricing.isActive, true) }),
      db.query.faqs.findMany(),
      db.query.testimonials.findMany({ where: eq(testimonials.isFeatured, true) }),
    ]);

    return NextResponse.json({
      pricingPlans: plans,
      domainPricing: domains,
      faqs: faqList,
      testimonials: testimonialList,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
