import { mysqlTable, varchar, text, timestamp, int, boolean } from "drizzle-orm/mysql-core";

export const servers = mysqlTable("servers", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
  hostname: varchar("hostname", { length: 255 }).notNull(),
  ipAddress: varchar("ip_address", { length: 45 }).notNull(),
  whmUsername: varchar("whm_username", { length: 64 }).notNull().default("root"),
  whmApiToken: text("whm_api_token").notNull(),
  location: varchar("location", { length: 100 }).notNull().default("East Asia"),
  maxAccounts: int("max_accounts").notNull().default(500),
  activeAccounts: int("active_accounts").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
  status: varchar("status", { length: 20 }).notNull().default("online"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
