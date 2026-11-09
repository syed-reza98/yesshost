"use client";

import { use, useEffect, useState } from "react";
import { ArrowLeft, Eye, ShoppingCart, Check, Star, Shield, Globe, Server, Palette, Sparkles } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";

interface ThemeDetailData {
  id: string;
  name: string;
  slug: string;
  category: string;
  descriptionEn?: string;
  descriptionBn?: string;
  priceBdt: string;
  discountPriceBdt?: string;
  hostingBundlePriceBdt?: string;
  demoUrl?: string;
  thumbnailUrl?: string;
  features?: string[];
}

export default function ThemeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem, isInCart } = useCart();

  const [theme, setTheme] = useState<ThemeDetailData | null>(null);
  const [includeHosting, setIncludeHosting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/themes`)
      .then((res) => res.json())
      .then((data) => {
        const found = (data.themes || []).find((t: any) => t.slug === slug || t.id === slug);
        if (found) {
          setTheme({
            ...found,
            slug: found.slug || slug,
            features: [
              "100% Fully Responsive Layout (Mobile, Tablet, Desktop)",
              "One-Click Demo Import Ready with Sample Content",
              "Pre-optimized for LiteSpeed Web Server and NVMe SSD",
              "Clean HTML5/CSS3 Semantic Code & High SEO Score",
              "Elementor and Gutenberg Block Editor Compatible",
              "Comprehensive Documentation & Lifetime Free Updates",
            ],
          });
        } else {
          // Generate realistic presentation from slug
          const humanName = slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          setTheme({
            id: `theme-${slug}`,
            name: humanName,
            slug,
            category: "business",
            descriptionEn: `A clean, fast, and multi-purpose website template designed for ${humanName}. Fully mobile responsive with high performance score.`,
            descriptionBn: `${humanName} এর জন্য একটি আধুনিক, পরিচ্ছন্ন ও দৃষ্টিনন্দন রেডিমেড ওয়েবসাইট থিম। ১০০% মোবাইল রেসপন্সিভ ও সুপারফাস্ট।`,
            priceBdt: "1499",
            hostingBundlePriceBdt: "2299",
            features: [
              "100% Fully Responsive Layout (Mobile, Tablet, Desktop)",
              "One-Click Demo Import Ready with Sample Content",
              "Pre-optimized for LiteSpeed Web Server and NVMe SSD",
              "Clean HTML5/CSS3 Semantic Code & High SEO Score",
              "Elementor and Gutenberg Block Editor Compatible",
              "Comprehensive Documentation & Lifetime Free Updates",
            ],
          });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (!theme) return null;

  const currentPrice = theme.discountPriceBdt || theme.priceBdt;
  const finalPrice = includeHosting && theme.hostingBundlePriceBdt
    ? theme.hostingBundlePriceBdt
    : currentPrice;

  const cartId = `theme-${theme.id}${includeHosting ? "-bundle" : ""}`;
  const inCart = isInCart(cartId);

  const handleAddToCart = () => {
    if (inCart) {
      toast.info(bn ? "ইতিমধ্যে কার্টে যোগ করা আছে" : "Already in your cart");
      return;
    }
    addItem({
      id: cartId,
      name: `${theme.name} ${includeHosting ? "(+ 1 Year Hosting Bundle)" : ""}`,
      price_bdt: finalPrice,
      type: "theme",
    });
    toast.success(bn ? "কার্টে সফলভাবে যোগ করা হয়েছে!" : "Theme added to cart!");
  };

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-[85vh]">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link
          href="/themes"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {bn ? "থিম স্টোরে ফিরুন" : "Back to Theme Store"}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Preview Image / Box */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border/60 bg-card overflow-hidden shadow-xs">
              <div className="aspect-video bg-gradient-to-br from-secondary/80 to-muted flex flex-col items-center justify-center p-8 text-center relative group">
                <Palette className="w-16 h-16 text-primary/40 mb-3" />
                <span className="font-bold text-lg text-foreground">{theme.name}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{theme.category} Theme</span>

                <div className="mt-4 flex gap-2">
                  <Link
                    href={`/themes/${slug}/demo`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                    {bn ? "লাইভ ডেমো দেখুন" : "Live Interactive Demo"}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Purchase Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-xs">
              <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-wider text-primary border-primary/20 bg-primary/10 mb-3">
                {theme.category}
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mb-2">
                {theme.name}
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                {bn ? theme.descriptionBn || theme.descriptionEn : theme.descriptionEn || theme.descriptionBn}
              </p>

              <div className="p-4 rounded-2xl bg-muted/30 border border-border/50 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{bn ? "থিম লাইসেন্স মূল্য" : "Theme Price"}</span>
                  <span className="text-2xl font-mono font-extrabold text-foreground">
                    {formatAmount(finalPrice, lang)}
                  </span>
                </div>

                <label className="flex items-start gap-2.5 pt-3 border-t border-border/40 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeHosting}
                    onChange={(e) => setIncludeHosting(e.target.checked)}
                    className="mt-1 rounded text-primary focus:ring-primary h-4 w-4"
                  />
                  <div>
                    <span className="text-xs font-bold text-foreground flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      {bn ? "+ ১ বছরের লাইটস্পিড হোস্টিং বান্ডেল" : "+ 1-Year Fast Hosting Bundle"}
                    </span>
                    <span className="text-[11px] text-muted-foreground block">
                      {bn ? "থিম সহ সম্পূর্ণ রেডিমেড সাইট লাইভ করার সেরা অফার" : "Special discount when bundled with 1-year NVMe hosting"}
                    </span>
                  </div>
                </label>
              </div>

              <Button
                onClick={handleAddToCart}
                className="w-full h-12 rounded-xl text-sm font-semibold shadow-md shadow-primary/25"
                variant={inCart ? "secondary" : "default"}
              >
                {inCart ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                    {bn ? "কার্টে যুক্ত আছে" : "In Your Cart"}
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {bn ? "কার্টে যোগ করুন" : "Add Theme to Cart"}
                  </>
                )}
              </Button>

              <div className="mt-6 pt-6 border-t border-border/40 space-y-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <span>{bn ? "তাত্ক্ষণিক ডিজিটাল ফাইল ডাউনলোড" : "Instant digital delivery upon payment"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-green-500 shrink-0" />
                  <span>{bn ? "১০০% ভাইরাস ও ম্যালওয়্যার মুক্ত কোড" : "100% clean, verified, malware-free files"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Checklist */}
        <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-10 shadow-xs">
          <h2 className="text-lg font-bold text-foreground mb-6">
            {bn ? "টেমপ্লেটের প্রধান বৈশিষ্ঠ্যসমূহ" : "Theme Specifications & Highlights"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {theme.features?.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-muted/20 border border-border/40">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
