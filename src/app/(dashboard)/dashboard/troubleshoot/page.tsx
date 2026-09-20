"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Server, Mail, FileText, CheckCircle2, AlertTriangle, XCircle, Loader2, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

type CheckStatus = "ok" | "warn" | "fail";
interface Check { id: string; status: CheckStatus; values: string[]; note_en: string; note_bn: string; }
interface DiagnoseResult { domain: string; summary: CheckStatus; checks: Check[]; checked_at: string; }

const CHECK_META: Record<string, { icon: any; en: string; bn: string }> = {
  ns: { icon: Server, en: "Nameservers (NS)", bn: "নেমসার্ভার (NS)" },
  a: { icon: Globe, en: "A Record (IPv4)", bn: "A রেকর্ড (IPv4)" },
  mx: { icon: Mail, en: "Mail Exchange (MX)", bn: "মেইল এক্সচেঞ্জ (MX)" },
  txt: { icon: FileText, en: "TXT / SPF Record", bn: "TXT / SPF রেকর্ড" },
};

export default function TroubleshootPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [domain, setDomain] = useState("");
  const [expectedIp, setExpectedIp] = useState("");
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<DiagnoseResult | null>(null);

  const handleRun = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = domain.trim();
    if (!target) return;
    setRunning(true);
    setResult(null);
    try {
      const res = await fetch("/api/tools/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: target, expected_ip: expectedIp.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        setResult(data);
      } else {
        const err = await res.json();
        toast.error(err.error || "Diagnosis failed");
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to diagnose domain");
    } finally {
      setRunning(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {bn ? "সেলফ-সার্ভিস ডোমেইন ট্রাবলশুটার" : "Domain Diagnostics & Troubleshooting"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {bn ? "আপনার ডোমেইনের ডিএনএস রেজোলিউশন, নেমসার্ভার এবং আইপি ভেরিফাই করুন" : "Diagnose DNS records, nameservers, and IP routing issues in seconds"}
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleRun} className="p-6 bg-card border border-border rounded-2xl shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "ডোমেইন নাম" : "Domain Name"}
            </label>
            <Input
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="example.com"
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "প্রত্যাশিত সার্ভার আইপি (ঐচ্ছিক)" : "Expected Server IP (optional)"}
            </label>
            <Input
              value={expectedIp}
              onChange={(e) => setExpectedIp(e.target.value)}
              placeholder="e.g. 20.205.10.12"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button type="submit" disabled={running} className="gap-2">
            {running ? <Loader2 className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            {bn ? "ডায়াগনোস্টিক শুরু করুন" : "Run Diagnostics"}
          </Button>
        </div>
      </form>

      {/* Results View */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4"
        >
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div>
              <span className="text-xs text-muted-foreground uppercase font-semibold">
                {bn ? "পরীক্ষার ফলাফল" : "Diagnostic Summary"}
              </span>
              <h3 className="text-xl font-mono font-bold text-foreground mt-0.5">
                {result.domain}
              </h3>
            </div>
            <Badge
              variant="outline"
              className={
                result.summary === "ok"
                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                  : result.summary === "warn"
                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                  : "bg-destructive/10 text-destructive border-destructive/20"
              }
            >
              {result.summary === "ok"
                ? bn ? "সবকিছু সঠিক আছে" : "All Checks Passed"
                : result.summary === "warn"
                ? bn ? "সতর্কতা পাওয়া গেছে" : "Warnings Detected"
                : bn ? "সমস্যা রয়েছে" : "Action Required"}
            </Badge>
          </div>

          <div className="space-y-3">
            {result.checks.map((c) => {
              const meta = CHECK_META[c.id] || { icon: Globe, en: c.id, bn: c.id };
              const Icon = meta.icon;
              return (
                <div
                  key={c.id}
                  className="p-4 rounded-xl border border-border bg-secondary/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">
                        {bn ? meta.bn : meta.en}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {bn ? c.note_bn : c.note_en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center">
                    {c.status === "ok" ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : c.status === "warn" ? (
                      <AlertTriangle className="w-5 h-5 text-amber-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}
