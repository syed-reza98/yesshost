import { db } from "../db";
import { servers, services, users } from "../db/schema";
import { eq, and, sql } from "drizzle-orm";
import { createAccount } from "./accounts";
import crypto from "crypto";

export function generateCpanelUsername(domain: string): string {
  // Strip non-alphanumeric, lowercase, max 8 characters, must start with letter
  const clean = domain.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let base = clean.replace(/^[0-9]+/, "");
  if (base.length < 3) base = "usr" + base;
  return base.substring(0, 8);
}

export function generateSecurePassword(): string {
  return (
    crypto.randomBytes(6).toString("hex") +
    "#" +
    crypto.randomBytes(2).toString("hex").toUpperCase() +
    "9!"
  );
}

export interface ProvisioningResult {
  success: boolean;
  serviceId: string;
  cpanelUsername?: string;
  cpanelPassword?: string;
  serverHostname?: string;
  serverIp?: string;
  error?: string;
}

export async function provisionHostingService(serviceId: string): Promise<ProvisioningResult> {
  const service = await db.query.services.findFirst({
    where: eq(services.id, serviceId),
  });

  if (!service) {
    throw new Error(`Service not found: ${serviceId}`);
  }

  // 1. Select Active Server Node
  const targetServer = await db.query.servers.findFirst({
    where: and(eq(servers.isActive, true), eq(servers.status, "online")),
  });

  if (!targetServer) {
    await db
      .update(services)
      .set({ status: "provisioning_failed", suspensionReason: "No active WHM servers available" })
      .where(eq(services.id, serviceId));
    return { success: false, serviceId, error: "No active WHM server available" };
  }

  const domain = service.domain || `user-${service.userId.slice(0, 6)}.yesshost.com`;
  const username = service.cpanelUsername || generateCpanelUsername(domain);
  const password = generateSecurePassword();
  const packageName = service.packageName || "PH_1GB";

  try {
    const serverConfig = {
      hostname: targetServer.hostname,
      username: targetServer.whmUsername,
      apiToken: targetServer.whmApiToken,
    };

    const user = await db.query.users.findFirst({
      where: eq(users.id, service.userId),
    });

    const whmResult = await createAccount(serverConfig, {
      username,
      domain,
      plan: packageName,
      password,
      contactemail: user?.email,
    });

    if (whmResult.metadata.result !== 1) {
      const reason = whmResult.metadata.reason || "WHM rejected account creation";
      await db
        .update(services)
        .set({ status: "provisioning_failed", suspensionReason: reason })
        .where(eq(services.id, serviceId));
      return { success: false, serviceId, error: reason };
    }

    // Update Service to Active
    await db
      .update(services)
      .set({
        serverId: targetServer.id,
        cpanelUsername: username,
        status: "active",
        suspensionReason: null,
      })
      .where(eq(services.id, serviceId));

    // Increment active account counter on server
    await db
      .update(servers)
      .set({ activeAccounts: sql`${servers.activeAccounts} + 1` })
      .where(eq(servers.id, targetServer.id));

    return {
      success: true,
      serviceId,
      cpanelUsername: username,
      cpanelPassword: password,
      serverHostname: targetServer.hostname,
      serverIp: targetServer.ipAddress,
    };
  } catch (err: any) {
    const errorMsg = err.message || "Unknown WHM provisioning error";
    await db
      .update(services)
      .set({ status: "provisioning_failed", suspensionReason: errorMsg })
      .where(eq(services.id, serviceId));

    return { success: false, serviceId, error: errorMsg };
  }
}
