"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { BookOpen, Search, ChevronRight, Loader2, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface KbCategory {
  id: string;
  name: string;
  slug: string;
  icon?: string;
}

interface KbArticle {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  contentBn?: string;
  contentEn?: string;
  views: number;
}

export default function DashboardKnowledgeBasePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [categories, setCategories] = useState<KbCategory[]>([]);
  const [articles, setArticles] = useState<KbArticle[]>([]);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/knowledge-base")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories || []);
        setArticles(data.articles || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return articles.filter((a) => {
      const okCat = activeCat === "all" || a.categoryId === activeCat;
      const okSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        (a.contentEn || "").toLowerCase().includes(q) ||
        (a.contentBn || "").toLowerCase().includes(q);
      return okCat && okSearch;
    });
  }, [articles, search, activeCat]);

  const categoryArticleCount = useMemo(() => {
    const m: Record<string, number> = {};
    for (const a of articles) {
      m[a.categoryId] = (m[a.categoryId] || 0) + 1;
    }
    return m;
  }, [articles]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">
          {bn ? "নলেজবেস" : "Knowledge Base"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {bn
            ? "হোস্টিং, ডোমেইন ও cPanel সংক্রান্ত সরকারি গাইড ও টিউটোরিয়াল"
            : "Official guides, tutorials, and troubleshooting articles for hosting, domains, and cPanel"}
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={bn ? "আর্টিকেল খুঁজুন..." : "Search articles..."}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-border text-foreground outline-none focus:ring-2 focus:ring-primary/30 text-sm"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        <button
          key="all"
          onClick={() => setActiveCat("all")}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
            activeCat === "all"
              ? "bg-primary text-primary-foreground border-primary shadow-xs"
              : "bg-card text-muted-foreground border-border hover:bg-muted"
          }`}
        >
          {bn ? "সব" : "All"} ({articles.length})
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveCat(c.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
              activeCat === c.id
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card text-muted-foreground border-border hover:bg-muted"
            }`}
          >
            {c.name} ({categoryArticleCount[c.id] || 0})
          </button>
        ))}
      </div>

      {/* Articles */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-10 text-center shadow-xs">
          <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-foreground">
            {bn ? "কোনো আর্টিকেল পাওয়া যায়নি" : "No Articles Found"}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "ভিন্ন শব্দ দিয়ে খোঁজার চেষ্টা করুন" : "Try a different search term or browse all categories"}
          </p>
        </div>
      ) : (
        <div className="space-y-2.5">
          {filtered.map((a) => {
            const cat = categories.find((c) => c.id === a.categoryId);
            return (
              <Link
                key={a.id}
                href={`/knowledge-base/${a.slug}`}
                className="rounded-xl border border-border bg-card p-4 flex items-center justify-between gap-3 hover:shadow-md hover:border-primary/30 transition-all block"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground truncate">{a.title}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      {cat && (
                        <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">
                          {cat.name}
                        </span>
                      )}
                      {a.views > 0 && (
                        <span className="text-[10px] text-muted-foreground">
                          {a.views} {bn ? "ভিউ" : "views"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              </Link>
            );
          })}
        </div>
      )}

      {/* Category Quick Links (when no search active) */}
      {!search && activeCat === "all" && categories.length > 0 && filtered.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs mt-2">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            {bn ? "ক্যাটাগরি অনুযায়ী ব্রাউজ করুন" : "Browse by Category"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCat(c.id)}
                className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{c.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {categoryArticleCount[c.id] || 0} {bn ? "টি আর্টিকেল" : "articles"}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
