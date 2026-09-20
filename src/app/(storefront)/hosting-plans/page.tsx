"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Server, Globe, HardDrive, Shield, Mail, Layers, ArrowRight, Check, Star, Zap, ShoppingCart, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface Plan {
  id: string;
  name: string;
  category: string;
  slug: string;
  priceBdt: string;
  annualPriceBdt?: string | null;
  features?: any;
  isFeatured?: boolean;
}

const categories = [
  { key: "shared", labelEn: "Web Hosting", labelBn: "ওয়েব হোস্টিং", icon: Server },
  { key: "cloud", labelEn: "Cloud & VPS", labelBn: "ক্লাউড ও ভিপিএস", icon: HardDrive },
  { key: "reseller", labelEn: "Reseller Hosting", labelBn: "রিসেলার হোস্টিং", icon: Layers },
  { key: "dedicated", labelEn: "Dedicated Server", labelBn: "ডেডিকেটেড সার্ভার", icon: Shield },
];

export default function HostingPlansPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem } = useCart();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("shared");

  useEffect(() => {
    fetch("/api/data/public")
      .then((r) => r.json())
      .then((data) => {
        if (data.pricingPlans) setPlans(data.pricingPlans);
      })
      .catch((err) => console.error("Error loading plans:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredPlans = useMemo(() => {
    const list = plans.filter((p) => p.category === selectedCategory);
    return list.length > 0 ? list : plans;
  }, [plans, selectedCategory]);

  const handleAddToCart = (plan: Plan) => {
    addItem({
      id: plan.id,
      name: plan.name,
      price_bdt: plan.priceBdt,
      type: "hosting",
      billing_cycle: "monthly",
    });
    toast.success(bn ? `${plan.name} কার্টে যোগ করা হয়েছে!` : `${plan.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground mb-3">
          {bn ? "হোস্টিং প্যাকেজসমূহ" : "Hosting Plans"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {bn ? "আপনার ওয়েবসাইটের জন্য সেরা পারফরম্যান্স" : "High-Performance Cloud & Web Hosting"}
        </h1>
        <p className="text-sm text-muted-foreground mt-3">
          {bn
            ? "LiteSpeed ওয়েব সার্ভার, NVMe SSD স্টোরেজ এবং ৯৯.৯% আপটাইম গ্যারান্টি সহ সম্পূর্ণ পরিচালিত হোস্টিং"
            : "Supercharge your online presence with ultra-fast NVMe storage, cPanel control, and 24/7 technical support."}
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                isActive
                  ? "gradient-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/20"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{bn ? cat.labelBn : cat.labelEn}</span>
            </button>
          );
        })}
      </div>

      {loading ? (
        <div className="p-16 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-card ${
                plan.isFeatured
                  ? "border-primary ring-2 ring-primary/20 shadow-md relative"
                  : "border-border hover:border-primary/40 shadow-xs"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary text-primary-foreground shadow-xs">
                  {bn ? "জনপ্রিয়" : "Most Popular"}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold text-foreground font-mono">
                    {formatAmount(plan.priceBdt, lang)}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">
                    /{bn ? "মাস" : "month"}
                  </span>
                </div>

                <div className="space-y-3 text-sm pt-4 border-t border-border">
                  {Array.isArray(plan.features) ? (
                    plan.features.map((f: any, i: number) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{typeof f === "string" ? f : f.label || f.name}</span>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>NVMe SSD Pure Storage</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>LiteSpeed Web Server + LSCache</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>Free SSL Certificate & Daily Backups</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>cPanel Control Panel with 1-Click Installer</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <Button
                  onClick={() => handleAddToCart(plan)}
                  className="w-full gap-2 font-bold"
                  variant={plan.isFeatured ? "default" : "outline"}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {bn ? "অর্ডার করুন" : "Order Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
