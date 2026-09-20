"use client";

import { useState } from "react";
import { FileText, ExternalLink, Link2, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface InvoiceItem {
  id: string;
  invoice_number?: string;
  invoiceNumber?: string;
  amount_bdt?: string | number;
  amountBdt?: string | number;
  status: string;
  due_date?: string;
  dueDate?: string;
  description?: string;
}

const statusConfig: Record<string, { labelBn: string; labelEn: string; color: string }> = {
  paid: { labelBn: "পরিশোধিত", labelEn: "Paid", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" },
  unpaid: { labelBn: "বকেয়া", labelEn: "Unpaid", color: "bg-amber-500/10 text-amber-600 border-amber-500/20" },
  overdue: { labelBn: "মেয়াদোত্তীর্ণ", labelEn: "Overdue", color: "bg-rose-500/10 text-rose-600 border-rose-500/20" },
  cancelled: { labelBn: "বাতিল", labelEn: "Cancelled", color: "bg-muted text-muted-foreground border-border" },
};

export default function ServiceInvoices({
  invoices,
  compact = false,
}: {
  invoices: InvoiceItem[];
  compact?: boolean;
}) {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [sharingId, setSharingId] = useState<string | null>(null);

  const handleShare = async (invoiceId: string) => {
    setSharingId(invoiceId);
    try {
      const res = await fetch("/api/invoice/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId }),
      });
      if (res.ok) {
        const data = await res.json();
        const url = `${window.location.origin}${data.shareUrl}`;
        await navigator.clipboard.writeText(url);
        toast.success(bn ? "পাবলিক ইনভয়েস লিংক কপি হয়েছে!" : "Public invoice link copied to clipboard!");
        window.open(data.shareUrl, "_blank", "noopener,noreferrer");
      } else {
        toast.error("Failed to generate share link");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSharingId(null);
    }
  };

  if (!invoices || invoices.length === 0) {
    return (
      <p className="text-xs text-muted-foreground italic">
        {bn ? "এই সেবার জন্য এখনো কোনো বিল তৈরি হয়নি।" : "No billing records found for this item."}
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {invoices.map((inv) => {
        const invNum = inv.invoiceNumber || inv.invoice_number || "—";
        const amt = inv.amountBdt || inv.amount_bdt || "0";
        const st = statusConfig[inv.status] || {
          labelBn: inv.status,
          labelEn: inv.status,
          color: "bg-secondary text-secondary-foreground",
        };
        const isSharing = sharingId === inv.id;

        return (
          <div
            key={inv.id}
            className="flex items-center justify-between p-3 rounded-xl border border-border/70 bg-card/80 hover:bg-muted/30 transition-colors gap-2"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs font-bold text-foreground truncate">#{invNum}</p>
                <p className="text-[11px] text-muted-foreground truncate">{inv.description || "Hosting Service"}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-xs font-bold text-foreground">
                ৳{formatAmount(amt, lang)}
              </span>
              <Badge variant="outline" className={`text-[10px] px-2 py-0.5 ${st.color}`}>
                {bn ? st.labelBn : st.labelEn}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleShare(inv.id)}
                disabled={isSharing}
                className="h-8 px-2 text-xs gap-1"
                title={bn ? "পাবলিক লিংক কপি ও ভিউ করুন" : "Copy & view public link"}
              >
                {isSharing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Link2 className="w-3.5 h-3.5" />}
                {!compact && <span className="hidden sm:inline">{bn ? "শেয়ার" : "Share"}</span>}
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
