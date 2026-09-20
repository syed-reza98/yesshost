"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Globe, Trash2, ArrowRight, CreditCard, Building2, CheckCircle2, AlertCircle, Loader2, Server, Palette, Wallet } from "lucide-react";
import { useCart, CartItem } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "@/lib/router-compat";
import { formatPrice, formatAmount } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const paymentMethods = [
  { id: "wallet", label: "Wallet Balance", labelBn: "ওয়ালেট ব্যালেন্স", icon: Wallet, desc: "Instant checkout from your account balance" },
  { id: "bkash", label: "bKash", labelBn: "বিকাশ", icon: CreditCard, desc: "Pay with bKash Online" },
  { id: "nagad", label: "Nagad", labelBn: "নগদ", icon: CreditCard, desc: "Pay with Nagad Mobile Payment" },
  { id: "sslcommerz", label: "Cards / Internet Banking", labelBn: "কার্ড / ইন্টারনেট ব্যাংকিং", icon: Building2, desc: "Visa, Mastercard, Amex, Internet Banking" },
];

const itemIcon = (type: CartItem["type"]) => {
  switch (type) {
    case "hosting": return Server;
    case "theme": return Palette;
    default: return Globe;
  }
};

export default function CheckoutPage() {
  const { items, clearCart, removeItem } = useCart();
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedPayment, setSelectedPayment] = useState("wallet");
  const [loading, setLoading] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [placedInfo, setPlacedInfo] = useState<{ orderNumber: string; invoiceNumber: string } | null>(null);

  useEffect(() => {
    fetch("/api/wallet")
      .then((r) => r.json())
      .then((d) => setWalletBalance(d.balance || 0))
      .catch(() => {});
  }, []);

  const parseBdtPrice = (price: string | number): number => {
    if (typeof price === "number") return price;
    const ascii = price.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)));
    return parseInt(ascii.replace(/[^\d]/g, ""), 10) || 0;
  };

  const totalBdt = items.reduce((sum, item) => sum + parseBdtPrice(item.price_bdt), 0);

  const handleCheckout = async () => {
    if (!user) {
      toast.error(bn ? "চেকআউটের পূর্বে লগইন করুন" : "Please login before placing an order");
      navigate("/login");
      return;
    }

    if (items.length === 0) {
      toast.error(bn ? "আপনার কার্ট খালি" : "Your cart is empty");
      return;
    }

    if (selectedPayment === "wallet" && walletBalance < totalBdt) {
      toast.error(
        bn
          ? `ওয়ালেটে পর্যাপ্ত ব্যালেন্স নেই (প্রয়োজন ৳${totalBdt}, আছে ৳${walletBalance})`
          : `Insufficient wallet balance. Needed: ৳${totalBdt}, available: ৳${walletBalance}`
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((it) => ({
            name: it.name,
            type: it.type,
            domain: (it as any).domain || it.name,
            price: parseBdtPrice(it.price_bdt),
            plan: (it as any).plan || "default",
            billingCycle: (it as any).billingCycle || "annually",
          })),
          paymentMethod: selectedPayment,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        clearCart();
        setOrderPlaced(true);
        setPlacedInfo({ orderNumber: data.orderNumber, invoiceNumber: data.invoiceNumber });
        toast.success(bn ? "অর্ডার সফলভাবে সম্পন্ন হয়েছে!" : "Order placed successfully!");
      } else {
        const err = await res.json();
        toast.error(err.error || "Order placement failed");
      }
    } catch (e: any) {
      toast.error(e.message || "Checkout error");
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced && placedInfo) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-xl text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-extrabold text-foreground mb-2">
          {bn ? "অর্ডার সফল হয়েছে!" : "Thank You For Your Order!"}
        </h1>
        <p className="text-muted-foreground text-sm mb-6">
          {bn
            ? `আপনার অর্ডার #${placedInfo.orderNumber} সফলভাবে গ্রহণ করা হয়েছে এবং সেবা সক্রিয় করা হচ্ছে।`
            : `Order #${placedInfo.orderNumber} has been received. Your invoice #${placedInfo.invoiceNumber} is generated.`}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/dashboard/orders">
            <Button className="w-full sm:w-auto">
              {bn ? "অর্ডার তালিকা দেখুন" : "View My Orders"}
            </Button>
          </Link>
          <Link href="/dashboard/services">
            <Button variant="outline" className="w-full sm:w-auto">
              {bn ? "হোস্টিং সার্ভিস ড্যাশবোর্ড" : "Go to Hosting Panel"}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 lg:py-16 max-w-5xl">
      <h1 className="text-3xl font-extrabold tracking-tight text-foreground mb-2">
        {bn ? "চেকআউট ও পেমেন্ট" : "Checkout & Order Review"}
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        {bn ? "আপনার নির্বাচিত সেবা পর্যালোচনা করুন এবং পেমেন্ট সম্পন্ন করুন" : "Review your selected items and complete payment securely"}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Cart Items & Payment Method */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-foreground flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              {bn ? "কার্টের আইটেমসমূহ" : "Items in Cart"} ({items.length})
            </h2>

            {items.length === 0 ? (
              <div className="p-8 text-center text-sm text-muted-foreground">
                {bn ? "আপনার কার্টে কোনো পণ্য নেই।" : "Your cart is currently empty."}
              </div>
            ) : (
              <div className="divide-y divide-border">
                {items.map((it) => {
                  const Icon = itemIcon(it.type);
                  return (
                    <div key={it.id} className="py-3 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{it.name}</div>
                          <div className="text-xs text-muted-foreground capitalize">{it.type} Package</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-bold font-mono text-sm tabular-nums">
                          {formatAmount(parseBdtPrice(it.price_bdt), lang)}
                        </span>
                        <button
                          onClick={() => removeItem(it.id)}
                          className="text-muted-foreground hover:text-destructive p-1 rounded-md transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Payment Method Selector */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-foreground">
              {bn ? "পেমেন্ট মাধ্যম বেছে নিন" : "Select Payment Method"}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {paymentMethods.map((pm) => {
                const Icon = pm.icon;
                const isSelected = selectedPayment === pm.id;
                return (
                  <div
                    key={pm.id}
                    onClick={() => setSelectedPayment(pm.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-border hover:border-border/80 bg-card"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className={`w-5 h-5 ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-bold text-sm text-foreground">
                        {bn ? pm.labelBn : pm.label}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{pm.desc}</p>
                    {pm.id === "wallet" && (
                      <div className="mt-2 text-xs font-semibold text-primary">
                        {bn ? "বর্তমান ব্যালেন্স: " : "Balance: "}
                        {formatAmount(walletBalance, lang)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6 shadow-xs space-y-4 sticky top-24">
            <h2 className="text-base font-bold text-foreground">
              {bn ? "অর্ডার সারাংশ" : "Order Summary"}
            </h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>{bn ? "সাবটোটাল" : "Subtotal"}</span>
                <span className="font-medium text-foreground">{formatAmount(totalBdt, lang)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>{bn ? "ভ্যাট / ট্যাক্স (০%)" : "Tax / VAT (0%)"}</span>
                <span className="font-medium text-foreground">৳০</span>
              </div>
              <div className="pt-2 border-t border-border flex justify-between text-base font-extrabold text-foreground">
                <span>{bn ? "সর্বমোট" : "Total Amount"}</span>
                <span className="text-primary font-mono">{formatAmount(totalBdt, lang)}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={loading || items.length === 0}
              className="w-full gap-2 py-6 text-base font-bold shadow-md"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <span>{bn ? "অর্ডার নিশ্চিত করুন" : "Confirm & Pay Now"}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>

            <div className="text-[11px] text-muted-foreground text-center space-y-1 pt-2">
              <p>🔒 {bn ? "২৫৬-বিট SSL এনক্রিপ্টেড সুরক্ষিত চেকআউট" : "256-bit SSL Encrypted Secure Checkout"}</p>
              <p>{bn ? "ইনস্ট্যান্ট অ্যাক্টিভেশন এবং সার্বক্ষণিক সাপোর্ট" : "Instant automated activation & 24/7 support"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
