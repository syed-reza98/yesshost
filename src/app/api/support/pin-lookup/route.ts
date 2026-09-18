import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { profiles, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const session = await auth();
  const role = (session?.user as any)?.role;
  if (role !== "call_center" && role !== "admin") {
    return NextResponse.json({ error: "Forbidden: Call center or admin access required" }, { status: 403 });
  }

  const pin = request.nextUrl.searchParams.get("pin")?.trim();
  if (!pin || pin.length !== 6) {
    return NextResponse.json({ error: "Invalid 6-digit Support PIN" }, { status: 400 });
  }

  const profile = await db.query.profiles.findFirst({
    where: eq(profiles.supportPin, pin),
  });

  if (!profile) {
    return NextResponse.json({ customer: null }, { status: 404 });
  }

  const user = await db.query.users.findFirst({
    where: eq(users.id, profile.userId),
  });

  return NextResponse.json({
    customer: {
      id: profile.userId,
      fullName: profile.fullName || user?.name || "Anonymous Client",
      email: user?.email,
      phone: profile.phone,
      company: profile.companyName,
      country: profile.country,
    },
  });
}
