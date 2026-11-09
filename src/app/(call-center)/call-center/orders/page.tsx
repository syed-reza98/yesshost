"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, X, Eye, ShoppingCart, RefreshCw, Package, Clock, Globe, Server, Palette, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface OrderItem {
  id: string;
  orderId: string;
  itemType: string;
  itemName: string;
  itemDescription?: string | null;
  priceBdt: string;
  domainName?: string | null;
}

interface OrderRecord {
  id: string;
  orderNumber: string;
  userId: string;
  status: string;
  totalBdt: string;
  paymentMethod?: string | null;
  paymentStatus: string;
  createdAt: string;
  items?: OrderItem[];
}

export default function CallCenterOrdersPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/orders");
      if (res.ok) {
        const data = await res.json();
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error("Error fetching staff orders:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter((ord) => {
    const matchesStatus = statusFilter === "all" || ord.status === statusFilter;
    const matchesSearch =
      ord.orderNumber.toLowerCase().includes(search.toLowerCase().trim()) ||
      (ord.items && ord.items.some((i) => i.itemName.toLowerCase().includes(search.toLowerCase().trim())));
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
      case "completed":
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20">{bn ? "সক্রিয়" : "Active"}</Badge>;
      case "confirmed":
        return <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">{bn ? "কনফার্মড" : "Confirmed"}</Badge>;
      case "pending":
        return <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20">{bn ? "পেন্ডিং" : "Pending"}</Badge>;
      case "cancelled":
        return <Badge className="bg-destructive/10 text-destructive border-destructive/20">{bn ? "বাতিল" : "Cancelled"}</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <ShoppingCart className="w-6 h-6 text-primary" />
            <span>{bn ? "অর্ডার ম্যানেজমেন্ট" : "Order Queue & Processing"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "সকল গ্রাহকের অর্ডার ও সার্ভিস অ্যাক্টিভেশন পর্যালোচনা" : "Review customer service requests, invoices, and automated WHM provisioning"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchOrders} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh Orders"}
        </Button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={bn ? "অর্ডার নম্বর দিয়ে খুঁজুন..." : "Search by order number or item..."}
            className="pl-9 h-10 rounded-xl text-xs"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {["all", "pending", "confirmed", "active", "cancelled"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize whitespace-nowrap transition-all ${
                statusFilter === st
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "bg-card border border-border/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "অর্ডার #" : "Order #"}</th>
                <th className="py-3 px-4">{bn ? "তারিখ" : "Date"}</th>
                <th className="py-3 px-4">{bn ? "আইটেমসমূহ" : "Items"}</th>
                <th className="py-3 px-4">{bn ? "মোট বিল" : "Total"}</th>
                <th className="py-3 px-4">{bn ? "পেমেন্ট" : "Payment"}</th>
                <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filteredOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-mono font-bold text-primary">
                    {ord.orderNumber}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {new Date(ord.createdAt).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                  <td className="py-4 px-4">
                    <div className="space-y-1">
                      {ord.items && ord.items.length > 0 ? (
                        ord.items.map((item) => (
                          <div key={item.id} className="text-xs font-medium text-foreground flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{item.itemName}</span>
                            {item.domainName && (
                              <span className="text-[10px] text-muted-foreground font-mono">
                                ({item.domainName})
                              </span>
                            )}
                          </div>
                        ))
                      ) : (
                        <span className="text-xs text-muted-foreground">General Service</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-foreground">
                    {formatAmount(ord.totalBdt, lang)}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-xs font-medium uppercase text-muted-foreground">
                      {ord.paymentMethod || "bKash"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {getStatusBadge(ord.status)}
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-muted-foreground text-sm">
                    {bn ? "কোনো অর্ডার পাওয়া যায়নি" : "No orders matching your criteria"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
