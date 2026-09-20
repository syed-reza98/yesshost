"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, AlertTriangle, CheckCircle2, RefreshCw, Server, Wifi, Globe, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface NodeCheck {
  key: string;
  labelEn: string;
  labelBn: string;
  ok: boolean;
  ms: number;
  detail?: string;
}

interface ServerNode {
  location: string;
  city: string;
  latency: string;
  load: number;
  status: string;
}

export default function DashboardServerStatusPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [checks, setChecks] = useState<NodeCheck[]>([]);
  const [servers, setServers] = useState<ServerNode[]>([]);
  const [overallStatus, setOverallStatus] = useState<string>("operational");
  const [roundTripMs, setRoundTripMs] = useState<number>(0);
  const [checkedAt, setCheckedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadStatus = useCallback(async () => {
    setRefreshing(true);
    const start = performance.now();
    try {
      const res = await fetch("/api/server-status", { cache: "no-store" });
      const data = await res.json();
      setRoundTripMs(Math.round(performance.now() - start));
      if (data.checks) setChecks(data.checks);
      if (data.servers) setServers(data.servers);
      if (data.status) setOverallStatus(data.status);
      setCheckedAt(data.checkedAt || new Date().toISOString());
    } catch (err) {
      console.error("Server status error:", err);
      setOverallStatus("degraded");
    } finally {
      setRefreshing(false);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
    const interval = setInterval(loadStatus, 45000);
    return () => clearInterval(interval);
  }, [loadStatus]);

  if (loading) {
    return (
      <div className="space-y-5">
        <Skeleton className="h-16 w-full rounded-xl" />
        <Skeleton className="h-20 w-full rounded-xl" />
        <div className="grid sm:grid-cols-2 gap-4">
          <Skeleton className="h-56 w-full rounded-xl" />
          <Skeleton className="h-56 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  const allOperational = overallStatus === "operational";

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "সার্ভার ও সিস্টেম স্ট্যাটাস" : "Server & Infrastructure Status"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {bn ? "আমাদের গ্লোবাল ক্লাউড ও BDIX নোডগুলোর রিয়েল-টাইম পারফরম্যান্স" : "Live telemetry, node health, and service uptime monitoring"}
          </p>
        </div>

        <Button
          variant="outline"
          onClick={loadStatus}
          disabled={refreshing}
          className="gap-2 shrink-0"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ করুন" : "Refresh Status"}
        </Button>
      </div>

      {/* Global Status Banner */}
      <div
        className={`rounded-xl border p-5 flex items-center justify-between shadow-xs ${
          allOperational
            ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-900 dark:text-emerald-300"
            : "border-amber-500/20 bg-amber-500/10 text-amber-900 dark:text-amber-300"
        }`}
      >
        <div className="flex items-center gap-3">
          {allOperational ? (
            <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
          ) : (
            <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0" />
          )}
          <div>
            <h2 className="text-base font-bold">
              {allOperational
                ? bn
                  ? "সকল সিস্টেম ও ক্লাস্টার সক্রিয় এবং স্থিতিশীল"
                  : "All Core Systems & Nodes Operational"
                : bn
                ? "কিছু সার্ভারে ধীরগতি বা রক্ষণাবেক্ষণ চলছে"
                : "Partial Service Disruption Detected"}
            </h2>
            <p className="text-xs opacity-80 mt-0.5">
              {bn
                ? `সর্বশেষ চেক: ${checkedAt ? new Date(checkedAt).toLocaleTimeString() : "এখন"} · Latency: ${roundTripMs}ms`
                : `Last monitored: ${checkedAt ? new Date(checkedAt).toLocaleTimeString() : "Now"} · Latency: ${roundTripMs}ms`}
            </p>
          </div>
        </div>

        <Badge className={allOperational ? "bg-emerald-600 text-white" : "bg-amber-600 text-white"}>
          {allOperational ? (bn ? "১০০% অনলাইন" : "99.9% Uptime") : (bn ? "পর্যবেক্ষণাধীন" : "Degraded")}
        </Badge>
      </div>

      {/* Core Services Grid */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-foreground">
          {bn ? "প্রধান সেবা ও সাবসিস্টেম" : "Core System Components"}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {checks.map((c) => (
            <div
              key={c.key}
              className="rounded-xl border border-border bg-card p-4 shadow-xs flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                    c.ok ? "bg-emerald-500/10 text-emerald-600" : "bg-destructive/10 text-destructive"
                  }`}
                >
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{bn ? c.labelBn : c.labelEn}</h3>
                  <p className="text-xs text-muted-foreground">{c.detail || "Online"}</p>
                </div>
              </div>
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                {c.ms}ms
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Edge & Data Center Nodes */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-foreground">
          {bn ? "গ্লোবাল এজ ও BDIX ডাটা সেন্টার নোড" : "Global Data Center Locations"}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servers.map((s, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-border bg-card p-4 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-foreground">{s.location}</span>
                <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {s.latency}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{s.city}</span>
                <span>{bn ? `লোড: ${s.load}%` : `Load: ${s.load}%`}</span>
              </div>
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    s.load > 80 ? "bg-destructive" : s.load > 60 ? "bg-amber-500" : "bg-emerald-500"
                  }`}
                  style={{ width: `${s.load}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
