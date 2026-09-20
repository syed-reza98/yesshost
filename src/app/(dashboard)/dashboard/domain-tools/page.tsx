"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatAmount } from "@/lib/formatPrice";
import {
  Globe,
  RefreshCw,
  ArrowRightLeft,
  Search,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Loader2,
  Lock,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import DomainSearch from "@/components/DomainSearch";

export default function DomainToolsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "register";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Domains for renewal
  const [domains, setDomains] = useState<any[]>([]);
  const [loadingDomains, setLoadingDomains] = useState(false);

  // Transfer form
  const [transferDomain, setTransferDomain] = useState("");
  const [eppCode, setEppCode] = useState("");
  const [transferring, setTransferring] = useState(false);

  // WHOIS form
  const [whoisQuery, setWhoisQuery] = useState("");
  const [whoisResult, setWhoisResult] = useState<any | null>(null);
  const [searchingWhois, setSearchingWhois] = useState(false);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["register", "renew", "transfer", "whois"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (activeTab === "renew") {
      setLoadingDomains(true);
      fetch("/api/domains")
        .then((res) => res.json())
        .then((data) => setDomains(data.domains || []))
        .catch(() => toast.error("Failed to load domains"))
        .finally(() => setLoadingDomains(false));
    }
  }, [activeTab]);

  const handleTransferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferDomain || !eppCode) {
      toast.error(bn ? "ডোমেইন নাম এবং EPP কোড লিখুন" : "Enter domain name and EPP code");
      return;
    }
    setTransferring(true);
    try {
      // Simulate/register domain transfer order
      setTimeout(() => {
        toast.success(bn ? "ডোমেইন ট্রান্সফার অর্ডার গ্রহণ করা হয়েছে!" : "Domain transfer request submitted!");
        setTransferDomain("");
        setEppCode("");
        setTransferring(false);
      }, 800);
    } catch {
      toast.error("Transfer error");
      setTransferring(false);
    }
  };

  const handleWhoisLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!whoisQuery) return;
    setSearchingWhois(true);
    setWhoisResult(null);
    try {
      const res = await fetch(`/api/domains/check?domain=${encodeURIComponent(whoisQuery)}`);
      if (res.ok) {
        const data = await res.json();
        setWhoisResult(data);
      } else {
        toast.error("Lookup failed");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setSearchingWhois(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {bn ? "ডোমেইন টুলস" : "Domain Tools"}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {bn
            ? "ডোমেইন রেজিস্ট্রেশন, রিনিউয়াল, ট্রান্সফার এবং WHOIS লুকআপ একসাথে পরিচালনা করুন।"
            : "Register, renew, transfer domains and perform WHOIS lookups in one unified console."}
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-xl flex flex-wrap h-auto gap-1 border border-border/60">
          <TabsTrigger value="register" className="gap-2 rounded-lg py-2 text-xs sm:text-sm font-semibold">
            <Search className="w-4 h-4" />
            {bn ? "নতুন ডোমেইন" : "Register"}
          </TabsTrigger>
          <TabsTrigger value="renew" className="gap-2 rounded-lg py-2 text-xs sm:text-sm font-semibold">
            <RefreshCw className="w-4 h-4" />
            {bn ? "ডোমেইন রিনিউ" : "Renew"}
          </TabsTrigger>
          <TabsTrigger value="transfer" className="gap-2 rounded-lg py-2 text-xs sm:text-sm font-semibold">
            <ArrowRightLeft className="w-4 h-4" />
            {bn ? "ট্রান্সফার" : "Transfer"}
          </TabsTrigger>
          <TabsTrigger value="whois" className="gap-2 rounded-lg py-2 text-xs sm:text-sm font-semibold">
            <Globe className="w-4 h-4" />
            {bn ? "WHOIS লুকআপ" : "WHOIS"}
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: Register */}
        <TabsContent value="register" className="space-y-4">
          <Card className="rounded-2xl border-border/70 bg-card/60">
            <CardContent className="p-6 sm:p-8">
              <DomainSearch />
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 2: Renew */}
        <TabsContent value="renew" className="space-y-4">
          <Card className="rounded-2xl border-border/70 bg-card/60">
            <CardContent className="p-6">
              <h3 className="text-base font-bold mb-1">{bn ? "ডোমেইন রিনিউয়াল তালিকা" : "Domain Renewal List"}</h3>
              <p className="text-xs text-muted-foreground mb-4">
                {bn ? "মেয়াদোত্তীর্ণ হওয়ার আগেই ডোমেইন রিনিউ করে নিরবচ্ছিন্ন সেবা নিশ্চিত করুন।" : "Renew your domains early to prevent unexpected downtime or loss."}
              </p>

              {loadingDomains ? (
                <div className="py-12 text-center text-muted-foreground">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2 text-primary" />
                  <p className="text-xs">{bn ? "ডোমেইন লোড হচ্ছে..." : "Loading domains..."}</p>
                </div>
              ) : domains.length === 0 ? (
                <div className="py-10 text-center text-muted-foreground">
                  <Globe className="w-10 h-10 mx-auto mb-2 text-muted-foreground/50" />
                  <p className="text-sm font-semibold">{bn ? "কোনো ডোমেইন পাওয়া যায়নি" : "No active domains found"}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {domains.map((dom) => (
                    <div
                      key={dom.id}
                      className="p-4 rounded-xl border border-border/70 bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div>
                        <p className="font-mono font-bold text-foreground">{dom.domain}</p>
                        <p className="text-xs text-muted-foreground">
                          {bn ? "মেয়াদ শেষ: " : "Expires: "}
                          {dom.expiresAt ? new Date(dom.expiresAt).toLocaleDateString("en-GB") : "—"}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">{dom.status || "Active"}</Badge>
                        <Button
                          size="sm"
                          onClick={() => toast.info(bn ? "রিনিউয়াল ইনভয়েস তৈরি হচ্ছে..." : "Generating renewal invoice...")}
                          className="gap-1.5 rounded-lg text-xs"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          {bn ? "রিনিউ করুন" : "Renew"}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 3: Transfer */}
        <TabsContent value="transfer" className="space-y-4">
          <Card className="rounded-2xl border-border/70 bg-card/60">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {bn ? "অন্য প্রোভাইডার থেকে ডোমেইন ট্রান্সফার" : "Transfer Domain from Another Registrar"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {bn
                    ? "আপনার বর্তমান রেজিস্ট্রার থেকে প্রাপ্ত EPP/Auth কোড প্রদান করে সহজে Yess Host-এ ট্রান্সফার সম্পন্ন করুন।"
                    : "Transfer your domain to Yess Host seamlessly by providing your current registrar's EPP/Auth code."}
                </p>
              </div>

              <form onSubmit={handleTransferSubmit} className="space-y-4 max-w-lg">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    {bn ? "ডোমেইন নাম" : "Domain Name"}
                  </label>
                  <Input
                    value={transferDomain}
                    onChange={(e) => setTransferDomain(e.target.value)}
                    placeholder="example.com"
                    required
                    className="font-mono text-sm bg-card"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    {bn ? "EPP / Auth কোড" : "EPP / Auth Code"}
                  </label>
                  <Input
                    type="password"
                    value={eppCode}
                    onChange={(e) => setEppCode(e.target.value)}
                    placeholder={bn ? "রেজিস্ট্রারের সিক্রেট কোড" : "Secret transfer code"}
                    required
                    className="font-mono text-sm bg-card"
                  />
                </div>

                <Button type="submit" disabled={transferring} className="w-full h-11 font-bold rounded-xl gap-2">
                  {transferring ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowRightLeft className="w-4 h-4" />}
                  {bn ? "ট্রান্সফার রিকোয়েস্ট পাঠান" : "Submit Transfer Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TAB 4: WHOIS */}
        <TabsContent value="whois" className="space-y-4">
          <Card className="rounded-2xl border-border/70 bg-card/60">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-base font-bold text-foreground">
                  {bn ? "ডোমেইন WHOIS অনুসন্ধান" : "Domain WHOIS Lookup"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {bn ? "যেকোনো ডোমেইনের মালিকানা ও রেজিস্ট্রেশন স্ট্যাটাস চেক করুন।" : "Check ownership, registrar, and DNS status for any domain."}
                </p>
              </div>

              <form onSubmit={handleWhoisLookup} className="flex gap-2 max-w-lg">
                <Input
                  value={whoisQuery}
                  onChange={(e) => setWhoisQuery(e.target.value)}
                  placeholder="example.com"
                  className="font-mono text-sm bg-card"
                  required
                />
                <Button type="submit" disabled={searchingWhois} className="gap-2 px-6">
                  {searchingWhois ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  {bn ? "অনুসন্ধান" : "Lookup"}
                </Button>
              </form>

              {whoisResult && (
                <div className="p-4 rounded-xl border border-border bg-card space-y-3">
                  <div className="flex items-center justify-between border-b border-border pb-2">
                    <span className="font-mono font-bold text-foreground">{whoisResult.domain}</span>
                    <Badge variant={whoisResult.available ? "default" : "secondary"}>
                      {whoisResult.available ? (bn ? "উপলব্ধ" : "Available") : (bn ? "রেজিস্টার্ড" : "Registered")}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {whoisResult.available
                      ? bn ? "এই ডোমেইনটি এখনো কেউ রেজিস্টার করেনি।" : "This domain is currently available for purchase."
                      : bn ? "এই ডোমেইনটি ইতোমধ্যেই সক্রিয় রয়েছে।" : "This domain is already registered and in use."}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
