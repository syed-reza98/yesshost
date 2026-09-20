import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { profiles, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const userProfile = await db.query.profiles.findFirst({
      where: eq(profiles.userId, session.user.id),
    });

    const userRecord = await db.query.users.findFirst({
      where: eq(users.id, session.user.id),
    });

    return NextResponse.json({
      profile: {
        ...userProfile,
        email: userRecord?.email,
        name: userRecord?.name,
      },
    });
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
    const { fullName, phone, companyName, address, city, country, vatId, resetPin } = body;

    const updates: any = {};
    if (fullName !== undefined) updates.fullName = fullName;
    if (phone !== undefined) updates.phone = phone;
    if (companyName !== undefined) updates.companyName = companyName;
    if (address !== undefined) updates.address = address;
    if (city !== undefined) updates.city = city;
    if (country !== undefined) updates.country = country;
    if (vatId !== undefined) updates.vatId = vatId;

    if (resetPin) {
      updates.supportPin = Math.floor(100000 + Math.random() * 900000).toString();
    }

    await db.update(profiles).set(updates).where(eq(profiles.userId, session.user.id));

    if (fullName) {
      await db.update(users).set({ name: fullName }).where(eq(users.id, session.user.id));
    }

    return NextResponse.json({ success: true, updatedPin: updates.supportPin });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
