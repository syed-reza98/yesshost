"use client";

import { useEffect, useState } from "react";
import { Share2, Users, DollarSign, Wallet, Check, X, Clock, RefreshCw, Search, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";

interface AffiliateRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  referralCode: string;
  balanceBdt: string;
  totalEarnedBdt: string;
  referralCount: number;
  status: string;
  createdAt: string;
}

interface PayoutRecord {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  amountBdt: string;
  method: string;
  accountDetails: string;
  status: string;
  createdAt: string;
}

export default function AdminAffiliatesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [affiliates, setAffiliates] = useState<AffiliateRecord[]>([]);
  const [payouts, setPayouts] = useState<PayoutRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"affiliates" | "payouts">("affiliates");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/affiliates");
      if (res.ok) {
        const data = await res.json();
        setAffiliates(data.affiliates || []);
        setPayouts(data.payouts || []);
      }
    } catch (err) {
      console.error("Error loading affiliates:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdatePayout = async (payoutId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/admin/affiliates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "update_payout", payoutId, status: newStatus }),
      });
      if (res.ok) {
        toast.success(bn ? "পেআউট স্ট্যাটাস আপডেট হয়েছে" : "Payout status updated");
        fetchData();
      }
    } catch (err) {
      toast.error(bn ? "আপডেট ব্যর্থ হয়েছে" : "Failed to update payout");
    }
  };

  const pendingPayouts = payouts.filter((p) => p.status === "requested");
  const totalPaid = payouts
    .filter((p) => p.status === "paid")
    .reduce((sum, p) => sum + Number(p.amountBdt), 0);

  const filteredAffiliates = affiliates.filter(
    (a) =>
      a.userName.toLowerCase().includes(search.toLowerCase()) ||
      a.userEmail.toLowerCase().includes(search.toLowerCase()) ||
      a.referralCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Share2 className="w-6 h-6 text-primary" />
            <span>{bn ? "অ্যাফিলিয়েট ও পার্টনার ম্যানেজমেন্ট" : "Affiliate & Partner Program"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "পার্টনারদের রেফারেল ট্র্যাকিং, কমিশন ও উইথড্রল রিকোয়েস্ট পরিচালনা" : "Manage referral commissions, partner payout requests, and payout clearances"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchData} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh Data"}
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "মোট পার্টনার" : "Total Affiliates"}</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">{affiliates.length}</div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "পেন্ডিং পেআউট" : "Pending Requests"}</span>
            <Clock className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-amber-500">{pendingPayouts.length}</div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "পরিশোধিত কমিশন" : "Total Paid Out"}</span>
            <DollarSign className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">
            {formatAmount(totalPaid, lang)}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border/60 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted-foreground">{bn ? "রেফারেল সংখ্যা" : "Active Referrals"}</span>
            <Share2 className="w-4 h-4 text-primary" />
          </div>
          <div className="text-2xl font-mono font-bold text-foreground">
            {affiliates.reduce((sum, a) => sum + (a.referralCount || 0), 0)}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border/60 pb-2">
        <button
          onClick={() => setActiveTab("affiliates")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "affiliates"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {bn ? "পার্টনার তালিকা" : "Affiliates Directory"} ({affiliates.length})
        </button>
        <button
          onClick={() => setActiveTab("payouts")}
          className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
            activeTab === "payouts"
              ? "bg-primary text-primary-foreground shadow-xs"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <span>{bn ? "উইথড্রল রিকোয়েস্ট" : "Payout Requests"}</span>
          {pendingPayouts.length > 0 && (
            <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-[10px] font-bold">
              {pendingPayouts.length}
            </span>
          )}
        </button>
      </div>

      {/* Tab 1: Affiliates */}
      {activeTab === "affiliates" && (
        <div className="space-y-4">
          <div className="relative max-w-sm">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={bn ? "নাম, ইমেইল বা কোড খুঁজুন..." : "Search by name, email, referral code..."}
              className="pl-9 h-10 rounded-xl text-xs"
            />
          </div>

          <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    <th className="py-3 px-4">{bn ? "পার্টনার" : "Partner"}</th>
                    <th className="py-3 px-4">{bn ? "রেফারেল কোড" : "Code"}</th>
                    <th className="py-3 px-4">{bn ? "রেফারেল সংখ্যা" : "Referrals"}</th>
                    <th className="py-3 px-4">{bn ? "উপলব্ধ ব্যালেন্স" : "Balance"}</th>
                    <th className="py-3 px-4">{bn ? "মোট আয়" : "Total Earned"}</th>
                    <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {filteredAffiliates.map((a) => (
                    <tr key={a.id} className="hover:bg-accent/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-bold text-xs text-foreground">{a.userName}</div>
                        <div className="text-[11px] text-muted-foreground">{a.userEmail}</div>
                      </td>
                      <td className="py-4 px-4 font-mono text-xs font-bold text-primary">
                        {a.referralCode}
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-foreground">
                        {a.referralCount}
                      </td>
                      <td className="py-4 px-4 font-mono font-bold text-green-600 text-xs">
                        {formatAmount(a.balanceBdt, lang)}
                      </td>
                      <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                        {formatAmount(a.totalEarnedBdt, lang)}
                      </td>
                      <td className="py-4 px-4">
                        <Badge className="bg-green-500/10 text-green-600 border-green-500/20 text-[10px]">
                          {a.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                  {filteredAffiliates.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-muted-foreground text-xs">
                        {bn ? "কোনো অ্যাফিলিয়েট পাওয়া যায়নি" : "No affiliates registered yet"}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Payout Requests */}
      {activeTab === "payouts" && (
        <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <th className="py-3 px-4">{bn ? "গ্রাহক" : "Partner"}</th>
                  <th className="py-3 px-4">{bn ? "পরিমাণ" : "Amount"}</th>
                  <th className="py-3 px-4">{bn ? "মেথড" : "Method"}</th>
                  <th className="py-3 px-4">{bn ? "একাউন্ট বিবরণ" : "Account Details"}</th>
                  <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {payouts.map((pay) => (
                  <tr key={pay.id} className="hover:bg-accent/5 transition-colors">
                    <td className="py-4 px-4">
                      <div className="font-bold text-xs text-foreground">{pay.userName}</div>
                      <div className="text-[11px] text-muted-foreground">{pay.userEmail}</div>
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-xs text-foreground">
                      {formatAmount(pay.amountBdt, lang)}
                    </td>
                    <td className="py-4 px-4 uppercase text-xs font-semibold text-primary">
                      {pay.method}
                    </td>
                    <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                      {pay.accountDetails}
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        className={`text-[10px] ${
                          pay.status === "paid"
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : pay.status === "rejected"
                            ? "bg-destructive/10 text-destructive border-destructive/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                        }`}
                      >
                        {pay.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-right">
                      {pay.status === "requested" ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <Button
                            size="sm"
                            onClick={() => handleUpdatePayout(pay.id, "paid")}
                            className="h-8 rounded-lg text-xs bg-green-600 hover:bg-green-700 text-white gap-1"
                          >
                            <Check className="w-3.5 h-3.5" /> Approve & Paid
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleUpdatePayout(pay.id, "rejected")}
                            className="h-8 rounded-lg text-xs gap-1"
                          >
                            <X className="w-3.5 h-3.5" /> Reject
                          </Button>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">Processed</span>
                      )}
                    </td>
                  </tr>
                ))}
                {payouts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-muted-foreground text-xs">
                      {bn ? "কোনো পেআউট রিকোয়েস্ট নেই" : "No payout requests recorded"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
