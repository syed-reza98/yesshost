import { mysqlTable, varchar, text, timestamp, int, boolean, decimal, json } from "drizzle-orm/mysql-core";
import { users } from "./auth";
import { servers } from "./servers";

export const services = mysqlTable("services", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  serverId: varchar("server_id", { length: 36 }).references(() => servers.id, { onDelete: "set null" }),
  name: varchar("name", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }),
  cpanelUsername: varchar("cpanel_username", { length: 64 }),
  packageName: varchar("package_name", { length: 100 }),
  serviceType: varchar("service_type", { length: 50 }).notNull().default("hosting"), // hosting | domain | vps | dedicated | reseller
  billingCycle: varchar("billing_cycle", { length: 20 }).notNull().default("monthly"), // monthly | annually | triennially
  priceBdt: decimal("price_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  status: varchar("status", { length: 20 }).notNull().default("pending"), // active | pending | suspended | terminated | provisioning_failed
  startDate: timestamp("start_date").defaultNow().notNull(),
  expiryDate: timestamp("expiry_date").notNull(),
  suspendedAt: timestamp("suspended_at"),
  suspensionReason: text("suspension_reason"),
  specs: json("specs"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const resellerPackages = mysqlTable("reseller_packages", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  serviceId: varchar("service_id", { length: 36 }).references(() => services.id, { onDelete: "cascade" }),
  packageName: varchar("package_name", { length: 100 }).notNull(),
  maxAccounts: int("max_accounts").notNull().default(25),
  usedAccounts: int("used_accounts").notNull().default(0),
  maxDiskMb: int("max_disk_mb").notNull().default(50000),
  usedDiskMb: int("used_disk_mb").notNull().default(0),
  maxBandwidthMb: int("max_bandwidth_mb").notNull().default(500000),
  usedBandwidthMb: int("used_bandwidth_mb").notNull().default(0),
  whmUsername: varchar("whm_username", { length: 64 }),
  status: varchar("status", { length: 20 }).notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const resellerAccounts = mysqlTable("reseller_accounts", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  resellerPackageId: varchar("reseller_package_id", { length: 36 }).notNull().references(() => resellerPackages.id, { onDelete: "cascade" }),
  resellerUserId: varchar("reseller_user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  domain: varchar("domain", { length: 255 }).notNull(),
  username: varchar("username", { length: 64 }).notNull(),
  planName: varchar("plan_name", { length: 100 }).notNull(),
  diskQuotaMb: int("disk_quota_mb").notNull().default(1024),
  bandwidthMb: int("bandwidth_mb").notNull().default(10240),
  cpanelCreated: boolean("cpanel_created").notNull().default(false),
  status: varchar("status", { length: 20 }).notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
