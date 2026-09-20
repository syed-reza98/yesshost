import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users, userRoles, userPermissions } from "@/lib/db/schema";
import { eq, inArray } from "drizzle-orm";
import bcrypt from "bcryptjs";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if ((session?.user as any)?.role !== "admin") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    // Find all staff roles: admin, moderator, call_center
    const staffRoles = await db.query.userRoles.findMany({
      where: inArray(userRoles.role, ["admin", "moderator", "call_center"]),
    });

    const staffUserIds = staffRoles.map((r) => r.userId);
    if (staffUserIds.length === 0) {
      return NextResponse.json({ staff: [] });
    }

    const [staffUsers, staffPerms] = await Promise.all([
      db.query.users.findMany({
        where: inArray(users.id, staffUserIds),
      }),
      db.query.userPermissions.findMany({
        where: inArray(userPermissions.userId, staffUserIds),
      }),
    ]);

    const result = staffUsers.map((u) => {
      const roleRow = staffRoles.find((r) => r.userId === u.id);
      const perms = staffPerms.filter((p) => p.userId === u.id).map((p) => p.permission);
      return {
        id: u.id,
        name: u.name,
        email: u.email,
        role: roleRow?.role || "moderator",
        permissions: perms,
        createdAt: u.createdAt,
      };
    });

    return NextResponse.json({ staff: result });
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
    const { name, email, password, role, permissions } = await request.json();
    if (!name || !email || !password || !role) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const existing = await db.query.users.findFirst({
      where: eq(users.email, email.toLowerCase().trim()),
    });

    if (existing) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const userId = crypto.randomUUID();

    await db.insert(users).values({
      id: userId,
      name,
      email: email.toLowerCase().trim(),
      passwordHash,
    });

    await db.insert(userRoles).values({
      id: crypto.randomUUID(),
      userId,
      role,
    });

    if (Array.isArray(permissions) && permissions.length > 0) {
      await db.insert(userPermissions).values(
        permissions.map((perm: string) => ({
          id: crypto.randomUUID(),
          userId,
          permission: perm,
        }))
      );
    }

    return NextResponse.json({ success: true, userId });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
