"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import {
  FileText,
  Wallet,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Loader2,
  ArrowRight,
  Link2,
  Eye,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface InvoiceItem {
  id: string;
  invoiceNumber: string;
  amountBdt: string;
  status: string;
  dueDate: string;
  paidAt?: string;
  paymentMethod?: string;
  description?: string;
}

const statusColors: Record<string, string> = {
  paid: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  unpaid: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  overdue: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  cancelled: "bg-muted text-muted-foreground border-border",
};

export default function BillingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const searchParams = useSearchParams();
  const [invoicesList, setInvoicesList] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [payingId, setPayingId] = useState<string | null>(null);
  const [sharingId, setSharingId] = useState<string | null>(null);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/invoices");
      if (res.ok) {
        const data = await res.json();
        const list = data.invoices || [];
        setInvoicesList(list);

        // Handle deep-link
        const targetInvoice = searchParams.get("invoice");
        const targetAction = searchParams.get("action");
        if (targetInvoice) {
          const match = list.find((i: any) => i.invoiceNumber === targetInvoice);
          if (match && targetAction === "pay" && match.status !== "paid") {
            toast.info(bn ? `ইনভয়েস #${match.invoiceNumber} পরিশোধের জন্য প্রস্তুত` : `Invoice #${match.invoiceNumber} ready for payment`);
          }
        }
      }
    } catch {
      toast.error(bn ? "ইনভয়েস লোড করতে সমস্যা হয়েছে" : "Failed to load invoices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [searchParams]);

  const handleWalletPay = async (invoiceId: string) => {
    setPayingId(invoiceId);
    try {
      const res = await fetch("/api/payment/wallet/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(bn ? "ইনভয়েস সফলভাবে পরিশোধ করা হয়েছে!" : "Invoice paid successfully with Wallet!");
        fetchInvoices();
      } else {
        toast.error(data.error || "Payment failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Network error");
    } finally {
      setPayingId(null);
    }
  };

  const handleShare = async (inv: InvoiceItem) => {
    setSharingId(inv.id);
    try {
      const res = await fetch("/api/invoice/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId: inv.id }),
      });
      if (res.ok) {
        const data = await res.json();
        const url = `${window.location.origin}${data.shareUrl}`;
        await navigator.clipboard.writeText(url);
        toast.success(bn ? "পাবলিক লিংক কপি হয়েছে!" : "Public invoice link copied!");
      } else {
        toast.error("Failed to generate link");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSharingId(null);
    }
  };

  const handleView = async (inv: InvoiceItem) => {
    setSharingId(inv.id);
    try {
      const res = await fetch("/api/invoice/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId: inv.id }),
      });
      if (res.ok) {
        const data = await res.json();
        window.open(data.shareUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.error("Failed to open invoice");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSharingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "বিলিং ও ইনভয়েস" : "Billing & Invoices"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {bn
              ? "আপনার সকল বকেয়া ও পরিশোধিত ইনভয়েসের তালিকা এবং রসিদ।"
              : "View and settle invoices, manage payment receipts, and review payment history."}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-muted-foreground flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">{bn ? "ইনভয়েস লোড হচ্ছে..." : "Loading invoices..."}</p>
        </div>
      ) : invoicesList.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-card border border-border/50 shadow-sm space-y-3">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto" />
          <h3 className="text-lg font-bold">{bn ? "কোনো ইনভয়েস পাওয়া যায়নি" : "No Invoices Found"}</h3>
          <p className="text-muted-foreground text-sm">
            {bn ? "আপনার অ্যাকাউন্টে এখনো কোনো ইনভয়েস ইস্যু করা হয়নি।" : "No invoices have been billed to your account yet."}
          </p>
        </div>
      ) : (
        <div className="rounded-2xl bg-card border border-border/60 overflow-hidden shadow-sm">
          {/* Mobile Cards (sm:hidden) */}
          <div className="space-y-3 p-3 sm:hidden">
            {invoicesList.map((inv) => {
              const isPaid = inv.status === "paid";
              const isPaying = payingId === inv.id;
              const isSharing = sharingId === inv.id;
              const badgeClass = statusColors[inv.status] || "bg-secondary text-foreground";

              return (
                <article key={inv.id} className="rounded-2xl border border-border/70 bg-card/60 p-4 space-y-3 shadow-xs">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-mono text-xs font-bold text-primary">#{inv.invoiceNumber}</p>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {inv.description || "Web Hosting Service"}
                      </p>
                    </div>
                    <Badge variant="outline" className={`shrink-0 text-[10px] uppercase font-bold ${badgeClass}`}>
                      {inv.status}
                    </Badge>
                  </div>

                  <div className="my-3 flex items-end justify-between gap-3 border-y border-border/60 py-3">
                    <div>
                      <p className="text-[11px] text-muted-foreground">{bn ? "পরিমাণ" : "Amount"}</p>
                      <p className="text-lg font-black font-mono tabular-nums text-foreground">
                        ৳{formatAmount(inv.amountBdt, lang)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-muted-foreground">{bn ? "শেষ সময়" : "Due Date"}</p>
                      <p className="text-xs font-medium text-foreground">
                        {new Date(inv.dueDate).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {!isPaid ? (
                      <Button
                        size="sm"
                        className="h-10 text-xs gap-1 rounded-xl"
                        onClick={() => handleWalletPay(inv.id)}
                        disabled={isPaying}
                      >
                        {isPaying ? <Loader2 className="size-3.5 animate-spin" /> : <Wallet className="size-3.5" />}
                        {bn ? "পে" : "Pay"}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="secondary"
                        disabled
                        className="h-10 text-xs gap-1 rounded-xl text-emerald-600"
                      >
                        <CheckCircle2 className="size-3.5" />
                        {bn ? "পেইড" : "Paid"}
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-10 text-xs gap-1 rounded-xl"
                      onClick={() => handleView(inv)}
                      disabled={isSharing}
                    >
                      <Eye className="size-3.5" />
                      {bn ? "দেখুন" : "View"}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-10 text-xs gap-1 rounded-xl"
                      onClick={() => handleShare(inv)}
                      disabled={isSharing}
                    >
                      <Link2 className="size-3.5" />
                      {bn ? "শেয়ার" : "Share"}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Desktop Table (hidden sm:block) */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/50 border-b border-border/60 text-xs font-semibold text-muted-foreground uppercase">
                <tr>
                  <th className="px-6 py-4">{bn ? "ইনভয়েস নং" : "Invoice #"}</th>
                  <th className="px-6 py-4">{bn ? "বিবরণ" : "Description"}</th>
                  <th className="px-6 py-4">{bn ? "পরিমাণ" : "Amount"}</th>
                  <th className="px-6 py-4">{bn ? "মেয়াদ" : "Due Date"}</th>
                  <th className="px-6 py-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="px-6 py-4 text-right">{bn ? "অ্যাকশন" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {invoicesList.map((inv) => {
                  const isPaid = inv.status === "paid";
                  const isPaying = payingId === inv.id;
                  const isSharing = sharingId === inv.id;
                  return (
                    <tr key={inv.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-semibold text-foreground">
                        #{inv.invoiceNumber}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground max-w-xs truncate">
                        {inv.description || "Web Hosting Service"}
                      </td>
                      <td className="px-6 py-4 font-bold font-mono text-foreground">
                        ৳{formatAmount(inv.amountBdt, lang)}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {new Date(inv.dueDate).toLocaleDateString("en-GB")}
                      </td>
                      <td className="px-6 py-4">
                        <Badge
                          variant="outline"
                          className={`text-xs font-bold ${statusColors[inv.status] || ""}`}
                        >
                          {inv.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleView(inv)}
                            disabled={isSharing}
                            className="h-8 text-xs gap-1"
                            title={bn ? "পাবলিক পেজে দেখুন" : "View on public page"}
                          >
                            <Eye className="w-3.5 h-3.5" />
                            {bn ? "দেখুন" : "View"}
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleShare(inv)}
                            disabled={isSharing}
                            className="h-8 text-xs gap-1"
                            title={bn ? "পাবলিক লিংক কপি করুন" : "Copy public link"}
                          >
                            <Link2 className="w-3.5 h-3.5" />
                            {bn ? "শেয়ার" : "Share"}
                          </Button>
                          {!isPaid ? (
                            <Button
                              size="sm"
                              onClick={() => handleWalletPay(inv.id)}
                              disabled={isPaying}
                              className="h-8 text-xs gap-1.5"
                            >
                              {isPaying ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                <Wallet className="w-3.5 h-3.5" />
                              )}
                              {bn ? "ওয়ালেট পে" : "Pay with Wallet"}
                            </Button>
                          ) : (
                            <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {bn ? "পরিশোধিত" : "Paid"}
                            </span>
                          )}
                        </div>
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
  );
}
