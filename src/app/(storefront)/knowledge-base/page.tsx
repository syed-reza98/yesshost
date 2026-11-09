"use client";

import { motion } from "framer-motion";
import { Search, BookOpen, Server, Globe, Mail, Shield, ChevronRight, FileText, HelpCircle, Loader2 } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface KBCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

interface KBArticle {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  contentBn?: string;
  contentEn?: string;
  views?: number;
}

const fallbackCategories: KBCategory[] = [
  { id: "cat-cpanel", name: "cPanel & Control Panel", slug: "cpanel", description: "File manager, database, php versions & backups" },
  { id: "cat-domains", name: "Domain & DNS Setup", slug: "domain-dns", description: "Nameserver changes, DNS propagation & WHOIS" },
  { id: "cat-email", name: "Email Accounts & Webmail", slug: "email", description: "Outlook setup, SMTP, IMAP & webmail login" },
  { id: "cat-ssl", name: "SSL Certificates & Security", slug: "ssl-security", description: "Free AutoSSL, HTTPS redirects & cloudflare" },
  { id: "cat-billing", name: "Billing, Invoices & Payments", slug: "billing", description: "bKash payments, renewals, invoice receipts" },
];

const fallbackArticles: KBArticle[] = [
  { id: "art-1", categoryId: "cat-cpanel", title: "How to log in to your cPanel without entering a password", slug: "cpanel-direct-sso-login" },
  { id: "art-2", categoryId: "cat-cpanel", title: "Changing PHP version and enabling extensions in cPanel", slug: "change-php-version" },
  { id: "art-3", categoryId: "cat-domains", title: "Pointing your domain nameservers to Yess Host servers", slug: "update-domain-nameservers" },
  { id: "art-4", categoryId: "cat-domains", title: "Managing DNS records (A, CNAME, MX, TXT) properly", slug: "manage-dns-records" },
  { id: "art-5", categoryId: "cat-email", title: "Configuring business email in Microsoft Outlook & Android Gmail", slug: "setup-business-email-outlook" },
  { id: "art-6", categoryId: "cat-ssl", title: "Enabling free AutoSSL certificate and forcing HTTPS rewrite", slug: "enable-free-autossl" },
  { id: "art-7", categoryId: "cat-billing", title: "How to pay unpaid invoices using bKash or Nagad automatically", slug: "pay-invoice-bkash-nagad" },
];

export default function KnowledgeBasePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<KBCategory[]>(fallbackCategories);
  const [articles, setArticles] = useState<KBArticle[]>(fallbackArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/knowledge-base")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories && data.categories.length > 0) {
          setCategories(data.categories);
        }
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        }
      })
      .catch((err) => console.error("Error loading knowledge base data:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredArticles = useMemo(() => {
    if (!search.trim()) return articles;
    const q = search.toLowerCase();
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        (a.contentEn && a.contentEn.toLowerCase().includes(q)) ||
        (a.contentBn && a.contentBn.toLowerCase().includes(q))
    );
  }, [articles, search]);

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-[80vh]">
      {/* Header */}
      <section className="container mx-auto px-4 max-w-4xl text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "নলেজ বেস ও সহায়তা কেন্দ্র" : "Knowledge Base & Guides"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
            {bn
              ? "ওয়েব হোস্টিং, ডোমেইন, সিপ্যানেল, ইমেইল ও ওয়ার্ডপ্রেস সংক্রান্ত যেকোনো সমস্যার বিস্তারিত সমাধান।"
              : "Search step-by-step guides, cPanel tutorials, DNS instructions, and troubleshooting articles."}
          </p>

          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={bn ? "আর্টিকেল সার্চ করুন (উদাঃ SSL, cPanel, bKash)..." : "Search articles (e.g. SSL, DNS, email)..."}
              className="pl-12 h-12 rounded-2xl shadow-sm text-sm"
            />
          </div>
        </motion.div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 max-w-5xl">
        {search.trim() ? (
          <div>
            <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
              {bn ? `সার্চ ফলাফল (${filteredArticles.length})` : `Search Results (${filteredArticles.length})`}
            </h2>
            <div className="space-y-3">
              {filteredArticles.map((art) => (
                <Link
                  key={art.id}
                  href={`/knowledge-base/${art.slug}`}
                  className="p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-all flex items-center justify-between group block shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <FileText className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                        {art.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Guide & Solution</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:text-primary transition-all" />
                </Link>
              ))}
              {filteredArticles.length === 0 && (
                <div className="p-8 text-center text-muted-foreground bg-card rounded-2xl border border-border/50">
                  {bn ? "কোনো আর্টিকেল খুঁজে পাওয়া যায়নি।" : "No articles found matching your query."}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const catArticles = articles.filter(
                (a) => a.categoryId === cat.id || a.categoryId === cat.slug
              );
              return (
                <div
                  key={cat.id}
                  className="p-6 rounded-2xl bg-card border border-border/60 flex flex-col justify-between shadow-xs hover:border-border transition-all"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-1">{cat.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                      {cat.description || "Guides and tutorials for this category"}
                    </p>
                    <div className="space-y-2 mb-4">
                      {catArticles.slice(0, 4).map((art) => (
                        <Link
                          key={art.id}
                          href={`/knowledge-base/${art.slug}`}
                          className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group truncate"
                        >
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-primary/70 group-hover:translate-x-0.5 transition-transform" />
                          <span className="truncate">{art.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-primary pt-2 border-t border-border/40 inline-flex items-center gap-1">
                    {catArticles.length} {bn ? "টি আর্টিকেল" : "articles"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
