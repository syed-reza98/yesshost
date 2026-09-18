import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getCurrentUser() {
  const session = await auth();
  return session?.user ?? null;
}

export async function requireUser() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if ((user as any).role !== "admin") {
    redirect("/dashboard");
  }
  return user;
}

export async function requireCallCenter() {
  const user = await requireUser();
  const role = (user as any).role;
  if (role !== "call_center" && role !== "admin") {
    redirect("/dashboard");
  }
  return user;
}

export function verifyOwnership(resourceUserId: string, currentUserId: string): boolean {
  return resourceUserId === currentUserId;
}
