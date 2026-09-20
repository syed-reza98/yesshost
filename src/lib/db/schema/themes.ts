import { mysqlTable, varchar, text, timestamp, boolean, decimal, json } from "drizzle-orm/mysql-core";
import { users } from "./auth";

export const themes = mysqlTable("themes", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  sellerUserId: varchar("seller_user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  category: varchar("category", { length: 50 }).notNull().default("business"), // business | ecommerce | agency | blog | portfolio
  priceBdt: decimal("price_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  previewUrl: text("preview_url"),
  filePath: text("file_path"),
  screenshots: json("screenshots"),
  approvalStatus: varchar("approval_status", { length: 20 }).notNull().default("pending"), // pending | approved | rejected
  commissionRate: decimal("commission_rate", { precision: 5, scale: 2 }).notNull().default("30.00"),
  isActive: boolean("is_active").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const themeOrders = mysqlTable("theme_orders", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  themeId: varchar("theme_id", { length: 36 }).notNull().references(() => themes.id, { onDelete: "cascade" }),
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("completed"),
  paymentMethod: varchar("payment_method", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const themeSellerPayouts = mysqlTable("theme_seller_payouts", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  method: varchar("method", { length: 50 }).notNull(),
  accountDetails: text("account_details").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("requested"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const themeSellerProfiles = mysqlTable("theme_seller_profiles", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().unique().references(() => users.id, { onDelete: "cascade" }),
  displayName: varchar("display_name", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  logoUrl: text("logo_url"),
  bioBn: text("bio_bn"),
  bioEn: text("bio_en"),
  website: varchar("website", { length: 300 }),
  isPublic: boolean("is_public").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

