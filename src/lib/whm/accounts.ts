import { whmRequest, WhmServerConfig } from "./client";

export interface CreateAccountOptions {
  username: string;
  domain: string;
  plan: string;
  password?: string;
  contactemail?: string;
  owner?: string;
  quota?: number;
}

export async function createAccount(server: WhmServerConfig, options: CreateAccountOptions) {
  return whmRequest(server, "createacct", {
    username: options.username,
    domain: options.domain,
    plan: options.plan,
    password: options.password,
    contactemail: options.contactemail,
    owner: options.owner,
    quota: options.quota,
  });
}

export async function suspendAccount(server: WhmServerConfig, username: string, reason = "Payment Overdue") {
  return whmRequest(server, "suspendacct", {
    user: username,
    reason,
  });
}

export async function unsuspendAccount(server: WhmServerConfig, username: string) {
  return whmRequest(server, "unsuspendacct", {
    user: username,
  });
}

export async function terminateAccount(server: WhmServerConfig, username: string, keepdns = 0) {
  return whmRequest(server, "removeacct", {
    user: username,
    keepdns,
  });
}

export async function changePassword(server: WhmServerConfig, username: string, password: string) {
  return whmRequest(server, "passwd", {
    user: username,
    password,
  });
}

export async function changePackage(server: WhmServerConfig, username: string, pkg: string) {
  return whmRequest(server, "changepackage", {
    user: username,
    pkg,
  });
}

export async function listAccounts(server: WhmServerConfig) {
  return whmRequest(server, "listaccts");
}

export async function checkServerHealth(server: WhmServerConfig) {
  return whmRequest(server, "version");
}
