"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Download, Palette, RefreshCw, Receipt, CheckCircle2, Clock, ShoppingBag, Loader2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";

interface ThemeOrder {
  id: string;
  status: string;
  amountBdt: number;
  createdAt: string;
  paidAt: string | null;
  invoiceId: string | null;
  themeId: string;
  theme?: {
    id: string;
    name: string;
    slug: string;
    filePath: string | null;
    previewUrl: string | null;
  };
}

export default function DashboardMyThemesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [rows, setRows] = useState<ThemeOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/themes/my-purchases");
      if (!res.ok) throw new Error("Failed to load");
      const data = await res.json();
      setRows(data.orders || []);
    } catch (err) {
      console.error("My themes load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const paid = useMemo(() => rows.filter((r) => r.status === "paid" || r.status === "completed"), [rows]);
  const pending = useMemo(() => rows.filter((r) => r.status !== "paid" && r.status !== "completed"), [rows]);
  const spent = paid.reduce((s, r) => s + r.amountBdt, 0);

  const handleDownload = async (row: ThemeOrder) => {
    if (!row.theme?.filePath) {
      toast.error(bn ? "এই থিমের ফাইল এখনো আপলোড হয়নি" : "Theme file is not available yet");
      return;
    }
    setBusy(row.id);
    try {
      const res = await fetch(`/api/themes/download?themeId=${row.themeId}&orderId=${row.id}`);
      if (!res.ok) throw new Error("Download link failed");
      const data = await res.json();
      if (data.url) {
        window.open(data.url, "_blank", "noopener,noreferrer");
      } else {
        throw new Error("No download URL");
      }
    } catch (err: any) {
      toast.error(bn ? "ডাউনলোড লিংক তৈরি করা যায়নি" : "Could not generate download link");
    } finally {
      setBusy(null);
    }
  };

  const stats = [
    { label: bn ? "কেনা থিম" : "Owned Themes", value: paid.length, detail: bn ? "ডাউনলোডযোগ্য" : "ready to download", icon: Palette, cls: "bg-primary/10 text-primary" },
    { label: bn ? "অপেক্ষমাণ" : "Pending Payment", value: pending.length, detail: bn ? "পেমেন্ট বাকি" : "awaiting payment", icon: Clock, cls: "bg-amber-500/10 text-amber-600" },
    { label: bn ? "মোট ব্যয়" : "Total Spent", value: `৳${formatAmount(spent, lang)}`, detail: bn ? "থিম ক্রয়ে" : "on themes", icon: Receipt, cls: "bg-emerald-500/10 text-emerald-600" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "আমার থিম" : "My Purchased Themes"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {bn ? "কেনা থিম ডাউনলোড করুন এবং অপেক্ষমাণ পেমেন্ট সম্পন্ন করুন" : "Download purchased themes and complete pending payments"}
          </p>
        </div>
        <Button variant="outline" onClick={load} className="gap-2 shrink-0">
          <RefreshCw className="w-4 h-4" />
          {bn ? "রিফ্রেশ" : "Refresh"}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s, idx) => (
          <div key={idx} className="rounded-xl border border-border bg-card p-4 shadow-xs">
            <div className={`w-8 h-8 rounded-lg ${s.cls} flex items-center justify-center mb-3`}>
              <s.icon className="w-4 h-4" />
            </div>
            <p className="text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            <p className="text-[11px] text-muted-foreground/70">{s.detail}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : rows.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center shadow-xs">
          <Palette className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-foreground">
            {bn ? "এখনো কোনো থিম কেনা হয়নি" : "No Themes Purchased Yet"}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            {bn ? "থিম স্টোর থেকে ওয়েবসাইট টেমপ্লেট কিনুন" : "Visit the theme store to purchase website templates"}
          </p>
          <Button asChild>
            <Link href="/themes">{bn ? "থিম স্টোর দেখুন" : "Browse Theme Store"}</Link>
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Paid themes */}
          {paid.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {bn ? "সক্রিয় লাইসেন্স" : "Active Licenses"}
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {paid.map((row) => (
                  <div key={row.id} className="rounded-xl border border-border bg-card p-4 shadow-xs">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-foreground">
                          {row.theme?.name || `Theme #${row.themeId.slice(0, 8)}`}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {bn ? "কেনা:" : "Purchased:"} {new Date(row.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-700 text-[10px]">
                        {bn ? "সক্রিয়" : "Active"}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-foreground">
                        ৳{formatAmount(row.amountBdt, lang)}
                      </span>
                      <div className="flex gap-2">
                        {row.theme?.previewUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="h-8 text-xs"
                          >
                            <a href={row.theme.previewUrl} target="_blank" rel="noopener noreferrer">
                              {bn ? "প্রিভিউ" : "Preview"}
                            </a>
                          </Button>
                        )}
                        <Button
                          size="sm"
                          onClick={() => handleDownload(row)}
                          disabled={busy === row.id || !row.theme?.filePath}
                          className="h-8 gap-1.5 text-xs"
                        >
                          {busy === row.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Download className="w-3.5 h-3.5" />
                          )}
                          {bn ? "ডাউনলোড" : "Download"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending themes */}
          {pending.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                {bn ? "অপেক্ষমাণ পেমেন্ট" : "Pending Payments"}
              </h2>
              <div className="space-y-3">
                {pending.map((row) => (
                  <div key={row.id} className="rounded-xl border border-amber-200 bg-amber-50/50 p-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {row.theme?.name || `Theme #${row.themeId.slice(0, 8)}`}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ৳{formatAmount(row.amountBdt, lang)} · {bn ? "পেমেন্ট বাকি" : "Payment pending"}
                      </p>
                    </div>
                    {row.invoiceId && (
                      <Button size="sm" variant="outline" asChild className="h-8 text-xs shrink-0">
                        <Link href={`/dashboard/billing?invoice=${row.invoiceId}&action=pay`}>
                          {bn ? "পেমেন্ট করুন" : "Pay Now"}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
