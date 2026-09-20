"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import EmptyState from "@/components/EmptyState";
import { ShoppingBag, Package, Clock, CheckCircle2, Truck, CreditCard, Eye, ChevronDown, ChevronUp, Globe, Server, Palette, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";
import DataToolbar from "@/components/DataToolbar";
import DataPagination from "@/components/DataPagination";
import { Link } from "@/lib/router-compat";

type OrderItem = {
  id: string;
  orderId: string;
  itemType: string;
  itemName: string;
  domain?: string | null;
  billingCycle?: string | null;
  priceBdt: string;
};

type Order = {
  id: string;
  orderNumber: string;
  status: string;
  subtotalBdt: string;
  discountBdt: string;
  totalBdt: string;
  couponCode?: string | null;
  createdAt: string;
  invoiceId?: string | null;
  items?: OrderItem[];
};

const statusConfig: Record<string, { color: string; en: string; bn: string }> = {
  pending: { color: "bg-amber-500/10 text-amber-600 border-amber-500/20", en: "Pending", bn: "পেন্ডিং" },
  confirmed: { color: "bg-blue-500/10 text-blue-600 border-blue-500/20", en: "Confirmed", bn: "কনফার্মড" },
  processing: { color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20", en: "Processing", bn: "প্রসেসিং" },
  completed: { color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", en: "Completed", bn: "সম্পন্ন" },
  cancelled: { color: "bg-destructive/10 text-destructive border-destructive/20", en: "Cancelled", bn: "বাতিল" },
};

const itemIcon = (type: string) => {
  switch (type) {
    case "hosting": return Server;
    case "theme": return Palette;
    default: return Globe;
  }
};

export default function OrdersPage() {
  const { lang, tr } = useLanguage();
  const bn = lang === "bn";
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        if (data.orders) setOrders(data.orders);
      })
      .catch((err) => console.error("Error loading orders:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter((o) => {
      const matchSearch =
        o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
        o.items?.some((i) => i.itemName.toLowerCase().includes(search.toLowerCase()));
      const matchStatus = statusFilter === "all" || o.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [orders, search, statusFilter]);

  const totalPages = Math.ceil(filteredOrders.length / pageSize) || 1;
  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredOrders.slice(start, start + pageSize);
  }, [filteredOrders, page, pageSize]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "আমার অর্ডারসমূহ" : "My Orders"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "আপনার সকল অর্ডার এবং পণ্যের হিস্ট্রি ট্র্যাক করুন" : "Track all your orders and service purchases"}
          </p>
        </div>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "অর্ডার নম্বর দিয়ে খুঁজুন..." : "Search by order number..."}
        filters={[
          {
            key: "status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: bn ? "সকল স্ট্যাটাস" : "All Status", value: "all" },
              { label: bn ? "পেন্ডিং" : "Pending", value: "pending" },
              { label: bn ? "প্রসেসিং" : "Processing", value: "processing" },
              { label: bn ? "সম্পন্ন" : "Completed", value: "completed" },
              { label: bn ? "বাতিল" : "Cancelled", value: "cancelled" },
            ],
          },
        ]}
      />

      {loading ? (
        <div className="flex items-center justify-center p-12 bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : paginatedOrders.length === 0 ? (
        <EmptyState
          icon={ShoppingBag}
          title={bn ? "কোনো অর্ডার পাওয়া যায়নি" : "No orders found"}
          description={bn ? "আপনার এখনও কোনো অর্ডার তৈরি করা হয়নি" : "You haven't placed any orders yet."}
          actionLabel={bn ? "সার্ভিস ব্রাউজ করুন" : "Browse Services"}
          actionHref="/services/basic-hosting"
        />
      ) : (
        <div className="space-y-4">
          {paginatedOrders.map((order) => {
            const isExpanded = expandedOrder === order.id;
            const status = statusConfig[order.status] || statusConfig.pending;

            return (
              <motion.div
                key={order.id}
                layout
                className="bg-card border border-border rounded-xl overflow-hidden transition-all shadow-xs"
              >
                <div
                  onClick={() => setExpandedOrder(isExpanded ? null : order.id)}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono font-bold text-foreground text-sm">
                          #{order.orderNumber}
                        </span>
                        <Badge variant="outline" className={status.color}>
                          {bn ? status.bn : status.en}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground mt-0.5 block">
                        {new Date(order.createdAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right">
                      <div className="font-bold text-foreground">
                        {formatAmount(order.totalBdt, lang)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {order.items?.length || 0} {bn ? "টি আইটেম" : "items"}
                      </span>
                    </div>

                    <button className="p-1 rounded-md text-muted-foreground hover:text-foreground">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-border/50 bg-secondary/10">
                    <div className="mt-4 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        {bn ? "অর্ডার আইটেমসমূহ" : "Order Items"}
                      </h4>
                      {order.items?.map((item) => {
                        const Icon = itemIcon(item.itemType);
                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between p-3 rounded-lg bg-card border border-border text-sm"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4 text-primary shrink-0" />
                              <div>
                                <span className="font-semibold text-foreground">{item.itemName}</span>
                                {item.domain && (
                                  <span className="block text-xs text-muted-foreground font-mono">
                                    {item.domain}
                                  </span>
                                )}
                              </div>
                            </div>
                            <span className="font-bold text-foreground tabular-nums">
                              {formatAmount(item.priceBdt, lang)}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
                      {order.couponCode && (
                        <div className="text-muted-foreground">
                          {bn ? "কুপন কোড: " : "Coupon applied: "}
                          <span className="font-mono font-bold text-foreground">{order.couponCode}</span>
                        </div>
                      )}
                      {order.invoiceId && (
                        <Link
                          href={`/dashboard/billing`}
                          className="font-semibold text-primary hover:underline ml-auto"
                        >
                          {bn ? "ইনভয়েস দেখুন →" : "View Invoice →"}
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}

          <DataPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
