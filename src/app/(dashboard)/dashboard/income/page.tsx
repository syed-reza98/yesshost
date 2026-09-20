"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Wallet, Receipt, Clock, CalendarCheck, CreditCard, Download, Loader2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { downloadCsv, csvDate } from "@/lib/export-csv";
import Link from "next/link";

interface IncomeData {
  signupAt: string | null;
  totals: {
    lifetimeSpend: number;
    paidInvoices: number;
    pendingDue: number;
    walletDeposits: number;
    firstPaymentAt: string | null;
    daysToFirstPayment: number | null;
  };
  monthly: Array<{ month: string; amount: number; count: number }>;
  byMethod: Array<{ method: string; amount: number; count: number }>;
  recent: Array<{
    id: string;
    reference: string;
    amount: number;
    method: string;
    at: string;
    source: string;
  }>;
}

export default function DashboardIncomePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [data, setData] = useState<IncomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard/income")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load income data");
        return res.json();
      })
      .then((d) => setData(d))
      .catch((err) => console.error("Income fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-5">
        <Skeleton className="h-10 w-56" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {[0, 1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  const t = data?.totals;
  const monthLabel = (m: string) => {
    const [y, mo] = m.split("-");
    return new Date(Number(y), Number(mo) - 1, 1).toLocaleDateString(bn ? "bn-BD" : "en-US", {
      month: "short",
      year: "2-digit",
    });
  };

  const stats = [
    {
      icon: TrendingUp,
      label: bn ? "মোট পরিশোধ (লাইফটাইম)" : "Lifetime Payments",
      value: t?.lifetimeSpend ?? 0,
      tone: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Receipt,
      label: bn ? "পরিশোধিত ইনভয়েস" : "Paid Invoices",
      value: t?.paidInvoices ?? 0,
      tone: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Clock,
      label: bn ? "বকেয়া" : "Pending Due",
      value: t?.pendingDue ?? 0,
      tone: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-500/10",
    },
    {
      icon: Wallet,
      label: bn ? "ওয়ালেট ডিপোজিট" : "Wallet Deposits",
      value: t?.walletDeposits ?? 0,
      tone: "text-sky-600 dark:text-sky-400",
      bg: "bg-sky-500/10",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "আয় ও পেমেন্ট হিস্ট্রি" : "Income & Payments"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {bn ? "সাইন-আপ থেকে পেমেন্ট পর্যন্ত সম্পূর্ণ হিসাব" : "Lifetime ledger, billing journey, and transactional receipts"}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() =>
            downloadCsv(
              "income-events",
              ["Reference", "Source", "Method", "Amount (BDT)", "Date"],
              (data?.recent ?? []).map((e) => [e.reference, e.source, e.method ?? "", e.amount, csvDate(e.at)])
            )
          }
          disabled={!data?.recent.length}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          {bn ? "CSV ডাউনলোড" : "Export CSV"}
        </Button>
      </div>

      {/* Customer Journey Strip */}
      <div className="rounded-xl border border-border bg-card p-4 sm:p-5 grid gap-4 sm:grid-cols-3 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{bn ? "সাইন-আপ তারিখ" : "Account Created"}</p>
            <p className="text-sm font-semibold text-foreground">
              {data?.signupAt ? new Date(data.signupAt).toLocaleDateString(bn ? "bn-BD" : "en-US") : "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600">
            <CreditCard className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{bn ? "প্রথম পেমেন্ট" : "First Payment"}</p>
            <p className="text-sm font-semibold text-foreground">
              {t?.firstPaymentAt ? new Date(t.firstPaymentAt).toLocaleDateString(bn ? "bn-BD" : "en-US") : "—"}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{bn ? "সাইন-আপ → প্রথম পেমেন্ট" : "Sign-up to First Payment"}</p>
            <p className="text-sm font-semibold text-foreground">
              {t?.daysToFirstPayment !== null && t?.daysToFirstPayment !== undefined
                ? `${formatAmount(t.daysToFirstPayment, lang)} ${bn ? "দিন" : "days"}`
                : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="rounded-xl border border-border bg-card p-4 shadow-xs"
          >
            <div className={`w-9 h-9 rounded-lg ${s.bg} ${s.tone} flex items-center justify-center mb-3`}>
              <s.icon className="w-5 h-5" />
            </div>
            <p className={`text-xl font-bold ${s.tone}`}>৳{formatAmount(s.value, lang)}</p>
            <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Monthly Chart */}
      {data?.monthly.length ? (
        <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs">
          <h2 className="text-sm font-semibold text-foreground mb-4">
            {bn ? "মাসভিত্তিক পেমেন্ট পরিসংখ্যান" : "Monthly Payment Distribution"}
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.monthly.map((m) => ({ ...m, label: monthLabel(m.month) }))}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                <XAxis dataKey="label" fontSize={11} stroke="currentColor" className="text-muted-foreground" />
                <YAxis fontSize={11} stroke="currentColor" className="text-muted-foreground" />
                <Tooltip
                  contentStyle={{ backgroundColor: "var(--card)", borderColor: "var(--border)", borderRadius: "8px" }}
                  formatter={(v: any) => [`৳${formatAmount(Number(v), lang)}`, bn ? "পরিমাণ" : "Amount"]}
                />
                <Bar dataKey="amount" radius={[6, 6, 0, 0]} fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-card p-8 text-center shadow-xs">
          <TrendingUp className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-50" />
          <h3 className="text-base font-semibold text-foreground">
            {bn ? "এখনো কোনো পেমেন্ট রেকর্ড নেই" : "No Payments Recorded Yet"}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 mb-4">
            {bn ? "আপনার প্রথম ইনভয়েস পরিশোধ সম্পন্ন হলে এখানে চার্ট দেখতে পাবেন।" : "When you make your first service payment, your financial timeline will appear here."}
          </p>
          <Button asChild>
            <Link href="/hosting-plans">{bn ? "প্ল্যান বাছাই করুন" : "Browse Plans"}</Link>
          </Button>
        </div>
      )}

      {/* Breakdown by Method & Recent Events */}
      <div className="grid md:grid-cols-2 gap-4">
        {data?.byMethod.length ? (
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs">
            <h2 className="text-sm font-semibold text-foreground mb-3">
              {bn ? "পেমেন্ট মাধ্যমভিত্তিক হিসাব" : "Payments by Gateway"}
            </h2>
            <div className="space-y-3">
              {data.byMethod.map((m) => (
                <div key={m.method} className="flex items-center justify-between text-sm py-1 border-b border-border/50 last:border-0">
                  <span className="capitalize text-muted-foreground font-medium">{m.method}</span>
                  <span className="font-semibold text-foreground">
                    ৳{formatAmount(m.amount, lang)} <span className="text-xs text-muted-foreground">({m.count})</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {data?.recent.length ? (
          <div className="rounded-xl border border-border bg-card p-4 sm:p-5 shadow-xs">
            <h2 className="text-sm font-semibold text-foreground mb-3">
              {bn ? "সাম্প্রতিক লেনদেন" : "Recent Payments"}
            </h2>
            <div className="space-y-2.5">
              {data.recent.map((e) => (
                <div key={`${e.source}-${e.id}`} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-foreground">{e.reference}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {new Date(e.at).toLocaleDateString(bn ? "bn-BD" : "en-US")} · {e.method}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">৳{formatAmount(e.amount, lang)}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
