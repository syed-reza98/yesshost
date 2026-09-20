import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { supportPins, profiles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

function generate6DigitPin(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;

  try {
    const existing = await db.query.supportPins.findFirst({
      where: eq(supportPins.userId, userId),
    });

    const now = new Date();
    if (existing && existing.expiresAt > now) {
      return NextResponse.json({
        pin: existing.pin,
        expiresAt: existing.expiresAt.toISOString(),
      });
    }

    // Generate new PIN valid for 1 hour
    const pin = generate6DigitPin();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    if (existing) {
      await db
        .update(supportPins)
        .set({ pin, expiresAt })
        .where(eq(supportPins.userId, userId));
    } else {
      await db.insert(supportPins).values({
        id: crypto.randomUUID(),
        userId,
        pin,
        expiresAt,
      });
    }

    // Keep profile support_pin in sync for legacy lookup
    await db
      .update(profiles)
      .set({ supportPin: pin })
      .where(eq(profiles.userId, userId));

    return NextResponse.json({
      pin,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST() {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userId = session.user.id;
  const pin = generate6DigitPin();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  try {
    const existing = await db.query.supportPins.findFirst({
      where: eq(supportPins.userId, userId),
    });

    if (existing) {
      await db
        .update(supportPins)
        .set({ pin, expiresAt })
        .where(eq(supportPins.userId, userId));
    } else {
      await db.insert(supportPins).values({
        id: crypto.randomUUID(),
        userId,
        pin,
        expiresAt,
      });
    }

    await db
      .update(profiles)
      .set({ supportPin: pin })
      .where(eq(profiles.userId, userId));

    return NextResponse.json({
      pin,
      expiresAt: expiresAt.toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
