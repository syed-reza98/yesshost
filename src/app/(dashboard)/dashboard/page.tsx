"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "@/lib/router-compat";
import { Server, FileText, HeadphonesIcon, Globe, Wallet, Shield, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function DashboardOverviewPage() {
  const { user } = useAuth();
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [stats, setStats] = useState({
    servicesCount: 0,
    activeServicesCount: 0,
    invoicesCount: 0,
    unpaidInvoicesCount: 0,
    unpaidTotal: 0,
    ticketsCount: 0,
    openTicketsCount: 0,
    walletBalance: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/dashboard/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  const copyPin = () => {
    if (user?.supportPin) {
      navigator.clipboard.writeText(user.supportPin);
      toast.success(bn ? "সাপোর্ট পিন কপি করা হয়েছে" : "Support PIN copied!");
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {bn ? `স্বাগতম, ${user?.name || "গ্রাহক"}!` : `Welcome back, ${user?.name || "Customer"}!`}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {bn ? "আপনার হোস্টিং, ডোমেইন ও বিলিং সংক্রান্ত সার্বিক তথ্য।" : "Manage your hosting, domains, billing, and support from one central hub."}
          </p>
        </div>

        {user?.supportPin && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/60">
            <Shield className="w-5 h-5 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground font-medium">{bn ? "সাপোর্ট পিন" : "Support PIN"}</div>
              <div className="text-lg font-mono font-bold tracking-wider text-foreground">{user.supportPin}</div>
            </div>
            <button
              onClick={copyPin}
              className="px-2.5 py-1 text-xs rounded-lg bg-secondary hover:bg-secondary/80 font-medium transition-colors"
            >
              {bn ? "কপি" : "Copy"}
            </button>
          </div>
        )}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{bn ? "সক্রিয় সার্ভিস" : "Active Services"}</span>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold mt-3">{stats.activeServicesCount}</div>
          <Link href="/dashboard/services" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 hover:underline">
            {bn ? "সার্ভিসসমূহ দেখুন" : "View services"} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{bn ? "ওয়ালেট ব্যালেন্স" : "Wallet Balance"}</span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Wallet className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold mt-3">৳{stats.walletBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}</div>
          <Link href="/dashboard/wallet" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 hover:underline">
            {bn ? "টপ-আপ করুন" : "Top up wallet"} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{bn ? "বকেয়া ইনভয়েস" : "Unpaid Invoices"}</span>
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold mt-3">{stats.unpaidInvoicesCount}</div>
          <div className="text-xs text-muted-foreground mt-1">৳{stats.unpaidTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })} {bn ? "বকেয়া" : "due"}</div>
          <Link href="/dashboard/billing" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-2 hover:underline">
            {bn ? "বিল পরিশোধ করুন" : "Pay invoices"} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">{bn ? "খোলা টিকিট" : "Open Tickets"}</span>
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold mt-3">{stats.openTicketsCount}</div>
          <Link href="/dashboard/support" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 hover:underline">
            {bn ? "টিকেট ম্যানেজ করুন" : "Manage tickets"} <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Quick Launch & Actions */}
      <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
        <h2 className="text-lg font-bold mb-4">{bn ? "দ্রুত শর্টকাট" : "Quick Actions"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link
            href="/dashboard/services"
            className="p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/50 transition-all text-center group"
          >
            <Server className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold">{bn ? "হোস্টিং সার্ভিস" : "Hosting Services"}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{bn ? "cPanel ও সার্ভার" : "cPanel & Server"}</div>
          </Link>

          <Link
            href="/dashboard/order-service"
            className="p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/50 transition-all text-center group"
          >
            <Globe className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold">{bn ? "নতুন অর্ডার" : "Order New"}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{bn ? "ডোমেইন ও প্ল্যান" : "Domain & Hosting"}</div>
          </Link>

          <Link
            href="/dashboard/billing"
            className="p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/50 transition-all text-center group"
          >
            <FileText className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold">{bn ? "বিলিং হিস্ট্রি" : "Billing History"}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{bn ? "ইনভয়েস ও রসিদ" : "Invoices & Receipts"}</div>
          </Link>

          <Link
            href="/dashboard/support"
            className="p-4 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/50 transition-all text-center group"
          >
            <HeadphonesIcon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
            <div className="text-sm font-semibold">{bn ? "টেকনিক্যাল সাপোর্ট" : "Tech Support"}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{bn ? "২৪/৭ হেল্পডেস্ক" : "24/7 Helpdesk"}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
