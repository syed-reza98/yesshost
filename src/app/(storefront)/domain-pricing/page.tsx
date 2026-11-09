"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Search, ShoppingCart, Check, Star, ArrowRight, Shield, RefreshCw, ArrowRightLeft, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/formatPrice";
import { Link } from "@/lib/router-compat";
import DomainSearch from "@/components/DomainSearch";
import { toast } from "sonner";

interface TLDPrice {
  id: string;
  ext: string;
  registration_bdt: string;
  renewal_bdt: string;
  transfer_bdt: string;
  is_popular?: boolean;
}

const fallbackPrices: TLDPrice[] = [
  { id: "1", ext: ".com", registration_bdt: "990", renewal_bdt: "1190", transfer_bdt: "1190", is_popular: true },
  { id: "2", ext: ".net", registration_bdt: "1090", renewal_bdt: "1290", transfer_bdt: "1290", is_popular: false },
  { id: "3", ext: ".org", registration_bdt: "1190", renewal_bdt: "1390", transfer_bdt: "1390", is_popular: false },
  { id: "4", ext: ".xyz", registration_bdt: "295", renewal_bdt: "1190", transfer_bdt: "1190", is_popular: true },
  { id: "5", ext: ".top", registration_bdt: "180", renewal_bdt: "990", transfer_bdt: "990", is_popular: true },
  { id: "6", ext: ".info", registration_bdt: "490", renewal_bdt: "1450", transfer_bdt: "1450", is_popular: false },
  { id: "7", ext: ".biz", registration_bdt: "1250", renewal_bdt: "1350", transfer_bdt: "1350", is_popular: false },
  { id: "8", ext: ".com.bd", registration_bdt: "1500", renewal_bdt: "1500", transfer_bdt: "1500", is_popular: false },
  { id: "9", ext: ".net.bd", registration_bdt: "1200", renewal_bdt: "1200", transfer_bdt: "1200", is_popular: false },
  { id: "10", ext: ".org.bd", registration_bdt: "1000", renewal_bdt: "1000", transfer_bdt: "1000", is_popular: false },
  { id: "11", ext: ".co", registration_bdt: "2450", renewal_bdt: "2650", transfer_bdt: "2650", is_popular: false },
  { id: "12", ext: ".io", registration_bdt: "3950", renewal_bdt: "4200", transfer_bdt: "4200", is_popular: true },
];

export default function DomainPricingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [tldPrices, setTldPrices] = useState<TLDPrice[]>(fallbackPrices);
  const { addItem, isInCart } = useCart();

  useEffect(() => {
    fetch("/api/data/public")
      .then((res) => res.json())
      .then((data) => {
        if (data.domainPricing && data.domainPricing.length > 0) {
          const mapped = data.domainPricing.map((item: any) => ({
            id: String(item.id),
            ext: item.extension || item.tld || item.ext,
            registration_bdt: String(item.registrationPrice || item.registration_bdt || item.price || "990"),
            renewal_bdt: String(item.renewalPrice || item.renewal_bdt || item.renewal || "1190"),
            transfer_bdt: String(item.transferPrice || item.transfer_bdt || item.transfer || "1190"),
            is_popular: Boolean(item.isPopular ?? item.is_popular),
          }));
          setTldPrices(mapped);
        }
      })
      .catch((err) => console.error("Could not fetch dynamic domain pricing:", err))
      .finally(() => setLoading(false));
  }, []);

  const filtered = tldPrices.filter((t) =>
    t.ext.toLowerCase().includes(search.toLowerCase().trim())
  );

  const addDomain = (tld: TLDPrice) => {
    const id = `domain-reg-${tld.ext.replace(/^\./, "")}`;
    if (isInCart(id)) {
      toast.info(bn ? "ইতিমধ্যে কার্টে যুক্ত আছে" : "Already in your cart");
      return;
    }
    addItem({
      id,
      type: "domain",
      name: `Domain Registration (${tld.ext})`,
      description: bn ? `${tld.ext} ডোমেইন রেজিস্ট্রেশন (১ বছর)` : `${tld.ext} Domain Registration (1 Year)`,
      price_bdt: tld.registration_bdt,
      ext: tld.ext,
    });
    toast.success(bn ? `${tld.ext} কার্টে যোগ করা হয়েছে` : `Added ${tld.ext} to cart`);
  };

  const domainFeatures = [
    { title: bn ? "ফ্রি DNS ম্যানেজমেন্ট" : "Free DNS Management", desc: bn ? "কোনো অতিরিক্ত চার্জ ছাড়া ফুল DNS রেকর্ড কন্ট্রোল" : "Complete DNS record management at zero cost" },
    { title: bn ? "ফ্রি হু-ইজ প্রাইভেসি" : "Free WHOIS Privacy", desc: bn ? "আপনার ব্যক্তিগত তথ্য স্প্যামারদের হাত থেকে সুরক্ষিত" : "Mask personal identity from public registrar directories" },
    { title: bn ? "ইমেইল ও URL ফরোয়ার্ডিং" : "Email & URL Forwarding", desc: bn ? "সহজেই কাস্টম ইমেইল ফরোয়ার্ড করুন" : "Easily forward domain mailboxes to your personal email" },
    { title: bn ? "ডোমেইন থেফ্ট প্রোটেকশন" : "Domain Theft Lock", desc: bn ? "অননুমোদিত ট্রান্সফার প্রতিরোধে সিকিউর রেজিস্ট্রি লক" : "Prevent unauthorized transfers with registrar locks" },
  ];

  return (
    <div className="pt-24 lg:pt-28 pb-16">
      {/* Hero section */}
      <section className="container mx-auto px-4 text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
            <Globe className="w-3.5 h-3.5" />
            {bn ? "স্বচ্ছ ও সাশ্রয়ী মূল্যতালিকা" : "Transparent & Honest Pricing"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "ডোমেইন মূল্য তালিকা" : "Domain Pricing & Registration"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {bn
              ? "কোনো গোপন চার্জ নেই। জনপ্রিয় সকল এক্সটেনশনের রেজিস্ট্রেশন, রিনিউ এবং ট্রান্সফারের সেরা রেট।"
              : "No hidden renewal traps. Check real-time registration, renewal, and transfer rates across popular global TLDs."}
          </p>

          <div className="max-w-2xl mx-auto mb-10">
            <DomainSearch />
          </div>
        </motion.div>
      </section>

      {/* Pricing Table Section */}
      <section className="container mx-auto px-4 max-w-5xl mb-16">
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                {bn ? "সকল TLD মূল্য তালিকা" : "TLD Pricing Table"}
              </h2>
              <p className="text-xs text-muted-foreground">
                {bn ? "১ বছরের ভ্যাট অন্তর্ভুক্ত প্রাইজ (BDT)" : "Prices in BDT for 1 Year period"}
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={bn ? "এক্সটেনশন খুঁজুন (উদাঃ .com)..." : "Filter TLD (e.g. .com)..."}
                className="pl-9 h-10 rounded-xl"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="py-3 px-4">{bn ? "এক্সটেনশন (TLD)" : "Extension"}</th>
                  <th className="py-3 px-4">{bn ? "রেজিস্ট্রেশন" : "Register"}</th>
                  <th className="py-3 px-4">{bn ? "রিনিউয়াল" : "Renew"}</th>
                  <th className="py-3 px-4">{bn ? "ট্রান্সফার" : "Transfer"}</th>
                  <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filtered.map((tld) => {
                  const inCart = isInCart(`domain-reg-${tld.ext.replace(/^\./, "")}`);
                  return (
                    <tr key={tld.id} className="hover:bg-accent/5 transition-colors">
                      <td className="py-4 px-4 font-bold text-foreground flex items-center gap-2">
                        <span>{tld.ext}</span>
                        {tld.is_popular && (
                          <Badge variant="secondary" className="text-[10px] bg-primary/10 text-primary border-primary/20">
                            {bn ? "জনপ্রিয়" : "Popular"}
                          </Badge>
                        )}
                      </td>
                      <td className="py-4 px-4 font-semibold text-primary">
                        {formatPrice(tld.registration_bdt, lang)}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {formatPrice(tld.renewal_bdt, lang)}
                      </td>
                      <td className="py-4 px-4 text-muted-foreground">
                        {formatPrice(tld.transfer_bdt, lang)}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <Button
                          size="sm"
                          variant={inCart ? "outline" : "default"}
                          onClick={() => addDomain(tld)}
                          className="h-8 rounded-lg text-xs"
                        >
                          {inCart ? (
                            <>
                              <Check className="w-3.5 h-3.5 mr-1 text-green-500" />
                              {bn ? "যুক্ত আছে" : "In Cart"}
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-3.5 h-3.5 mr-1" />
                              {bn ? "অর্ডার করুন" : "Register"}
                            </>
                          )}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-muted-foreground text-sm">
                      {bn ? "কোনো ডোমেইন এক্সটেনশন পাওয়া যায়নি" : "No domain extensions found matching your search"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Free Domain Perks */}
      <section className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {bn ? "প্রতিটি ডোমেইনের সাথে সম্পূর্ণ ফ্রি সুবিধা" : "Every Domain Includes Free Features"}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {domainFeatures.map((f, i) => (
            <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 text-left">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
