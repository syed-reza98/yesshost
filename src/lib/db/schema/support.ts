import { mysqlTable, varchar, text, timestamp, int, boolean, json } from "drizzle-orm/mysql-core";
import { users } from "./auth";
import { services } from "./services";

export const supportTickets = mysqlTable("support_tickets", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  ticketNumber: varchar("ticket_number", { length: 50 }).notNull().unique(),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  serviceId: varchar("service_id", { length: 36 }).references(() => services.id, { onDelete: "set null" }),
  subject: varchar("subject", { length: 255 }).notNull(),
  department: varchar("department", { length: 50 }).notNull().default("technical"), // technical | billing | sales
  priority: varchar("priority", { length: 20 }).notNull().default("medium"), // low | medium | high | urgent
  status: varchar("status", { length: 20 }).notNull().default("open"), // open | in_progress | waiting_client | closed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const ticketReplies = mysqlTable("ticket_replies", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  ticketId: varchar("ticket_id", { length: 36 }).notNull().references(() => supportTickets.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  attachments: json("attachments"),
  isStaff: boolean("is_staff").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const liveChats = mysqlTable("live_chats", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id", { length: 36 }).references(() => users.id, { onDelete: "set null" }),
  visitorName: varchar("visitor_name", { length: 100 }),
  visitorEmail: varchar("visitor_email", { length: 255 }),
  visitorPhone: varchar("visitor_phone", { length: 50 }),
  status: varchar("status", { length: 20 }).notNull().default("open"), // open | active | closed
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const liveChatMessages = mysqlTable("live_chat_messages", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  chatId: varchar("chat_id", { length: 36 }).notNull().references(() => liveChats.id, { onDelete: "cascade" }),
  senderType: varchar("sender_type", { length: 20 }).notNull(), // visitor | agent | bot
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const callHistory = mysqlTable("call_history", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  chatId: varchar("chat_id", { length: 36 }).references(() => liveChats.id, { onDelete: "cascade" }),
  callType: varchar("call_type", { length: 20 }).notNull().default("inbound"), // inbound | outbound
  durationSeconds: int("duration_seconds").notNull().default(0),
  status: varchar("status", { length: 20 }).notNull().default("missed"), // completed | missed | rejected
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatRooms = mysqlTable("chat_rooms", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  isActive: boolean("is_active").notNull().default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatRoomMembers = mysqlTable("chat_room_members", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  roomId: varchar("room_id", { length: 36 }).notNull().references(() => chatRooms.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});

export const chatRoomMessages = mysqlTable("chat_room_messages", {
  id: varchar("id", { length: 36 }).primaryKey().$defaultFn(() => crypto.randomUUID()),
  roomId: varchar("room_id", { length: 36 }).notNull().references(() => chatRooms.id, { onDelete: "cascade" }),
  userId: varchar("user_id", { length: 36 }).notNull().references(() => users.id, { onDelete: "cascade" }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
