"use client";

import { useEffect, useState, useMemo } from "react";
import { FileText, Search, DollarSign, CheckCircle2, Clock, XCircle, Plus, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";
import DataToolbar from "@/components/DataToolbar";

type InvoiceItem = {
  id: string;
  invoiceNumber: string;
  amountBdt: string;
  status: string;
  dueDate: string;
  paidAt?: string | null;
  paymentMethod?: string | null;
  description?: string | null;
  user?: { id: string; name: string; email: string } | null;
  service?: { id: string; name: string; domain: string } | null;
};

export default function AdminBillingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [invoices, setInvoices] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchInvoices = async () => {
    try {
      const res = await fetch("/api/admin/billing");
      if (res.ok) {
        const data = await res.json();
        setInvoices(data.invoices || []);
      }
    } catch (err) {
      console.error("Failed to load invoices:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  const handleMarkPaid = async (id: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/billing", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: "paid", paymentMethod: "admin_override" }),
      });
      if (res.ok) {
        toast.success(bn ? "ইনভয়েস পেইড হিসেবে মার্ক করা হয়েছে" : "Invoice marked as paid");
        fetchInvoices();
      } else {
        const err = await res.json();
        toast.error(err.error || "Update failed");
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to update invoice");
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = useMemo(() => {
    return invoices.filter((inv) => {
      const matchSearch =
        inv.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
        (inv.user?.email || "").toLowerCase().includes(search.toLowerCase()) ||
        (inv.user?.name || "").toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || inv.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [invoices, search, statusFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "ইনভয়েস ও বিলিং ম্যানেজমেন্ট" : "Invoices & Revenue"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "সকল গ্রাহকের ইনভয়েস, পেমেন্ট ও বাকি নিরীক্ষণ করুন" : "Manage customer invoices, automated billing triggers, and manual payments"}
          </p>
        </div>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "ইনভয়েস নম্বর বা ইমেইল দিয়ে খুঁজুন..." : "Search invoice number or email..."}
        filters={[
          {
            key: "status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: bn ? "সকল স্ট্যাটাস" : "All Status", value: "all" },
              { label: bn ? "পেইড" : "Paid", value: "paid" },
              { label: bn ? "আনপেইড" : "Unpaid", value: "unpaid" },
              { label: bn ? "ওভারডিউ" : "Overdue", value: "overdue" },
              { label: bn ? "বাতিল" : "Cancelled", value: "cancelled" },
            ],
          },
        ]}
      />

      {loading ? (
        <div className="p-16 text-center bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 text-muted-foreground uppercase text-[11px] font-semibold border-b border-border">
                <tr>
                  <th className="px-4 py-3">{bn ? "ইনভয়েস নম্বর" : "Invoice #"}</th>
                  <th className="px-4 py-3">{bn ? "গ্রাহক" : "Client"}</th>
                  <th className="px-4 py-3">{bn ? "তারিখ ও শেষ সময়" : "Due Date"}</th>
                  <th className="px-4 py-3">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "পরিমাণ" : "Amount"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((inv) => (
                  <tr key={inv.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-mono text-xs font-bold text-foreground">
                      #{inv.invoiceNumber}
                      {inv.service && (
                        <div className="text-[11px] text-muted-foreground font-sans font-normal">
                          {inv.service.name}
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <div className="font-semibold text-foreground">{inv.user?.name || "Client"}</div>
                      <div className="text-muted-foreground">{inv.user?.email}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(inv.dueDate).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={
                          inv.status === "paid"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                            : inv.status === "unpaid"
                            ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right font-mono font-bold tabular-nums">
                      {formatAmount(inv.amountBdt, lang)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {inv.status !== "paid" && (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={updatingId === inv.id}
                          onClick={() => handleMarkPaid(inv.id)}
                          className="h-8 text-xs gap-1 border-emerald-500/30 text-emerald-600 hover:bg-emerald-500/10"
                        >
                          {updatingId === inv.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          )}
                          {bn ? "পেইড মার্ক করুন" : "Mark Paid"}
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
