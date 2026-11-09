"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Share2, Award, ArrowRight, ShieldCheck, Check, Clock, Wallet, HelpCircle } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function AffiliatePage() {
  const { user } = useAuth();
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const steps = [
    {
      step: "01",
      icon: Users,
      titleBn: "অ্যাকাউন্ট তৈরি করুন",
      titleEn: "Create Free Account",
      descBn: "১ মিনিটে সম্পূর্ণ ফ্রিতে আপনার ক্লায়েন্ট অ্যাকাউন্ট খুলুন বা লগইন করুন। কোনো অগ্রিম ফি নেই।",
      descEn: "Sign up in under 60 seconds with zero onboarding cost or verification roadblocks.",
    },
    {
      step: "02",
      icon: Share2,
      titleBn: "রেফারেল লিংক শেয়ার করুন",
      titleEn: "Share Your Referral Link",
      descBn: "আপনার ক্লায়েন্ট এরিয়া থেকে ইউনিক রেফারেল লিংক নিয়ে সোশ্যাল মিডিয়া বা ব্লগে শেয়ার করুন।",
      descEn: "Obtain your unique referral tracker and promotional banners from your partner dashboard.",
    },
    {
      step: "03",
      icon: DollarSign,
      titleBn: "আজীবন কমিশন উপভোগ করুন",
      titleEn: "Earn Guaranteed Commission",
      descBn: "প্রতিটি সফল হোস্টিং ও সার্ভার অর্ডারে পান ১৫% পর্যন্ত আকর্ষণীয় কমিশন সরাসরি বিকাশে।",
      descEn: "Receive up to 15% recurring commissions deposited straight into your bKash, Nagad, or Bank account.",
    },
  ];

  const benefits = [
    {
      titleBn: "১৫% পর্যন্ত সর্বোচ্চ পেআউট",
      titleEn: "Up to 15% High Commission",
      descBn: "মার্কেটের অন্যতম সেরা কমিশন হার। প্রতিটি সেল থেকেই আপনার নিশ্চিত ইনকাম।",
      descEn: "Industry-leading recurring commission rates on all cloud and web hosting packages.",
    },
    {
      titleBn: "৯০ দিনের লং-লাইফ ট্র্যাকিং কুকি",
      titleEn: "90-Day Extended Cookie",
      descBn: "ভিজিটর আপনার লিংক থেকে আসার পর ৯০ দিনের ভেতর যেকোনো সময় অর্ডার করলেই কমিশন আপনার।",
      descEn: "Long 90-day tracking cookie ensures you get credited even if the user buys weeks later.",
    },
    {
      titleBn: "বিকাশ ও নগদে দ্রুত উত্তোলন",
      titleEn: "Instant bKash & Nagad Payouts",
      descBn: "ন্যূনতম ৫০০ টাকা ব্যালেন্স হলেই সরাসরি বিকাশ, নগদ বা ব্যাংক একাউন্টে পেআউট রিকোয়েস্ট করুন।",
      descEn: "Fast withdrawals processed within 24 hours into your preferred local payment wallet.",
    },
    {
      titleBn: "রিয়েল-টাইম ট্র্যাকিং ড্যাশবোর্ড",
      titleEn: "Live Analytics & Conversion Data",
      descBn: "ক্লিক সংখ্যা, সাইনআপ ও পেন্ডিং কমিশনের লাইভ পরিসংখ্যান স্বচ্ছতার সাথে পর্যবেক্ষণ করুন।",
      descEn: "Transparent, real-time dashboard tracking every click, referral, and cleared invoice.",
    },
  ];

  const faqs = [
    {
      qBn: "অ্যাফিলিয়েট প্রোগ্রামে যোগ দিতে কি কোনো ফি লাগবে?",
      qEn: "Is there any sign-up or maintenance fee?",
      aBn: "না, Yess Host এর পার্টনার প্রোগ্রাম ১০০% ফ্রি। যেকোনো ব্যক্তি বা প্রতিষ্ঠান বিনামূল্যে অংশ নিতে পারেন।",
      aEn: "No, joining the Yess Host Affiliate Program is completely free with no hidden charges.",
    },
    {
      qBn: "ন্যূনতম কত টাকা হলে টাকা তুলতে পারব?",
      qEn: "What is the minimum payout threshold?",
      aBn: "ন্যূনতম ৫০০ টাকা কমিশন জমা হলেই আপনি বিকাশ, নগদ, রকেট বা ব্যাংক অ্যাকাউন্টে উত্তোলন করতে পারবেন।",
      aEn: "The minimum payout threshold is BDT 500. Payouts are transferred via bKash, Nagad, or Bank.",
    },
    {
      qBn: "আমার রেফারেল লিংক কোথায় পাব?",
      qEn: "Where do I find my referral tracking link?",
      aBn: "লগইন করে আপনার ক্লায়েন্ট ড্যাশবোর্ডের 'অ্যাফিলিয়েট' মেনুতে ক্লিক করলেই ইউনিক লিংক দেখতে পাবেন।",
      aEn: "Once logged in, open the Affiliate tab from your Client Area to grab your personalized tracking link.",
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      {/* Hero section */}
      <section className="container mx-auto px-4 text-center mb-16 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
            <Award className="w-3.5 h-3.5" />
            {bn ? "Yess Host পার্টনার প্রোগ্রাম" : "Official Partner Network"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "রেফার করুন ও প্রতি সেলে কমিশন অর্জন করুন" : "Refer Customers & Earn High Recurring Commission"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {bn
              ? "বাংলাদেশের নির্ভরযোগ্য ক্লাউড হোস্টিং ও সার্ভার প্ল্যাটফর্মে যুক্ত হোন। আপনার কমিউনিটি বা ক্লায়েন্টদের রেফার করে প্রতি মাসে প্যাসিভ ইনকাম তৈরি করুন।"
              : "Join our fast-growing web hosting affiliate network. Earn generous payouts on web hosting, VPS, and cloud servers."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={user ? "/dashboard/affiliate" : "/signup"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/25 text-sm"
            >
              {user ? (bn ? "অ্যাফিলিয়েট ড্যাশবোর্ডে যান" : "Go to Affiliate Dashboard") : (bn ? "ফ্রিতে শুরু করুন" : "Join Affiliate Program")}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border bg-card text-foreground hover:bg-accent/10 transition-all text-sm"
            >
              {bn ? "আমাদের সাথে কথা বলুন" : "Partner Inquiries"}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
            {bn ? "কীভাবে কাজ করে?" : "How Does It Work?"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {bn ? "মাত্র ৩টি সহজ ধাপে আয় শুরু করুন" : "Three simple steps to start earning"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/60 relative">
                <span className="text-4xl font-extrabold text-primary/15 absolute right-6 top-6 select-none">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {bn ? s.titleBn : s.titleEn}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {bn ? s.descBn : s.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-2">
            {bn ? "কেন আমাদের অ্যাফিলিয়েট প্রোগ্রাম সেরা?" : "Why Partner With Yess Host?"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border/60 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground mb-1">{bn ? b.titleBn : b.titleEn}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{bn ? b.descBn : b.descEn}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-2">
            {bn ? "সাধারণ প্রশ্নোত্তর" : "Frequently Asked Questions"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-card border border-border/50">
              <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                <span>{bn ? faq.qBn : faq.qEn}</span>
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                {bn ? faq.aBn : faq.aEn}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
