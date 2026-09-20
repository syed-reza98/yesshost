"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Download, FileText, Loader2, LockKeyhole, ShieldCheck, CreditCard, Printer, CheckCircle2 } from "lucide-react";
import PublicLayout from "@/components/PublicLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";

export default function SharedInvoicePage() {
  const routeParams = useParams();
  const token = routeParams?.token as string;
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState<any | null>(null);
  const [paying, setPaying] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/invoice/${token}`);
        if (res.ok) {
          const data = await res.json();
          setInvoice(data.invoice);
        } else {
          setInvoice(null);
        }
      } catch {
        setInvoice(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [token]);

  const payable = invoice?.status === "unpaid" || invoice?.status === "overdue";

  const handlePay = async () => {
    if (!invoice) return;
    setPaying(true);
    try {
      // Direct payment flow / simulated or real gateway trigger
      toast.info(bn ? "পেমেন্ট গেটওয়ে সংযুক্ত হচ্ছে..." : "Connecting to payment gateway...");
      setTimeout(() => {
        window.location.href = `/checkout?invoice=${invoice.invoiceNumber}`;
      }, 1000);
    } catch (err: any) {
      toast.error(err.message || "Payment failed");
      setPaying(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <PublicLayout>
      <section className="min-h-[75vh] py-10 sm:py-14 bg-muted/20">
        <div className="mx-auto w-full max-w-3xl px-4">
          {loading ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center space-y-4 shadow-sm">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
              <p className="text-sm text-muted-foreground">{bn ? "ইনভয়েস লোড হচ্ছে..." : "Loading invoice details..."}</p>
            </div>
          ) : !invoice ? (
            <div className="bg-card border border-border rounded-2xl p-10 text-center shadow-sm">
              <LockKeyhole className="mx-auto mb-4 w-12 h-12 text-muted-foreground/50" />
              <h1 className="text-xl font-bold text-foreground">
                {bn ? "ইনভয়েস লিংকটি বৈধ নয়" : "This invoice link is invalid"}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {bn ? "লিংকটির মেয়াদ শেষ হতে পারে অথবা ইনভয়েসটি পাওয়া যায়নি।" : "It may have expired or does not exist."}
              </p>
            </div>
          ) : (
            <article className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-border bg-gradient-to-r from-primary/5 via-transparent to-transparent flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xl sm:text-2xl font-black text-foreground">
                      #{invoice.invoiceNumber}
                    </span>
                    <Badge
                      variant="outline"
                      className={
                        invoice.status === "paid"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : invoice.status === "overdue"
                          ? "bg-rose-500/10 text-rose-600 border-rose-500/20"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }
                    >
                      {invoice.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {bn ? "ইস্যু তারিখ: " : "Issue Date: "}
                    {new Date(invoice.createdAt).toLocaleDateString("en-GB")}
                  </p>
                </div>

                <div className="flex items-center gap-2 print:hidden">
                  <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2 h-9 text-xs">
                    <Printer className="w-3.5 h-3.5" />
                    {bn ? "প্রিন্ট / PDF" : "Print / PDF"}
                  </Button>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/60">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">{bn ? "বিল গ্রহীতা" : "Billed To"}</p>
                    <p className="font-bold text-foreground mt-1">{invoice.clientName}</p>
                    <p className="text-xs text-muted-foreground font-mono">{invoice.clientEmail}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border/60">
                    <p className="text-xs font-semibold text-muted-foreground uppercase">{bn ? "বিল পরিশোধের শেষ সময়" : "Payment Due"}</p>
                    <p className="font-bold text-foreground mt-1">
                      {new Date(invoice.dueDate).toLocaleDateString("en-GB")}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {invoice.paidAt ? (
                        <span className="text-emerald-600 font-medium">
                          {bn ? "পরিশোধিত: " : "Paid at: "} {new Date(invoice.paidAt).toLocaleDateString("en-GB")}
                        </span>
                      ) : (
                        <span>{bn ? "বকেয়া রয়েছে" : "Outstanding balance"}</span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Line Item */}
                <div className="border border-border rounded-xl overflow-hidden">
                  <div className="bg-secondary/40 px-4 py-2.5 text-xs font-semibold text-muted-foreground border-b border-border flex justify-between">
                    <span>{bn ? "বিবরণ" : "Description"}</span>
                    <span>{bn ? "পরিমাণ" : "Amount"}</span>
                  </div>
                  <div className="px-4 py-4 flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">{invoice.description || "Hosting & Cloud Service"}</span>
                    <span className="font-bold font-mono text-base text-foreground">
                      ৳{formatAmount(invoice.amountBdt, lang)}
                    </span>
                  </div>
                  <div className="bg-secondary/20 px-4 py-3 border-t border-border flex justify-between items-center text-sm font-bold">
                    <span>{bn ? "মোট দেয় বিল" : "Total Due"}</span>
                    <span className="text-lg font-black text-primary font-mono">
                      ৳{formatAmount(invoice.amountBdt, lang)}
                    </span>
                  </div>
                </div>

                {/* Payment Action for Payable Invoices */}
                {payable && (
                  <div className="pt-2 print:hidden">
                    <Button
                      onClick={handlePay}
                      disabled={paying}
                      size="lg"
                      className="w-full gap-2 text-base font-bold h-12 shadow-lg shadow-primary/20"
                    >
                      {paying ? <Loader2 className="w-5 h-5 animate-spin" /> : <CreditCard className="w-5 h-5" />}
                      {bn ? "এখনই বিল পরিশোধ করুন (৳" : "Pay Invoice Now (৳"}
                      {formatAmount(invoice.amountBdt, lang)}
                      {")"}
                    </Button>
                  </div>
                )}

                {invoice.status === "paid" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-sm font-medium">
                      {bn ? "এই ইনভয়েসটি সফলভাবে পরিশোধিত হয়েছে।" : "This invoice has been fully settled. Thank you!"}
                    </span>
                  </div>
                )}
              </div>
            </article>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}
