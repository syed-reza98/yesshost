import { mysqlTable, varchar, text, timestamp, int, boolean, decimal, json, unique } from "drizzle-orm/mysql-core";
import { users } from "./auth";
import { services } from "./services";

export const pricingPlans = mysqlTable("pricing_plans", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  whmPackageName: varchar("whm_package_name", { length: 100 }).notNull(), // Maps directly to WHM Package (e.g. 'PH_1GB')
  category: varchar("category", { length: 50 }).notNull().default("shared"), // shared | cloud | reseller | dedicated
  priceBdt: decimal("price_bdt", { precision: 10, scale: 2 }).notNull(),
  annualPriceBdt: decimal("annual_price_bdt", { precision: 10, scale: 2 }).notNull(),
  features: json("features"),
  isFeatured: boolean("is_featured").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const domainPricing = mysqlTable("domain_pricing", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  tld: varchar("tld", { length: 50 }).notNull().unique(),
  registrationPriceBdt: decimal("registration_price_bdt", { precision: 10, scale: 2 }).notNull(),
  renewalPriceBdt: decimal("renewal_price_bdt", { precision: 10, scale: 2 }).notNull(),
  transferPriceBdt: decimal("transfer_price_bdt", { precision: 10, scale: 2 }).notNull(),
  minYears: int("min_years").notNull().default(1),
  isActive: boolean("is_active").notNull().default(true),
});

export const coupons = mysqlTable("coupons", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  code: varchar("code", { length: 50 }).notNull().unique(),
  discountType: varchar("discount_type", { length: 20 }).notNull().default("percentage"), // percentage | fixed
  discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
  minSpendBdt: decimal("min_spend_bdt", { precision: 10, scale: 2 }).default("0.00"),
  validFrom: timestamp("valid_from").defaultNow().notNull(),
  validUntil: timestamp("valid_until").notNull(),
  usageLimit: int("usage_limit").default(100),
  timesUsed: int("times_used").notNull().default(0),
  isActive: boolean("is_active").notNull().default(true),
});

export const orders = mysqlTable("orders", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  orderNumber: varchar("order_number", { length: 50 }).notNull().unique(),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  invoiceId: varchar("invoice_id", { length: 36 }),
  status: varchar("status", { length: 20 }).notNull().default("pending"), // pending | processing | completed | cancelled
  subtotalBdt: decimal("subtotal_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  discountBdt: decimal("discount_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  totalBdt: decimal("total_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  couponCode: varchar("coupon_code", { length: 50 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const orderItems = mysqlTable("order_items", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  orderId: varchar("order_id", { length: 36 }).notNull().references(() => orders.id, { onDelete: "cascade" }),
  itemType: varchar("item_type", { length: 50 }).notNull(), // hosting | domain | theme
  itemName: varchar("item_name", { length: 255 }).notNull(),
  domain: varchar("domain", { length: 255 }),
  billingCycle: varchar("billing_cycle", { length: 20 }).default("monthly"),
  priceBdt: decimal("price_bdt", { precision: 10, scale: 2 }).notNull().default("0.00"),
  provisioningData: json("provisioning_data"),
});

export const invoices = mysqlTable("invoices", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  serviceId: varchar("service_id", { length: 36 }).references(() => services.id, { onDelete: "set null" }),
  invoiceNumber: varchar("invoice_number", { length: 50 }).notNull().unique(),
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("unpaid"), // unpaid | paid | overdue | cancelled | refunded
  paymentMethod: varchar("payment_method", { length: 50 }),
  dueDate: timestamp("due_date").notNull(),
  paidAt: timestamp("paid_at"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const paymentEvents = mysqlTable("payment_events", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  invoiceId: varchar("invoice_id", { length: 36 }).references(() => invoices.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "cascade" }),
  gateway: varchar("gateway", { length: 50 }).notNull(), // bkash | sslcommerz | surjopay | wallet
  transactionId: varchar("transaction_id", { length: 100 }).notNull(),
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 50 }).notNull(),
  verified: boolean("verified").notNull().default(false),
  payload: json("payload"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (table) => ({
  gatewayTrxUnique: unique().on(table.gateway, table.transactionId),
}));

export const walletTransactions = mysqlTable("wallet_transactions", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 20 }).notNull(), // deposit | withdrawal | payment | refund
  amountBdt: decimal("amount_bdt", { precision: 10, scale: 2 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("completed"), // completed | pending | failed
  paymentMethod: varchar("payment_method", { length: 50 }),
  transactionId: varchar("transaction_id", { length: 100 }),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const paymentGatewaySettings = mysqlTable("payment_gateway_settings", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  gateway: varchar("gateway", { length: 50 }).notNull().unique(), // bkash | sslcommerz | surjopay | nagad
  enabled: boolean("enabled").notNull().default(false),
  isSandbox: boolean("is_sandbox").notNull().default(true),
  credentials: json("credentials"),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});
