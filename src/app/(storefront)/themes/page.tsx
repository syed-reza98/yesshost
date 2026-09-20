"use client";

import { useEffect, useState } from "react";
import { Palette, ExternalLink, ShoppingCart, Loader2, Star, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ThemeItem {
  id: string;
  name: string;
  category: string;
  priceBdt: string;
  previewUrl?: string | null;
}

const defaultThemes: ThemeItem[] = [
  { id: "th-1", name: "Apex Corporate BD", category: "business", priceBdt: "1499", previewUrl: "#" },
  { id: "th-2", name: "DhakaStore eCommerce", category: "ecommerce", priceBdt: "2499", previewUrl: "#" },
  { id: "th-3", name: "Kreativ Agency Portfolio", category: "agency", priceBdt: "1899", previewUrl: "#" },
  { id: "th-4", name: "NewsByte Media Portal", category: "blog", priceBdt: "1299", previewUrl: "#" },
];

export default function ThemesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { addItem } = useCart();
  const [themesList, setThemesList] = useState<ThemeItem[]>(defaultThemes);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/themes")
      .then((r) => r.json())
      .then((d) => {
        if (d.themes && d.themes.length > 0) {
          setThemesList(d.themes);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (theme: ThemeItem) => {
    addItem({
      id: theme.id,
      name: theme.name,
      price_bdt: theme.priceBdt,
      type: "theme",
    });
    toast.success(bn ? `${theme.name} কার্টে যোগ করা হয়েছে!` : `${theme.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-6xl">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold gradient-primary text-primary-foreground mb-3">
          {bn ? "প্রিমিয়াম ওয়েবসাইট থিম" : "Theme Marketplace"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          {bn ? "রেডিমেড প্রফেশনাল ওয়েবসাইট টেমপ্লেট" : "Ready-to-Deploy Website Themes"}
        </h1>
        <p className="text-sm text-muted-foreground mt-3">
          {bn
            ? "১-ক্লিক ইনস্টলেশন, রেসপন্সিভ ডিজাইন এবং দ্রুতগতির লাইটস্পিড অপটিমাইজেশন সহ"
            : "Fully responsive, SEO-ready premium templates optimized for high conversion and instant setup."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {themesList.map((t) => (
          <div
            key={t.id}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div className="aspect-video bg-secondary/50 flex items-center justify-center text-muted-foreground/40 relative group">
              <Palette className="w-12 h-12" />
              {t.previewUrl && (
                <a
                  href={t.previewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-xs font-bold gap-1 transition-opacity"
                >
                  <Eye className="w-4 h-4" />
                  Live Preview
                </a>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  {t.category}
                </span>
                <h3 className="font-bold text-base text-foreground mt-1">{t.name}</h3>
              </div>

              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-lg font-mono font-extrabold text-foreground">
                  {formatAmount(t.priceBdt, lang)}
                </span>
                <Button size="sm" onClick={() => handleAddToCart(t)} className="gap-1">
                  <ShoppingCart className="w-3.5 h-3.5" />
                  {bn ? "কিনুন" : "Buy"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
