import { mysqlTable, varchar, text, timestamp, decimal } from "drizzle-orm/mysql-core";
import { users } from "./auth";
import { invoices } from "./billing";

export const affiliateProfiles = mysqlTable("affiliate_profiles", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  referralCode: varchar("referral_code", { length: 50 }).notNull().unique(),
  balanceBdt: decimal("balance_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  totalEarnedBdt: decimal("total_earned_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  status: varchar("status", { length: 20 }).notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const affiliateClicks = mysqlTable("affiliate_clicks", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  referrerUserId: varchar("referrer_user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  ipAddress: varchar("ip_address", { length: 45 }),
  userAgent: text("user_agent"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const affiliateReferrals = mysqlTable("affiliate_referrals", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  referrerUserId: varchar("referrer_user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  referredUserId: varchar("referred_user_id", { length: 36 }).notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  status: varchar("status", { length: 20 }).notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const affiliateCommissions = mysqlTable("affiliate_commissions", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  referralId: varchar("referral_id", { length: 36 }).references(() => affiliateReferrals.id, { onDelete: "cascade" }),
  invoiceId: varchar("invoice_id", { length: 36 }).references(() => invoices.id, { onDelete: "set null" }),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  commissionAmountBdt: decimal("commission_amount_bdt", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("approved"), // pending | approved | paid
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const affiliatePayouts = mysqlTable("affiliate_payouts", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  method: varchar("method", { length: 50 }).notNull(), // bkash | nagad | bank
  accountDetails: text("account_details").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("requested"), // requested | approved | paid | rejected
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
