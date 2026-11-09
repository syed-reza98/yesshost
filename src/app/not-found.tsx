"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search, Headphones, Server, Globe } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

export default function NotFound() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-20 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-lg mx-auto"
        >
          {/* Animated 404 Badge */}
          <div className="relative mb-6">
            <span className="text-[100px] sm:text-[140px] font-extrabold tracking-tight bg-gradient-to-r from-primary via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-none select-none drop-shadow-sm">
              404
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            {bn ? "পৃষ্ঠাটি খুঁজে পাওয়া যায়নি" : "Page Not Found"}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto">
            {bn
              ? "দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে, নাম পরিবর্তন করা হয়েছে অথবা সাময়িকভাবে অনুপলব্ধ।"
              : "Sorry, the page you're looking for doesn't exist, has been removed, or is temporarily unavailable."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-lg shadow-primary/25 text-sm"
            >
              <Home className="w-4 h-4" />
              {bn ? "হোমপেজে যান" : "Go to Home"}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border border-border bg-card text-foreground hover:bg-accent/10 transition-all text-sm"
            >
              <Headphones className="w-4 h-4" />
              {bn ? "সাপোর্ট যোগাযোগ" : "Contact Support"}
            </Link>
          </div>

          {/* Quick Links Suggestions */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {bn ? "জনপ্রিয় লিংকসমূহ" : "Helpful Quick Links"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
              <Link
                href="/services/basic-hosting"
                className="px-3 py-1.5 rounded-lg bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
              >
                <Server className="w-3.5 h-3.5 text-primary" />
                {bn ? "ওয়েব হোস্টিং" : "Web Hosting"}
              </Link>
              <Link
                href="/domain-pricing"
                className="px-3 py-1.5 rounded-lg bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                {bn ? "ডোমেইন প্রাইসিং" : "Domain Pricing"}
              </Link>
              <Link
                href="/knowledge-base"
                className="px-3 py-1.5 rounded-lg bg-card border border-border/60 hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all flex items-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5 text-primary" />
                {bn ? "নলেজ বেস" : "Knowledge Base"}
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <FooterSection />
    </div>
  );
}
