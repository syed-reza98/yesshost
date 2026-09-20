"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Server, Plus, Users, Globe, Lock, Pause, Play, Trash2,
  Check, AlertTriangle, Package, Settings, Search, RefreshCw,
  Eye, EyeOff, ChevronRight, Layers, Activity, Copy, MoreVertical,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

interface ResellerPackage {
  id: string;
  packageName: string;
  maxAccounts: number;
  usedAccounts: number;
  maxDiskMb: number;
  usedDiskMb: number;
  maxBandwidthMb: number;
  usedBandwidthMb: number;
  status: string;
  whmUsername?: string;
}

interface ResellerAccount {
  id: string;
  resellerPackageId: string;
  domain: string;
  username: string;
  planName: string;
  diskQuotaMb: number;
  bandwidthMb: number;
  cpanelCreated: boolean;
  status: string;
  createdAt: string;
}

const formatSize = (mb: number) =>
  mb >= 1000 ? `${(mb / 1000).toFixed(1)} GB` : `${mb} MB`;
const pct = (used: number, max: number) =>
  max > 0 ? Math.min(100, Math.round((used / max) * 100)) : 0;
const barColor = (p: number) =>
  p > 90 ? "bg-red-500" : p > 70 ? "bg-amber-500" : "bg-emerald-500";

export default function DashboardResellerPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [packages, setPackages] = useState<ResellerPackage[]>([]);
  const [accounts, setAccounts] = useState<ResellerAccount[]>([]);
  const [selectedPkg, setSelectedPkg] = useState<ResellerPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeView, setActiveView] = useState<"overview" | "accounts">("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [createForm, setCreateForm] = useState({
    domain: "", username: "", password: "", email: "",
    planName: "Basic", diskQuotaMb: 1024, bandwidthMb: 10240,
  });

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/reseller");
      const data = await res.json();
      setPackages(data.packages || []);
      setAccounts(data.accounts || []);
      if (data.packages?.length) {
        setSelectedPkg((prev) => data.packages.find((p: any) => p.id === prev?.id) || data.packages[0]);
      }
    } catch (err) {
      console.error("Reseller load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  const pkgAccounts = useMemo(
    () => accounts.filter((a) => a.resellerPackageId === selectedPkg?.id),
    [accounts, selectedPkg]
  );

  const filteredAccounts = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return pkgAccounts.filter((a) => {
      const matchSearch = !q ||
        a.domain.toLowerCase().includes(q) ||
        a.username.toLowerCase().includes(q);
      const matchStatus = statusFilter === "all" || a.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [pkgAccounts, searchTerm, statusFilter]);

  const handleCreate = async () => {
    if (!selectedPkg || !createForm.domain || !createForm.username || !createForm.password || !createForm.email) {
      toast.error(bn ? "সকল ফিল্ড পূরণ করুন" : "Fill all required fields");
      return;
    }
    if (createForm.username.length < 3 || createForm.username.length > 16) {
      toast.error(bn ? "ইউজারনেম ৩–১৬ অক্ষরের হতে হবে" : "Username must be 3–16 characters");
      return;
    }
    setCreating(true);
    try {
      const res = await fetch("/api/reseller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageId: selectedPkg.id, ...createForm }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      toast.success(bn ? "cPanel অ্যাকাউন্ট তৈরি হয়েছে!" : "cPanel account created!");
      setShowCreate(false);
      setCreateForm({ domain: "", username: "", password: "", email: "", planName: "Basic", diskQuotaMb: 1024, bandwidthMb: 10240 });
      void load();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setCreating(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(bn ? `${label} কপি হয়েছে` : `${label} copied`);
  };

  if (loading) {
    return (
      <div className="space-y-5">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  if (!packages.length) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "রিসেলার প্যানেল" : "Reseller Control Panel"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "হোস্টিং প্যাকেজ ও ক্লায়েন্ট অ্যাকাউন্ট ম্যানেজমেন্ট" : "Manage hosting packages and client cPanel accounts"}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-12 text-center shadow-xs">
          <Server className="w-14 h-14 text-muted-foreground mx-auto mb-4 opacity-40" />
          <h3 className="text-base font-bold text-foreground">
            {bn ? "কোনো রিসেলার প্যাকেজ নেই" : "No Reseller Package Found"}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 mb-5 max-w-md mx-auto">
            {bn
              ? "রিসেলার হোস্টিং প্যাকেজ ক্রয় করলে এখানে ক্লায়েন্ট অ্যাকাউন্ট পরিচালনা করতে পারবেন।"
              : "Purchase a reseller hosting plan to manage unlimited client cPanel accounts from here."}
          </p>
          <Button asChild>
            <Link href="/dashboard/order-service">
              {bn ? "রিসেলার প্ল্যান দেখুন" : "Browse Reseller Plans"}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const accPct = selectedPkg ? pct(selectedPkg.usedAccounts, selectedPkg.maxAccounts) : 0;
  const diskPct = selectedPkg ? pct(selectedPkg.usedDiskMb, selectedPkg.maxDiskMb) : 0;
  const bwPct = selectedPkg ? pct(selectedPkg.usedBandwidthMb, selectedPkg.maxBandwidthMb) : 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "রিসেলার কন্ট্রোল প্যানেল" : "Reseller Control Panel"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "আপনার হোস্টিং প্যাকেজ ও ক্লায়েন্ট cPanel অ্যাকাউন্ট পরিচালনা করুন" : "Manage your reseller packages and client cPanel accounts"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={load} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          {selectedPkg && selectedPkg.usedAccounts < selectedPkg.maxAccounts && (
            <Button onClick={() => setShowCreate(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              {bn ? "নতুন অ্যাকাউন্ট" : "New Account"}
            </Button>
          )}
        </div>
      </div>

      {/* Package Switcher */}
      {packages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border shrink-0 transition-all ${
                selectedPkg?.id === pkg.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:bg-muted"
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              {pkg.packageName}
            </button>
          ))}
        </div>
      )}

      {/* View Tabs */}
      <div className="flex gap-1 p-1 bg-muted/40 rounded-xl border border-border w-fit">
        {[
          { id: "overview", label: bn ? "ওভারভিউ" : "Overview", icon: Layers },
          { id: "accounts", label: bn ? "অ্যাকাউন্ট" : "Accounts", icon: Users },
        ].map((v) => (
          <button
            key={v.id}
            onClick={() => setActiveView(v.id as any)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              activeView === v.id ? "bg-card text-foreground shadow-xs" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <v.icon className="w-3.5 h-3.5" />
            {v.label}
            {v.id === "accounts" && <span className="text-[10px] opacity-60">({pkgAccounts.length})</span>}
          </button>
        ))}
      </div>

      {/* ── OVERVIEW ───────────────────────────────────── */}
      {activeView === "overview" && selectedPkg && (
        <div className="space-y-5">
          {/* Resource Gauges */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: bn ? "অ্যাকাউন্ট" : "Accounts", used: selectedPkg.usedAccounts, max: selectedPkg.maxAccounts, pctVal: accPct, unit: "" },
              { label: bn ? "স্টোরেজ" : "Disk", used: selectedPkg.usedDiskMb, max: selectedPkg.maxDiskMb, pctVal: diskPct, unit: "MB", fmt: formatSize },
              { label: bn ? "ব্যান্ডউইথ" : "Bandwidth", used: selectedPkg.usedBandwidthMb, max: selectedPkg.maxBandwidthMb, pctVal: bwPct, unit: "MB", fmt: formatSize },
            ].map((g) => (
              <div key={g.label} className="rounded-xl border border-border bg-card p-4 shadow-xs">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-foreground">{g.label}</span>
                  <span className="text-muted-foreground">{g.pctVal}%</span>
                </div>
                <Progress value={g.pctVal} className={`h-2 ${barColor(g.pctVal)}`} />
                <p className="text-[11px] text-muted-foreground mt-2">
                  {g.fmt ? `${g.fmt(g.used)} / ${g.fmt(g.max)}` : `${g.used} / ${g.max}`}
                </p>
              </div>
            ))}
          </div>

          {/* Package Info */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
            <h2 className="text-sm font-bold text-foreground mb-3">{selectedPkg.packageName}</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                <span className="text-muted-foreground">{bn ? "সর্বোচ্চ অ্যাকাউন্ট" : "Max Accounts"}</span>
                <span className="font-semibold text-foreground">{selectedPkg.maxAccounts}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                <span className="text-muted-foreground">{bn ? "ব্যবহৃত অ্যাকাউন্ট" : "Used Accounts"}</span>
                <span className="font-semibold text-foreground">{selectedPkg.usedAccounts}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                <span className="text-muted-foreground">{bn ? "সর্বোচ্চ স্টোরেজ" : "Total Disk"}</span>
                <span className="font-semibold text-foreground">{formatSize(selectedPkg.maxDiskMb)}</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                <span className="text-muted-foreground">{bn ? "সর্বোচ্চ ব্যান্ডউইথ" : "Total Bandwidth"}</span>
                <span className="font-semibold text-foreground">{formatSize(selectedPkg.maxBandwidthMb)}</span>
              </div>
              <div className="flex items-center justify-between py-1.5">
                <span className="text-muted-foreground">{bn ? "স্ট্যাটাস" : "Status"}</span>
                <Badge className={selectedPkg.status === "active" ? "bg-emerald-500/10 text-emerald-700" : "bg-red-500/10 text-red-700"}>
                  {selectedPkg.status}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ACCOUNTS ───────────────────────────────────── */}
      {activeView === "accounts" && (
        <div className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={bn ? "ডোমেইন বা ইউজারনেম..." : "Search domain or username..."}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              {["all", "active", "suspended"].map((f) => (
                <button
                  key={f}
                  onClick={() => setStatusFilter(f)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
                    statusFilter === f ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground border-border"
                  }`}
                >
                  {f === "all" ? (bn ? "সব" : "All") : f === "active" ? (bn ? "সক্রিয়" : "Active") : (bn ? "স্থগিত" : "Suspended")}
                </button>
              ))}
            </div>
          </div>

          {filteredAccounts.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <h3 className="text-base font-semibold text-foreground">
                {bn ? "কোনো অ্যাকাউন্ট নেই" : "No Accounts Found"}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {bn ? "নতুন ক্লায়েন্ট অ্যাকাউন্ট তৈরি করুন" : "Create a new client cPanel account to get started"}
              </p>
              {selectedPkg && selectedPkg.usedAccounts < selectedPkg.maxAccounts && (
                <Button onClick={() => setShowCreate(true)} className="gap-2">
                  <Plus className="w-4 h-4" />
                  {bn ? "নতুন অ্যাকাউন্ট" : "New Account"}
                </Button>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredAccounts.map((acc) => (
                <div key={acc.id} className="rounded-xl border border-border bg-card p-4 shadow-xs">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary shrink-0" />
                        <h3 className="text-sm font-bold text-foreground truncate">{acc.domain}</h3>
                        <Badge className={`text-[10px] shrink-0 ${
                          acc.status === "active" ? "bg-emerald-500/10 text-emerald-700" : "bg-red-500/10 text-red-700"
                        }`}>
                          {acc.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-muted-foreground">@{acc.username}</span>
                        <span className="text-xs text-muted-foreground">·</span>
                        <span className="text-xs text-muted-foreground">{acc.planName}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        title={bn ? "কপি করুন" : "Copy username"}
                        onClick={() => copyToClipboard(acc.username, "Username")}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-border/50">
                    <div>
                      <p className="text-[10px] text-muted-foreground mb-1">
                        {bn ? "ডিস্ক কোটা" : "Disk Quota"}
                      </p>
                      <p className="text-xs font-semibold text-foreground">{formatSize(acc.diskQuotaMb)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground mb-1">
                        {bn ? "ব্যান্ডউইথ" : "Bandwidth"}
                      </p>
                      <p className="text-xs font-semibold text-foreground">{formatSize(acc.bandwidthMb)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Create Account Dialog ───────────────────────── */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{bn ? "নতুন cPanel অ্যাকাউন্ট তৈরি করুন" : "Create New cPanel Account"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ডোমেইন *" : "Domain *"}</Label>
                <Input
                  value={createForm.domain}
                  onChange={(e) => setCreateForm((f) => ({ ...f, domain: e.target.value.toLowerCase() }))}
                  placeholder="example.com"
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ইউজারনেম * (৩–১৬ অক্ষর)" : "Username * (3–16 chars)"}</Label>
                <Input
                  value={createForm.username}
                  onChange={(e) => setCreateForm((f) => ({ ...f, username: e.target.value.toLowerCase() }))}
                  placeholder="johndoe"
                  maxLength={16}
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ইমেইল *" : "Email *"}</Label>
                <Input
                  type="email"
                  value={createForm.email}
                  onChange={(e) => setCreateForm((f) => ({ ...f, email: e.target.value }))}
                  placeholder="client@example.com"
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "পাসওয়ার্ড *" : "Password *"}</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={createForm.password}
                    onChange={(e) => setCreateForm((f) => ({ ...f, password: e.target.value }))}
                    placeholder="Strong password"
                    className="pr-9"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ডিস্ক কোটা (MB)" : "Disk Quota (MB)"}</Label>
                <Input
                  type="number"
                  min={100}
                  value={createForm.diskQuotaMb}
                  onChange={(e) => setCreateForm((f) => ({ ...f, diskQuotaMb: Number(e.target.value) }))}
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ব্যান্ডউইথ (MB)" : "Bandwidth (MB)"}</Label>
                <Input
                  type="number"
                  min={1000}
                  value={createForm.bandwidthMb}
                  onChange={(e) => setCreateForm((f) => ({ ...f, bandwidthMb: Number(e.target.value) }))}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setShowCreate(false)}>
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button onClick={handleCreate} disabled={creating} className="gap-2">
                {creating ? (
                  <Server className="w-4 h-4 animate-pulse" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
                {bn ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
