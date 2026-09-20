"use client";

import { useEffect, useState, useMemo } from "react";
import { Server, Search, Globe, Shield, AlertTriangle, CheckCircle2, PauseCircle, PlayCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";
import DataToolbar from "@/components/DataToolbar";

type ServiceItem = {
  id: string;
  name: string;
  domain?: string | null;
  cpanelUsername?: string | null;
  packageName?: string | null;
  serviceType: string;
  status: string;
  priceBdt: string;
  expiryDate: string;
  user?: { id: string; name: string; email: string } | null;
};

export default function AdminServicesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      const res = await fetch("/api/admin/services");
      if (res.ok) {
        const data = await res.json();
        setServicesList(data.services || []);
      }
    } catch (err) {
      console.error("Failed to load services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/services", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        toast.success(
          newStatus === "suspended"
            ? bn ? "সার্ভিস স্থগিত করা হয়েছে (WHM সিঙ্কড)" : "Service suspended (WHM synced)"
            : bn ? "সার্ভিস পুনরায় সক্রিয় করা হয়েছে (WHM সিঙ্কড)" : "Service unsuspended (WHM synced)"
        );
        fetchServices();
      } else {
        const err = await res.json();
        toast.error(err.error || "Update failed");
      }
    } catch (e: any) {
      toast.error(e.message || "Action failed");
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = useMemo(() => {
    return servicesList.filter((s) => {
      const matchSearch =
        (s.name || "").toLowerCase().includes(search.toLowerCase()) ||
        (s.domain || "").toLowerCase().includes(search.toLowerCase()) ||
        (s.cpanelUsername || "").toLowerCase().includes(search.toLowerCase()) ||
        (s.user?.email || "").toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || s.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [servicesList, search, statusFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "সকল হোস্টিং ও সার্ভিসেস" : "Services & WHM Accounts"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "গ্রাহকদের সমস্ত হোস্টিং অ্যাকাউন্ট, ডোমেইন ও ক্লাউড সার্ভিস পর্যবেক্ষণ করুন" : "Manage provisioned cPanel accounts, suspensions, and package allocations"}
          </p>
        </div>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "সার্ভিস, ডোমেইন বা ইউজার ইমেইল দিয়ে খুঁজুন..." : "Search service, domain, cPanel user..."}
        filters={[
          {
            key: "status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: bn ? "সকল স্ট্যাটাস" : "All Status", value: "all" },
              { label: bn ? "অ্যাক্টিভ" : "Active", value: "active" },
              { label: bn ? "পেন্ডিং" : "Pending", value: "pending" },
              { label: bn ? "স্থগিত" : "Suspended", value: "suspended" },
              { label: bn ? "টার্মিনেটেড" : "Terminated", value: "terminated" },
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
                  <th className="px-4 py-3">{bn ? "সার্ভিস ও ডোমেইন" : "Service & Domain"}</th>
                  <th className="px-4 py-3">{bn ? "গ্রাহক" : "Client"}</th>
                  <th className="px-4 py-3">{bn ? "cPanel ইউজার" : "cPanel User"}</th>
                  <th className="px-4 py-3">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="px-4 py-3">{bn ? "মূল্য" : "Price"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "অ্যাকশন" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-foreground">{s.name}</div>
                      {s.domain && (
                        <div className="text-xs font-mono text-primary">{s.domain}</div>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <div className="font-medium text-foreground">{s.user?.name || "Client"}</div>
                      <div className="text-muted-foreground">{s.user?.email}</div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-foreground font-semibold">
                      {s.cpanelUsername || "—"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        variant="outline"
                        className={
                          s.status === "active"
                            ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                            : s.status === "suspended"
                            ? "bg-destructive/10 text-destructive border-destructive/20"
                            : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                        }
                      >
                        {s.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs tabular-nums">
                      {formatAmount(s.priceBdt, lang)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {s.status === "active" ? (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={updatingId === s.id}
                          onClick={() => handleStatusChange(s.id, "suspended")}
                          className="h-8 text-xs text-destructive hover:text-destructive border-destructive/30 hover:bg-destructive/10 gap-1"
                        >
                          {updatingId === s.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <PauseCircle className="w-3.5 h-3.5" />
                          )}
                          {bn ? "স্থগিত করুন" : "Suspend"}
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          disabled={updatingId === s.id}
                          onClick={() => handleStatusChange(s.id, "active")}
                          className="h-8 text-xs text-emerald-600 hover:text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/10 gap-1"
                        >
                          {updatingId === s.id ? (
                            <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <PlayCircle className="w-3.5 h-3.5" />
                          )}
                          {bn ? "সক্রিয় করুন" : "Unsuspend"}
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
