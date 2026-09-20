"use client";

import { useEffect, useState } from "react";
import { Layers, Server, Shield, Check, ShoppingCart, Loader2, Award, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface Plan {
  id: string;
  name: string;
  priceBdt: string;
  features?: any;
  isFeatured?: boolean;
}

export default function ResellerHostingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem } = useCart();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data/public")
      .then((r) => r.json())
      .then((data) => {
        const resellerPlans = (data.pricingPlans || []).filter(
          (p: any) => p.category === "reseller" || p.slug.includes("reseller")
        );
        setPlans(resellerPlans);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

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
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground mb-3">
          {bn ? "রিসেলার হোস্টিং" : "Reseller Hosting"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {bn ? "নিজের ব্র্যান্ডে শুরু করুন হোস্টিং ব্যবসা" : "Launch Your Own Web Hosting Business"}
        </h1>
        <p className="text-sm text-muted-foreground mt-3">
          {bn
            ? "WHM & cPanel কন্ট্রোল প্যানেল, ১০০% হোয়াইট-লেবেল ব্র্যান্ডিং এবং আনলিমিটেড সাব-অ্যাকাউন্ট ম্যানেজমেন্ট সহ"
            : "White-label cPanel accounts, Web Host Manager (WHM) control, NVMe power, and dedicated client management."}
        </p>
      </div>

      {loading ? (
        <div className="p-16 text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : plans.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Starter Reseller", price: "1499", accounts: "25 Accounts", disk: "50 GB NVMe" },
            { name: "Pro Reseller", price: "2499", accounts: "50 Accounts", disk: "100 GB NVMe", featured: true },
            { name: "Ultimate Reseller", price: "4499", accounts: "100 Accounts", disk: "250 GB NVMe" },
          ].map((p, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border p-6 flex flex-col justify-between bg-card ${
                p.featured ? "border-primary ring-2 ring-primary/20 shadow-md" : "border-border shadow-xs"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-3xl font-extrabold font-mono text-foreground">
                    ৳{p.price}
                  </span>
                  <span className="text-xs text-muted-foreground ml-1">/{bn ? "মাস" : "mo"}</span>
                </div>
                <div className="space-y-3 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{p.accounts}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{p.disk} Storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>Free WHM / cPanel Admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>100% White Label Private Nameservers</span>
                  </div>
                </div>
              </div>
              <Button
                onClick={() =>
                  handleAddToCart({
                    id: `reseller-${idx}`,
                    name: p.name,
                    priceBdt: p.price,
                  })
                }
                className="w-full mt-8 font-bold"
                variant={p.featured ? "default" : "outline"}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                {bn ? "অর্ডার করুন" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl border border-border p-6 bg-card shadow-xs flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-4 mb-6 font-mono text-3xl font-extrabold text-foreground">
                  {formatAmount(plan.priceBdt, lang)}
                  <span className="text-xs text-muted-foreground ml-1">/{bn ? "মাস" : "mo"}</span>
                </div>
              </div>
              <Button onClick={() => handleAddToCart(plan)} className="w-full mt-8">
                <ShoppingCart className="w-4 h-4 mr-2" />
                {bn ? "অর্ডার করুন" : "Order Now"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
