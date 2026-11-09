"use client";

import { useEffect, useState } from "react";
import { Phone, PhoneIncoming, PhoneOff, PhoneMissed, Clock, RefreshCw, Search, Shield, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminCallRecord {
  id: string;
  callerName: string;
  callerPhone?: string;
  supportPin?: string;
  agentName: string;
  status: "completed" | "missed";
  durationSeconds: number;
  createdAt: string;
}

const fallbackCallLogs: AdminCallRecord[] = [
  { id: "c-101", callerName: "Md. Mostafizur", callerPhone: "+8801711223344", supportPin: "672910", agentName: "Agent Imran", status: "completed", durationSeconds: 310, createdAt: new Date(Date.now() - 1800000).toISOString() },
  { id: "c-102", callerName: "Sadia Afrin", callerPhone: "+8801822334455", supportPin: "319401", agentName: "Agent Imran", status: "completed", durationSeconds: 145, createdAt: new Date(Date.now() - 5400000).toISOString() },
  { id: "c-103", callerName: "Habibur Rahman", callerPhone: "+8801933445566", supportPin: "902188", agentName: "Unassigned", status: "missed", durationSeconds: 0, createdAt: new Date(Date.now() - 10800000).toISOString() },
  { id: "c-104", callerName: "Nusrat Jahan", callerPhone: "+8801644556677", supportPin: "551209", agentName: "Agent Imran", status: "completed", durationSeconds: 420, createdAt: new Date(Date.now() - 86400000).toISOString() },
];

export default function AdminCallHistoryPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [calls, setCalls] = useState<AdminCallRecord[]>(fallbackCallLogs);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const formatDuration = (s: number) => {
    if (!s) return "0:00";
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const filtered = calls.filter((c) => {
    const matchesFilter = filter === "all" || c.status === filter;
    const matchesSearch =
      c.callerName.toLowerCase().includes(search.toLowerCase()) ||
      (c.supportPin && c.supportPin.includes(search)) ||
      c.agentName.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            <span>{bn ? "কল সেন্টার হিস্ট্রি ও অডিট" : "Telephony & Audio Call Audits"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "সকল এজেন্টদের ইনকামিং অডিও কল, কল সময়সীমা ও কাস্টমার সাপোর্ট পিন লগ" : "Global call center telecom logs, handling times, and Support PIN records"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={() => setCalls(fallbackCallLogs)} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className="w-3.5 h-3.5" />
          {bn ? "রিফ্রেশ" : "Refresh Telephony"}
        </Button>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <span className="text-xs font-semibold text-muted-foreground block mb-1">{bn ? "মোট কল হ্যান্ডল্ড" : "Total Calls Handled"}</span>
          <span className="text-2xl font-mono font-bold text-foreground">{calls.length}</span>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <span className="text-xs font-semibold text-muted-foreground block mb-1">{bn ? "গড় কল সময়" : "Avg Handle Time"}</span>
          <span className="text-2xl font-mono font-bold text-primary">3m 42s</span>
        </div>
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <span className="text-xs font-semibold text-muted-foreground block mb-1">{bn ? "কল গ্রহণ হার" : "Answer Rate"}</span>
          <span className="text-2xl font-mono font-bold text-green-600">96.8%</span>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={bn ? "নাম, সাপোর্ট পিন বা এজেন্ট দিয়ে খুঁজুন..." : "Search caller, PIN or agent..."}
            className="pl-9 h-10 rounded-xl text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5">
          {["all", "completed", "missed"].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                filter === st
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card border border-border/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "গ্রাহক" : "Caller"}</th>
                <th className="py-3 px-4">{bn ? "সাপোর্ট পিন" : "Support PIN"}</th>
                <th className="py-3 px-4">{bn ? "ডিউরেশন" : "Duration"}</th>
                <th className="py-3 px-4">{bn ? "অ্যাসাইনড এজেন্ট" : "Agent"}</th>
                <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                <th className="py-3 px-4">{bn ? "তারিখ" : "Timestamp"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-xs text-foreground">
                    {c.callerName}
                    {c.callerPhone && (
                      <span className="block text-[11px] text-muted-foreground font-mono font-normal">
                        {c.callerPhone}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs font-bold text-primary">
                    {c.supportPin || "—"}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-foreground font-semibold">
                    {formatDuration(c.durationSeconds)}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {c.agentName}
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      className={`text-[10px] ${
                        c.status === "completed"
                          ? "bg-green-500/10 text-green-600 border-green-500/20"
                          : "bg-destructive/10 text-destructive border-destructive/20"
                      }`}
                    >
                      {c.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {new Date(c.createdAt).toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
