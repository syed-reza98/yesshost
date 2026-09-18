"use client";

import { useEffect, useState } from "react";
import { Users, Server, FileText, HeadphonesIcon, TrendingUp, DollarSign, Activity, ArrowUpRight, Loader2 } from "lucide-react";
import { Link } from "@/lib/router-compat";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalServices: 0,
    activeServices: 0,
    suspendedServices: 0,
    totalInvoices: 0,
    unpaidInvoices: 0,
    totalRevenue: 0,
    totalDue: 0,
    totalTickets: 0,
    openTickets: 0,
    serversCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch("/api/admin/stats");
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (err) {
        console.error("Failed to load admin stats", err);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, []);

  if (loading) {
    return (
      <div className="p-12 text-center text-muted-foreground flex flex-col items-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
        <p className="text-sm">Loading executive platform analytics...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Platform Executive Overview
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Global health, cloud infrastructure load, financial settlement, and customer metrics.
        </p>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">Total Revenue</span>
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold mt-3">
            ৳{stats.totalRevenue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
          </div>
          <div className="text-xs text-muted-foreground mt-1">Settled invoices to date</div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">Active Services</span>
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Server className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold mt-3">{stats.activeServices}</div>
          <div className="text-xs text-muted-foreground mt-1">{stats.totalServices} total hosted</div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">Registered Users</span>
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold mt-3">{stats.totalUsers}</div>
          <div className="text-xs text-muted-foreground mt-1">Customers & staff</div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground uppercase">WHM Server Nodes</span>
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-extrabold mt-3">{stats.serversCount}</div>
          <Link href="/admin/whm" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1 hover:underline">
            Manage cluster <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Quick Launch Operations */}
      <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
        <h2 className="text-lg font-bold">Infrastructure & Back-Office Controls</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/admin/whm"
            className="p-5 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/30 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">WHM Server Clusters</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Configure root API tokens, test live connectivity, and review server capacity.
              </p>
            </div>
          </Link>

          <Link
            href="/dashboard/billing"
            className="p-5 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/30 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Billing & Overdue Invoices</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {stats.unpaidInvoices} invoices unpaid (৳{stats.totalDue.toLocaleString()}).
              </p>
            </div>
          </Link>

          <Link
            href="/call-center"
            className="p-5 rounded-xl border border-border/60 hover:border-primary/50 hover:bg-muted/30 transition-all flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <HeadphonesIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Call Center Console</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Omnichannel live chat via native SSE and WebRTC softphone interface.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
