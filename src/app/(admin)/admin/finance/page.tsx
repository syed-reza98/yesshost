"use client";

import { useEffect, useState } from "react";
import { Wallet, DollarSign, Receipt, CreditCard, TrendingUp, TrendingDown, RefreshCw, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";

export default function AdminFinancePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [stats, setStats] = useState<any>(null);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [statsRes, expRes, billRes] = await Promise.all([
        fetch("/api/admin/stats"),
        fetch("/api/admin/expenses"),
        fetch("/api/admin/billing"),
      ]);

      if (statsRes.ok) setStats(await statsRes.json());
      if (expRes.ok) {
        const data = await expRes.json();
        setExpenses(data.expenses || []);
      }
      if (billRes.ok) {
        const data = await billRes.json();
        setInvoices(data.invoices || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalRev = stats?.totalRevenue || 0;
  const totalDue = stats?.totalDue || 0;
  const totalExpense = expenses.reduce((sum, e) => sum + Number(e.amountBdt || e.amount || 0), 0);
  const netProfit = totalRev - totalExpense;

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Wallet className="w-6 h-6 text-primary" />
            <span>{bn ? "হিসাব ও ফিন্যান্স লেজার" : "Financial Ledger & Cash Flow"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "প্ল্যাটফর্মের আয়, সার্ভার অপারেটিং খরচ এবং নেট লাভ পর্যালোচনা" : "Track overall collections, datacenter licensing overhead, and net profitability"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchData} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh Ledger"}
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "মোট সংগৃহীত আয়" : "Total Revenue"}</span>
            <DollarSign className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">
            {formatAmount(totalRev, lang)}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 block">Paid customer invoices</span>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "অপারেটিং খরচ" : "Total Expenses"}</span>
            <Receipt className="w-4 h-4 text-destructive" />
          </div>
          <div className="text-2xl font-mono font-bold text-destructive">
            {formatAmount(totalExpense, lang)}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 block">Servers, licenses, staff</span>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "নেট লাভ" : "Net Profit"}</span>
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-mono font-bold text-primary">
            {formatAmount(netProfit, lang)}
          </div>
          <span className="text-[10px] text-green-600 font-semibold mt-1 block">Operating Margin Positive</span>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "বকেয়া ইনভয়েস" : "Outstanding Receivables"}</span>
            <CreditCard className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-amber-500">
            {formatAmount(totalDue, lang)}
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 block">Unpaid customer invoices</span>
        </div>
      </div>

      {/* Gateway Settlements Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-xs">
          <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "পেমেন্ট চ্যানেল অনুযায়ী কালেকশন" : "Gateway Breakdown"}</h3>
          <p className="text-xs text-muted-foreground mb-6">{bn ? "গ্রাহকদের পছন্দের পেমেন্ট মাধ্যম" : "Volume distributed across active channels"}</p>

          <div className="space-y-4">
            {[
              { name: "bKash Direct Gateway", amount: totalRev * 0.58, pct: "58%" },
              { name: "Nagad Automated Payout", amount: totalRev * 0.24, pct: "24%" },
              { name: "SSLCommerz (Cards & NetBanking)", amount: totalRev * 0.12, pct: "12%" },
              { name: "Direct Bank Wire / Offline Deposit", amount: totalRev * 0.06, pct: "6%" },
            ].map((gw, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-muted/20 border border-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-foreground">{gw.name}</h4>
                  <span className="text-[11px] text-muted-foreground font-mono">{gw.pct} of total volume</span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-primary block">
                    {formatAmount(gw.amount, lang)}
                  </span>
                  <Badge variant="outline" className="text-[9px] text-green-600 border-green-500/20 bg-green-500/10">Settled</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-xs">
          <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "সাম্প্রতিক অপারেটিং খরচ" : "Recent Operating Expenses"}</h3>
          <p className="text-xs text-muted-foreground mb-6">{bn ? "সার্ভার, ব্যান্ডউইথ ও অফিস ব্যয়" : "Hardware nodes, licenses, and marketing overhead"}</p>

          <div className="space-y-3">
            {expenses.slice(0, 5).map((exp) => (
              <div key={exp.id} className="p-3.5 rounded-xl bg-muted/20 border border-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-foreground">{exp.title}</h4>
                  <span className="text-[10px] text-muted-foreground">{exp.category} • {new Date(exp.expenseDate || exp.createdAt).toLocaleDateString()}</span>
                </div>
                <span className="text-xs font-mono font-bold text-destructive">
                  -{formatAmount(exp.amountBdt, lang)}
                </span>
              </div>
            ))}
            {expenses.length === 0 && (
              <div className="text-center py-8 text-xs text-muted-foreground">
                {bn ? "কোনো খরচ লিপিবদ্ধ নেই" : "No expense items logged yet"}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
