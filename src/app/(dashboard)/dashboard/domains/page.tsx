"use client";

import { useEffect, useState, useMemo } from "react";
import { Globe, Shield, RefreshCw, Server, ExternalLink, Settings2, Loader2, Check, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import EmptyState from "@/components/EmptyState";
import DataToolbar from "@/components/DataToolbar";
import { Link } from "@/lib/router-compat";

type DomainReg = {
  id: string;
  domain: string;
  status: string;
  autoRenew: boolean;
  registrationDate: string;
  expiryDate: string;
  nameservers: string[] | null;
};

export default function DomainsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [domains, setDomains] = useState<DomainReg[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [editingDomain, setEditingDomain] = useState<DomainReg | null>(null);
  const [ns1, setNs1] = useState("");
  const [ns2, setNs2] = useState("");
  const [savingNs, setSavingNs] = useState(false);

  const fetchDomains = async () => {
    try {
      const res = await fetch("/api/domains");
      if (res.ok) {
        const data = await res.json();
        setDomains(data.domains || []);
      }
    } catch (err) {
      console.error("Failed to load domains:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDomains();
  }, []);

  const handleToggleAutoRenew = async (domain: DomainReg) => {
    try {
      const res = await fetch("/api/domains", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: domain.id, autoRenew: !domain.autoRenew }),
      });
      if (res.ok) {
        toast.success(
          !domain.autoRenew
            ? bn ? "অটো-রিনিউ চালু করা হয়েছে" : "Auto-renew enabled"
            : bn ? "অটো-রিনিউ বন্ধ করা হয়েছে" : "Auto-renew disabled"
        );
        fetchDomains();
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to update auto-renew");
    }
  };

  const handleSaveNameservers = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingDomain) return;
    setSavingNs(true);
    try {
      const res = await fetch("/api/domains", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingDomain.id,
          nameservers: [ns1.trim(), ns2.trim()].filter(Boolean),
        }),
      });
      if (res.ok) {
        toast.success(bn ? "নেমসার্ভার সফলভাবে আপডেট হয়েছে" : "Nameservers updated successfully");
        setEditingDomain(null);
        fetchDomains();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to update");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to save nameservers");
    } finally {
      setSavingNs(false);
    }
  };

  const openNsModal = (d: DomainReg) => {
    setEditingDomain(d);
    setNs1(d.nameservers?.[0] || "ns1.yesshost.com");
    setNs2(d.nameservers?.[1] || "ns2.yesshost.com");
  };

  const filtered = useMemo(() => {
    return domains.filter((d) => d.domain.toLowerCase().includes(search.toLowerCase()));
  }, [domains, search]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "আমার ডোমেইনসমূহ" : "My Domains"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "আপনার রেজিস্টার্ড ডোমেইন এবং ডিএনএস কনফিগারেশন পরিচালনা করুন" : "Manage your registered domains, nameservers, and renewals"}
          </p>
        </div>
        <Link href="/services/domain">
          <Button className="gap-2">
            <Globe className="w-4 h-4" />
            {bn ? "নতুন ডোমেইন খুঁজুন" : "Register Domain"}
          </Button>
        </Link>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "ডোমেইন নাম দিয়ে খুঁজুন..." : "Search domain name..."}
      />

      {/* Nameserver Edit Modal */}
      {editingDomain && (
        <div className="p-5 bg-card border border-border rounded-xl shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-foreground">
                {bn ? "নেমসার্ভার পরিবর্তন: " : "Manage Nameservers: "}
                <span className="text-primary font-mono">{editingDomain.domain}</span>
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {bn ? "ডিএনএস প্রপাগেশনের জন্য ২৪-৪৮ ঘণ্টা সময় লাগতে পারে" : "DNS propagation may take 24-48 hours to complete worldwide"}
              </p>
            </div>
            <button
              onClick={() => setEditingDomain(null)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বন্ধ করুন" : "Close"}
            </button>
          </div>

          <form onSubmit={handleSaveNameservers} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  Nameserver 1
                </label>
                <Input
                  value={ns1}
                  onChange={(e) => setNs1(e.target.value)}
                  placeholder="ns1.yesshost.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  Nameserver 2
                </label>
                <Input
                  value={ns2}
                  onChange={(e) => setNs2(e.target.value)}
                  placeholder="ns2.yesshost.com"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditingDomain(null)}
              >
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={savingNs}>
                {savingNs && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {bn ? "নেমসার্ভার সংরক্ষণ" : "Save Nameservers"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Globe}
          title={bn ? "কোনো ডোমেইন পাওয়া যায়নি" : "No domains found"}
          description={bn ? "আপনার এখনও কোনো সক্রিয় ডোমেইন নেই।" : "You don't have any domains registered yet."}
          actionLabel={bn ? "ডোমেইন রেজিস্টার করুন" : "Register a Domain"}
          actionHref="/services/domain"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filtered.map((dom) => (
            <div
              key={dom.id}
              className="p-5 bg-card border border-border rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-primary/30 transition-all shadow-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-base font-bold text-foreground font-mono">
                      {dom.domain}
                    </span>
                    <Badge
                      variant="outline"
                      className={
                        dom.status === "active"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }
                    >
                      {dom.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                    <span>
                      {bn ? "মেয়াদোত্তীর্ণ: " : "Expires: "}
                      <strong className="text-foreground">
                        {new Date(dom.expiryDate).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </strong>
                    </span>
                    {dom.nameservers && dom.nameservers.length > 0 && (
                      <span className="hidden sm:inline font-mono text-[11px]">
                        NS: {dom.nameservers.join(", ")}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end pt-3 md:pt-0 border-t md:border-t-0 border-border">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {bn ? "অটো-রিনিউ" : "Auto-renew"}
                  </span>
                  <Switch
                    checked={dom.autoRenew}
                    onCheckedChange={() => handleToggleAutoRenew(dom)}
                  />
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openNsModal(dom)}
                  className="gap-1.5"
                >
                  <Settings2 className="w-4 h-4" />
                  {bn ? "নেমসার্ভার" : "Manage DNS"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
