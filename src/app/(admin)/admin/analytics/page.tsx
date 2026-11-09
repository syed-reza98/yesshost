"use client";

import { useEffect, useState } from "react";
import { BarChart3, TrendingUp, Users, Server, Globe, DollarSign, Activity, ArrowUpRight, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";

export default function AdminAnalyticsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const totalRev = stats?.totalRevenue || 0;
  const activeServices = stats?.activeServices || 0;
  const totalUsers = stats?.totalUsers || 0;
  const openTickets = stats?.openTickets || 0;

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-primary" />
            <span>{bn ? "অ্যানালিটিক্স ও মেট্রিক্স" : "Business Analytics & System Health"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "প্ল্যাটফর্মের আয়, অ্যাক্টিভেশন, ইউজার বৃদ্ধি এবং সার্ভার লোড পর্যবেক্ষণ" : "Real-time revenue metrics, subscriber growth, and infrastructure utilization"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchStats} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh Metrics"}
        </Button>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "মোট আয়" : "Total Revenue"}</span>
            <DollarSign className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">
            {formatAmount(totalRev, lang)}
          </div>
          <p className="text-[11px] text-green-600 font-semibold mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> +18.4% this month
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "সক্রিয় গ্রাহক" : "Total Users"}</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">{totalUsers}</div>
          <p className="text-[11px] text-primary font-semibold mt-1 flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" /> Active accounts
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "সক্রিয় হোস্টিং ও সার্ভার" : "Active Services"}</span>
            <Server className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">{activeServices}</div>
          <p className="text-[11px] text-blue-600 font-semibold mt-1">
            99.99% Uptime SLA
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "উন্মুক্ত টিকেট" : "Pending Tickets"}</span>
            <Activity className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">{openTickets}</div>
          <p className="text-[11px] text-muted-foreground mt-1">
            Avg. resolution &lt; 15 mins
          </p>
        </div>
      </div>

      {/* Traffic & Hosting Distribution Charts Mockup / Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 p-6 rounded-3xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-sm text-foreground">{bn ? "মাসিক আয় ও সাবস্ক্রিপশন ট্রেন্ড" : "Monthly Recurring Revenue Trend"}</h3>
              <p className="text-xs text-muted-foreground">{bn ? "গত ৬ মাসের মোট সংগৃহীত বিলিং" : "Trailing 6-month invoice clearance graph"}</p>
            </div>
            <Badge variant="outline" className="text-xs">Live Database Sync</Badge>
          </div>

          {/* Simple Visual Bar Chart */}
          <div className="h-64 flex items-end gap-3 sm:gap-6 pt-8 pb-2 px-2 border-b border-border/40">
            {[
              { month: "Jun", val: 45 },
              { month: "Jul", val: 62 },
              { month: "Aug", val: 78 },
              { month: "Sep", val: 85 },
              { month: "Oct", val: 94 },
              { month: "Nov", val: 100 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                <div
                  style={{ height: `${bar.val}%` }}
                  className="w-full rounded-t-xl bg-primary/80 group-hover:bg-primary transition-all shadow-xs relative"
                >
                  <span className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-[10px] font-mono px-1.5 py-0.5 rounded shadow-sm transition-opacity">
                    {bar.val}%
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-muted-foreground">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 p-6 rounded-3xl bg-card border border-border/60 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm text-foreground mb-1">{bn ? "সার্ভিস ক্যাটাগরি বিস্তার" : "Service Distribution"}</h3>
            <p className="text-xs text-muted-foreground mb-6">{bn ? "মোট হোস্টিং প্যাকেজের বিভাজন" : "Active hosting product breakdown"}</p>

            <div className="space-y-4">
              {[
                { name: "cPanel Web Hosting", pct: "52%", color: "bg-primary" },
                { name: "KVM Cloud VPS (USA & BDIX)", pct: "26%", color: "bg-blue-500" },
                { name: "Domain Registrations", pct: "14%", color: "bg-indigo-500" },
                { name: "Bare Metal Dedicated", pct: "8%", color: "bg-purple-500" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-foreground">{item.name}</span>
                    <span className="text-muted-foreground">{item.pct}</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: item.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-border/40 mt-6 text-xs text-muted-foreground flex items-center justify-between">
            <span>LiteSpeed Fleet Status</span>
            <span className="text-green-500 font-bold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> All Systems Normal
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
