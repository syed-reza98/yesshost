"use client";

import { useState, useEffect } from "react";
import { Tag, Plus, Trash2, RefreshCw, Loader2, Search, Check, Copy } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface Coupon {
  id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: string;
  minSpendBdt?: string | null;
  usageLimit?: number | null;
  validUntil?: string | null;
  isActive: boolean;
}

export default function AdminCouponsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [couponsList, setCouponsList] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  // Form
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState<"percentage" | "fixed">("percentage");
  const [discountValue, setDiscountValue] = useState("10");
  const [minSpend, setMinSpend] = useState("500");
  const [usageLimit, setUsageLimit] = useState("100");

  const fetchCoupons = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/coupons");
      if (res.ok) {
        const data = await res.json();
        setCouponsList(data.coupons || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleCreateCoupon = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !discountValue) return;
    setSaving(true);

    try {
      const res = await fetch("/api/admin/coupons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code.trim().toUpperCase(),
          discountType,
          discountValue,
          minSpendBdt: minSpend,
          usageLimit,
        }),
      });

      if (res.ok) {
        toast.success(bn ? "কুপন তৈরি সফল হয়েছে!" : "Coupon code created successfully!");
        setDialogOpen(false);
        setCode("");
        fetchCoupons();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to create coupon");
      }
    } catch (err) {
      toast.error("Network error creating coupon");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteCoupon = async (id: string) => {
    if (!confirm(bn ? "আপনি কি এই কুপনটি মুছে ফেলতে চান?" : "Are you sure you want to delete this coupon?")) return;
    try {
      const res = await fetch("/api/admin/coupons", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success(bn ? "কুপন মুছে ফেলা হয়েছে" : "Coupon deleted");
        fetchCoupons();
      }
    } catch (err) {
      toast.error("Failed to delete coupon");
    }
  };

  const copyCode = (c: string) => {
    navigator.clipboard.writeText(c);
    toast.success(bn ? `কপি করা হয়েছে: ${c}` : `Copied code: ${c}`);
  };

  const filtered = couponsList.filter((c) =>
    c.code.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Tag className="w-6 h-6 text-primary" />
            <span>{bn ? "কুপন ও ডিসকাউন্ট কোড" : "Coupons & Promotional Discounts"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "হোস্টিং ও ডোমেইন অর্ডারে বিশেষ ছাড়ের জন্য প্রোমো কোড তৈরি ও পরিচালনা" : "Create percentage or fixed cash discount codes for marketing campaigns"}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button size="sm" variant="outline" onClick={fetchCoupons} disabled={loading} className="rounded-xl text-xs gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            {bn ? "নতুন কুপন তৈরি" : "Create Coupon"}
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-xs">
        <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={bn ? "কুপন কোড খুঁজুন..." : "Search coupon code..."}
          className="pl-9 h-10 rounded-xl text-xs"
        />
      </div>

      {/* Table */}
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "প্রোমো কোড" : "Coupon Code"}</th>
                <th className="py-3 px-4">{bn ? "ডিসকাউন্ট" : "Discount"}</th>
                <th className="py-3 px-4">{bn ? "ন্যূনতম অর্ডার" : "Min Spend"}</th>
                <th className="py-3 px-4">{bn ? "ব্যবহার সীমা" : "Usage Limit"}</th>
                <th className="py-3 px-4">{bn ? "মেয়াদ" : "Valid Until"}</th>
                <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filtered.map((coupon) => (
                <tr key={coupon.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-mono font-extrabold text-primary text-xs flex items-center gap-2">
                    <span>{coupon.code}</span>
                    <button
                      onClick={() => copyCode(coupon.code)}
                      className="p-1 rounded text-muted-foreground hover:text-foreground"
                      title="Copy code"
                    >
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </td>
                  <td className="py-4 px-4 font-semibold text-foreground text-xs">
                    {coupon.discountType === "percentage" ? `${coupon.discountValue}% OFF` : `৳${coupon.discountValue} FLAT`}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                    {formatAmount(coupon.minSpendBdt || "0", lang)}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                    {coupon.usageLimit ? `${coupon.usageLimit} uses` : "Unlimited"}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {coupon.validUntil ? new Date(coupon.validUntil).toLocaleDateString() : "Never expires"}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteCoupon(coupon.id)}
                      className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-xs text-muted-foreground">
                    {bn ? "কোনো কুপন তৈরি করা হয়নি" : "No coupons found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-foreground">
              {bn ? "নতুন কুপন তৈরি করুন" : "Generate Promotional Coupon"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateCoupon} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "কুপন কোড" : "Coupon Code"}</label>
              <Input
                required
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="e.g. SUMMER2026"
                className="font-mono uppercase h-10 rounded-xl text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "ডিসকাউন্ট ধরন" : "Type"}</label>
                <select
                  value={discountType}
                  onChange={(e: any) => setDiscountType(e.target.value)}
                  className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="percentage">Percentage (%)</option>
                  <option value="fixed">Fixed BDT (৳)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "ছাড়ের পরিমাণ" : "Discount Value"}</label>
                <Input
                  type="number"
                  required
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  placeholder="10"
                  className="h-10 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "ন্যূনতম অর্ডার (BDT)" : "Min Spend"}</label>
                <Input
                  type="number"
                  value={minSpend}
                  onChange={(e) => setMinSpend(e.target.value)}
                  placeholder="500"
                  className="h-10 rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "সর্বোচ্চ ব্যবহার" : "Usage Limit"}</label>
                <Input
                  type="number"
                  value={usageLimit}
                  onChange={(e) => setUsageLimit(e.target.value)}
                  placeholder="100"
                  className="h-10 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="rounded-xl text-xs">
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={saving} className="rounded-xl text-xs">
                {saving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    {bn ? "তৈরি হচ্ছে..." : "Creating..."}
                  </>
                ) : (
                  bn ? "কুপন সক্রিয় করুন" : "Save & Activate"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
