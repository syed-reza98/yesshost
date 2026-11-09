"use client";

import { motion } from "framer-motion";
import { Globe, Search, Shield, Zap, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import DomainSearch from "@/components/DomainSearch";

export default function DomainSearchPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-[75vh]">
      <section className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
            <Sparkles className="w-3.5 h-3.5" />
            {bn ? "তাত্ক্ষণিক উপলব্ধতা যাচাই" : "Instant Availability & WHOIS"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "আপনার পছন্দের ডোমেইন খুঁজুন" : "Find Your Perfect Domain Name"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10">
            {bn
              ? "ডোমেইনের নাম লিখুন — উপলব্ধতা, মূল্য এবং এআই পাওয়ারড সাজেশন সাথে সাথে দেখুন।"
              : "Search your brand name across global and local extensions. Instant pricing, free DNS, and privacy protection included."}
          </p>

          <div className="mb-12">
            <DomainSearch />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-8 border-t border-border/50">
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <Zap className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "তাত্ক্ষণিক অ্যাক্টিভেশন" : "Instant Activation"}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{bn ? "পেমেন্ট সম্পন্ন হওয়ার সাথে সাথেই ডোমেইন স্বয়ংক্রিয়ভাবে সক্রিয় হয়ে যায়।" : "Your domain gets registered and propagated to global DNS immediately after checkout."}</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <Shield className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "ফ্রি হু-ইজ প্রাইভেসি" : "WHOIS Privacy Free"}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{bn ? "ব্যক্তিগত ফোন এবং ইমেইল গোপন রাখুন স্প্যাম ও স্ক্যামারদের হাত থেকে।" : "Keep your personal phone, email, and home address masked from public domain directories."}</p>
            </div>
            <div className="p-5 rounded-2xl bg-card border border-border/50">
              <Globe className="w-6 h-6 text-primary mb-2" />
              <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "সহজ নেমসার্ভার কনফিগ" : "Easy Nameserver Setup"}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{bn ? "ক্ল্যাশ ও কনফ্লিক্ট ছাড়া যেকোনো হোস্টিং বা ক্লাউডফ্লেয়ারের সাথে সংযুক্ত করুন।" : "Point effortlessly to Cloudflare, cPanel, or custom DNS records with 1-click management."}</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
