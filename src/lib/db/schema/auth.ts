import { mysqlTable, varchar, text, timestamp, datetime, int, primaryKey, unique } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  passwordHash: varchar("password_hash", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export const accounts = mysqlTable("accounts", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 255 }).notNull(),
  provider: varchar("provider", { length: 255 }).notNull(),
  providerAccountId: varchar("provider_account_id", { length: 255 }).notNull(),
  refreshToken: text("refresh_token"),
  accessToken: text("access_token"),
  expiresAt: int("expires_at"),
  tokenType: varchar("token_type", { length: 255 }),
  scope: text("scope"),
  idToken: text("id_token"),
  sessionState: text("session_state"),
}, (account) => ({
  providerProviderAccountIdIndex: unique().on(account.provider, account.providerAccountId),
}));

export const sessions = mysqlTable("sessions", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  sessionToken: varchar("session_token", { length: 255 }).notNull().unique(),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable("verification_tokens", {
  identifier: varchar("identifier", { length: 255 }).notNull(),
  token: varchar("token", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
}, (vt) => ({
  compositePk: primaryKey({ columns: [vt.identifier, vt.token] }),
}));

export const profiles = mysqlTable("profiles", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  fullName: varchar("full_name", { length: 255 }),
  phone: varchar("phone", { length: 30 }),
  address: text("address"),
  city: varchar("city", { length: 100 }),
  country: varchar("country", { length: 100 }).default("Bangladesh").notNull(),
  companyName: varchar("company_name", { length: 255 }),
  supportPin: varchar("support_pin", { length: 6 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const userRoles = mysqlTable("user_roles", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  role: varchar("role", { length: 50 }).notNull().default("user"), // 'admin' | 'moderator' | 'call_center' | 'reseller' | 'user'
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  userRoleUnique: unique().on(table.userId, table.role),
}));

export const userPermissions = mysqlTable("user_permissions", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  permission: varchar("permission", { length: 100 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const supportPins = mysqlTable("support_pins", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  pin: varchar("pin", { length: 10 }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

