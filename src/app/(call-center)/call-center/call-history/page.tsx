"use client";

import { useEffect, useState } from "react";
import { PhoneIncoming, PhoneOff, PhoneMissed, Phone, RefreshCw, Clock, Search, Shield, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CallLog {
  id: string;
  callerName: string;
  callerPhone?: string;
  supportPin?: string;
  status: "completed" | "missed" | "rejected";
  durationSeconds: number;
  createdAt: string;
  agentName: string;
}

const fallbackCalls: CallLog[] = [
  { id: "c-1", callerName: "Anisur Rahman", callerPhone: "+8801812345678", supportPin: "482910", status: "completed", durationSeconds: 245, createdAt: new Date(Date.now() - 3600000).toISOString(), agentName: "Agent Imran" },
  { id: "c-2", callerName: "Sabbir Hossain", callerPhone: "+8801912345678", supportPin: "192834", status: "completed", durationSeconds: 112, createdAt: new Date(Date.now() - 7200000).toISOString(), agentName: "Agent Imran" },
  { id: "c-3", callerName: "Faridul Islam", callerPhone: "+8801612345678", supportPin: "882911", status: "missed", durationSeconds: 0, createdAt: new Date(Date.now() - 14400000).toISOString(), agentName: "System" },
  { id: "c-4", callerName: "Zahidul Karim", callerPhone: "+8801512345678", supportPin: "772190", status: "completed", durationSeconds: 380, createdAt: new Date(Date.now() - 86400000).toISOString(), agentName: "Agent Imran" },
];

export default function CallCenterCallHistoryPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [calls, setCalls] = useState<CallLog[]>(fallbackCalls);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const formatDuration = (s: number) => {
    if (!s) return "0:00";
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const filteredCalls = calls.filter((c) => {
    const matchesFilter = filter === "all" || c.status === filter;
    const matchesSearch =
      c.callerName.toLowerCase().includes(search.toLowerCase()) ||
      (c.supportPin && c.supportPin.includes(search)) ||
      (c.callerPhone && c.callerPhone.includes(search));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Phone className="w-6 h-6 text-primary" />
            <span>{bn ? "ভয়েস কল হিস্ট্রি" : "Support Call Logs & Audio Records"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "গ্রাহকদের ইনকামিং অডিও কল এবং সাপোর্ট পিন ভেরিফিকেশন লগ" : "Review answered WebRTC client calls, durations, and 6-digit Support PIN verifications"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={() => setCalls(fallbackCalls)} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className="w-3.5 h-3.5" />
          {bn ? "রিফ্রেশ" : "Refresh Logs"}
        </Button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={bn ? "নাম, ফোন বা ৬-সংখ্যার সাপোর্ট পিন দিয়ে খুঁজুন..." : "Search by caller name, phone or 6-digit PIN..."}
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
                <th className="py-3 px-4">{bn ? "কলার" : "Caller"}</th>
                <th className="py-3 px-4">{bn ? "সাপোর্ট পিন" : "Support PIN"}</th>
                <th className="py-3 px-4">{bn ? "কল ডিউরেশন" : "Duration"}</th>
                <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                <th className="py-3 px-4">{bn ? "এজেন্ট" : "Agent"}</th>
                <th className="py-3 px-4">{bn ? "তারিখ ও সময়" : "Timestamp"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filteredCalls.map((call) => (
                <tr key={call.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="font-bold text-foreground text-xs">{call.callerName}</div>
                    {call.callerPhone && (
                      <div className="text-[11px] text-muted-foreground font-mono">{call.callerPhone}</div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    {call.supportPin ? (
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                        {call.supportPin}
                      </span>
                    ) : (
                      <span className="text-xs text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs font-semibold text-foreground">
                    {formatDuration(call.durationSeconds)}
                  </td>
                  <td className="py-4 px-4">
                    {call.status === "completed" ? (
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px]">
                        Completed
                      </Badge>
                    ) : (
                      <Badge variant="destructive" className="text-[10px]">
                        Missed
                      </Badge>
                    )}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {call.agentName}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {new Date(call.createdAt).toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
              {filteredCalls.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted-foreground text-xs">
                    {bn ? "কোনো কল রেকর্ড পাওয়া যায়নি" : "No call logs matching criteria"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
