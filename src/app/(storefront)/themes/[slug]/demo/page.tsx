"use client";

import { use, useEffect, useState } from "react";
import { ArrowLeft, Monitor, Smartphone, Tablet, ShoppingCart, ExternalLink, Clock } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function ThemeDemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const humanName = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-background">
      {/* Top Demo Bar */}
      <div className="h-14 border-b border-border bg-card px-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <Link
            href={`/themes/${slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{bn ? "ফিরে যান" : "Back"}</span>
          </Link>
          <span className="text-xs font-bold text-foreground truncate max-w-[150px] sm:max-w-none">
            {humanName} (Live Demo)
          </span>
        </div>

        {/* Device Switcher */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/50">
          <button
            onClick={() => setDevice("desktop")}
            className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "desktop" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
            title="Desktop View"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("tablet")}
            className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "tablet" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
            title="Tablet View"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setDevice("mobile")}
            className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
              device === "mobile" ? "bg-background text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
            title="Mobile View"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/themes/${slug}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {bn ? "থিমটি কিনুন" : "Buy This Theme"}
          </Link>
        </div>
      </div>

      {/* Frame Container */}
      <div className="flex-1 bg-muted/30 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
        <div
          className={`h-full bg-background rounded-2xl border border-border shadow-2xl overflow-y-auto transition-all duration-300 flex flex-col items-center justify-center text-center p-8 ${
            device === "desktop"
              ? "w-full"
              : device === "tablet"
              ? "w-[768px] max-w-full"
              : "w-[390px] max-w-full"
          }`}
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-extrabold text-foreground mb-2">
              {humanName} Interactive Demo
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
              {bn
                ? "আমাদের লাইভ প্রিভিউ সার্ভার ক্লাউডে হোস্ট করা হচ্ছে। আপনি অবিলম্বে টেমপ্লেটটির কোড ও ডিজাইন ফুল প্যাক ডাউনলোড করতে পারেন।"
                : "This interactive theme sandbox preview is configured for Yess Host high-speed LiteSpeed servers. All layouts and components are production-ready."}
            </p>
            <Link
              href={`/themes/${slug}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
            >
              {bn ? "ফিচারসমূহ দেখুন ও অর্ডার করুন" : "View Details & Download Theme"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
