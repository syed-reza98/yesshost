"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Wallet, ArrowDownLeft, ArrowUpRight, Plus, CheckCircle2, History, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { formatAmount } from "@/lib/formatPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import EmptyState from "@/components/EmptyState";

type Transaction = {
  id: string;
  type: string;
  amountBdt: string;
  status: string;
  paymentMethod?: string | null;
  transactionId?: string | null;
  description?: string | null;
  createdAt: string;
};

export default function WalletPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { user } = useAuth();
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [depositOpen, setDepositOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState("500");
  const [paymentMethod, setPaymentMethod] = useState("bKash");
  const [trxId, setTrxId] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchWallet = async () => {
    try {
      const res = await fetch("/api/wallet");
      if (res.ok) {
        const data = await res.json();
        setBalance(data.balance || 0);
        setTransactions(data.transactions || []);
      }
    } catch (err) {
      console.error("Failed to load wallet:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  const handleDeposit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!depositAmount || Number(depositAmount) <= 0) {
      toast.error(bn ? "সঠিক পরিমাণ প্রদান করুন" : "Please enter a valid amount");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/wallet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: depositAmount,
          method: paymentMethod,
          trxId: trxId || `TXN-${Date.now().toString().slice(-6)}`,
        }),
      });
      if (res.ok) {
        toast.success(bn ? "টপ-আপ সফল হয়েছে!" : "Deposit completed successfully!");
        setDepositOpen(false);
        setTrxId("");
        fetchWallet();
      } else {
        const data = await res.json();
        toast.error(data.error || "Deposit failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "মাই ওয়ালেট" : "My Wallet"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "ব্যালেন্স টপ-আপ করুন এবং দ্রুত ইনভয়েস পরিশোধ করুন" : "Top-up balance and pay invoices instantly"}
          </p>
        </div>
        <Button onClick={() => setDepositOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          {bn ? "ফান্ড যোগ করুন" : "Add Funds"}
        </Button>
      </div>

      {/* Balance Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative overflow-hidden rounded-2xl gradient-primary p-6 sm:p-8 text-primary-foreground">
          <div className="relative z-10">
            <span className="text-xs sm:text-sm text-primary-foreground/80 font-medium">
              {bn ? "বর্তমান ওয়ালেট ব্যালেন্স" : "Available Wallet Balance"}
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-2 tracking-tight">
              {loading ? "..." : formatAmount(balance, lang)}
            </div>
            <p className="text-xs text-primary-foreground/75 mt-3 max-w-md">
              {bn
                ? "যেকোনো নতুন সেবা অর্ডার বা ইনভয়েস পরিশোধে এই ব্যালেন্স ব্যবহার করতে পারেন。"
                : "Use your wallet balance for instant service renewals and 1-click invoice payments."}
            </p>
          </div>
          <Wallet className="w-48 h-48 absolute -right-8 -bottom-10 opacity-10" />
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-foreground mb-2">
              {bn ? "দ্রুত টপ-আপ অপশন" : "Quick Top-up"}
            </h3>
            <p className="text-xs text-muted-foreground mb-4">
              {bn ? "নিচের যেকোনো বাটনে ক্লিক করে দ্রুত যোগ করুন" : "Select an amount for 1-click deposit"}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["500", "1000", "2000"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => {
                    setDepositAmount(amt);
                    setDepositOpen(true);
                  }}
                  className="py-2 px-3 text-xs font-semibold rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all text-center"
                >
                  ৳{amt}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{bn ? "ইনস্ট্যান্ট অ্যাক্টিভেশন সাপোর্ট" : "Instant automated activation"}</span>
          </div>
        </div>
      </div>

      {/* Deposit Modal / Form */}
      {depositOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 bg-card border border-border rounded-xl shadow-md space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              {bn ? "ওয়ালেটে ফান্ড যোগ করুন" : "Deposit Funds to Wallet"}
            </h3>
            <button
              onClick={() => setDepositOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বাতিল" : "Cancel"}
            </button>
          </div>

          <form onSubmit={handleDeposit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  {bn ? "পরিমাণ (টাকা)" : "Amount (BDT)"}
                </label>
                <Input
                  type="number"
                  min="50"
                  step="50"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  {bn ? "পেমেন্ট মেথড" : "Payment Method"}
                </label>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option value="bKash">bKash</option>
                  <option value="Nagad">Nagad</option>
                  <option value="Rocket">Rocket</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">
                  {bn ? "ট্রানজেকশন আইডি (ঐচ্ছিক)" : "Transaction ID (optional)"}
                </label>
                <Input
                  type="text"
                  placeholder="e.g. 9J28DA10"
                  value={trxId}
                  onChange={(e) => setTrxId(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setDepositOpen(false)}
              >
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={submitting}>
                {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {bn ? "নিশ্চিত করুন" : "Confirm Deposit"}
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Transaction History */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-primary" />
          <h2 className="text-lg font-bold text-foreground">
            {bn ? "লেনদেনের ইতিহাস" : "Transaction Ledger"}
          </h2>
        </div>

        {loading ? (
          <div className="p-12 text-center bg-card rounded-xl border border-border">
            <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
          </div>
        ) : transactions.length === 0 ? (
          <EmptyState
            icon={History}
            title={bn ? "কোনো ট্রানজেকশন নেই" : "No transactions found"}
            description={bn ? "আপনার ওয়ালেটে এখনও কোনো লেনদেন হয়নি।" : "No transactions recorded yet."}
          />
        ) : (
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-secondary/40 text-muted-foreground uppercase text-[11px] font-semibold border-b border-border">
                  <tr>
                    <th className="px-4 py-3">{bn ? "তারিখ" : "Date"}</th>
                    <th className="px-4 py-3">{bn ? "বিবরণ" : "Description"}</th>
                    <th className="px-4 py-3">{bn ? "টাইপ" : "Type"}</th>
                    <th className="px-4 py-3">{bn ? "স্ট্যাটাস" : "Status"}</th>
                    <th className="px-4 py-3 text-right">{bn ? "পরিমাণ" : "Amount"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {transactions.map((tx) => {
                    const isCredit = tx.type === "deposit" || tx.type === "refund";
                    return (
                      <tr key={tx.id} className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                          {new Date(tx.createdAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="px-4 py-3 font-medium text-foreground">
                          {tx.description || (isCredit ? "Wallet Deposit" : "Invoice Payment")}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center gap-1 text-xs font-semibold ${
                              isCredit ? "text-emerald-600" : "text-destructive"
                            }`}
                          >
                            {isCredit ? (
                              <ArrowDownLeft className="w-3.5 h-3.5" />
                            ) : (
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            )}
                            {tx.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <Badge variant="outline" className="text-[10px] uppercase">
                            {tx.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-bold tabular-nums">
                          <span className={isCredit ? "text-emerald-600" : "text-foreground"}>
                            {isCredit ? "+" : "-"}
                            {formatAmount(tx.amountBdt, lang)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
