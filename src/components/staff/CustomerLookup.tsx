"use client";

import { useState } from "react";
import { Link } from "@/lib/router-compat";
import {
  AlertTriangle,
  BellRing,
  CreditCard,
  Globe,
  Headphones,
  Loader2,
  Plus,
  Search,
  ShieldCheck,
  ShoppingCart,
  User,
  ExternalLink,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatAmount } from "@/lib/formatPrice";

export default function CustomerLookup() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [term, setTerm] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState<any | null>(null);
  const [pinInput, setPinInput] = useState("");
  const [verifyingPin, setVerifyingPin] = useState(false);
  const [pinCustomer, setPinCustomer] = useState<any | null>(null);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = term.trim();
    if (q.length < 2) {
      toast.error(bn ? "কমপক্ষে ২টি অক্ষর লিখুন" : "Type at least 2 characters");
      return;
    }
    setSearching(true);
    try {
      const res = await fetch(`/api/admin/search?q=${encodeURIComponent(q)}`);
      if (res.ok) {
        const data = await res.json();
        setResults(data);
      } else {
        toast.error("Search failed");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSearching(false);
    }
  };

  const handlePinVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const pin = pinInput.trim();
    if (pin.length !== 6) {
      toast.error(bn ? "৬-সংখ্যার সাপোর্ট পিন দিন" : "Enter a 6-digit Support PIN");
      return;
    }
    setVerifyingPin(true);
    try {
      const res = await fetch(`/api/support/pin-lookup?pin=${encodeURIComponent(pin)}`);
      if (res.ok) {
        const data = await res.json();
        setPinCustomer(data.customer);
        toast.success(bn ? "গ্রাহক পরিচয় নিশ্চিত হয়েছে!" : "Customer verified successfully!");
      } else {
        setPinCustomer(null);
        toast.error(bn ? "ভুল বা মেয়াদোত্তীর্ণ পিন" : "Invalid or expired PIN");
      }
    } catch {
      toast.error("Verification error");
    } finally {
      setVerifyingPin(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* PIN Verification Box */}
      <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 shadow-xs">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-bold text-foreground">
            {bn ? "সাপোর্ট পিন দ্বারা দ্রুত পরিচয় যাচাই" : "Instant Support PIN Verification"}
          </h3>
        </div>
        <form onSubmit={handlePinVerify} className="flex gap-2">
          <Input
            value={pinInput}
            onChange={(e) => setPinInput(e.target.value)}
            placeholder={bn ? "৬-সংখ্যার পিন লিখুন..." : "Enter 6-digit PIN..."}
            className="font-mono text-base tracking-widest uppercase bg-card max-w-xs"
            maxLength={6}
          />
          <Button type="submit" disabled={verifyingPin} className="gap-2">
            {verifyingPin ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />}
            {bn ? "যাচাই করুন" : "Verify PIN"}
          </Button>
        </form>

        {pinCustomer && (
          <div className="mt-4 p-4 rounded-xl bg-card border border-border flex items-center justify-between">
            <div>
              <p className="font-bold text-foreground">{pinCustomer.fullName}</p>
              <p className="text-xs text-muted-foreground">{pinCustomer.email} • {pinCustomer.phone || "No phone"}</p>
              {pinCustomer.company && <p className="text-xs text-primary font-medium">{pinCustomer.company}</p>}
            </div>
            <Link
              to={`/admin/users?q=${encodeURIComponent(pinCustomer.email || "")}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              {bn ? "প্রোফাইল দেখুন" : "View Profile"}
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>

      {/* General Search Box */}
      <div className="p-5 rounded-2xl border border-border bg-card shadow-xs space-y-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder={bn ? "গ্রাহকের নাম, ইমেইল, ডোমেইন, ইনভয়েস নম্বর..." : "Search customer name, email, domain, invoice..."}
              className="pl-9 h-11"
            />
          </div>
          <Button type="submit" disabled={searching} className="h-11 px-6 gap-2">
            {searching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            {bn ? "খুঁজুন" : "Search"}
          </Button>
        </form>

        {/* Results */}
        {results && (
          <div className="space-y-4 pt-2">
            {/* Users */}
            {results.users?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {bn ? "গ্রাহক" : "Customers"} ({results.users.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.users.map((u: any) => (
                    <div key={u.id} className="p-3 rounded-xl border border-border/70 bg-secondary/20 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-foreground">{u.full_name || "Unnamed"}</p>
                        <p className="text-xs text-muted-foreground">{u.email}</p>
                      </div>
                      <Link
                        to={`/admin/users?q=${encodeURIComponent(u.email)}`}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        {bn ? "বিস্তারিত" : "Details"}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Services */}
            {results.services?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {bn ? "সার্ভিস ও ডোমেইন" : "Services & Domains"} ({results.services.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.services.map((s: any) => (
                    <div key={s.id} className="p-3 rounded-xl border border-border/70 bg-secondary/20 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-mono font-bold text-foreground">{s.domain || s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.service_type || "Hosting"}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{s.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Invoices */}
            {results.invoices?.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                  {bn ? "ইনভয়েস" : "Invoices"} ({results.invoices.length})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.invoices.map((inv: any) => (
                    <div key={inv.id} className="p-3 rounded-xl border border-border/70 bg-secondary/20 flex items-center justify-between">
                      <div>
                        <p className="text-sm font-mono font-bold text-foreground">#{inv.invoice_number}</p>
                        <p className="text-xs text-muted-foreground">৳{formatAmount(inv.amount_bdt, lang)}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{inv.status}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results.users?.length === 0 && results.services?.length === 0 && results.invoices?.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-6">
                {bn ? "কোনো তথ্য পাওয়া যায়নি" : "No records found matching your query"}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
