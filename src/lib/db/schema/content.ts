import { mysqlTable, varchar, text, timestamp, int, boolean } from "drizzle-orm/mysql-core";
import { users } from "./auth";

export const kbCategories = mysqlTable("kb_categories", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  icon: varchar("icon", { length: 50 }).default("HelpCircle"),
  sortOrder: int("sort_order").notNull().default(0),
});

export const kbArticles = mysqlTable("kb_articles", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  categoryId: varchar("category_id", { length: 36 }).notNull().references(() => kbCategories.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  contentBn: text("content_bn"),
  contentEn: text("content_en"),
  views: int("views").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const faqs = mysqlTable("faqs", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  questionEn: text("question_en").notNull(),
  questionBn: text("question_bn"),
  answerEn: text("answer_en").notNull(),
  answerBn: text("answer_bn"),
  category: varchar("category", { length: 50 }).notNull().default("general"), // general | hosting | billing | domain | security
  sortOrder: int("sort_order").notNull().default(0),
});

export const testimonials = mysqlTable("testimonials", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  clientName: varchar("client_name", { length: 100 }).notNull(),
  company: varchar("company", { length: 100 }),
  rating: int("rating").notNull().default(5),
  comment: text("comment").notNull(),
  avatarUrl: text("avatar_url"),
  isFeatured: boolean("is_featured").notNull().default(true),
});

export const contactMessages = mysqlTable("contact_messages", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("unread"), // unread | replied | archived
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const notifications = mysqlTable("notifications", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  title: varchar("title", { length: 255 }).notNull(),
  message: text("message").notNull(),
  type: varchar("type", { length: 50 }).notNull().default("info"), // info | success | warning | error
  link: text("link"),
  isRead: boolean("is_read").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
