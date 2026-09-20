"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, ShoppingCart, Server, Sparkles, Layers, Shield, Cpu, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Plan {
  id: string;
  category: string;
  slug: string;
  name: string;
  priceBdt: string;
  annualPriceBdt?: string | null;
  features: any;
  isFeatured?: boolean;
}

const categoryLabels: Record<string, { en: string; bn: string }> = {
  shared: { en: "Shared Hosting", bn: "শেয়ার্ড হোস্টিং" },
  wordpress: { en: "WordPress Hosting", bn: "ওয়ার্ডপ্রেস হোস্টিং" },
  reseller: { en: "Reseller Hosting", bn: "রিসেলার হোস্টিং" },
  cloud: { en: "Cloud / VPS", bn: "ক্লাউড / ভিপিএস" },
  dedicated: { en: "Dedicated Server", bn: "ডেডিকেটেড সার্ভার" },
  email: { en: "Email Hosting", bn: "ইমেইল হোস্টিং" },
  ssl: { en: "SSL Certificate", bn: "এসএসএল সার্টিফিকেট" },
};

export default function DashboardOrderServicePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem, setCartOpen, items } = useCart();

  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>("all");
  const [cycle, setCycle] = useState<"monthly" | "annual">("monthly");

  useEffect(() => {
    fetch("/api/data/public")
      .then((res) => res.json())
      .then((data) => {
        if (data.pricingPlans) {
          setPlans(data.pricingPlans);
        }
      })
      .catch((err) => console.error("Error fetching plans:", err))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(() => {
    const set = Array.from(new Set(plans.map((p) => p.category)));
    return ["all", ...set];
  }, [plans]);

  const visible = useMemo(
    () => (category === "all" ? plans : plans.filter((p) => p.category === category)),
    [plans, category]
  );

  const label = (c: string) =>
    c === "all" ? (bn ? "সব প্ল্যান" : "All Plans") : categoryLabels[c]?.[bn ? "bn" : "en"] || c;

  const getPrice = (p: Plan) =>
    cycle === "annual" && p.annualPriceBdt ? p.annualPriceBdt : p.priceBdt;

  const isInCart = (planId: string) => items.some((i) => i.id.startsWith(planId));

  const handleAdd = (p: Plan) => {
    addItem({
      id: `${p.id}-${cycle}`,
      type: "hosting",
      name: p.name,
      price_bdt: getPrice(p),
      billing_cycle: cycle === "annual" ? "annually" : "monthly",
    });
    toast.success(bn ? `${p.name} কার্টে যোগ হয়েছে` : `Added ${p.name} to cart`);
    setCartOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "নতুন সার্ভিস অর্ডার" : "Order New Services"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {bn ? "প্ল্যান বাছাই করে সরাসরি কার্টে যোগ করুন বা অর্ডার সম্পন্ন করুন" : "Browse high-performance hosting packages and configure your deployment"}
          </p>
        </div>

        {/* Cycle switcher */}
        <div className="inline-flex rounded-lg border border-border p-1 bg-muted/40 shrink-0">
          <button
            type="button"
            onClick={() => setCycle("monthly")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              cycle === "monthly" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {bn ? "মাসিক" : "Monthly"}
          </button>
          <button
            type="button"
            onClick={() => setCycle("annual")}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1 ${
              cycle === "annual" ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {bn ? "বার্ষিক" : "Annual"}
            <span className="text-[10px] bg-emerald-500/10 text-emerald-600 font-bold px-1 rounded">Save 15%</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
              category === c
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card text-muted-foreground border-border hover:bg-muted"
            }`}
          >
            {label(c)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : visible.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <Server className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-foreground">
            {bn ? "কোনো প্যাকেজ পাওয়া যায়নি" : "No Packages Found"}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "অন্য কোনো ক্যাটাগরি নির্বাচন করুন" : "Please select another category"}
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p) => {
            let parsedFeatures: string[] = [];
            try {
              if (Array.isArray(p.features)) {
                parsedFeatures = p.features;
              } else if (typeof p.features === "string") {
                const parsed = JSON.parse(p.features);
                parsedFeatures = Array.isArray(parsed)
                  ? parsed
                  : Object.entries(parsed).map(([k, v]) => `${k}: ${v}`);
              } else if (typeof p.features === "object" && p.features !== null) {
                parsedFeatures = Object.entries(p.features).map(([k, v]) => `${k}: ${v}`);
              }
            } catch {
              parsedFeatures = [];
            }

            const inCart = isInCart(p.id);

            return (
              <div
                key={p.id}
                className={`relative rounded-xl border bg-card p-5 shadow-xs flex flex-col justify-between transition-all hover:shadow-md ${
                  p.isFeatured ? "border-primary/50 ring-1 ring-primary/20" : "border-border"
                }`}
              >
                {p.isFeatured && (
                  <Badge className="absolute -top-3 right-4 bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-wider">
                    {bn ? "জনপ্রিয়" : "Popular"}
                  </Badge>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                      {categoryLabels[p.category]?.[bn ? "bn" : "en"] || p.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3">{p.name}</h3>

                  <div className="mb-5 pb-4 border-b border-border">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-foreground">
                        ৳{formatAmount(Number(getPrice(p)), lang)}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        /{cycle === "annual" ? (bn ? "বছর" : "yr") : (bn ? "মাস" : "mo")}
                      </span>
                    </div>
                  </div>

                  {parsedFeatures.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {parsedFeatures.slice(0, 6).map((f: any, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{String(f)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-2">
                  <Button
                    onClick={() => handleAdd(p)}
                    className="w-full gap-2 font-semibold"
                    variant={inCart ? "outline" : "default"}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {inCart
                      ? bn
                        ? "কার্টে যোগ করা আছে"
                        : "Added in Cart"
                      : bn
                      ? "কার্টে যোগ করুন"
                      : "Add to Cart"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
