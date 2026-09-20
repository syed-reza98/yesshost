"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Palette, Plus, Trash2, Loader2, Upload, ImagePlus, FileArchive, X, Save,
  TrendingUp, Wallet, ShoppingBag, Clock, CheckCircle2, AlertCircle, Send,
  RefreshCw, Download, User2, Globe, Link as LinkIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { formatAmount } from "@/lib/formatPrice";
import { downloadCsv, csvDate } from "@/lib/export-csv";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// ── Constants ────────────────────────────────────────────
const CATEGORIES = [
  "business", "ecommerce", "portfolio", "restaurant", "blog",
  "landing", "education", "healthcare", "news", "agency", "realestate", "travel",
] as const;

const catLabel: Record<string, { bn: string; en: string }> = {
  business: { bn: "ব্যবসা", en: "Business" },
  ecommerce: { bn: "ই-কমার্স", en: "E-Commerce" },
  portfolio: { bn: "পোর্টফোলিও", en: "Portfolio" },
  restaurant: { bn: "রেস্টুরেন্ট", en: "Restaurant" },
  blog: { bn: "ব্লগ", en: "Blog" },
  landing: { bn: "ল্যান্ডিং", en: "Landing" },
  education: { bn: "শিক্ষা", en: "Education" },
  healthcare: { bn: "স্বাস্থ্যসেবা", en: "Healthcare" },
  news: { bn: "নিউজ পোর্টাল", en: "News" },
  agency: { bn: "এজেন্সি", en: "Agency" },
  realestate: { bn: "রিয়েল এস্টেট", en: "Real Estate" },
  travel: { bn: "ট্রাভেল", en: "Travel" },
};

const approvalMeta: Record<string, { bn: string; en: string; cls: string }> = {
  pending: { bn: "পর্যালোচনায়", en: "In Review", cls: "bg-amber-500/10 text-amber-700" },
  approved: { bn: "অনুমোদিত", en: "Approved", cls: "bg-emerald-500/10 text-emerald-700" },
  rejected: { bn: "বাতিল", en: "Rejected", cls: "bg-red-500/10 text-red-700" },
};

const MIN_PAYOUT = 500;

const emptyForm = {
  name: "", slug: "", category: "business", priceBdt: "",
  previewUrl: "", thumbnailUrl: "", filePath: "",
};

// ── MetricCard ────────────────────────────────────────────
function MetricCard({ icon: Icon, label, value, tone }: {
  icon: any; label: string; value: string | number; tone: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-xs">
      <div className={`w-8 h-8 rounded-lg ${tone} flex items-center justify-center mb-3`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className="text-xl font-bold text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────
export default function DashboardThemeSellerPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [loading, setLoading] = useState(true);
  const [themes, setThemes] = useState<any[]>([]);
  const [sales, setSales] = useState<any[]>([]);
  const [payouts, setPayouts] = useState<any[]>([]);
  const [profile, setProfile] = useState<any>(null);

  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ ...emptyForm });
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [showPayout, setShowPayout] = useState(false);
  const [payoutForm, setPayoutForm] = useState({ amount: "", method: "bkash", account: "" });
  const [requesting, setRequesting] = useState(false);

  const [sellerProfile, setSellerProfile] = useState({
    displayName: "", slug: "", logoUrl: "", bioBn: "", bioEn: "", website: "", isPublic: true,
  });
  const [savingProfile, setSavingProfile] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "themes" | "sales" | "profile">("overview");

  // ── Load data ─────────────────────────────────────────
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/themes/seller");
      const data = await res.json();
      setThemes(data.themes || []);
      setSales(data.sales || []);
      setPayouts(data.payouts || []);
      if (data.profile) {
        setProfile(data.profile);
        setSellerProfile({
          displayName: data.profile.displayName || "",
          slug: data.profile.slug || "",
          logoUrl: data.profile.logoUrl || "",
          bioBn: data.profile.bioBn || "",
          bioEn: data.profile.bioEn || "",
          website: data.profile.website || "",
          isPublic: data.profile.isPublic !== false,
        });
      }
    } catch (err) {
      console.error("Theme seller load error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { void load(); }, [load]);

  // ── Computed stats ────────────────────────────────────
  const themeById = useMemo(() => Object.fromEntries(themes.map((t) => [t.id, t])), [themes]);
  const paidSales = useMemo(() => sales.filter((s) => s.status === "paid" || s.status === "completed"), [sales]);

  const earningsOf = (sale: any) => {
    const rate = Number(themeById[sale.themeId]?.commissionRate ?? 30);
    return Number(sale.amountBdt) * (1 - rate / 100);
  };

  const gross = paidSales.reduce((s, o) => s + Number(o.amountBdt), 0);
  const net = paidSales.reduce((s, o) => s + earningsOf(o), 0);
  const paidOut = payouts.filter((p) => p.status === "paid").reduce((s, p) => s + Number(p.amountBdt), 0);
  const pendingOut = payouts.filter((p) => p.status === "requested").reduce((s, p) => s + Number(p.amountBdt), 0);
  const available = Math.max(0, net - paidOut - pendingOut);

  // ── Actions ────────────────────────────────────────────
  const handleAddTheme = async () => {
    if (!form.name || !form.slug || !form.priceBdt) {
      toast.error(bn ? "নাম, লিংক ও মূল্য আবশ্যক" : "Name, slug, and price are required");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/themes/seller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      toast.success(bn ? "থিম জমা দেওয়া হয়েছে — রিভিউয়ের অপেক্ষায়" : "Theme submitted for review");
      setShowAdd(false);
      setForm({ ...emptyForm });
      void load();
    } catch (err: any) {
      toast.error(err.message?.includes("slug_taken")
        ? (bn ? "এই লিংক নামটি নেওয়া আছে" : "That slug is already taken")
        : err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/themes/seller?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed");
      toast.success(bn ? "থিম মুছে ফেলা হয়েছে" : "Theme removed");
      void load();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const handlePayout = async () => {
    const amount = Number(payoutForm.amount);
    if (amount < MIN_PAYOUT) {
      toast.error(bn ? `সর্বনিম্ন পেআউট ৳${MIN_PAYOUT}` : `Minimum payout is ৳${MIN_PAYOUT}`);
      return;
    }
    if (amount > available) {
      toast.error(bn ? "উপলব্ধ ব্যালেন্সের বেশি উত্তোলন করা যাবে না" : "Amount exceeds available balance");
      return;
    }
    setRequesting(true);
    try {
      const res = await fetch("/api/themes/seller/payout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payoutForm),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success(bn ? "পেআউট অনুরোধ পাঠানো হয়েছে" : "Payout request submitted");
      setShowPayout(false);
      setPayoutForm({ amount: "", method: "bkash", account: "" });
      void load();
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setRequesting(false);
    }
  };

  const handleSaveProfile = async () => {
    if (sellerProfile.displayName.trim().length < 2) {
      toast.error(bn ? "নাম কমপক্ষে ২ অক্ষর হতে হবে" : "Name must be at least 2 characters");
      return;
    }
    setSavingProfile(true);
    try {
      const res = await fetch("/api/themes/seller/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sellerProfile),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      toast.success(bn ? "সেলার প্রোফাইল সংরক্ষিত হয়েছে" : "Seller profile saved");
      void load();
    } catch (err: any) {
      toast.error(err.message?.includes("slug_taken")
        ? (bn ? "এই লিংক নামটি নেওয়া আছে" : "That profile link is already taken")
        : err.message);
    } finally {
      setSavingProfile(false);
    }
  };

  const tabs = [
    { id: "overview", label: bn ? "ওভারভিউ" : "Overview" },
    { id: "themes", label: bn ? "থিম তালিকা" : "My Themes" },
    { id: "sales", label: bn ? "সেলস" : "Sales" },
    { id: "profile", label: bn ? "প্রোফাইল" : "Seller Profile" },
  ] as const;

  if (loading) {
    return (
      <div className="space-y-5">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border border-border bg-card h-24 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">
            {bn ? "থিম সেলার ড্যাশবোর্ড" : "Theme Seller Dashboard"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {bn ? "থিম আপলোড করুন, বিক্রয় ট্র্যাক করুন এবং আয় উত্তোলন করুন" : "List themes, track sales, and withdraw earnings"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={load} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <Button onClick={() => setShowAdd(true)} className="gap-2">
            <Plus className="w-4 h-4" />
            {bn ? "নতুন থিম যোগ করুন" : "List New Theme"}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1.5 p-1 bg-muted/40 rounded-xl border border-border overflow-x-auto no-scrollbar">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex-1 min-w-max px-4 py-2 rounded-lg text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === t.id
                ? "bg-card text-foreground shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Overview Tab ─────────────────────────────────── */}
      {activeTab === "overview" && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard icon={ShoppingBag} label={bn ? "মোট থিম" : "Total Themes"} value={themes.length} tone="bg-primary/10 text-primary" />
            <MetricCard icon={TrendingUp} label={bn ? "গ্রস আয় (BDT)" : "Gross Revenue"} value={`৳${formatAmount(gross, lang)}`} tone="bg-emerald-500/10 text-emerald-600" />
            <MetricCard icon={Wallet} label={bn ? "নেট আয়" : "Net Earnings"} value={`৳${formatAmount(net, lang)}`} tone="bg-sky-500/10 text-sky-600" />
            <MetricCard icon={Clock} label={bn ? "উত্তোলনযোগ্য" : "Available"} value={`৳${formatAmount(available, lang)}`} tone="bg-amber-500/10 text-amber-600" />
          </div>

          {available >= MIN_PAYOUT && (
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  {bn ? "আপনার কাছে উত্তোলনযোগ্য ব্যালেন্স আছে!" : "You have funds ready to withdraw!"}
                </p>
                <p className="text-xs text-emerald-600 mt-0.5">
                  ৳{formatAmount(available, lang)} {bn ? "পেমেন্টযোগ্য" : "available for payout"}
                </p>
              </div>
              <Button onClick={() => setShowPayout(true)} className="gap-2 shrink-0 bg-emerald-600 hover:bg-emerald-700">
                <Send className="w-4 h-4" />
                {bn ? "পেআউট অনুরোধ" : "Request Payout"}
              </Button>
            </div>
          )}

          {/* Recent Sales */}
          {paidSales.length > 0 && (
            <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
              <h2 className="text-sm font-semibold text-foreground mb-3">
                {bn ? "সাম্প্রতিক বিক্রয়" : "Recent Sales"}
              </h2>
              <div className="space-y-2.5">
                {paidSales.slice(0, 5).map((s) => (
                  <div key={s.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                    <div>
                      <p className="text-sm font-medium text-foreground">{themeById[s.themeId]?.name || "Theme"}</p>
                      <p className="text-xs text-muted-foreground">{new Date(s.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span className="text-sm font-semibold text-emerald-600">৳{formatAmount(earningsOf(s), lang)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Themes Tab ───────────────────────────────────── */}
      {activeTab === "themes" && (
        <div className="space-y-4">
          {themes.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <Palette className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <h3 className="text-base font-semibold text-foreground">
                {bn ? "এখনো কোনো থিম আপলোড করেননি" : "No themes listed yet"}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-4">
                {bn ? "প্রথম থিম যোগ করতে উপরের বাটনে ক্লিক করুন" : "Click 'List New Theme' to get started"}
              </p>
              <Button onClick={() => setShowAdd(true)} className="gap-2">
                <Plus className="w-4 h-4" />
                {bn ? "নতুন থিম যোগ করুন" : "List New Theme"}
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {themes.map((t) => {
                const meta = approvalMeta[t.approvalStatus] || approvalMeta.pending;
                return (
                  <div key={t.id} className="rounded-xl border border-border bg-card p-4 shadow-xs">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-sm font-bold text-foreground">{t.name}</h3>
                        <p className="text-xs text-muted-foreground">{catLabel[t.category]?.[bn ? "bn" : "en"] || t.category}</p>
                      </div>
                      <Badge className={`text-[10px] ${meta.cls}`}>{bn ? meta.bn : meta.en}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">৳{formatAmount(Number(t.priceBdt), lang)}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(t.id)}
                        disabled={deletingId === t.id}
                        className="text-destructive hover:bg-destructive/10 h-8 w-8"
                      >
                        {deletingId === t.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ── Sales Tab ────────────────────────────────────── */}
      {activeTab === "sales" && (
        <div className="space-y-4">
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                downloadCsv(
                  "theme-sales",
                  ["Date", "Theme", "Gross (BDT)", "Commission %", "Net (BDT)", "Status"],
                  sales.map((s) => [
                    csvDate(s.createdAt),
                    themeById[s.themeId]?.name || "",
                    s.amountBdt,
                    themeById[s.themeId]?.commissionRate ?? 30,
                    earningsOf(s).toFixed(2),
                    s.status,
                  ])
                )
              }
              disabled={!sales.length}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              {bn ? "CSV ডাউনলোড" : "Export CSV"}
            </Button>
          </div>

          {sales.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-10 text-center">
              <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-3 opacity-50" />
              <p className="text-sm text-muted-foreground">
                {bn ? "এখনো কোনো বিক্রয় হয়নি" : "No sales recorded yet"}
              </p>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
              <table className="w-full text-sm">
                <thead className="bg-muted/40">
                  <tr>
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground">{bn ? "তারিখ" : "Date"}</th>
                    <th className="text-left p-3 text-xs font-semibold text-muted-foreground">{bn ? "থিম" : "Theme"}</th>
                    <th className="text-right p-3 text-xs font-semibold text-muted-foreground">{bn ? "গ্রস" : "Gross"}</th>
                    <th className="text-right p-3 text-xs font-semibold text-muted-foreground">{bn ? "নেট আয়" : "Net"}</th>
                    <th className="text-center p-3 text-xs font-semibold text-muted-foreground">{bn ? "অবস্থা" : "Status"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sales.map((s) => (
                    <tr key={s.id}>
                      <td className="p-3 text-muted-foreground">{new Date(s.createdAt).toLocaleDateString()}</td>
                      <td className="p-3 font-medium text-foreground">{themeById[s.themeId]?.name || "—"}</td>
                      <td className="p-3 text-right">৳{formatAmount(Number(s.amountBdt), lang)}</td>
                      <td className="p-3 text-right font-semibold text-emerald-600">৳{formatAmount(earningsOf(s), lang)}</td>
                      <td className="p-3 text-center">
                        <Badge className={approvalMeta[s.status === "completed" ? "approved" : s.status]?.cls || "bg-muted"}>
                          {s.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ── Seller Profile Tab ───────────────────────────── */}
      {activeTab === "profile" && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-foreground flex items-center gap-2">
            <User2 className="w-5 h-5 text-primary" />
            {bn ? "পাবলিক সেলার প্রোফাইল" : "Public Seller Profile"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "প্রদর্শনী নাম *" : "Display Name *"}</Label>
              <Input
                value={sellerProfile.displayName}
                onChange={(e) => setSellerProfile((p) => ({ ...p, displayName: e.target.value }))}
                placeholder={bn ? "আপনার সেলার নাম" : "Your seller name"}
              />
            </div>
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "প্রোফাইল লিংক (slug) *" : "Profile Link Slug *"}</Label>
              <div className="flex items-center gap-1.5">
                <span className="text-xs text-muted-foreground whitespace-nowrap">yesshost.com/themes/seller/</span>
                <Input
                  value={sellerProfile.slug}
                  onChange={(e) => setSellerProfile((p) => ({ ...p, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") }))}
                  placeholder="your-slug"
                  className="flex-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "লোগো / অ্যাভাটার URL" : "Logo / Avatar URL"}</Label>
              <Input
                value={sellerProfile.logoUrl}
                onChange={(e) => setSellerProfile((p) => ({ ...p, logoUrl: e.target.value }))}
                placeholder="https://..."
              />
            </div>
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "ওয়েবসাইট" : "Website"}</Label>
              <Input
                value={sellerProfile.website}
                onChange={(e) => setSellerProfile((p) => ({ ...p, website: e.target.value }))}
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "পরিচিতি (বাংলা)" : "Bio (Bengali)"}</Label>
              <Textarea
                value={sellerProfile.bioBn}
                onChange={(e) => setSellerProfile((p) => ({ ...p, bioBn: e.target.value }))}
                rows={3}
                placeholder="আপনার পরিচিতি লিখুন..."
              />
            </div>
            <div>
              <Label className="text-xs mb-1.5 block">{bn ? "পরিচিতি (ইংরেজি)" : "Bio (English)"}</Label>
              <Textarea
                value={sellerProfile.bioEn}
                onChange={(e) => setSellerProfile((p) => ({ ...p, bioEn: e.target.value }))}
                rows={3}
                placeholder="Write your bio in English..."
              />
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Switch
              id="public-profile"
              checked={sellerProfile.isPublic}
              onCheckedChange={(v) => setSellerProfile((p) => ({ ...p, isPublic: v }))}
            />
            <Label htmlFor="public-profile" className="text-sm">
              {bn ? "প্রোফাইল সর্বসাধারণের জন্য দৃশ্যমান" : "Make profile publicly visible"}
            </Label>
          </div>

          <Button onClick={handleSaveProfile} disabled={savingProfile} className="gap-2">
            {savingProfile ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {bn ? "প্রোফাইল সংরক্ষণ করুন" : "Save Profile"}
          </Button>
        </div>
      )}

      {/* ── Payout History ────────────────────────────────── */}
      {payouts.length > 0 && (
        <div className="rounded-xl border border-border bg-card p-5 shadow-xs">
          <h2 className="text-sm font-semibold text-foreground mb-3">
            {bn ? "পেআউট ইতিহাস" : "Payout History"}
          </h2>
          <div className="space-y-2.5">
            {payouts.map((p) => (
              <div key={p.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                <div>
                  <p className="text-sm font-medium text-foreground capitalize">{p.method}</p>
                  <p className="text-xs text-muted-foreground">{p.accountDetails} · {new Date(p.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">৳{formatAmount(Number(p.amountBdt), lang)}</p>
                  <Badge className={`text-[10px] ${
                    p.status === "paid" ? "bg-emerald-500/10 text-emerald-700" :
                    p.status === "approved" ? "bg-sky-500/10 text-sky-700" :
                    "bg-amber-500/10 text-amber-700"
                  }`}>{p.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Add Theme Dialog ──────────────────────────────── */}
      <Dialog open={showAdd} onOpenChange={setShowAdd}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>{bn ? "নতুন থিম জমা দিন" : "Submit a New Theme"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <Label className="text-xs mb-1 block">{bn ? "থিমের নাম *" : "Theme Name *"}</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="Beautiful Business Theme"
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">Slug *</Label>
                <Input
                  value={form.slug}
                  onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") }))}
                  placeholder="beautiful-business-theme"
                />
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "ক্যাটাগরি" : "Category"}</Label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{catLabel[c]?.[bn ? "bn" : "en"] || c}</option>
                  ))}
                </select>
              </div>
              <div>
                <Label className="text-xs mb-1 block">{bn ? "মূল্য (BDT) *" : "Price (BDT) *"}</Label>
                <Input
                  type="number"
                  min={0}
                  step={10}
                  value={form.priceBdt}
                  onChange={(e) => setForm((f) => ({ ...f, priceBdt: e.target.value }))}
                  placeholder="499"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs mb-1 block">{bn ? "প্রিভিউ URL" : "Preview URL"}</Label>
              <Input
                value={form.previewUrl}
                onChange={(e) => setForm((f) => ({ ...f, previewUrl: e.target.value }))}
                placeholder="https://preview.yourtheme.com"
              />
            </div>
            <div>
              <Label className="text-xs mb-1 block">{bn ? "থাম্বনেইল URL" : "Thumbnail URL"}</Label>
              <Input
                value={form.thumbnailUrl}
                onChange={(e) => setForm((f) => ({ ...f, thumbnailUrl: e.target.value }))}
                placeholder="https://cdn.example.com/thumb.jpg"
              />
            </div>
            <p className="text-xs text-muted-foreground bg-amber-50 border border-amber-200 rounded-lg p-2.5">
              {bn
                ? "⚠️ জমা দেওয়ার পর থিমটি আমাদের টিম রিভিউ করবে। অনুমোদনের পর স্টোরে প্রকাশিত হবে।"
                : "⚠️ After submission, our team will review the theme before it goes live in the store."}
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setShowAdd(false)}>
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button onClick={handleAddTheme} disabled={saving} className="gap-2">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {bn ? "জমা দিন" : "Submit Theme"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* ── Payout Dialog ─────────────────────────────────── */}
      <Dialog open={showPayout} onOpenChange={setShowPayout}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>{bn ? "পেআউট অনুরোধ" : "Request Payout"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <Label className="text-xs mb-1 block">{bn ? "পরিমাণ (BDT) *" : "Amount (BDT) *"}</Label>
              <Input
                type="number"
                min={MIN_PAYOUT}
                max={available}
                value={payoutForm.amount}
                onChange={(e) => setPayoutForm((f) => ({ ...f, amount: e.target.value }))}
                placeholder={`Min ৳${MIN_PAYOUT}`}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {bn ? `উপলব্ধ: ৳${formatAmount(available, lang)}` : `Available: ৳${formatAmount(available, lang)}`}
              </p>
            </div>
            <div>
              <Label className="text-xs mb-1 block">{bn ? "পেমেন্ট মেথড" : "Payment Method"}</Label>
              <select
                value={payoutForm.method}
                onChange={(e) => setPayoutForm((f) => ({ ...f, method: e.target.value }))}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              >
                <option value="bkash">bKash</option>
                <option value="nagad">Nagad</option>
                <option value="rocket">Rocket</option>
                <option value="bank">Bank Transfer</option>
              </select>
            </div>
            <div>
              <Label className="text-xs mb-1 block">{bn ? "অ্যাকাউন্ট নম্বর / IBAN *" : "Account Number / IBAN *"}</Label>
              <Input
                value={payoutForm.account}
                onChange={(e) => setPayoutForm((f) => ({ ...f, account: e.target.value }))}
                placeholder={bn ? "আপনার অ্যাকাউন্ট নম্বর" : "Your account number"}
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" onClick={() => setShowPayout(false)}>
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button onClick={handlePayout} disabled={requesting} className="gap-2">
                {requesting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {bn ? "অনুরোধ পাঠান" : "Submit Request"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
