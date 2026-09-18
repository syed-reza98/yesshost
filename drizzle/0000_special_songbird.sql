CREATE TABLE `accounts` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`provider_account_id` varchar(255) NOT NULL,
	`refresh_token` text,
	`access_token` text,
	`expires_at` int,
	`token_type` varchar(255),
	`scope` text,
	`id_token` text,
	`session_state` text,
	CONSTRAINT `accounts_id` PRIMARY KEY(`id`),
	CONSTRAINT `accounts_provider_provider_account_id_unique` UNIQUE(`provider`,`provider_account_id`)
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`full_name` varchar(255),
	`phone` varchar(30),
	`address` text,
	`city` varchar(100),
	`country` varchar(100) NOT NULL DEFAULT 'Bangladesh',
	`company_name` varchar(255),
	`support_pin` varchar(6),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `profiles_user_id_unique` UNIQUE(`user_id`)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`id` varchar(36) NOT NULL,
	`session_token` varchar(255) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `sessions_id` PRIMARY KEY(`id`),
	CONSTRAINT `sessions_session_token_unique` UNIQUE(`session_token`)
);
--> statement-breakpoint
CREATE TABLE `user_permissions` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`permission` varchar(100) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_permissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user_roles` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`role` varchar(50) NOT NULL DEFAULT 'user',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `user_roles_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_roles_user_id_role_unique` UNIQUE(`user_id`,`role`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`email_verified` timestamp,
	`image` text,
	`password_hash` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verification_tokens` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `verification_tokens_identifier_token_pk` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE TABLE `servers` (
	`id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`hostname` varchar(255) NOT NULL,
	`ip_address` varchar(45) NOT NULL,
	`whm_username` varchar(64) NOT NULL DEFAULT 'root',
	`whm_api_token` text NOT NULL,
	`location` varchar(100) NOT NULL DEFAULT 'East Asia',
	`max_accounts` int NOT NULL DEFAULT 500,
	`active_accounts` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	`status` varchar(20) NOT NULL DEFAULT 'online',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `servers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reseller_accounts` (
	`id` varchar(36) NOT NULL,
	`reseller_package_id` varchar(36) NOT NULL,
	`reseller_user_id` varchar(36) NOT NULL,
	`domain` varchar(255) NOT NULL,
	`username` varchar(64) NOT NULL,
	`plan_name` varchar(100) NOT NULL,
	`disk_quota_mb` int NOT NULL DEFAULT 1024,
	`bandwidth_mb` int NOT NULL DEFAULT 10240,
	`cpanel_created` boolean NOT NULL DEFAULT false,
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `reseller_accounts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `reseller_packages` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`service_id` varchar(36),
	`package_name` varchar(100) NOT NULL,
	`max_accounts` int NOT NULL DEFAULT 25,
	`used_accounts` int NOT NULL DEFAULT 0,
	`max_disk_mb` int NOT NULL DEFAULT 50000,
	`used_disk_mb` int NOT NULL DEFAULT 0,
	`max_bandwidth_mb` int NOT NULL DEFAULT 500000,
	`used_bandwidth_mb` int NOT NULL DEFAULT 0,
	`whm_username` varchar(64),
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `reseller_packages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`server_id` varchar(36),
	`name` varchar(255) NOT NULL,
	`domain` varchar(255),
	`cpanel_username` varchar(64),
	`package_name` varchar(100),
	`service_type` varchar(50) NOT NULL DEFAULT 'hosting',
	`billing_cycle` varchar(20) NOT NULL DEFAULT 'monthly',
	`price_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`start_date` timestamp NOT NULL DEFAULT (now()),
	`expiry_date` timestamp NOT NULL,
	`suspended_at` timestamp,
	`suspension_reason` text,
	`specs` json,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `services_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `coupons` (
	`id` varchar(36) NOT NULL,
	`code` varchar(50) NOT NULL,
	`discount_type` varchar(20) NOT NULL DEFAULT 'percentage',
	`discount_value` decimal(10,2) NOT NULL,
	`min_spend_bdt` decimal(10,2) DEFAULT '0.00',
	`valid_from` timestamp NOT NULL DEFAULT (now()),
	`valid_until` timestamp NOT NULL,
	`usage_limit` int DEFAULT 100,
	`times_used` int NOT NULL DEFAULT 0,
	`is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `coupons_id` PRIMARY KEY(`id`),
	CONSTRAINT `coupons_code_unique` UNIQUE(`code`)
);
--> statement-breakpoint
CREATE TABLE `domain_pricing` (
	`id` varchar(36) NOT NULL,
	`tld` varchar(50) NOT NULL,
	`registration_price_bdt` decimal(10,2) NOT NULL,
	`renewal_price_bdt` decimal(10,2) NOT NULL,
	`transfer_price_bdt` decimal(10,2) NOT NULL,
	`min_years` int NOT NULL DEFAULT 1,
	`is_active` boolean NOT NULL DEFAULT true,
	CONSTRAINT `domain_pricing_id` PRIMARY KEY(`id`),
	CONSTRAINT `domain_pricing_tld_unique` UNIQUE(`tld`)
);
--> statement-breakpoint
CREATE TABLE `invoices` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`service_id` varchar(36),
	`invoice_number` varchar(50) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'unpaid',
	`payment_method` varchar(50),
	`due_date` timestamp NOT NULL,
	`paid_at` timestamp,
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `invoices_id` PRIMARY KEY(`id`),
	CONSTRAINT `invoices_invoice_number_unique` UNIQUE(`invoice_number`)
);
--> statement-breakpoint
CREATE TABLE `order_items` (
	`id` varchar(36) NOT NULL,
	`order_id` varchar(36) NOT NULL,
	`item_type` varchar(50) NOT NULL,
	`item_name` varchar(255) NOT NULL,
	`domain` varchar(255),
	`billing_cycle` varchar(20) DEFAULT 'monthly',
	`price_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`provisioning_data` json,
	CONSTRAINT `order_items_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `orders` (
	`id` varchar(36) NOT NULL,
	`order_number` varchar(50) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`invoice_id` varchar(36),
	`status` varchar(20) NOT NULL DEFAULT 'pending',
	`subtotal_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`discount_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`total_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`coupon_code` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `orders_id` PRIMARY KEY(`id`),
	CONSTRAINT `orders_order_number_unique` UNIQUE(`order_number`)
);
--> statement-breakpoint
CREATE TABLE `payment_events` (
	`id` varchar(36) NOT NULL,
	`invoice_id` varchar(36),
	`user_id` varchar(36),
	`gateway` varchar(50) NOT NULL,
	`transaction_id` varchar(100) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`status` varchar(50) NOT NULL,
	`verified` boolean NOT NULL DEFAULT false,
	`payload` json,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `payment_events_id` PRIMARY KEY(`id`),
	CONSTRAINT `payment_events_gateway_transaction_id_unique` UNIQUE(`gateway`,`transaction_id`)
);
--> statement-breakpoint
CREATE TABLE `payment_gateway_settings` (
	`id` varchar(36) NOT NULL,
	`gateway` varchar(50) NOT NULL,
	`enabled` boolean NOT NULL DEFAULT false,
	`is_sandbox` boolean NOT NULL DEFAULT true,
	`credentials` json,
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `payment_gateway_settings_id` PRIMARY KEY(`id`),
	CONSTRAINT `payment_gateway_settings_gateway_unique` UNIQUE(`gateway`)
);
--> statement-breakpoint
CREATE TABLE `pricing_plans` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`whm_package_name` varchar(100) NOT NULL,
	`category` varchar(50) NOT NULL DEFAULT 'shared',
	`price_bdt` decimal(10,2) NOT NULL,
	`annual_price_bdt` decimal(10,2) NOT NULL,
	`features` json,
	`is_featured` boolean NOT NULL DEFAULT false,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `pricing_plans_id` PRIMARY KEY(`id`),
	CONSTRAINT `pricing_plans_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `wallet_transactions` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`type` varchar(20) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'completed',
	`payment_method` varchar(50),
	`transaction_id` varchar(100),
	`description` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `wallet_transactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `call_history` (
	`id` varchar(36) NOT NULL,
	`chat_id` varchar(36),
	`call_type` varchar(20) NOT NULL DEFAULT 'inbound',
	`duration_seconds` int NOT NULL DEFAULT 0,
	`status` varchar(20) NOT NULL DEFAULT 'missed',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `call_history_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chat_room_members` (
	`id` varchar(36) NOT NULL,
	`room_id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`joined_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chat_room_members_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chat_room_messages` (
	`id` varchar(36) NOT NULL,
	`room_id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chat_room_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chat_rooms` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`description` text,
	`is_active` boolean NOT NULL DEFAULT true,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chat_rooms_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `live_chat_messages` (
	`id` varchar(36) NOT NULL,
	`chat_id` varchar(36) NOT NULL,
	`sender_type` varchar(20) NOT NULL,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `live_chat_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `live_chats` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36),
	`visitor_name` varchar(100),
	`visitor_email` varchar(255),
	`visitor_phone` varchar(50),
	`status` varchar(20) NOT NULL DEFAULT 'open',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `live_chats_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `support_tickets` (
	`id` varchar(36) NOT NULL,
	`ticket_number` varchar(50) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`service_id` varchar(36),
	`subject` varchar(255) NOT NULL,
	`department` varchar(50) NOT NULL DEFAULT 'technical',
	`priority` varchar(20) NOT NULL DEFAULT 'medium',
	`status` varchar(20) NOT NULL DEFAULT 'open',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `support_tickets_id` PRIMARY KEY(`id`),
	CONSTRAINT `support_tickets_ticket_number_unique` UNIQUE(`ticket_number`)
);
--> statement-breakpoint
CREATE TABLE `ticket_replies` (
	`id` varchar(36) NOT NULL,
	`ticket_id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`message` text NOT NULL,
	`attachments` json,
	`is_staff` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `ticket_replies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `affiliate_clicks` (
	`id` varchar(36) NOT NULL,
	`referrer_user_id` varchar(36) NOT NULL,
	`ip_address` varchar(45),
	`user_agent` text,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `affiliate_clicks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `affiliate_commissions` (
	`id` varchar(36) NOT NULL,
	`referral_id` varchar(36),
	`invoice_id` varchar(36),
	`user_id` varchar(36) NOT NULL,
	`commission_amount_bdt` decimal(10,2) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'approved',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `affiliate_commissions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `affiliate_payouts` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`method` varchar(50) NOT NULL,
	`account_details` text NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'requested',
	`processed_at` timestamp,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `affiliate_payouts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `affiliate_profiles` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`referral_code` varchar(50) NOT NULL,
	`balance_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`total_earned_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `affiliate_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `affiliate_profiles_user_id_unique` UNIQUE(`user_id`),
	CONSTRAINT `affiliate_profiles_referral_code_unique` UNIQUE(`referral_code`)
);
--> statement-breakpoint
CREATE TABLE `affiliate_referrals` (
	`id` varchar(36) NOT NULL,
	`referrer_user_id` varchar(36) NOT NULL,
	`referred_user_id` varchar(36) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'active',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `affiliate_referrals_id` PRIMARY KEY(`id`),
	CONSTRAINT `affiliate_referrals_referred_user_id_unique` UNIQUE(`referred_user_id`)
);
--> statement-breakpoint
CREATE TABLE `theme_orders` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`theme_id` varchar(36) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'completed',
	`payment_method` varchar(50),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `theme_orders_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `theme_seller_payouts` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`amount_bdt` decimal(10,2) NOT NULL,
	`method` varchar(50) NOT NULL,
	`account_details` text NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'requested',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `theme_seller_payouts_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `themes` (
	`id` varchar(36) NOT NULL,
	`seller_user_id` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`category` varchar(50) NOT NULL DEFAULT 'business',
	`price_bdt` decimal(10,2) NOT NULL DEFAULT '0.00',
	`preview_url` text,
	`file_path` text,
	`screenshots` json,
	`approval_status` varchar(20) NOT NULL DEFAULT 'pending',
	`commission_rate` decimal(5,2) NOT NULL DEFAULT '30.00',
	`is_active` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `themes_id` PRIMARY KEY(`id`),
	CONSTRAINT `themes_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `contact_messages` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(255) NOT NULL,
	`phone` varchar(50),
	`subject` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`status` varchar(20) NOT NULL DEFAULT 'unread',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contact_messages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `faqs` (
	`id` varchar(36) NOT NULL,
	`question_en` text NOT NULL,
	`question_bn` text,
	`answer_en` text NOT NULL,
	`answer_bn` text,
	`category` varchar(50) NOT NULL DEFAULT 'general',
	`sort_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `faqs_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `kb_articles` (
	`id` varchar(36) NOT NULL,
	`category_id` varchar(36) NOT NULL,
	`title` varchar(255) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`content_bn` text,
	`content_en` text,
	`views` int NOT NULL DEFAULT 0,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `kb_articles_id` PRIMARY KEY(`id`),
	CONSTRAINT `kb_articles_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `kb_categories` (
	`id` varchar(36) NOT NULL,
	`name` varchar(100) NOT NULL,
	`slug` varchar(100) NOT NULL,
	`icon` varchar(50) DEFAULT 'HelpCircle',
	`sort_order` int NOT NULL DEFAULT 0,
	CONSTRAINT `kb_categories_id` PRIMARY KEY(`id`),
	CONSTRAINT `kb_categories_slug_unique` UNIQUE(`slug`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` varchar(36) NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`title` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`type` varchar(50) NOT NULL DEFAULT 'info',
	`link` text,
	`is_read` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` varchar(36) NOT NULL,
	`client_name` varchar(100) NOT NULL,
	`company` varchar(100),
	`rating` int NOT NULL DEFAULT 5,
	`comment` text NOT NULL,
	`avatar_url` text,
	`is_featured` boolean NOT NULL DEFAULT true,
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `accounts` ADD CONSTRAINT `accounts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `sessions` ADD CONSTRAINT `sessions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_permissions` ADD CONSTRAINT `user_permissions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `user_roles` ADD CONSTRAINT `user_roles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reseller_accounts` ADD CONSTRAINT `reseller_accounts_reseller_package_id_reseller_packages_id_fk` FOREIGN KEY (`reseller_package_id`) REFERENCES `reseller_packages`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reseller_accounts` ADD CONSTRAINT `reseller_accounts_reseller_user_id_users_id_fk` FOREIGN KEY (`reseller_user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reseller_packages` ADD CONSTRAINT `reseller_packages_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `reseller_packages` ADD CONSTRAINT `reseller_packages_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `services` ADD CONSTRAINT `services_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `services` ADD CONSTRAINT `services_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `invoices` ADD CONSTRAINT `invoices_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_id_orders_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `payment_events` ADD CONSTRAINT `payment_events_invoice_id_invoices_id_fk` FOREIGN KEY (`invoice_id`) REFERENCES `invoices`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `payment_events` ADD CONSTRAINT `payment_events_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `wallet_transactions` ADD CONSTRAINT `wallet_transactions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `call_history` ADD CONSTRAINT `call_history_chat_id_live_chats_id_fk` FOREIGN KEY (`chat_id`) REFERENCES `live_chats`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_room_id_chat_rooms_id_fk` FOREIGN KEY (`room_id`) REFERENCES `chat_rooms`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chat_room_members` ADD CONSTRAINT `chat_room_members_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chat_room_messages` ADD CONSTRAINT `chat_room_messages_room_id_chat_rooms_id_fk` FOREIGN KEY (`room_id`) REFERENCES `chat_rooms`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `chat_room_messages` ADD CONSTRAINT `chat_room_messages_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `live_chat_messages` ADD CONSTRAINT `live_chat_messages_chat_id_live_chats_id_fk` FOREIGN KEY (`chat_id`) REFERENCES `live_chats`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `live_chats` ADD CONSTRAINT `live_chats_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `support_tickets` ADD CONSTRAINT `support_tickets_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `support_tickets` ADD CONSTRAINT `support_tickets_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `ticket_replies` ADD CONSTRAINT `ticket_replies_ticket_id_support_tickets_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `support_tickets`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `ticket_replies` ADD CONSTRAINT `ticket_replies_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_clicks` ADD CONSTRAINT `affiliate_clicks_referrer_user_id_users_id_fk` FOREIGN KEY (`referrer_user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_commissions` ADD CONSTRAINT `affiliate_commissions_referral_id_affiliate_referrals_id_fk` FOREIGN KEY (`referral_id`) REFERENCES `affiliate_referrals`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_commissions` ADD CONSTRAINT `affiliate_commissions_invoice_id_invoices_id_fk` FOREIGN KEY (`invoice_id`) REFERENCES `invoices`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_commissions` ADD CONSTRAINT `affiliate_commissions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_payouts` ADD CONSTRAINT `affiliate_payouts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_profiles` ADD CONSTRAINT `affiliate_profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_referrals` ADD CONSTRAINT `affiliate_referrals_referrer_user_id_users_id_fk` FOREIGN KEY (`referrer_user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `affiliate_referrals` ADD CONSTRAINT `affiliate_referrals_referred_user_id_users_id_fk` FOREIGN KEY (`referred_user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `theme_orders` ADD CONSTRAINT `theme_orders_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `theme_orders` ADD CONSTRAINT `theme_orders_theme_id_themes_id_fk` FOREIGN KEY (`theme_id`) REFERENCES `themes`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `theme_seller_payouts` ADD CONSTRAINT `theme_seller_payouts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `themes` ADD CONSTRAINT `themes_seller_user_id_users_id_fk` FOREIGN KEY (`seller_user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `kb_articles` ADD CONSTRAINT `kb_articles_category_id_kb_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `kb_categories`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;