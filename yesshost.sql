-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 22, 2026 at 01:29 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yesshost`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `type` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_account_id` varchar(255) NOT NULL,
  `refresh_token` text DEFAULT NULL,
  `access_token` text DEFAULT NULL,
  `expires_at` int(11) DEFAULT NULL,
  `token_type` varchar(255) DEFAULT NULL,
  `scope` text DEFAULT NULL,
  `id_token` text DEFAULT NULL,
  `session_state` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_clicks`
--

CREATE TABLE `affiliate_clicks` (
  `id` varchar(36) NOT NULL,
  `referrer_user_id` varchar(36) NOT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_commissions`
--

CREATE TABLE `affiliate_commissions` (
  `id` varchar(36) NOT NULL,
  `referral_id` varchar(36) DEFAULT NULL,
  `invoice_id` varchar(36) DEFAULT NULL,
  `user_id` varchar(36) NOT NULL,
  `commission_amount_bdt` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'approved',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_payouts`
--

CREATE TABLE `affiliate_payouts` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `method` varchar(50) NOT NULL,
  `account_details` text NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'requested',
  `processed_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_profiles`
--

CREATE TABLE `affiliate_profiles` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `referral_code` varchar(50) NOT NULL,
  `balance_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total_earned_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `affiliate_profiles`
--

INSERT INTO `affiliate_profiles` (`id`, `user_id`, `referral_code`, `balance_bdt`, `total_earned_bdt`, `status`, `created_at`) VALUES
('077e91d0-976e-4e2e-9f86-4d22e836d2fa', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'YHD905BE93', 0.00, 0.00, 'active', '2026-09-20 08:15:08'),
('08d60213-30db-4887-9286-a54b532f3687', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'YH12EF2143', 0.00, 0.00, 'active', '2026-09-20 14:22:28');

-- --------------------------------------------------------

--
-- Table structure for table `affiliate_referrals`
--

CREATE TABLE `affiliate_referrals` (
  `id` varchar(36) NOT NULL,
  `referrer_user_id` varchar(36) NOT NULL,
  `referred_user_id` varchar(36) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `call_history`
--

CREATE TABLE `call_history` (
  `id` varchar(36) NOT NULL,
  `chat_id` varchar(36) DEFAULT NULL,
  `call_type` varchar(20) NOT NULL DEFAULT 'inbound',
  `duration_seconds` int(11) NOT NULL DEFAULT 0,
  `status` varchar(20) NOT NULL DEFAULT 'missed',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat_rooms`
--

CREATE TABLE `chat_rooms` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat_room_members`
--

CREATE TABLE `chat_room_members` (
  `id` varchar(36) NOT NULL,
  `room_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `joined_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `chat_room_messages`
--

CREATE TABLE `chat_room_messages` (
  `id` varchar(36) NOT NULL,
  `room_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'unread',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `subject`, `message`, `status`, `created_at`) VALUES
('29b429a3-da02-45f6-b9d1-e9336e2fbe69', 'Tester', 'test@example.com', NULL, 'Inquiry', 'Testing contact form', 'unread', '2026-09-18 00:41:21');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` varchar(36) NOT NULL,
  `code` varchar(50) NOT NULL,
  `discount_type` varchar(20) NOT NULL DEFAULT 'percentage',
  `discount_value` decimal(10,2) NOT NULL,
  `min_spend_bdt` decimal(10,2) DEFAULT 0.00,
  `valid_from` timestamp NOT NULL DEFAULT current_timestamp(),
  `valid_until` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `usage_limit` int(11) DEFAULT 100,
  `times_used` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `domain_pricing`
--

CREATE TABLE `domain_pricing` (
  `id` varchar(36) NOT NULL,
  `tld` varchar(50) NOT NULL,
  `registration_price_bdt` decimal(10,2) NOT NULL,
  `renewal_price_bdt` decimal(10,2) NOT NULL,
  `transfer_price_bdt` decimal(10,2) NOT NULL,
  `min_years` int(11) NOT NULL DEFAULT 1,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `domain_pricing`
--

INSERT INTO `domain_pricing` (`id`, `tld`, `registration_price_bdt`, `renewal_price_bdt`, `transfer_price_bdt`, `min_years`, `is_active`) VALUES
('23a247ef-c14f-46f5-bd0f-f318366506c1', '.org', 1400.00, 1600.00, 1400.00, 1, 1),
('318efaa0-730b-4f32-aa8b-0a9b84bfaa96', '.net', 1350.00, 1550.00, 1350.00, 1, 1),
('39503d20-9d74-4836-9a04-0a6203e7d4fe', '.xyz', 450.00, 1200.00, 1100.00, 1, 1),
('42da7f89-93e0-4e01-a9b5-578e65407db9', '.com', 1250.00, 1450.00, 1250.00, 1, 1),
('981a7b2d-10d9-4696-a4e6-3e315d7396eb', '.com.bd', 1800.00, 1800.00, 0.00, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` varchar(36) NOT NULL,
  `question_en` text NOT NULL,
  `question_bn` text DEFAULT NULL,
  `answer_en` text NOT NULL,
  `answer_bn` text DEFAULT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'general',
  `sort_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `question_en`, `question_bn`, `answer_en`, `answer_bn`, `category`, `sort_order`) VALUES
('08226ef6-95a2-4ac5-ad0e-377b3327fb41', 'How quickly will my cPanel account be active after payment?', 'পেমেন্টের পর আমার cPanel অ্যাকাউন্ট কত দ্রুত সক্রিয় হবে?', 'Instantly! As soon as your bKash, SSLCommerz, or Wallet payment is confirmed, our automated WHM provisioner creates your cPanel account within 10 seconds.', 'তাত্ক্ষণিকভাবে! আপনার বিকাশ, এসএসএলকমার্স অথবা ওয়ালেট পেমেন্ট নিশ্চিত হওয়ার সাথে সাথে আমাদের স্বয়ংক্রিয় WHM সিস্টেম ১০ সেকেন্ডের মধ্যে cPanel তৈরি করে দেয়।', 'hosting', 1),
('5dfa4e1f-9017-43dc-b335-fd8c07506f1e', 'How do I log in to cPanel without typing my password?', 'পাসওয়ার্ড টাইপ না করে আমি কীভাবে cPanel এ লগইন করব?', 'From your Yess Host Client Dashboard, click the \'Log in to cPanel\' button on your active service card for instant 1-Click Single Sign-On.', 'আপনার ইয়েস হোস্ট ক্লায়েন্ট ড্যাশবোর্ডে গিয়ে আপনার সক্রিয় সার্ভিসের কার্ড থেকে \'Log in to cPanel\' বাটনে ক্লিক করলেই ১-ক্লিকে সরাসরি cPanel এ প্রবেশ করতে পারবেন।', 'hosting', 2),
('6e0c57ad-101c-466e-9ca3-e77f77cba027', 'How do I log in to cPanel without typing my password?', 'পাসওয়ার্ড টাইপ না করে আমি কীভাবে cPanel এ লগইন করব?', 'From your Yess Host Client Dashboard, click the \'Log in to cPanel\' button on your active service card for instant 1-Click Single Sign-On.', 'আপনার ইয়েস হোস্ট ক্লায়েন্ট ড্যাশবোর্ডে গিয়ে আপনার সক্রিয় সার্ভিসের কার্ড থেকে \'Log in to cPanel\' বাটনে ক্লিক করলেই ১-ক্লিকে সরাসরি cPanel এ প্রবেশ করতে পারবেন।', 'hosting', 2),
('c645ceb3-736e-4dd4-80ca-7a47cb037286', 'How quickly will my cPanel account be active after payment?', 'পেমেন্টের পর আমার cPanel অ্যাকাউন্ট কত দ্রুত সক্রিয় হবে?', 'Instantly! As soon as your bKash, SSLCommerz, or Wallet payment is confirmed, our automated WHM provisioner creates your cPanel account within 10 seconds.', 'তাত্ক্ষণিকভাবে! আপনার বিকাশ, এসএসএলকমার্স অথবা ওয়ালেট পেমেন্ট নিশ্চিত হওয়ার সাথে সাথে আমাদের স্বয়ংক্রিয় WHM সিস্টেম ১০ সেকেন্ডের মধ্যে cPanel তৈরি করে দেয়।', 'hosting', 1);

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `service_id` varchar(36) DEFAULT NULL,
  `invoice_number` varchar(50) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'unpaid',
  `payment_method` varchar(50) DEFAULT NULL,
  `due_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `paid_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `share_token` varchar(128) DEFAULT NULL,
  `share_expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `user_id`, `service_id`, `invoice_number`, `amount_bdt`, `status`, `payment_method`, `due_date`, `paid_at`, `description`, `created_at`, `share_token`, `share_expires_at`) VALUES
('2e7f9239-372f-4381-9a13-6f5338e22c72', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '12944891-af2a-402b-9cae-73c892a9af43', 'INV-2026-0001', 1500.00, 'paid', 'bKash', '2026-09-17 18:49:30', '2026-09-17 18:49:30', 'Annual Subscription - Starter Shared Hosting (tanvirtech.com)', '2026-09-18 00:49:30', NULL, NULL),
('59619f56-d6b2-44bb-a309-714016d4d6ff', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '12944891-af2a-402b-9cae-73c892a9af43', 'INV-2026-0002', 350.00, 'paid', 'wallet', '2026-09-18 00:49:40', '2026-09-17 18:49:40', 'Addon - Dedicated SSL & Backup Setup', '2026-09-18 00:49:30', NULL, NULL),
('c0a80101-9999-4000-8000-000000000001', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '12944891-af2a-402b-9cae-73c892a9af43', 'INV-2026-0003', 500.00, 'paid', 'wallet', '2026-09-20 08:54:48', '2026-09-20 00:07:18', 'Starter Shared Hosting - Renewal', '2026-09-20 06:05:06', '14545edae2f6162b62690e966bdc910f8c2cfc82da84e8577867984f69ba2aca', '2026-10-20 02:54:48');

-- --------------------------------------------------------

--
-- Table structure for table `kb_articles`
--

CREATE TABLE `kb_articles` (
  `id` varchar(36) NOT NULL,
  `category_id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `content_bn` text DEFAULT NULL,
  `content_en` text DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kb_articles`
--

INSERT INTO `kb_articles` (`id`, `category_id`, `title`, `slug`, `content_bn`, `content_en`, `views`, `created_at`) VALUES
('art-001', 'cat-cpanel', 'কিভাবে ১-ক্লিকে cPanel এ লগইন করবেন', 'how-to-login-to-cpanel', 'আপনার ড্যাশবোর্ডের সার্ভিসেস পেইজ থেকে ১-ক্লিকে cPanel এ সরাসরি SSO এর মাধ্যমে লগইন করতে পারবেন। কোনো পাসওয়ার্ড টাইপ করতে হবে না।', 'You can login to cPanel directly via 1-click Single Sign-On from your client dashboard services page without entering credentials manually.', 142, '2026-09-20 14:43:34'),
('art-002', 'cat-domain', 'ডোমেইন নেমসার্ভার পরিবর্তনের নির্দেশিকা', 'how-to-update-domain-nameservers', 'ডোমেইন টুলস বা ডোমেইন পেইজ থেকে আপনার নেমসার্ভার আপডেট করতে পারেন। পরিবর্তন কার্যকর হতে ২৪-৪৮ ঘণ্টা সময় লাগতে পারে।', 'Update your domain nameservers from the domain management section. Propagation takes 24 to 48 hours worldwide.', 89, '2026-09-20 14:43:34'),
('art-003', 'cat-billing', 'বিকাশ ও নগদে কিভাবে ওয়ালেট ফান্ড যোগ করবেন', 'how-to-add-funds-via-bkash', 'ওয়ালেট পেইজ থেকে ফান্ড যোগ করুন বাটনে ক্লিক করে বিকাশ বা নগদ নির্বাচন করুন এবং ট্রানজেকশন সম্পন্ন করে TrxID সাবমিট করুন। ব্যালেন্স সাথে সাথে যুক্ত হবে।', 'Navigate to your wallet and click Add Funds. Select bKash or Nagad and submit your TrxID for instant wallet top-up.', 215, '2026-09-20 14:43:34');

-- --------------------------------------------------------

--
-- Table structure for table `kb_categories`
--

CREATE TABLE `kb_categories` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `icon` varchar(50) DEFAULT 'HelpCircle',
  `sort_order` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kb_categories`
--

INSERT INTO `kb_categories` (`id`, `name`, `slug`, `icon`, `sort_order`) VALUES
('cat-billing', 'বিলিং ও পেমেন্ট', 'billing-payment', 'CreditCard', 3),
('cat-cpanel', 'cPanel ও হোস্টিং', 'cpanel-hosting', 'Server', 1),
('cat-domain', 'ডোমেইন ও ডিএনএস', 'domain-dns', 'Globe', 2);

-- --------------------------------------------------------

--
-- Table structure for table `live_chats`
--

CREATE TABLE `live_chats` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `visitor_name` varchar(100) DEFAULT NULL,
  `visitor_email` varchar(255) DEFAULT NULL,
  `visitor_phone` varchar(50) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `live_chat_messages`
--

CREATE TABLE `live_chat_messages` (
  `id` varchar(36) NOT NULL,
  `chat_id` varchar(36) NOT NULL,
  `sender_type` varchar(20) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `type` varchar(50) NOT NULL DEFAULT 'info',
  `link` text DEFAULT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `operating_expenses`
--

CREATE TABLE `operating_expenses` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(50) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `expense_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `vendor` varchar(255) DEFAULT NULL,
  `note` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` varchar(36) NOT NULL,
  `order_number` varchar(50) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `invoice_id` varchar(36) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `subtotal_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `discount_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `total_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `coupon_code` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `user_id`, `invoice_id`, `status`, `subtotal_bdt`, `discount_bdt`, `total_bdt`, `coupon_code`, `created_at`) VALUES
('ord-test-001', 'ORD-2026-0901', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '2e7f9239-372f-4381-9a13-6f5338e22c72', 'completed', 1500.00, 0.00, 1500.00, NULL, '2026-09-20 14:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` varchar(36) NOT NULL,
  `order_id` varchar(36) NOT NULL,
  `item_type` varchar(50) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `billing_cycle` varchar(20) DEFAULT 'monthly',
  `price_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `provisioning_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`provisioning_data`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `item_type`, `item_name`, `domain`, `billing_cycle`, `price_bdt`, `provisioning_data`) VALUES
('item-test-001', 'ord-test-001', 'hosting', 'Starter Shared Hosting', 'tanvirtech.com', 'annually', 1500.00, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payment_events`
--

CREATE TABLE `payment_events` (
  `id` varchar(36) NOT NULL,
  `invoice_id` varchar(36) DEFAULT NULL,
  `user_id` varchar(36) DEFAULT NULL,
  `gateway` varchar(50) NOT NULL,
  `transaction_id` varchar(100) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `payload` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`payload`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_events`
--

INSERT INTO `payment_events` (`id`, `invoice_id`, `user_id`, `gateway`, `transaction_id`, `amount_bdt`, `status`, `verified`, `payload`, `created_at`) VALUES
('4524c0ba-c57b-449b-a12f-597e47276c81', '59619f56-d6b2-44bb-a309-714016d4d6ff', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'wallet', 'WLT_e02a41d8_1789692580261', 350.00, 'success', 1, '{\"method\":\"wallet\",\"paidAt\":\"2026-09-18T00:49:40.281Z\"}', '2026-09-18 00:49:40'),
('ee747b24-fa51-4d7d-bc5d-8248aae66dde', 'c0a80101-9999-4000-8000-000000000001', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'wallet', 'WLT_3d5ca1d9_1789884438410', 500.00, 'success', 1, '{\"method\":\"wallet\",\"paidAt\":\"2026-09-20T06:07:18.416Z\"}', '2026-09-20 06:07:18');

-- --------------------------------------------------------

--
-- Table structure for table `payment_gateway_settings`
--

CREATE TABLE `payment_gateway_settings` (
  `id` varchar(36) NOT NULL,
  `gateway` varchar(50) NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT 0,
  `is_sandbox` tinyint(1) NOT NULL DEFAULT 1,
  `credentials` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`credentials`)),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_gateway_settings`
--

INSERT INTO `payment_gateway_settings` (`id`, `gateway`, `enabled`, `is_sandbox`, `credentials`, `updated_at`) VALUES
('93227f95-2147-49b6-8ae4-c09c2dd17097', 'sslcommerz', 1, 1, '{\"storeId\":\"yesshost_test\",\"storePass\":\"test_pass\"}', '2026-09-18 00:05:07'),
('ae9bcdee-d6aa-4e3e-a2d7-9439e37024c4', 'bkash', 1, 0, '{\"app_key\":\"bkash_live_app_key_2026\",\"app_secret\":\"bkash_live_secret_7766\",\"username\":\"yesshost_merchant\",\"password\":\"LivePassword99!\"}', '2026-09-20 14:33:15'),
('ba364f4c-d98c-4e3c-9795-32c2bbd61617', 'wallet', 1, 0, '{}', '2026-09-18 00:05:07');

-- --------------------------------------------------------

--
-- Table structure for table `pricing_plans`
--

CREATE TABLE `pricing_plans` (
  `id` varchar(36) NOT NULL,
  `name` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `whm_package_name` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'shared',
  `price_bdt` decimal(10,2) NOT NULL,
  `annual_price_bdt` decimal(10,2) NOT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`features`)),
  `is_featured` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pricing_plans`
--

INSERT INTO `pricing_plans` (`id`, `name`, `slug`, `whm_package_name`, `category`, `price_bdt`, `annual_price_bdt`, `features`, `is_featured`, `is_active`, `created_at`) VALUES
('7938a7fd-f1d8-448e-983c-7d9ff8a61308', 'Starter Shared', 'starter-shared', 'PH_1GB', 'shared', 150.00, 1500.00, '[\"1 GB NVMe Storage\",\"50 GB Bandwidth\",\"1 Website\",\"Free SSL\",\"cPanel Access\",\"Daily Backup\"]', 0, 1, '2026-09-18 00:05:07'),
('ba7a431c-d8fb-4444-9eec-dadc127ce513', 'Reseller Pro', 'reseller-pro', 'RESELLER_50GB', 'reseller', 1500.00, 15000.00, '[\"50 GB NVMe Storage\",\"500 GB Bandwidth\",\"25 cPanel Accounts\",\"WHM Reseller Access\",\"White-label Nameservers\"]', 0, 1, '2026-09-18 00:05:07'),
('d6e914fa-ef90-4b9c-bd29-b31959b1943b', 'Standard Shared', 'standard-shared', 'PRO_5GB', 'shared', 350.00, 3500.00, '[\"5 GB NVMe Storage\",\"Unlimited Bandwidth\",\"3 Websites\",\"Free SSL\",\"cPanel Access\",\"2x CPU & RAM\"]', 1, 1, '2026-09-18 00:05:07'),
('f328af07-e0dc-4907-9028-db63bd699f64', 'Business Cloud', 'business-cloud', 'BIZ_20GB', 'cloud', 750.00, 7500.00, '[\"20 GB NVMe Storage\",\"Unlimited Bandwidth\",\"Unlimited Websites\",\"Free SSL & CDN\",\"Dedicated IP\",\"Priority Support\"]', 0, 1, '2026-09-18 00:05:07');

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `country` varchar(100) NOT NULL DEFAULT 'Bangladesh',
  `company_name` varchar(255) DEFAULT NULL,
  `support_pin` varchar(6) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `user_id`, `full_name`, `phone`, `address`, `city`, `country`, `company_name`, `support_pin`, `created_at`) VALUES
('05329395-366a-4317-a7ff-fcda80b84eeb', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'Tanvir Ahmed', '+8801811223344', NULL, 'Chittagong', 'Bangladesh', 'Bengal Tech Labs', '175857', '2026-09-18 00:05:07'),
('cd3b7cb4-6d79-4454-8644-e810acfef0bb', '333fe884-7c99-43cc-9e25-a0ca397653f5', 'Support Specialist', '+8801700000002', NULL, 'Dhaka', 'Bangladesh', NULL, '482019', '2026-09-18 00:05:06'),
('f92f1efc-eff4-42a6-8f41-d4000f935ead', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'Super Administrator', '+8801700000001', 'Gulshan-2, Dhaka 1212', 'Dhaka', 'Bangladesh', 'Yess Host Inc.', '739201', '2026-09-18 00:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `reseller_accounts`
--

CREATE TABLE `reseller_accounts` (
  `id` varchar(36) NOT NULL,
  `reseller_package_id` varchar(36) NOT NULL,
  `reseller_user_id` varchar(36) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `username` varchar(64) NOT NULL,
  `plan_name` varchar(100) NOT NULL,
  `disk_quota_mb` int(11) NOT NULL DEFAULT 1024,
  `bandwidth_mb` int(11) NOT NULL DEFAULT 10240,
  `cpanel_created` tinyint(1) NOT NULL DEFAULT 0,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reseller_accounts`
--

INSERT INTO `reseller_accounts` (`id`, `reseller_package_id`, `reseller_user_id`, `domain`, `username`, `plan_name`, `disk_quota_mb`, `bandwidth_mb`, `cpanel_created`, `status`, `created_at`) VALUES
('acc-res-01', 'pkg-reseller-tanvir', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'clientone.com', 'clientone', 'Standard', 2048, 20480, 1, 'active', '2026-09-20 14:46:17'),
('acc-res-02', 'pkg-reseller-tanvir', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'clienttwo.org', 'clienttwo', 'Basic', 1024, 10240, 1, 'suspended', '2026-09-20 14:46:17'),
('acc-res-adm-01', 'pkg-reseller-admin', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'techvision.com.bd', 'techvis', 'Standard', 4096, 40960, 1, 'active', '2026-09-20 14:46:43'),
('acc-res-adm-02', 'pkg-reseller-admin', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'banglamart.com', 'banglamart', 'Business', 4096, 40960, 1, 'active', '2026-09-20 14:46:43');

-- --------------------------------------------------------

--
-- Table structure for table `reseller_packages`
--

CREATE TABLE `reseller_packages` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `service_id` varchar(36) DEFAULT NULL,
  `package_name` varchar(100) NOT NULL,
  `max_accounts` int(11) NOT NULL DEFAULT 25,
  `used_accounts` int(11) NOT NULL DEFAULT 0,
  `max_disk_mb` int(11) NOT NULL DEFAULT 50000,
  `used_disk_mb` int(11) NOT NULL DEFAULT 0,
  `max_bandwidth_mb` int(11) NOT NULL DEFAULT 500000,
  `used_bandwidth_mb` int(11) NOT NULL DEFAULT 0,
  `whm_username` varchar(64) DEFAULT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reseller_packages`
--

INSERT INTO `reseller_packages` (`id`, `user_id`, `service_id`, `package_name`, `max_accounts`, `used_accounts`, `max_disk_mb`, `used_disk_mb`, `max_bandwidth_mb`, `used_bandwidth_mb`, `whm_username`, `status`, `created_at`) VALUES
('pkg-reseller-admin', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'srv-reseller-admin', 'Reseller Ultra 50', 50, 2, 100000, 8500, 1000000, 45000, 'adminres', 'active', '2026-09-20 14:46:43'),
('pkg-reseller-tanvir', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'srv-reseller-tanvir', 'Reseller Pro 50', 25, 2, 50000, 4500, 500000, 32000, 'tanvirres', 'active', '2026-09-20 14:46:17');

-- --------------------------------------------------------

--
-- Table structure for table `servers`
--

CREATE TABLE `servers` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `hostname` varchar(255) NOT NULL,
  `ip_address` varchar(45) NOT NULL,
  `whm_username` varchar(64) NOT NULL DEFAULT 'root',
  `whm_api_token` text NOT NULL,
  `location` varchar(100) NOT NULL DEFAULT 'East Asia',
  `max_accounts` int(11) NOT NULL DEFAULT 500,
  `active_accounts` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `status` varchar(20) NOT NULL DEFAULT 'online',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `servers`
--

INSERT INTO `servers` (`id`, `name`, `hostname`, `ip_address`, `whm_username`, `whm_api_token`, `location`, `max_accounts`, `active_accounts`, `is_active`, `status`, `created_at`) VALUES
('7b78d268-2a58-4fed-b5df-1030615982a5', 'Azure AlmaLinux 9 Node 1', 'yesshost-cpanel.eastasia.cloudapp.azure.com', '20.205.120.22', 'root', 'INSVHR5CGF22G438OZO5675NO30PPR8A', 'East Asia (Tokyo / Hong Kong)', 500, 0, 1, 'online', '2026-09-18 00:05:07');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `server_id` varchar(36) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `domain` varchar(255) DEFAULT NULL,
  `cpanel_username` varchar(64) DEFAULT NULL,
  `package_name` varchar(100) DEFAULT NULL,
  `service_type` varchar(50) NOT NULL DEFAULT 'hosting',
  `billing_cycle` varchar(20) NOT NULL DEFAULT 'monthly',
  `price_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `start_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `expiry_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `suspended_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `suspension_reason` text DEFAULT NULL,
  `specs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`specs`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `user_id`, `server_id`, `name`, `domain`, `cpanel_username`, `package_name`, `service_type`, `billing_cycle`, `price_bdt`, `status`, `start_date`, `expiry_date`, `suspended_at`, `suspension_reason`, `specs`, `created_at`) VALUES
('12944891-af2a-402b-9cae-73c892a9af43', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '7b78d268-2a58-4fed-b5df-1030615982a5', 'Starter Shared Hosting', 'tanvirtech.com', 'tanvirte', NULL, 'shared', 'annually', 1500.00, 'active', '2026-09-17 18:49:30', '2027-09-17 18:49:30', '2026-09-20 14:04:31', NULL, NULL, '2026-09-18 00:49:30'),
('dom-test-001', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', NULL, 'tanvirtech.com', 'tanvirtech.com', NULL, NULL, 'domain', 'annually', 1150.00, 'active', '2026-09-20 14:15:56', '2027-09-20 14:15:56', '0000-00-00 00:00:00', NULL, '{\"0\":\"{\",\"1\":\"\\\"\",\"2\":\"0\",\"3\":\"\\\"\",\"4\":\":\",\"5\":\"\\\"\",\"6\":\"{\",\"7\":\"\\\"\",\"8\":\",\",\"9\":\"\\\"\",\"10\":\"1\",\"11\":\"\\\"\",\"12\":\":\",\"13\":\"\\\"\",\"14\":\"\\\\\",\"15\":\"\\\"\",\"16\":\"\\\"\",\"17\":\",\",\"18\":\"\\\"\",\"19\":\"2\",\"20\":\"\\\"\",\"21\":\":\",\"22\":\"\\\"\",\"23\":\"a\",\"24\":\"\\\"\",\"25\":\",\",\"26\":\"\\\"\",\"27\":\"3\",\"28\":\"\\\"\",\"29\":\":\",\"30\":\"\\\"\",\"31\":\"u\",\"32\":\"\\\"\",\"33\":\",\",\"34\":\"\\\"\",\"35\":\"4\",\"36\":\"\\\"\",\"37\":\":\",\"38\":\"\\\"\",\"39\":\"t\",\"40\":\"\\\"\",\"41\":\",\",\"42\":\"\\\"\",\"43\":\"5\",\"44\":\"\\\"\",\"45\":\":\",\"46\":\"\\\"\",\"47\":\"o\",\"48\":\"\\\"\",\"49\":\",\",\"50\":\"\\\"\",\"51\":\"6\",\"52\":\"\\\"\",\"53\":\":\",\"54\":\"\\\"\",\"55\":\"R\",\"56\":\"\\\"\",\"57\":\",\",\"58\":\"\\\"\",\"59\":\"7\",\"60\":\"\\\"\",\"61\":\":\",\"62\":\"\\\"\",\"63\":\"e\",\"64\":\"\\\"\",\"65\":\",\",\"66\":\"\\\"\",\"67\":\"8\",\"68\":\"\\\"\",\"69\":\":\",\"70\":\"\\\"\",\"71\":\"n\",\"72\":\"\\\"\",\"73\":\",\",\"74\":\"\\\"\",\"75\":\"9\",\"76\":\"\\\"\",\"77\":\":\",\"78\":\"\\\"\",\"79\":\"e\",\"80\":\"\\\"\",\"81\":\",\",\"82\":\"\\\"\",\"83\":\"1\",\"84\":\"0\",\"85\":\"\\\"\",\"86\":\":\",\"87\":\"\\\"\",\"88\":\"w\",\"89\":\"\\\"\",\"90\":\",\",\"91\":\"\\\"\",\"92\":\"1\",\"93\":\"1\",\"94\":\"\\\"\",\"95\":\":\",\"96\":\"\\\"\",\"97\":\"\\\\\",\"98\":\"\\\"\",\"99\":\"\\\"\",\"100\":\",\",\"101\":\"\\\"\",\"102\":\"1\",\"103\":\"2\",\"104\":\"\\\"\",\"105\":\":\",\"106\":\"\\\"\",\"107\":\":\",\"108\":\"\\\"\",\"109\":\",\",\"110\":\"\\\"\",\"111\":\"1\",\"112\":\"3\",\"113\":\"\\\"\",\"114\":\":\",\"115\":\"\\\"\",\"116\":\" \",\"117\":\"\\\"\",\"118\":\",\",\"119\":\"\\\"\",\"120\":\"1\",\"121\":\"4\",\"122\":\"\\\"\",\"123\":\":\",\"124\":\"\\\"\",\"125\":\"t\",\"126\":\"\\\"\",\"127\":\",\",\"128\":\"\\\"\",\"129\":\"1\",\"130\":\"5\",\"131\":\"\\\"\",\"132\":\":\",\"133\":\"\\\"\",\"134\":\"r\",\"135\":\"\\\"\",\"136\":\",\",\"137\":\"\\\"\",\"138\":\"1\",\"139\":\"6\",\"140\":\"\\\"\",\"141\":\":\",\"142\":\"\\\"\",\"143\":\"u\",\"144\":\"\\\"\",\"145\":\",\",\"146\":\"\\\"\",\"147\":\"1\",\"148\":\"7\",\"149\":\"\\\"\",\"150\":\":\",\"151\":\"\\\"\",\"152\":\"e\",\"153\":\"\\\"\",\"154\":\",\",\"155\":\"\\\"\",\"156\":\"1\",\"157\":\"8\",\"158\":\"\\\"\",\"159\":\":\",\"160\":\"\\\"\",\"161\":\",\",\"162\":\"\\\"\",\"163\":\",\",\"164\":\"\\\"\",\"165\":\"1\",\"166\":\"9\",\"167\":\"\\\"\",\"168\":\":\",\"169\":\"\\\"\",\"170\":\" \",\"171\":\"\\\"\",\"172\":\",\",\"173\":\"\\\"\",\"174\":\"2\",\"175\":\"0\",\"176\":\"\\\"\",\"177\":\":\",\"178\":\"\\\"\",\"179\":\"\\\\\",\"180\":\"\\\"\",\"181\":\"\\\"\",\"182\":\",\",\"183\":\"\\\"\",\"184\":\"2\",\"185\":\"1\",\"186\":\"\\\"\",\"187\":\":\",\"188\":\"\\\"\",\"189\":\"n\",\"190\":\"\\\"\",\"191\":\",\",\"192\":\"\\\"\",\"193\":\"2\",\"194\":\"2\",\"195\":\"\\\"\",\"196\":\":\",\"197\":\"\\\"\",\"198\":\"a\",\"199\":\"\\\"\",\"200\":\",\",\"201\":\"\\\"\",\"202\":\"2\",\"203\":\"3\",\"204\":\"\\\"\",\"205\":\":\",\"206\":\"\\\"\",\"207\":\"m\",\"208\":\"\\\"\",\"209\":\",\",\"210\":\"\\\"\",\"211\":\"2\",\"212\":\"4\",\"213\":\"\\\"\",\"214\":\":\",\"215\":\"\\\"\",\"216\":\"e\",\"217\":\"\\\"\",\"218\":\",\",\"219\":\"\\\"\",\"220\":\"2\",\"221\":\"5\",\"222\":\"\\\"\",\"223\":\":\",\"224\":\"\\\"\",\"225\":\"s\",\"226\":\"\\\"\",\"227\":\",\",\"228\":\"\\\"\",\"229\":\"2\",\"230\":\"6\",\"231\":\"\\\"\",\"232\":\":\",\"233\":\"\\\"\",\"234\":\"e\",\"235\":\"\\\"\",\"236\":\",\",\"237\":\"\\\"\",\"238\":\"2\",\"239\":\"7\",\"240\":\"\\\"\",\"241\":\":\",\"242\":\"\\\"\",\"243\":\"r\",\"244\":\"\\\"\",\"245\":\",\",\"246\":\"\\\"\",\"247\":\"2\",\"248\":\"8\",\"249\":\"\\\"\",\"250\":\":\",\"251\":\"\\\"\",\"252\":\"v\",\"253\":\"\\\"\",\"254\":\",\",\"255\":\"\\\"\",\"256\":\"2\",\"257\":\"9\",\"258\":\"\\\"\",\"259\":\":\",\"260\":\"\\\"\",\"261\":\"e\",\"262\":\"\\\"\",\"263\":\",\",\"264\":\"\\\"\",\"265\":\"3\",\"266\":\"0\",\"267\":\"\\\"\",\"268\":\":\",\"269\":\"\\\"\",\"270\":\"r\",\"271\":\"\\\"\",\"272\":\",\",\"273\":\"\\\"\",\"274\":\"3\",\"275\":\"1\",\"276\":\"\\\"\",\"277\":\":\",\"278\":\"\\\"\",\"279\":\"s\",\"280\":\"\\\"\",\"281\":\",\",\"282\":\"\\\"\",\"283\":\"3\",\"284\":\"2\",\"285\":\"\\\"\",\"286\":\":\",\"287\":\"\\\"\",\"288\":\"\\\\\",\"289\":\"\\\"\",\"290\":\"\\\"\",\"291\":\",\",\"292\":\"\\\"\",\"293\":\"3\",\"294\":\"3\",\"295\":\"\\\"\",\"296\":\":\",\"297\":\"\\\"\",\"298\":\":\",\"299\":\"\\\"\",\"300\":\",\",\"301\":\"\\\"\",\"302\":\"3\",\"303\":\"4\",\"304\":\"\\\"\",\"305\":\":\",\"306\":\"\\\"\",\"307\":\" \",\"308\":\"\\\"\",\"309\":\",\",\"310\":\"\\\"\",\"311\":\"3\",\"312\":\"5\",\"313\":\"\\\"\",\"314\":\":\",\"315\":\"\\\"\",\"316\":\"[\",\"317\":\"\\\"\",\"318\":\",\",\"319\":\"\\\"\",\"320\":\"3\",\"321\":\"6\",\"322\":\"\\\"\",\"323\":\":\",\"324\":\"\\\"\",\"325\":\"\\\\\",\"326\":\"\\\"\",\"327\":\"\\\"\",\"328\":\",\",\"329\":\"\\\"\",\"330\":\"3\",\"331\":\"7\",\"332\":\"\\\"\",\"333\":\":\",\"334\":\"\\\"\",\"335\":\"n\",\"336\":\"\\\"\",\"337\":\",\",\"338\":\"\\\"\",\"339\":\"3\",\"340\":\"8\",\"341\":\"\\\"\",\"342\":\":\",\"343\":\"\\\"\",\"344\":\"s\",\"345\":\"\\\"\",\"346\":\",\",\"347\":\"\\\"\",\"348\":\"3\",\"349\":\"9\",\"350\":\"\\\"\",\"351\":\":\",\"352\":\"\\\"\",\"353\":\"1\",\"354\":\"\\\"\",\"355\":\",\",\"356\":\"\\\"\",\"357\":\"4\",\"358\":\"0\",\"359\":\"\\\"\",\"360\":\":\",\"361\":\"\\\"\",\"362\":\".\",\"363\":\"\\\"\",\"364\":\",\",\"365\":\"\\\"\",\"366\":\"4\",\"367\":\"1\",\"368\":\"\\\"\",\"369\":\":\",\"370\":\"\\\"\",\"371\":\"y\",\"372\":\"\\\"\",\"373\":\",\",\"374\":\"\\\"\",\"375\":\"4\",\"376\":\"2\",\"377\":\"\\\"\",\"378\":\":\",\"379\":\"\\\"\",\"380\":\"e\",\"381\":\"\\\"\",\"382\":\",\",\"383\":\"\\\"\",\"384\":\"4\",\"385\":\"3\",\"386\":\"\\\"\",\"387\":\":\",\"388\":\"\\\"\",\"389\":\"s\",\"390\":\"\\\"\",\"391\":\",\",\"392\":\"\\\"\",\"393\":\"4\",\"394\":\"4\",\"395\":\"\\\"\",\"396\":\":\",\"397\":\"\\\"\",\"398\":\"s\",\"399\":\"\\\"\",\"400\":\",\",\"401\":\"\\\"\",\"402\":\"4\",\"403\":\"5\",\"404\":\"\\\"\",\"405\":\":\",\"406\":\"\\\"\",\"407\":\"h\",\"408\":\"\\\"\",\"409\":\",\",\"410\":\"\\\"\",\"411\":\"4\",\"412\":\"6\",\"413\":\"\\\"\",\"414\":\":\",\"415\":\"\\\"\",\"416\":\"o\",\"417\":\"\\\"\",\"418\":\",\",\"419\":\"\\\"\",\"420\":\"4\",\"421\":\"7\",\"422\":\"\\\"\",\"423\":\":\",\"424\":\"\\\"\",\"425\":\"s\",\"426\":\"\\\"\",\"427\":\",\",\"428\":\"\\\"\",\"429\":\"4\",\"430\":\"8\",\"431\":\"\\\"\",\"432\":\":\",\"433\":\"\\\"\",\"434\":\"t\",\"435\":\"\\\"\",\"436\":\",\",\"437\":\"\\\"\",\"438\":\"4\",\"439\":\"9\",\"440\":\"\\\"\",\"441\":\":\",\"442\":\"\\\"\",\"443\":\".\",\"444\":\"\\\"\",\"445\":\",\",\"446\":\"\\\"\",\"447\":\"5\",\"448\":\"0\",\"449\":\"\\\"\",\"450\":\":\",\"451\":\"\\\"\",\"452\":\"c\",\"453\":\"\\\"\",\"454\":\",\",\"455\":\"\\\"\",\"456\":\"5\",\"457\":\"1\",\"458\":\"\\\"\",\"459\":\":\",\"460\":\"\\\"\",\"461\":\"o\",\"462\":\"\\\"\",\"463\":\",\",\"464\":\"\\\"\",\"465\":\"5\",\"466\":\"2\",\"467\":\"\\\"\",\"468\":\":\",\"469\":\"\\\"\",\"470\":\"m\",\"471\":\"\\\"\",\"472\":\",\",\"473\":\"\\\"\",\"474\":\"5\",\"475\":\"3\",\"476\":\"\\\"\",\"477\":\":\",\"478\":\"\\\"\",\"479\":\"\\\\\",\"480\":\"\\\"\",\"481\":\"\\\"\",\"482\":\",\",\"483\":\"\\\"\",\"484\":\"5\",\"485\":\"4\",\"486\":\"\\\"\",\"487\":\":\",\"488\":\"\\\"\",\"489\":\",\",\"490\":\"\\\"\",\"491\":\",\",\"492\":\"\\\"\",\"493\":\"5\",\"494\":\"5\",\"495\":\"\\\"\",\"496\":\":\",\"497\":\"\\\"\",\"498\":\" \",\"499\":\"\\\"\",\"500\":\",\",\"501\":\"\\\"\",\"502\":\"5\",\"503\":\"6\",\"504\":\"\\\"\",\"505\":\":\",\"506\":\"\\\"\",\"507\":\"\\\\\",\"508\":\"\\\"\",\"509\":\"\\\"\",\"510\":\",\",\"511\":\"\\\"\",\"512\":\"5\",\"513\":\"7\",\"514\":\"\\\"\",\"515\":\":\",\"516\":\"\\\"\",\"517\":\"n\",\"518\":\"\\\"\",\"519\":\",\",\"520\":\"\\\"\",\"521\":\"5\",\"522\":\"8\",\"523\":\"\\\"\",\"524\":\":\",\"525\":\"\\\"\",\"526\":\"s\",\"527\":\"\\\"\",\"528\":\",\",\"529\":\"\\\"\",\"530\":\"5\",\"531\":\"9\",\"532\":\"\\\"\",\"533\":\":\",\"534\":\"\\\"\",\"535\":\"2\",\"536\":\"\\\"\",\"537\":\",\",\"538\":\"\\\"\",\"539\":\"6\",\"540\":\"0\",\"541\":\"\\\"\",\"542\":\":\",\"543\":\"\\\"\",\"544\":\".\",\"545\":\"\\\"\",\"546\":\",\",\"547\":\"\\\"\",\"548\":\"6\",\"549\":\"1\",\"550\":\"\\\"\",\"551\":\":\",\"552\":\"\\\"\",\"553\":\"y\",\"554\":\"\\\"\",\"555\":\",\",\"556\":\"\\\"\",\"557\":\"6\",\"558\":\"2\",\"559\":\"\\\"\",\"560\":\":\",\"561\":\"\\\"\",\"562\":\"e\",\"563\":\"\\\"\",\"564\":\",\",\"565\":\"\\\"\",\"566\":\"6\",\"567\":\"3\",\"568\":\"\\\"\",\"569\":\":\",\"570\":\"\\\"\",\"571\":\"s\",\"572\":\"\\\"\",\"573\":\",\",\"574\":\"\\\"\",\"575\":\"6\",\"576\":\"4\",\"577\":\"\\\"\",\"578\":\":\",\"579\":\"\\\"\",\"580\":\"s\",\"581\":\"\\\"\",\"582\":\",\",\"583\":\"\\\"\",\"584\":\"6\",\"585\":\"5\",\"586\":\"\\\"\",\"587\":\":\",\"588\":\"\\\"\",\"589\":\"h\",\"590\":\"\\\"\",\"591\":\",\",\"592\":\"\\\"\",\"593\":\"6\",\"594\":\"6\",\"595\":\"\\\"\",\"596\":\":\",\"597\":\"\\\"\",\"598\":\"o\",\"599\":\"\\\"\",\"600\":\",\",\"601\":\"\\\"\",\"602\":\"6\",\"603\":\"7\",\"604\":\"\\\"\",\"605\":\":\",\"606\":\"\\\"\",\"607\":\"s\",\"608\":\"\\\"\",\"609\":\",\",\"610\":\"\\\"\",\"611\":\"6\",\"612\":\"8\",\"613\":\"\\\"\",\"614\":\":\",\"615\":\"\\\"\",\"616\":\"t\",\"617\":\"\\\"\",\"618\":\",\",\"619\":\"\\\"\",\"620\":\"6\",\"621\":\"9\",\"622\":\"\\\"\",\"623\":\":\",\"624\":\"\\\"\",\"625\":\".\",\"626\":\"\\\"\",\"627\":\",\",\"628\":\"\\\"\",\"629\":\"7\",\"630\":\"0\",\"631\":\"\\\"\",\"632\":\":\",\"633\":\"\\\"\",\"634\":\"c\",\"635\":\"\\\"\",\"636\":\",\",\"637\":\"\\\"\",\"638\":\"7\",\"639\":\"1\",\"640\":\"\\\"\",\"641\":\":\",\"642\":\"\\\"\",\"643\":\"o\",\"644\":\"\\\"\",\"645\":\",\",\"646\":\"\\\"\",\"647\":\"7\",\"648\":\"2\",\"649\":\"\\\"\",\"650\":\":\",\"651\":\"\\\"\",\"652\":\"m\",\"653\":\"\\\"\",\"654\":\",\",\"655\":\"\\\"\",\"656\":\"7\",\"657\":\"3\",\"658\":\"\\\"\",\"659\":\":\",\"660\":\"\\\"\",\"661\":\"\\\\\",\"662\":\"\\\"\",\"663\":\"\\\"\",\"664\":\",\",\"665\":\"\\\"\",\"666\":\"7\",\"667\":\"4\",\"668\":\"\\\"\",\"669\":\":\",\"670\":\"\\\"\",\"671\":\"]\",\"672\":\"\\\"\",\"673\":\",\",\"674\":\"\\\"\",\"675\":\"7\",\"676\":\"5\",\"677\":\"\\\"\",\"678\":\":\",\"679\":\"\\\"\",\"680\":\"}\",\"681\":\"\\\"\",\"682\":\",\",\"683\":\"\\\"\",\"684\":\"n\",\"685\":\"a\",\"686\":\"m\",\"687\":\"e\",\"688\":\"s\",\"689\":\"e\",\"690\":\"r\",\"691\":\"v\",\"692\":\"e\",\"693\":\"r\",\"694\":\"s\",\"695\":\"\\\"\",\"696\":\":\",\"697\":\"[\",\"698\":\"\\\"\",\"699\":\"n\",\"700\":\"s\",\"701\":\"1\",\"702\":\".\",\"703\":\"y\",\"704\":\"e\",\"705\":\"s\",\"706\":\"s\",\"707\":\"h\",\"708\":\"o\",\"709\":\"s\",\"710\":\"t\",\"711\":\".\",\"712\":\"c\",\"713\":\"o\",\"714\":\"m\",\"715\":\"\\\"\",\"716\":\",\",\"717\":\"\\\"\",\"718\":\"n\",\"719\":\"s\",\"720\":\"2\",\"721\":\".\",\"722\":\"c\",\"723\":\"l\",\"724\":\"o\",\"725\":\"u\",\"726\":\"d\",\"727\":\"f\",\"728\":\"l\",\"729\":\"a\",\"730\":\"r\",\"731\":\"e\",\"732\":\".\",\"733\":\"c\",\"734\":\"o\",\"735\":\"m\",\"736\":\"\\\"\",\"737\":\"]\",\"738\":\"}\",\"autoRenew\":false}', '2026-09-20 14:15:56'),
('srv-reseller-admin', 'd905be87-dcee-4197-a21d-a7b204fc214d', '7b78d268-2a58-4fed-b5df-1030615982a5', 'Reseller Hosting Ultra', 'reseller.yesshost.com', 'adminres', 'Reseller Ultra 50', 'reseller', 'monthly', 3500.00, 'active', '2026-09-20 14:46:43', '2026-10-20 14:46:43', '0000-00-00 00:00:00', NULL, NULL, '2026-09-20 14:46:43'),
('srv-reseller-tanvir', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '7b78d268-2a58-4fed-b5df-1030615982a5', 'Pro Reseller Hosting', 'reseller.tanvirtech.com', 'tanvirres', 'Reseller Pro 50', 'reseller', 'monthly', 2500.00, 'active', '2026-09-20 14:46:17', '2026-10-20 14:46:17', '0000-00-00 00:00:00', NULL, NULL, '2026-09-20 14:46:17');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(36) NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `expires` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `support_pins`
--

CREATE TABLE `support_pins` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `pin` varchar(10) NOT NULL,
  `expires_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_pins`
--

INSERT INTO `support_pins` (`id`, `user_id`, `pin`, `expires_at`, `created_at`, `updated_at`) VALUES
('abcc1077-3cb3-4a1b-83f0-64c2595dd77f', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', '175857', '2026-09-20 09:14:02', '2026-09-20 14:12:41', '2026-09-20 14:14:02');

-- --------------------------------------------------------

--
-- Table structure for table `support_tickets`
--

CREATE TABLE `support_tickets` (
  `id` varchar(36) NOT NULL,
  `ticket_number` varchar(50) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `service_id` varchar(36) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `department` varchar(50) NOT NULL DEFAULT 'technical',
  `priority` varchar(20) NOT NULL DEFAULT 'medium',
  `status` varchar(20) NOT NULL DEFAULT 'open',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `first_response_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `support_tickets`
--

INSERT INTO `support_tickets` (`id`, `ticket_number`, `user_id`, `service_id`, `subject`, `department`, `priority`, `status`, `created_at`, `first_response_at`) VALUES
('tick-0001', 'TICK-9081', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', NULL, 'Database connection timeout issue on NVMe instance', 'technical', 'urgent', 'open', '2026-09-20 08:21:35', NULL),
('tick-0002', 'TICK-9082', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', NULL, 'Nameserver propagation query for .com.bd domain', 'domains', 'medium', 'open', '2026-09-20 06:56:35', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` varchar(36) NOT NULL,
  `client_name` varchar(100) NOT NULL,
  `company` varchar(100) DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT 5,
  `comment` text NOT NULL,
  `avatar_url` text DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `themes`
--

CREATE TABLE `themes` (
  `id` varchar(36) NOT NULL,
  `seller_user_id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'business',
  `price_bdt` decimal(10,2) NOT NULL DEFAULT 0.00,
  `preview_url` text DEFAULT NULL,
  `file_path` text DEFAULT NULL,
  `screenshots` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`screenshots`)),
  `approval_status` varchar(20) NOT NULL DEFAULT 'pending',
  `commission_rate` decimal(5,2) NOT NULL DEFAULT 30.00,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `themes`
--

INSERT INTO `themes` (`id`, `seller_user_id`, `name`, `slug`, `category`, `price_bdt`, `preview_url`, `file_path`, `screenshots`, `approval_status`, `commission_rate`, `is_active`, `created_at`) VALUES
('8d13e0f2-2a28-42ba-a0b5-4cee8cd257c1', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'SaaS Modern Landing', 'saas-modern-landing', 'business', 1200.00, NULL, NULL, NULL, 'pending', 30.00, 0, '2026-09-20 14:25:08');

-- --------------------------------------------------------

--
-- Table structure for table `theme_orders`
--

CREATE TABLE `theme_orders` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `theme_id` varchar(36) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'completed',
  `payment_method` varchar(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `theme_seller_payouts`
--

CREATE TABLE `theme_seller_payouts` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `method` varchar(50) NOT NULL,
  `account_details` text NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'requested',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `theme_seller_profiles`
--

CREATE TABLE `theme_seller_profiles` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `display_name` varchar(255) NOT NULL,
  `slug` varchar(100) NOT NULL,
  `logo_url` text DEFAULT NULL,
  `bio_bn` text DEFAULT NULL,
  `bio_en` text DEFAULT NULL,
  `website` varchar(300) DEFAULT NULL,
  `is_public` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ticket_replies`
--

CREATE TABLE `ticket_replies` (
  `id` varchar(36) NOT NULL,
  `ticket_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `message` text NOT NULL,
  `attachments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`attachments`)),
  `is_staff` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ticket_replies`
--

INSERT INTO `ticket_replies` (`id`, `ticket_id`, `user_id`, `message`, `attachments`, `is_staff`, `created_at`) VALUES
('c214c97d-f849-41cb-b089-0ecd0d5ac1ef', 'tick-0001', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'Thank you for looking into this. The issue happens mostly during peak hours around 8 PM.', NULL, 0, '2026-09-20 14:11:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `image` text DEFAULT NULL,
  `password_hash` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified`, `image`, `password_hash`, `created_at`, `updated_at`) VALUES
('12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'Tanvir Ahmed', 'customer@yesshost.com', '2026-09-17 18:05:07', NULL, '$2a$12$AAi/8uoopqh/wOInspv0Q.UG0d6Ifvm162uF0ssa5X3n2HR0gD6zK', '2026-09-18 00:05:07', '2026-09-18 00:05:07'),
('333fe884-7c99-43cc-9e25-a0ca397653f5', 'Support Agent 01', 'agent@yesshost.com', '2026-09-17 18:05:06', NULL, '$2a$12$l33ezy/7X/Fc2cQ9m63Ds.Z8dUgFNHwt1dxVgqWZMYduN23CUix8C', '2026-09-18 00:05:06', '2026-09-18 00:05:06'),
('d905be87-dcee-4197-a21d-a7b204fc214d', 'Super Administrator', 'admin@yesshost.com', '2026-09-17 18:05:06', NULL, '$2a$12$gOzY0Ykrzdgl1PGD.5PDsOWQh2m5VXTmmfERrn1X5FP8ptvmomk9u', '2026-09-18 00:05:06', '2026-09-18 00:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `user_permissions`
--

CREATE TABLE `user_permissions` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `permission` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `role` varchar(50) NOT NULL DEFAULT 'user',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `user_id`, `role`, `created_at`) VALUES
('71b901b2-ed52-43b3-a73d-a938d06162e4', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'user', '2026-09-18 00:05:07'),
('82083f2e-c234-4592-aa9a-391b245336e7', '333fe884-7c99-43cc-9e25-a0ca397653f5', 'call_center', '2026-09-18 00:05:06'),
('ebd0430d-e71b-4377-86ff-9965e46bd609', 'd905be87-dcee-4197-a21d-a7b204fc214d', 'admin', '2026-09-18 00:05:06');

-- --------------------------------------------------------

--
-- Table structure for table `verification_tokens`
--

CREATE TABLE `verification_tokens` (
  `identifier` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `expires` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wallet_transactions`
--

CREATE TABLE `wallet_transactions` (
  `id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `type` varchar(20) NOT NULL,
  `amount_bdt` decimal(10,2) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'completed',
  `payment_method` varchar(50) DEFAULT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wallet_transactions`
--

INSERT INTO `wallet_transactions` (`id`, `user_id`, `type`, `amount_bdt`, `status`, `payment_method`, `transaction_id`, `description`, `created_at`) VALUES
('370cf6e6-f7f4-48f8-8ac5-4458f6ebfa62', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'payment', 500.00, 'completed', 'wallet', 'WLT_3d5ca1d9_1789884438410', 'Payment for Invoice #INV-2026-0003', '2026-09-20 06:07:18'),
('919f1bc4-43a3-4581-a2a8-0f8bd7712386', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'deposit', 5000.00, 'completed', 'bKash', 'BKSEED998877', 'Initial wallet balance deposit', '2026-09-18 00:05:07'),
('ba99aece-211e-4781-a72f-4e21bfa01125', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'deposit', 500.00, 'completed', NULL, NULL, 'Wallet top-up via bKash (TrxID: TESTBKASH99)', '2026-09-20 14:09:32'),
('c30db54f-9808-4d41-b03a-723d9d9aa0b9', '12ef2175-d2e5-43a0-81bd-aa6fdc0750f3', 'payment', 350.00, 'completed', 'wallet', 'WLT_e02a41d8_1789692580261', 'Payment for Invoice #INV-2026-0002', '2026-09-18 00:49:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `accounts_provider_provider_account_id_unique` (`provider`,`provider_account_id`),
  ADD KEY `accounts_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `affiliate_clicks`
--
ALTER TABLE `affiliate_clicks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `affiliate_clicks_referrer_user_id_users_id_fk` (`referrer_user_id`);

--
-- Indexes for table `affiliate_commissions`
--
ALTER TABLE `affiliate_commissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `affiliate_commissions_referral_id_affiliate_referrals_id_fk` (`referral_id`),
  ADD KEY `affiliate_commissions_invoice_id_invoices_id_fk` (`invoice_id`),
  ADD KEY `affiliate_commissions_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `affiliate_payouts`
--
ALTER TABLE `affiliate_payouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `affiliate_payouts_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `affiliate_profiles`
--
ALTER TABLE `affiliate_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `affiliate_profiles_user_id_unique` (`user_id`),
  ADD UNIQUE KEY `affiliate_profiles_referral_code_unique` (`referral_code`);

--
-- Indexes for table `affiliate_referrals`
--
ALTER TABLE `affiliate_referrals`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `affiliate_referrals_referred_user_id_unique` (`referred_user_id`),
  ADD KEY `affiliate_referrals_referrer_user_id_users_id_fk` (`referrer_user_id`);

--
-- Indexes for table `call_history`
--
ALTER TABLE `call_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `call_history_chat_id_live_chats_id_fk` (`chat_id`);

--
-- Indexes for table `chat_rooms`
--
ALTER TABLE `chat_rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat_room_members`
--
ALTER TABLE `chat_room_members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chat_room_members_room_id_chat_rooms_id_fk` (`room_id`),
  ADD KEY `chat_room_members_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `chat_room_messages`
--
ALTER TABLE `chat_room_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chat_room_messages_room_id_chat_rooms_id_fk` (`room_id`),
  ADD KEY `chat_room_messages_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `coupons_code_unique` (`code`);

--
-- Indexes for table `domain_pricing`
--
ALTER TABLE `domain_pricing`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `domain_pricing_tld_unique` (`tld`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `invoices_invoice_number_unique` (`invoice_number`),
  ADD UNIQUE KEY `share_token` (`share_token`),
  ADD KEY `invoices_user_id_users_id_fk` (`user_id`),
  ADD KEY `invoices_service_id_services_id_fk` (`service_id`);

--
-- Indexes for table `kb_articles`
--
ALTER TABLE `kb_articles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kb_articles_slug_unique` (`slug`),
  ADD KEY `kb_articles_category_id_kb_categories_id_fk` (`category_id`);

--
-- Indexes for table `kb_categories`
--
ALTER TABLE `kb_categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `kb_categories_slug_unique` (`slug`);

--
-- Indexes for table `live_chats`
--
ALTER TABLE `live_chats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `live_chats_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `live_chat_messages`
--
ALTER TABLE `live_chat_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `live_chat_messages_chat_id_live_chats_id_fk` (`chat_id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `operating_expenses`
--
ALTER TABLE `operating_expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_order_number_unique` (`order_number`),
  ADD KEY `orders_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_orders_id_fk` (`order_id`);

--
-- Indexes for table `payment_events`
--
ALTER TABLE `payment_events`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_events_gateway_transaction_id_unique` (`gateway`,`transaction_id`),
  ADD KEY `payment_events_invoice_id_invoices_id_fk` (`invoice_id`),
  ADD KEY `payment_events_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `payment_gateway_settings`
--
ALTER TABLE `payment_gateway_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `payment_gateway_settings_gateway_unique` (`gateway`);

--
-- Indexes for table `pricing_plans`
--
ALTER TABLE `pricing_plans`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `pricing_plans_slug_unique` (`slug`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profiles_user_id_unique` (`user_id`);

--
-- Indexes for table `reseller_accounts`
--
ALTER TABLE `reseller_accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reseller_accounts_reseller_package_id_reseller_packages_id_fk` (`reseller_package_id`),
  ADD KEY `reseller_accounts_reseller_user_id_users_id_fk` (`reseller_user_id`);

--
-- Indexes for table `reseller_packages`
--
ALTER TABLE `reseller_packages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reseller_packages_user_id_users_id_fk` (`user_id`),
  ADD KEY `reseller_packages_service_id_services_id_fk` (`service_id`);

--
-- Indexes for table `servers`
--
ALTER TABLE `servers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `services_user_id_users_id_fk` (`user_id`),
  ADD KEY `services_server_id_servers_id_fk` (`server_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sessions_session_token_unique` (`session_token`),
  ADD KEY `sessions_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `support_pins`
--
ALTER TABLE `support_pins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- Indexes for table `support_tickets`
--
ALTER TABLE `support_tickets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `support_tickets_ticket_number_unique` (`ticket_number`),
  ADD KEY `support_tickets_user_id_users_id_fk` (`user_id`),
  ADD KEY `support_tickets_service_id_services_id_fk` (`service_id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `themes`
--
ALTER TABLE `themes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `themes_slug_unique` (`slug`),
  ADD KEY `themes_seller_user_id_users_id_fk` (`seller_user_id`);

--
-- Indexes for table `theme_orders`
--
ALTER TABLE `theme_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `theme_orders_user_id_users_id_fk` (`user_id`),
  ADD KEY `theme_orders_theme_id_themes_id_fk` (`theme_id`);

--
-- Indexes for table `theme_seller_payouts`
--
ALTER TABLE `theme_seller_payouts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `theme_seller_payouts_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `theme_seller_profiles`
--
ALTER TABLE `theme_seller_profiles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`user_id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `ticket_replies`
--
ALTER TABLE `ticket_replies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ticket_replies_ticket_id_support_tickets_id_fk` (`ticket_id`),
  ADD KEY `ticket_replies_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_permissions_user_id_users_id_fk` (`user_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_roles_user_id_role_unique` (`user_id`,`role`);

--
-- Indexes for table `verification_tokens`
--
ALTER TABLE `verification_tokens`
  ADD PRIMARY KEY (`identifier`,`token`);

--
-- Indexes for table `wallet_transactions`
--
ALTER TABLE `wallet_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `wallet_transactions_user_id_users_id_fk` (`user_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `accounts`
--
ALTER TABLE `accounts`
  ADD CONSTRAINT `accounts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `affiliate_clicks`
--
ALTER TABLE `affiliate_clicks`
  ADD CONSTRAINT `affiliate_clicks_referrer_user_id_users_id_fk` FOREIGN KEY (`referrer_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `affiliate_commissions`
--
ALTER TABLE `affiliate_commissions`
  ADD CONSTRAINT `affiliate_commissions_invoice_id_invoices_id_fk` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `affiliate_commissions_referral_id_affiliate_referrals_id_fk` FOREIGN KEY (`referral_id`) REFERENCES `affiliate_referrals` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `affiliate_commissions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `affiliate_payouts`
--
ALTER TABLE `affiliate_payouts`
  ADD CONSTRAINT `affiliate_payouts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `affiliate_profiles`
--
ALTER TABLE `affiliate_profiles`
  ADD CONSTRAINT `affiliate_profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `affiliate_referrals`
--
ALTER TABLE `affiliate_referrals`
  ADD CONSTRAINT `affiliate_referrals_referred_user_id_users_id_fk` FOREIGN KEY (`referred_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `affiliate_referrals_referrer_user_id_users_id_fk` FOREIGN KEY (`referrer_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `call_history`
--
ALTER TABLE `call_history`
  ADD CONSTRAINT `call_history_chat_id_live_chats_id_fk` FOREIGN KEY (`chat_id`) REFERENCES `live_chats` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `chat_room_members`
--
ALTER TABLE `chat_room_members`
  ADD CONSTRAINT `chat_room_members_room_id_chat_rooms_id_fk` FOREIGN KEY (`room_id`) REFERENCES `chat_rooms` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `chat_room_members_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `chat_room_messages`
--
ALTER TABLE `chat_room_messages`
  ADD CONSTRAINT `chat_room_messages_room_id_chat_rooms_id_fk` FOREIGN KEY (`room_id`) REFERENCES `chat_rooms` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `chat_room_messages_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `invoices_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `kb_articles`
--
ALTER TABLE `kb_articles`
  ADD CONSTRAINT `kb_articles_category_id_kb_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `kb_categories` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `live_chats`
--
ALTER TABLE `live_chats`
  ADD CONSTRAINT `live_chats_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION;

--
-- Constraints for table `live_chat_messages`
--
ALTER TABLE `live_chat_messages`
  ADD CONSTRAINT `live_chat_messages_chat_id_live_chats_id_fk` FOREIGN KEY (`chat_id`) REFERENCES `live_chats` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_orders_id_fk` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `payment_events`
--
ALTER TABLE `payment_events`
  ADD CONSTRAINT `payment_events_invoice_id_invoices_id_fk` FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `payment_events_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `reseller_accounts`
--
ALTER TABLE `reseller_accounts`
  ADD CONSTRAINT `reseller_accounts_reseller_package_id_reseller_packages_id_fk` FOREIGN KEY (`reseller_package_id`) REFERENCES `reseller_packages` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `reseller_accounts_reseller_user_id_users_id_fk` FOREIGN KEY (`reseller_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `reseller_packages`
--
ALTER TABLE `reseller_packages`
  ADD CONSTRAINT `reseller_packages_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `reseller_packages_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `services_server_id_servers_id_fk` FOREIGN KEY (`server_id`) REFERENCES `servers` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `services_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `support_pins`
--
ALTER TABLE `support_pins`
  ADD CONSTRAINT `fk_support_pins_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `support_tickets`
--
ALTER TABLE `support_tickets`
  ADD CONSTRAINT `support_tickets_service_id_services_id_fk` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`) ON DELETE SET NULL ON UPDATE NO ACTION,
  ADD CONSTRAINT `support_tickets_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `themes`
--
ALTER TABLE `themes`
  ADD CONSTRAINT `themes_seller_user_id_users_id_fk` FOREIGN KEY (`seller_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `theme_orders`
--
ALTER TABLE `theme_orders`
  ADD CONSTRAINT `theme_orders_theme_id_themes_id_fk` FOREIGN KEY (`theme_id`) REFERENCES `themes` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `theme_orders_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `theme_seller_payouts`
--
ALTER TABLE `theme_seller_payouts`
  ADD CONSTRAINT `theme_seller_payouts_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `theme_seller_profiles`
--
ALTER TABLE `theme_seller_profiles`
  ADD CONSTRAINT `fk_theme_seller_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `ticket_replies`
--
ALTER TABLE `ticket_replies`
  ADD CONSTRAINT `ticket_replies_ticket_id_support_tickets_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `support_tickets` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `ticket_replies_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `user_permissions`
--
ALTER TABLE `user_permissions`
  ADD CONSTRAINT `user_permissions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `wallet_transactions`
--
ALTER TABLE `wallet_transactions`
  ADD CONSTRAINT `wallet_transactions_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
