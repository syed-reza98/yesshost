"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Wallet, CheckCircle2, Clock, AlertTriangle, Loader2, ArrowRight } from "lucide-react";
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

export default function BillingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [invoicesList, setInvoicesList] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [payingId, setPayingId] = useState<string | null>(null);

  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/invoices");
      if (res.ok) {
        const data = await res.json();
        setInvoicesList(data.invoices || []);
      }
    } catch (err) {
      toast.error(bn ? "ইনভয়েস লোড করতে সমস্যা হয়েছে" : "Failed to load invoices");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {bn ? "বিলিং ও ইনভয়েস" : "Billing & Invoices"}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {bn ? "আপনার সকল বকেয়া ও পরিশোধিত ইনভয়েসের তালিকা এবং রসিদ।" : "View and settle invoices, manage payment receipts, and review payment history."}
        </p>
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
          <div className="overflow-x-auto">
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
                  return (
                    <tr key={inv.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 font-mono font-semibold text-foreground">
                        #{inv.invoiceNumber}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground max-w-xs truncate">
                        {inv.description || "Web Hosting Service"}
                      </td>
                      <td className="px-6 py-4 font-bold text-foreground">
                        ৳{Number(inv.amountBdt).toLocaleString("en-US", { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {new Date(inv.dueDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                            isPaid
                              ? "bg-emerald-500/10 text-emerald-500"
                              : inv.status === "overdue"
                              ? "bg-rose-500/10 text-rose-500"
                              : "bg-amber-500/10 text-amber-500"
                          }`}
                        >
                          {inv.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {!isPaid ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleWalletPay(inv.id)}
                              disabled={isPaying}
                              className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-1.5"
                            >
                              {isPaying ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Wallet className="w-3.5 h-3.5" />}
                              {bn ? "ওয়ালেট দিয়ে দিন" : "Pay with Wallet"}
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-emerald-500 font-medium flex items-center justify-end gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {bn ? "পরিশোধিত" : "Paid"}
                          </span>
                        )}
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
