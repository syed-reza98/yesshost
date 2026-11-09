"use client";

import { motion } from "framer-motion";
import { CreditCard, Building2, Smartphone, Globe, ShieldCheck, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "@/lib/router-compat";

export default function PaymentMethodsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const methods = [
    {
      icon: Smartphone,
      name: "bKash",
      badge: "Instant Auto-Payment",
      color: "from-pink-500 to-rose-600",
      textColor: "text-pink-600",
      typeBn: "মোবাইল ব্যাংকিং (স্বয়ংক্রিয়)",
      typeEn: "Mobile Banking (Instant)",
      detailsBn: [
        "চেকআউটে bKash গেটওয়ে নির্বাচন করুন",
        "আপনার bKash নম্বর ও OTP দিয়ে কনফার্ম করুন",
        "পেমেন্ট সফল হলে সার্ভিস তৎক্ষণাৎ চালু হয়ে যায়",
        "ম্যানুয়াল সেন্ড মানি বা রেফারেন্স দেওয়ার ঝামেলা নেই",
      ],
      detailsEn: [
        "Select bKash during checkout",
        "Confirm with your bKash mobile number and OTP",
        "Service activates automatically in real-time",
        "Zero transaction surcharge on standard payments",
      ],
    },
    {
      icon: Smartphone,
      name: "Nagad",
      badge: "Instant Auto-Payment",
      color: "from-orange-500 to-amber-600",
      textColor: "text-orange-600",
      typeBn: "মোবাইল ব্যাংকিং (স্বয়ংক্রিয়)",
      typeEn: "Mobile Banking (Instant)",
      detailsBn: [
        "চেকআউটে Nagad গেটওয়ে নির্বাচন করুন",
        "নিরাপদ Nagad পেমেন্ট পেজে পিন দিয়ে সম্পন্ন করুন",
        "ইনভয়েস সাথে সাথে পেইড হিসেবে চিহ্নিত হবে",
        "২৪/৭ যেকোনো সময় তাৎক্ষণিক পেমেন্ট গ্রহণযোগ্য",
      ],
      detailsEn: [
        "Select Nagad at checkout",
        "Authenticate through the secured Nagad payment screen",
        "Invoice status updates to Paid immediately",
        "Automated domain and hosting provisioning",
      ],
    },
    {
      icon: CreditCard,
      name: "SSLCommerz (Cards & NetBanking)",
      badge: "Visa, Mastercard, AMEX",
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-600",
      typeBn: "ডেবিট/ক্রেডিট কার্ড ও ইন্টারনেট ব্যাংকিং",
      typeEn: "Debit/Credit Cards & Net Banking",
      detailsBn: [
        "যেকোনো বাংলাদেশী বা আন্তর্জাতিক ভিসা ও মাস্টারকার্ড",
        "সিটি টাচ, ব্র্যাক ব্যাংক, ইসলামী ব্যাংক সহ নেট ব্যাংকিং",
        "রকেট, উপায়ের মতো সব এমএফএস ওয়ালেট অন্তর্ভুক্ত",
        "১২৮-বিট এসএসএল এনক্রিপশনের মাধ্যমে সম্পূর্ণ সুরক্ষিত",
      ],
      detailsEn: [
        "Visa, Mastercard, and American Express cards",
        "Internet banking from all major banks in Bangladesh",
        "Rocket, Upay and all local digital wallets supported",
        "Secured with 128-bit SSL encryption and 3D-Secure OTP",
      ],
    },
    {
      icon: Building2,
      name: "Direct Bank Transfer / Wire",
      badge: "Corporate & Reseller",
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-600",
      typeBn: "সরাসরি ব্যাংক ডিপোজিট",
      typeEn: "Direct Bank Deposit",
      detailsBn: [
        "ডাচ-বাংলা ব্যাংক লিমিটেড (DBBL) অ্যাকাউন্ট",
        "ব্র্যাক ব্যাংক লিমিটেড (BRAC Bank) অ্যাকাউন্ট",
        "এনপিএসবি (NPSB) বা বিএফটিএন (BEFTN) ট্রান্সফার",
        "ডিপোজিট স্লিপ বা ট্রানজেকশন আইডি টিকেটে সাবমিট করুন",
      ],
      detailsEn: [
        "Dutch-Bangla Bank (DBBL) Corporate Account",
        "BRAC Bank Limited Account Transfer",
        "NPSB and BEFTN fund transfers accepted",
        "Attach deposit receipt to support ticket for clearing",
      ],
    },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      <section className="container mx-auto px-4 max-w-4xl text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            {bn ? "১০০% নিরাপদ লেনদেন" : "100% Secure & Automated"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "পেমেন্ট মেথড ও নির্দেশিকা" : "Accepted Payment Methods"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {bn
              ? "বিকাশ, নগদ, ডেবিট/ক্রেডিট কার্ড এবং সরাসরি ব্যাংকিংয়ের মাধ্যমে ঝামেলামুক্ত ও স্বয়ংক্রিয়ভাবে পেমেন্ট করুন।"
              : "We support seamless automated payments through bKash, Nagad, Cards, and direct corporate bank transfers."}
          </p>
        </motion.div>
      </section>

      {/* Methods Cards */}
      <section className="container mx-auto px-4 max-w-5xl mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div
                key={idx}
                className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{method.name}</h3>
                        <p className="text-xs text-muted-foreground">{bn ? method.typeBn : method.typeEn}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {method.badge}
                    </span>
                  </div>

                  <ul className="space-y-2.5 my-6 text-xs sm:text-sm text-muted-foreground">
                    {(bn ? method.detailsBn : method.detailsEn).map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {bn ? "অ্যাক্টিভেশন: সাথে সাথে" : "Activation: Instantaneous"}
                  </span>
                  <span className="font-semibold text-foreground">
                    {bn ? "ফি: ০%" : "Surcharge: 0%"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Guarantee */}
      <section className="container mx-auto px-4 max-w-3xl text-center">
        <div className="p-8 rounded-2xl bg-card border border-border/60">
          <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl font-bold text-foreground mb-2">
            {bn ? "নিরাপদ ও নির্ভরযোগ্য বিলিং" : "PCI-DSS & SSL Verified Security"}
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
            {bn
              ? "আপনার প্রতিটি পেমেন্ট সরাসরি বাংলাদেশ ব্যাংক অনুমোদিত গেটওয়ে ও এনক্রিপ্টেড চ্যানেলের মাধ্যমে প্রসেস করা হয়। কোনো কার্ডের গোপন তথ্য আমাদের সার্ভারে সংরক্ষিত থাকে না।"
              : "All monetary transactions occur over encrypted 256-bit SSL tunnels directly handled by certified banking gateways."}
          </p>
          <Link
            href="/services/basic-hosting"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground text-xs hover:opacity-90 transition-all shadow-md"
          >
            {bn ? "হোস্টিং প্যাকেজসমূহ দেখুন" : "Browse Hosting Plans"}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
