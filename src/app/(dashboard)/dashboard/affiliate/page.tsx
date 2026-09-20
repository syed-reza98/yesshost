"use client";

import { useEffect, useState } from "react";
import { Share2, Users, DollarSign, Wallet, Copy, Check, TrendingUp, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import EmptyState from "@/components/EmptyState";

export default function AffiliatePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [clicksCount, setClicksCount] = useState(0);
  const [referrals, setReferrals] = useState<any[]>([]);
  const [commissions, setCommissions] = useState<any[]>([]);
  const [payouts, setPayouts] = useState<any[]>([]);

  const [payoutOpen, setPayoutOpen] = useState(false);
  const [payoutAmount, setPayoutAmount] = useState("500");
  const [payoutMethod, setPayoutMethod] = useState("bkash");
  const [accountDetails, setAccountDetails] = useState("");
  const [submittingPayout, setSubmittingPayout] = useState(false);
  const [copied, setCopied] = useState(false);

  const fetchAffiliate = async () => {
    try {
      const res = await fetch("/api/affiliate");
      if (res.ok) {
        const data = await res.json();
        setProfile(data.profile);
        setClicksCount(data.clicksCount || 0);
        setReferrals(data.referrals || []);
        setCommissions(data.commissions || []);
        setPayouts(data.payouts || []);
      }
    } catch (err) {
      console.error("Failed to load affiliate:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAffiliate();
  }, []);

  const referralUrl = profile?.referralCode
    ? `${typeof window !== "undefined" ? window.location.origin : "https://yesshost.com"}?ref=${profile.referralCode}`
    : "";

  const handleCopyLink = () => {
    if (!referralUrl) return;
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    toast.success(bn ? "রেফারেল লিংক কপি হয়েছে!" : "Referral link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRequestPayout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!payoutAmount || Number(payoutAmount) < 500) {
      toast.error(bn ? "সর্বনিম্ন উত্তোলনের পরিমাণ ৫০০ টাকা" : "Minimum payout is 500 BDT");
      return;
    }
    setSubmittingPayout(true);
    try {
      const res = await fetch("/api/affiliate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: payoutAmount,
          method: payoutMethod,
          accountDetails,
        }),
      });
      if (res.ok) {
        toast.success(bn ? "উত্তোলন অনুরোধ সফল হয়েছে!" : "Payout requested successfully!");
        setPayoutOpen(false);
        fetchAffiliate();
      } else {
        const data = await res.json();
        toast.error(data.error || "Payout request failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to request payout");
    } finally {
      setSubmittingPayout(false);
    }
  };

  if (loading) {
    return (
      <div className="p-12 text-center bg-card rounded-xl border border-border">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "এফিলিয়েট ড্যাশবোর্ড" : "Affiliate Dashboard"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "বন্ধুদের রেফার করুন এবং প্রতিটি হোস্টিং অর্ডারে কমিশন উপার্জন করুন" : "Refer clients and earn recurring commissions on every purchase"}
          </p>
        </div>
        <Button onClick={() => setPayoutOpen(true)} className="gap-2">
          <Wallet className="w-4 h-4" />
          {bn ? "উত্তোলন অনুরোধ" : "Request Payout"}
        </Button>
      </div>

      {/* Referral Link Bar */}
      <div className="p-5 rounded-2xl bg-card border border-border shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-muted-foreground uppercase">
            {bn ? "আপনার ইউনিক রেফারেল লিংক" : "Your Unique Referral Link"}
          </span>
          <div className="font-mono text-sm font-bold text-foreground mt-1 select-all break-all">
            {referralUrl}
          </div>
        </div>
        <Button onClick={handleCopyLink} variant="outline" className="gap-2 shrink-0">
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          {copied ? (bn ? "কপি হয়েছে" : "Copied!") : (bn ? "লিংক কপি করুন" : "Copy Link")}
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 text-muted-foreground text-xs font-semibold uppercase">
            <DollarSign className="w-4 h-4 text-primary" />
            {bn ? "বর্তমান ব্যালেন্স" : "Available Balance"}
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">
            {formatAmount(profile?.balanceBdt || "0", lang)}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 text-muted-foreground text-xs font-semibold uppercase">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            {bn ? "মোট অর্জিত" : "Total Earned"}
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">
            {formatAmount(profile?.totalEarnedBdt || "0", lang)}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 text-muted-foreground text-xs font-semibold uppercase">
            <Users className="w-4 h-4 text-blue-600" />
            {bn ? "সফল রেফারেল" : "Total Referrals"}
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">
            {referrals.length}
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 text-muted-foreground text-xs font-semibold uppercase">
            <Share2 className="w-4 h-4 text-indigo-600" />
            {bn ? "মোট ক্লিক" : "Total Clicks"}
          </div>
          <div className="text-2xl font-extrabold text-foreground mt-2">
            {clicksCount}
          </div>
        </div>
      </div>

      {/* Payout Modal */}
      {payoutOpen && (
        <div className="p-5 bg-card border border-border rounded-xl shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              {bn ? "এফিলিয়েট কমিশন উত্তোলন" : "Withdraw Affiliate Commission"}
            </h3>
            <button
              onClick={() => setPayoutOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বাতিল" : "Cancel"}
            </button>
          </div>

          <form onSubmit={handleRequestPayout} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "পরিমাণ (টাকা)" : "Amount (BDT)"}
                </label>
                <Input
                  type="number"
                  min="500"
                  step="50"
                  value={payoutAmount}
                  onChange={(e) => setPayoutAmount(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "পেমেন্ট মাধ্যম" : "Payment Method"}
                </label>
                <select
                  value={payoutMethod}
                  onChange={(e) => setPayoutMethod(e.target.value)}
                  className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option value="bkash">bKash (Personal)</option>
                  <option value="nagad">Nagad (Personal)</option>
                  <option value="rocket">Rocket</option>
                  <option value="bank">Bank Account</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "হিসাব নম্বর / বিবরণ" : "Account Number / Bank Details"}
                </label>
                <Input
                  value={accountDetails}
                  onChange={(e) => setAccountDetails(e.target.value)}
                  placeholder="017XXXXXXXX"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setPayoutOpen(false)}>
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={submittingPayout}>
                {submittingPayout && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {bn ? "উত্তোলন অনুরোধ জমা দিন" : "Submit Request"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Payout History */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-foreground">
          {bn ? "উত্তোলন হিস্ট্রি" : "Payout History"}
        </h3>
        {payouts.length === 0 ? (
          <div className="p-8 text-center bg-card rounded-xl border border-border text-xs text-muted-foreground">
            {bn ? "এখনও কোনো উত্তোলনের অনুরোধ নেই।" : "No withdrawal requests yet."}
          </div>
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 text-muted-foreground uppercase text-[11px] font-semibold border-b border-border">
                <tr>
                  <th className="px-4 py-3">{bn ? "তারিখ" : "Date"}</th>
                  <th className="px-4 py-3">{bn ? "মেথড" : "Method"}</th>
                  <th className="px-4 py-3">{bn ? "অ্যাকাউন্ট" : "Account"}</th>
                  <th className="px-4 py-3">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "পরিমাণ" : "Amount"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {payouts.map((p) => (
                  <tr key={p.id}>
                    <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(p.createdAt).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-4 py-3 font-semibold uppercase text-xs">{p.method}</td>
                    <td className="px-4 py-3 font-mono text-xs">{p.accountDetails}</td>
                    <td className="px-4 py-3">
                      <Badge variant="outline" className="text-[10px] uppercase">
                        {p.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold">
                      {formatAmount(p.amountBdt, lang)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
