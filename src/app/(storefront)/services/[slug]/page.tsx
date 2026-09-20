"use client";

import { use, useEffect, useState } from "react";
import { Server, Globe, Shield, Check, ShoppingCart, Loader2, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Link } from "@/lib/router-compat";
import { toast } from "sonner";
import DomainSearch from "@/components/DomainSearch";

const serviceDetails: Record<string, { titleEn: string; titleBn: string; descEn: string; descBn: string; price: string }> = {
  "domain": {
    titleEn: "Domain Registration",
    titleBn: "ডোমেইন রেজিস্ট্রেশন",
    descEn: "Find and register your perfect domain name in seconds with free DNS management and privacy protection.",
    descBn: "ফ্রি DNS ম্যানেজমেন্ট এবং প্রাইভেসি প্রোটেকশন সহ সেকেন্ডেই আপনার পছন্দের ডোমেইন রেজিস্টার করুন।",
    price: "199",
  },
  "basic-hosting": {
    titleEn: "Basic Web Hosting",
    titleBn: "বেসিক ওয়েব হোস্টিং",
    descEn: "Affordable, reliable hosting tailored for personal blogs, portfolios, and startup websites.",
    descBn: "ব্যক্তিগত ব্লগ, পোর্টফোলিও এবং নতুন ওয়েবসাইটের জন্য সাশ্রয়ী ও নির্ভরযোগ্য হোস্টিং।",
    price: "130",
  },
  "pro-hosting": {
    titleEn: "Pro Web Hosting",
    titleBn: "প্রো ওয়েব হোস্টিং",
    descEn: "High-performance hosting powered by LiteSpeed web server and NVMe SSD for growing businesses.",
    descBn: "LiteSpeed ওয়েব সার্ভার এবং NVMe SSD সমৃদ্ধ দ্রুতগতির হোস্টিং আপনার ব্যবসার প্রসারের জন্য।",
    price: "200",
  },
  "premium-hosting": {
    titleEn: "Premium Cloud Hosting",
    titleBn: "প্রিমিয়াম ক্লাউড হোস্টিং",
    descEn: "Maximum CPU and RAM allocation for demanding corporate sites and e-commerce stores.",
    descBn: "ই-কমার্স এবং কর্পোরেট ওয়েবসাইটের জন্য সর্বোচ্চ সিপিইউ ও র‍্যাম বরাদ্দকৃত শক্তিশালী হোস্টিং।",
    price: "500",
  },
  "linux-reseller": {
    titleEn: "Linux Reseller Hosting",
    titleBn: "লিনাক্স রিসেলার হোস্টিং",
    descEn: "Complete WHM & cPanel environment to launch and scale your own hosting brand.",
    descBn: "আপনার নিজস্ব হোস্টিং ব্র্যান্ড চালু এবং প্রসারের জন্য সম্পূর্ণ WHM ও cPanel কন্ট্রোল প্যানেল।",
    price: "1499",
  },
  "usa-vps": {
    titleEn: "USA KVM VPS Server",
    titleBn: "ইউএসএ KVM ভিপিএস সার্ভার",
    descEn: "Dedicated KVM virtualized instances with full root access, dedicated IP, and gigabit port.",
    descBn: "পূর্ণ রুট অ্যাক্সেস, ডেডিকেটেড আইপি এবং গিগাবিট পোর্ট সহ ডেডিকেটেড KVM ভার্চুয়ালাইজড সার্ভার।",
    price: "750",
  },
  "email-hosting": {
    titleEn: "Corporate Email Hosting",
    titleBn: "কর্পোরেট ইমেইল হোস্টিং",
    descEn: "Secure, spam-filtered business email hosting matching your company's domain name.",
    descBn: "আপনার প্রতিষ্ঠানের ডোমেইন নেমে নিরাপদ ও স্প্যামমুক্ত প্রফেশনাল বিজনেস ইমেইল সার্ভিস।",
    price: "799",
  },
  "dedicated": {
    titleEn: "Dedicated Bare Metal Server",
    titleBn: "ডেডিকেটেড বেয়ার মেটাল সার্ভার",
    descEn: "Uncompromised bare-metal performance, enterprise-grade hardware, and unmetered connectivity.",
    descBn: "এন্টারপ্রাইজ গ্রেড হার্ডওয়্যার এবং আনমিটারড কানেক্টিভিটি সহ সম্পূর্ণ ডেডিকেটেড সার্ভার।",
    price: "11200",
  },
};

export default function ServiceSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem } = useCart();

  const details = serviceDetails[slug] || {
    titleEn: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    titleBn: slug.replace(/-/g, " "),
    descEn: "High-performance enterprise hosting and domain solutions by Yess Host.",
    descBn: "ইয়েস হোস্টের উচ্চমানের এন্টারপ্রাইজ হোস্টিং এবং ডোমেইন সমাধান।",
    price: "499",
  };

  const handleAddToCart = () => {
    addItem({
      id: `srv-${slug}`,
      name: bn ? details.titleBn : details.titleEn,
      price_bdt: details.price,
      type: slug === "domain" ? "domain" : "hosting",
      billing_cycle: "monthly",
    });
    toast.success(bn ? "কার্টে যোগ করা হয়েছে!" : "Added to cart!");
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-5xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-6 font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        {bn ? "হোমে ফিরে যান" : "Back to Home"}
      </Link>

      <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-xs mb-10">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground mb-3 uppercase tracking-wider">
            {slug}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {bn ? details.titleBn : details.titleEn}
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-3 leading-relaxed">
            {bn ? details.descBn : details.descEn}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="font-mono text-3xl font-extrabold text-foreground">
              {formatAmount(details.price, lang)}
              <span className="text-xs text-muted-foreground font-normal ml-1">
                /{bn ? "মাস হতে শুরু" : "starting per month"}
              </span>
            </div>

            {slug !== "domain" && (
              <Button onClick={handleAddToCart} className="gap-2 font-bold">
                <ShoppingCart className="w-4 h-4" />
                {bn ? "এখনই অর্ডার করুন" : "Order Now"}
              </Button>
            )}
          </div>
        </div>
      </div>

      {slug === "domain" ? (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-foreground">
            {bn ? "ডোমেইন অনুসন্ধান ও তাৎক্ষণিক নিবন্ধন" : "Search and Register Domain"}
          </h2>
          <DomainSearch />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-base text-foreground mb-2">
              {bn ? "৯৯.৯% আপটাইম" : "99.9% Uptime SLA"}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {bn
                ? "রিডান্ড্যান্ট ক্লাউড নেটওয়ার্ক ও ক্লাস্টার আর্কিটেকচার দ্বারা সার্বক্ষণিক সক্রিয়তা নিশ্চিত করা হয়।"
                : "Enterprise server clusters backed by automated failover and 24/7 network monitoring."}
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-base text-foreground mb-2">
              {bn ? "LiteSpeed ও NVMe SSD" : "LiteSpeed + NVMe"}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {bn
                ? "সাধারণ হোস্টিংয়ের তুলনায় ২০ গুণ পর্যন্ত দ্রুত পেজ লোডিং স্পিড।"
                : "Lightning fast database queries and static caching for sub-second web page delivery."}
            </p>
          </div>
          <div className="p-6 rounded-xl border border-border bg-card">
            <h4 className="font-bold text-base text-foreground mb-2">
              {bn ? "২৪/৭ এক্সপার্ট সাপোর্ট" : "24/7 Priority Support"}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {bn
                ? "লাইভ চ্যাট, ফোন ও টিকিটের মাধ্যমে সার্বক্ষণিক কারিগরি সহায়তা প্রদান।"
                : "Get real human responses from seasoned sysadmins via live chat, phone, and ticket desk."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
