import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { users, profiles, userRoles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, password, phone } = body;

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const cleanEmail = String(email).toLowerCase().trim();

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, cleanEmail),
    });

    if (existingUser) {
      return NextResponse.json({ error: "An account with this email already exists" }, { status: 400 });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const userId = crypto.randomUUID();
    const supportPin = Math.floor(100000 + Math.random() * 900000).toString();

    await db.insert(users).values({
      id: userId,
      name: name || null,
      email: cleanEmail,
      passwordHash,
    });

    await db.insert(profiles).values({
      id: crypto.randomUUID(),
      userId,
      fullName: name || null,
      phone: phone || null,
      country: "Bangladesh",
      supportPin,
    });

    await db.insert(userRoles).values({
      id: crypto.randomUUID(),
      userId,
      role: "user",
    });

    return NextResponse.json({
      success: true,
      message: "Account created successfully",
      user: { id: userId, email: cleanEmail },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
