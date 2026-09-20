import { db } from "./index";
import * as schema from "./schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";

async function seed() {
  console.log("🌱 Starting Yess Host Database Seed...");

  // 1. Superadmin User
  const adminPassword = await bcrypt.hash("Admin@123456", 12);
  const existingAdmin = await db.query.users.findFirst({
    where: eq(schema.users.email, "admin@yesshost.com"),
  });

  let adminId = existingAdmin?.id;
  if (!existingAdmin) {
    adminId = crypto.randomUUID();
    await db.insert(schema.users).values({
      id: adminId,
      name: "Super Administrator",
      email: "admin@yesshost.com",
      passwordHash: adminPassword,
      emailVerified: new Date(),
    });

    await db.insert(schema.profiles).values({
      id: crypto.randomUUID(),
      userId: adminId,
      fullName: "Super Administrator",
      phone: "+8801700000001",
      city: "Dhaka",
      country: "Bangladesh",
      companyName: "Yess Host Inc.",
      supportPin: "739201",
    });

    await db.insert(schema.userRoles).values({
      id: crypto.randomUUID(),
      userId: adminId,
      role: "admin",
    });
    console.log("✅ Created Superadmin: admin@yesshost.com");
  }

  // 2. Call Center Agent
  const agentPassword = await bcrypt.hash("Agent@123456", 12);
  const existingAgent = await db.query.users.findFirst({
    where: eq(schema.users.email, "agent@yesshost.com"),
  });

  let agentId = existingAgent?.id;
  if (!existingAgent) {
    agentId = crypto.randomUUID();
    await db.insert(schema.users).values({
      id: agentId,
      name: "Support Agent 01",
      email: "agent@yesshost.com",
      passwordHash: agentPassword,
      emailVerified: new Date(),
    });

    await db.insert(schema.profiles).values({
      id: crypto.randomUUID(),
      userId: agentId,
      fullName: "Support Specialist",
      phone: "+8801700000002",
      city: "Dhaka",
      country: "Bangladesh",
      supportPin: "482019",
    });

    await db.insert(schema.userRoles).values({
      id: crypto.randomUUID(),
      userId: agentId,
      role: "call_center",
    });
    console.log("✅ Created Support Agent: agent@yesshost.com");
  }

  // 3. Customer
  const customerPassword = await bcrypt.hash("Customer@123456", 12);
  const existingCustomer = await db.query.users.findFirst({
    where: eq(schema.users.email, "customer@yesshost.com"),
  });

  let customerId = existingCustomer?.id;
  if (!existingCustomer) {
    customerId = crypto.randomUUID();
    await db.insert(schema.users).values({
      id: customerId,
      name: "Tanvir Ahmed",
      email: "customer@yesshost.com",
      passwordHash: customerPassword,
      emailVerified: new Date(),
    });

    await db.insert(schema.profiles).values({
      id: crypto.randomUUID(),
      userId: customerId,
      fullName: "Tanvir Ahmed",
      phone: "+8801811223344",
      city: "Chittagong",
      country: "Bangladesh",
      companyName: "Bengal Tech Labs",
      supportPin: "518392",
    });

    await db.insert(schema.userRoles).values({
      id: crypto.randomUUID(),
      userId: customerId,
      role: "user",
    });

    await db.insert(schema.walletTransactions).values({
      id: crypto.randomUUID(),
      userId: customerId,
      type: "deposit",
      amountBdt: "5000.00",
      status: "completed",
      paymentMethod: "bKash",
      transactionId: "BKSEED998877",
      description: "Initial wallet balance deposit",
    });

    console.log("✅ Created Customer: customer@yesshost.com (Wallet: ৳5,000)");
  }

  // 4. Live Azure AlmaLinux WHM Server Node
  const existingServer = await db.query.servers.findFirst({
    where: eq(schema.servers.hostname, "yesshost-cpanel.eastasia.cloudapp.azure.com"),
  });

  if (!existingServer) {
    await db.insert(schema.servers).values({
      id: crypto.randomUUID(),
      name: "Azure AlmaLinux 9 Node 1",
      hostname: "yesshost-cpanel.eastasia.cloudapp.azure.com",
      ipAddress: "20.205.120.22",
      whmUsername: "root",
      whmApiToken: "INSVHR5CGF22G438OZO5675NO30PPR8A",
      location: "East Asia (Tokyo / Hong Kong)",
      maxAccounts: 500,
      activeAccounts: 0,
      isActive: true,
      status: "online",
    });
    console.log("✅ Registered Live Azure WHM Server: yesshost-cpanel.eastasia.cloudapp.azure.com");
  }

  // 5. Pricing Plans with WHM package mapping
  const plans = [
    {
      name: "Starter Shared",
      slug: "starter-shared",
      whmPackageName: "PH_1GB",
      category: "shared",
      priceBdt: "150.00",
      annualPriceBdt: "1500.00",
      features: ["1 GB NVMe Storage", "50 GB Bandwidth", "1 Website", "Free SSL", "cPanel Access", "Daily Backup"],
      isFeatured: false,
    },
    {
      name: "Standard Shared",
      slug: "standard-shared",
      whmPackageName: "PRO_5GB",
      category: "shared",
      priceBdt: "350.00",
      annualPriceBdt: "3500.00",
      features: ["5 GB NVMe Storage", "Unlimited Bandwidth", "3 Websites", "Free SSL", "cPanel Access", "2x CPU & RAM"],
      isFeatured: true,
    },
    {
      name: "Business Cloud",
      slug: "business-cloud",
      whmPackageName: "BIZ_20GB",
      category: "cloud",
      priceBdt: "750.00",
      annualPriceBdt: "7500.00",
      features: ["20 GB NVMe Storage", "Unlimited Bandwidth", "Unlimited Websites", "Free SSL & CDN", "Dedicated IP", "Priority Support"],
      isFeatured: false,
    },
    {
      name: "Reseller Pro",
      slug: "reseller-pro",
      whmPackageName: "RESELLER_50GB",
      category: "reseller",
      priceBdt: "1500.00",
      annualPriceBdt: "15000.00",
      features: ["50 GB NVMe Storage", "500 GB Bandwidth", "25 cPanel Accounts", "WHM Reseller Access", "White-label Nameservers"],
      isFeatured: false,
    },
  ];

  for (const plan of plans) {
    const existingPlan = await db.query.pricingPlans.findFirst({
      where: eq(schema.pricingPlans.slug, plan.slug),
    });
    if (!existingPlan) {
      await db.insert(schema.pricingPlans).values({
        id: crypto.randomUUID(),
        ...plan,
      });
    }
  }
  console.log("✅ Seeded 4 Hosting Pricing Plans with WHM package mappings");

  // 6. Domain Pricing
  const domains = [
    { tld: ".com", registrationPriceBdt: "1250.00", renewalPriceBdt: "1450.00", transferPriceBdt: "1250.00", minYears: 1 },
    { tld: ".net", registrationPriceBdt: "1350.00", renewalPriceBdt: "1550.00", transferPriceBdt: "1350.00", minYears: 1 },
    { tld: ".org", registrationPriceBdt: "1400.00", renewalPriceBdt: "1600.00", transferPriceBdt: "1400.00", minYears: 1 },
    { tld: ".com.bd", registrationPriceBdt: "1800.00", renewalPriceBdt: "1800.00", transferPriceBdt: "0.00", minYears: 2 },
    { tld: ".xyz", registrationPriceBdt: "450.00", renewalPriceBdt: "1200.00", transferPriceBdt: "1100.00", minYears: 1 },
  ];

  for (const dom of domains) {
    const existingDom = await db.query.domainPricing.findFirst({
      where: eq(schema.domainPricing.tld, dom.tld),
    });
    if (!existingDom) {
      await db.insert(schema.domainPricing).values({
        id: crypto.randomUUID(),
        ...dom,
      });
    }
  }
  console.log("✅ Seeded Domain Pricing table");

  // 7. Payment Gateway Settings
  const gateways = [
    { gateway: "bkash", enabled: true, isSandbox: true, credentials: { username: "sandbox", appKey: "sandbox_key" } },
    { gateway: "sslcommerz", enabled: true, isSandbox: true, credentials: { storeId: "yesshost_test", storePass: "test_pass" } },
    { gateway: "wallet", enabled: true, isSandbox: false, credentials: {} },
  ];

  for (const gw of gateways) {
    const existingGw = await db.query.paymentGatewaySettings.findFirst({
      where: eq(schema.paymentGatewaySettings.gateway, gw.gateway),
    });
    if (!existingGw) {
      await db.insert(schema.paymentGatewaySettings).values({
        id: crypto.randomUUID(),
        ...gw,
      });
    }
  }
  console.log("✅ Seeded Payment Gateway Settings");

  // 8. FAQs
  const sampleFaqs = [
    {
      questionEn: "How quickly will my cPanel account be active after payment?",
      questionBn: "পেমেন্টের পর আমার cPanel অ্যাকাউন্ট কত দ্রুত সক্রিয় হবে?",
      answerEn: "Instantly! As soon as your bKash, SSLCommerz, or Wallet payment is confirmed, our automated WHM provisioner creates your cPanel account within 10 seconds.",
      answerBn: "তাত্ক্ষণিকভাবে! আপনার বিকাশ, এসএসএলকমার্স অথবা ওয়ালেট পেমেন্ট নিশ্চিত হওয়ার সাথে সাথে আমাদের স্বয়ংক্রিয় WHM সিস্টেম ১০ সেকেন্ডের মধ্যে cPanel তৈরি করে দেয়।",
      category: "hosting",
      sortOrder: 1,
    },
    {
      questionEn: "How do I log in to cPanel without typing my password?",
      questionBn: "পাসওয়ার্ড টাইপ না করে আমি কীভাবে cPanel এ লগইন করব?",
      answerEn: "From your Yess Host Client Dashboard, click the 'Log in to cPanel' button on your active service card for instant 1-Click Single Sign-On.",
      answerBn: "আপনার ইয়েস হোস্ট ক্লায়েন্ট ড্যাশবোর্ডে গিয়ে আপনার সক্রিয় সার্ভিসের কার্ড থেকে 'Log in to cPanel' বাটনে ক্লিক করলেই ১-ক্লিকে সরাসরি cPanel এ প্রবেশ করতে পারবেন।",
      category: "hosting",
      sortOrder: 2,
    },
  ];

  for (const faq of sampleFaqs) {
    await db.insert(schema.faqs).values({
      id: crypto.randomUUID(),
      ...faq,
    });
  }
  console.log("✅ Seeded FAQs");

  // 9. Sample Customer Hosting Service & Invoices
  if (customerId) {
    const existingService = await db.query.services.findFirst({
      where: eq(schema.services.userId, customerId),
    });

  if (!existingService) {
    const server = await db.query.servers.findFirst();
    const plan = await db.query.pricingPlans.findFirst({
      where: eq(schema.pricingPlans.slug, "starter-shared"),
    });

    if (server && plan) {
      const serviceId = crypto.randomUUID();
      const now = new Date();
      const nextYear = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);

      await db.insert(schema.services).values({
        id: serviceId,
        userId: customerId,
        serverId: server.id,
        packageName: plan.name,
        name: "Starter Shared Hosting",
        domain: "tanvirtech.com",
        serviceType: "hosting",
        billingCycle: "annually",
        priceBdt: plan.annualPriceBdt || "1500.00",
        status: "active",
        cpanelUsername: "tanvirtech",
        startDate: now,
        expiryDate: nextYear,
        specs: {
          serverIp: server.ipAddress,
        },
      });

      await db.insert(schema.invoices).values({
        id: crypto.randomUUID(),
        userId: customerId,
        serviceId: serviceId,
        invoiceNumber: "INV-2026-0001",
        amountBdt: "1500.00",
        status: "paid",
        paidAt: now,
        paymentMethod: "bKash",
        dueDate: now,
        description: "Annual Subscription - Starter Shared Hosting (tanvirtech.com)",
      });

      await db.insert(schema.invoices).values({
        id: crypto.randomUUID(),
        userId: customerId,
        serviceId: serviceId,
        invoiceNumber: "INV-2026-0002",
        amountBdt: "350.00",
        status: "unpaid",
        dueDate: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
        description: "Addon - Dedicated SSL & Backup Setup",
      });

      console.log("✅ Seeded Sample Customer Active Service & Invoices (Paid & Unpaid)");
    }
  }
  }

  console.log("🎉 Database seeding completed successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
