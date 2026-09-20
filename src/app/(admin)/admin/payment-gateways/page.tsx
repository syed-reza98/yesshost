"use client";

import { useEffect, useState, useCallback } from "react";
import { CreditCard, Loader2, ShieldCheck, Eye, EyeOff, Save, CheckCircle2, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";

interface GatewayField {
  key: string;
  en: string;
  bn: string;
  secret: boolean;
  textarea?: boolean;
}

interface GatewayDef {
  id: string;
  en: string;
  bn: string;
  descEn: string;
  descBn: string;
  fields: GatewayField[];
}

const GATEWAYS: GatewayDef[] = [
  {
    id: "bkash",
    en: "bKash Checkout",
    bn: "বিকাশ পেমেন্ট গেটওয়ে",
    descEn: "Tokenized direct checkout API via bKash Payment Gateway",
    descBn: "বিকাশ টোকেনাইজড ডিরেক্ট চেকআউট গেটওয়ে",
    fields: [
      { key: "app_key", en: "App Key", bn: "অ্যাপ কী", secret: false },
      { key: "app_secret", en: "App Secret", bn: "অ্যাপ সিক্রেট", secret: true },
      { key: "username", en: "API Username", bn: "ইউজারনেম", secret: false },
      { key: "password", en: "API Password", bn: "পাসওয়ার্ড", secret: true },
    ],
  },
  {
    id: "nagad",
    en: "Nagad Gateway",
    bn: "নগদ মার্চেন্ট গেটওয়ে",
    descEn: "Nagad merchant payment gateway with RSA signature validation",
    descBn: "নগদ মার্চেন্ট পেমেন্ট গেটওয়ে ও আরএসএ ভ্যালিডেশন",
    fields: [
      { key: "merchant_id", en: "Merchant ID", bn: "মার্চেন্ট আইডি", secret: false },
      { key: "merchant_private_key", en: "Merchant Private Key", bn: "মার্চেন্ট প্রাইভেট কী", secret: true, textarea: true },
      { key: "pg_public_key", en: "Payment Gateway Public Key", bn: "পিজি পাবলিক কী", secret: true, textarea: true },
    ],
  },
  {
    id: "sslcommerz",
    en: "SSLCommerz",
    bn: "এসএসএলকমার্জ",
    descEn: "Cards (Visa, Mastercard), Internet banking, and mobile financial services",
    descBn: "কার্ড, ইন্টারনেট ব্যাংকিং এবং মোবাইল ফাইন্যান্সিয়াল সার্ভিস",
    fields: [
      { key: "store_id", en: "Store ID", bn: "স্টোর আইডি", secret: false },
      { key: "store_pass", en: "Store Password", bn: "স্টোর পাসওয়ার্ড", secret: true },
    ],
  },
  {
    id: "rocket",
    en: "Rocket Merchant",
    bn: "রকেট মার্চেন্ট গেটওয়ে",
    descEn: "Dutch-Bangla Bank Rocket mobile banking integration",
    descBn: "ডাচ-বাংলা ব্যাংক রকেট মোবাইল ব্যাংকিং ইন্টিগ্রেশন",
    fields: [
      { key: "merchant_id", en: "Merchant ID", bn: "মার্চেন্ট আইডি", secret: false },
      { key: "merchant_pin", en: "Merchant PIN / Secret", bn: "মার্চেন্ট পিন / সিক্রেট", secret: true },
    ],
  },
];

interface GatewayConfig {
  gateway: string;
  enabled: boolean;
  isSandbox: boolean;
  credentials: Record<string, string>;
  updatedAt?: string;
}

export default function AdminPaymentGatewaysPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [loading, setLoading] = useState(true);
  const [configs, setConfigs] = useState<Record<string, GatewayConfig>>({});
  const [reveal, setReveal] = useState<Record<string, boolean>>({});
  const [savingGateway, setSavingGateway] = useState<string | null>(null);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/payment-gateways");
      if (res.ok) {
        const data = await res.json();
        const map: Record<string, GatewayConfig> = {};
        for (const gw of data.gateways || []) {
          map[gw.gateway] = {
            gateway: gw.gateway,
            enabled: Boolean(gw.enabled),
            isSandbox: Boolean(gw.isSandbox),
            credentials: gw.credentials || {},
            updatedAt: gw.updatedAt,
          };
        }
        setConfigs(map);
      } else {
        toast.error(bn ? "পেমেন্ট গেটওয়ে সেটিংস লোড করা যায়নি" : "Failed to load payment gateway settings");
      }
    } catch {
      toast.error(bn ? "নেটওয়ার্ক ত্রুটি" : "Network error");
    } finally {
      setLoading(false);
    }
  }, [bn]);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const updateConfig = (id: string, patch: Partial<GatewayConfig>) => {
    setConfigs((prev) => {
      const current = prev[id] || { gateway: id, enabled: false, isSandbox: true, credentials: {} };
      return {
        ...prev,
        [id]: { ...current, ...patch },
      };
    });
  };

  const updateCredential = (id: string, key: string, val: string) => {
    setConfigs((prev) => {
      const current = prev[id] || { gateway: id, enabled: false, isSandbox: true, credentials: {} };
      return {
        ...prev,
        [id]: {
          ...current,
          credentials: {
            ...current.credentials,
            [key]: val,
          },
        },
      };
    });
  };

  const handleSave = async (def: GatewayDef) => {
    const config = configs[def.id] || { gateway: def.id, enabled: false, isSandbox: true, credentials: {} };
    setSavingGateway(def.id);

    try {
      const res = await fetch("/api/admin/payment-gateways", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          gateway: def.id,
          enabled: config.enabled,
          isSandbox: config.isSandbox,
          credentials: config.credentials,
        }),
      });

      if (res.ok) {
        toast.success(
          bn
            ? `${def.bn} সেটিংস সফলভাবে সংরক্ষিত হয়েছে!`
            : `${def.en} configuration saved successfully!`
        );
        fetchSettings();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to save configuration");
      }
    } catch {
      toast.error(bn ? "সার্ভারে যোগাযোগ করা যায়নি" : "Server communication error");
    } finally {
      setSavingGateway(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2 text-foreground">
            <CreditCard className="w-6 h-6 text-primary" />
            {bn ? "পেমেন্ট গেটওয়ে কনফিগারেশন" : "Payment Gateway Settings"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
            {bn
              ? "সরাসরি bKash, Nagad, SSLCommerz এবং Rocket পেমেন্ট গেটওয়ের মার্চেন্ট ক্রেডেনশিয়াল পরিচালনা করুন।"
              : "Configure live and sandbox merchant API keys, store secrets, and auto-settlement webhooks."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={fetchSettings} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>{bn ? "অ্যাডমিন সুরক্ষিত" : "Encrypted Vault"}</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-64 rounded-xl border border-border bg-card animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid gap-6">
          {GATEWAYS.map((def) => {
            const config = configs[def.id] || {
              gateway: def.id,
              enabled: false,
              isSandbox: true,
              credentials: {},
            };
            const isSaving = savingGateway === def.id;

            return (
              <Card key={def.id} className="border border-border/80 shadow-xs bg-card">
                <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/50">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-lg font-bold text-foreground">
                      {bn ? def.bn : def.en}
                      {config.enabled ? (
                        <Badge className="bg-emerald-600 hover:bg-emerald-600 text-white text-xs">
                          {bn ? "চালু" : "Active"}
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          {bn ? "বন্ধ" : "Disabled"}
                        </Badge>
                      )}
                      {config.isSandbox && (
                        <Badge variant="outline" className="text-xs text-amber-600 border-amber-300 bg-amber-50">
                          {bn ? "স্যান্ডবক্স / টেস্ট" : "Sandbox Mode"}
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">
                      {bn ? def.descBn : def.descEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <div className="flex items-center gap-2">
                      <Label htmlFor={`${def.id}-enabled`} className="text-xs font-semibold">
                        {bn ? "সক্রিয় করুন" : "Enable"}
                      </Label>
                      <Switch
                        id={`${def.id}-enabled`}
                        checked={config.enabled}
                        onCheckedChange={(checked) => updateConfig(def.id, { enabled: checked })}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <Label htmlFor={`${def.id}-sandbox`} className="text-xs font-semibold">
                        {bn ? "স্যান্ডবক্স মোড" : "Sandbox"}
                      </Label>
                      <Switch
                        id={`${def.id}-sandbox`}
                        checked={config.isSandbox}
                        onCheckedChange={(checked) => updateConfig(def.id, { isSandbox: checked })}
                      />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pt-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {def.fields.map((field) => {
                      const revealKey = `${def.id}.${field.key}`;
                      const isRevealed = Boolean(reveal[revealKey]);
                      const val = config.credentials?.[field.key] || "";

                      return (
                        <div
                          key={field.key}
                          className={field.textarea ? "sm:col-span-2 space-y-1.5" : "space-y-1.5"}
                        >
                          <Label className="text-xs font-semibold flex items-center justify-between text-foreground">
                            <span>{bn ? field.bn : field.en}</span>
                            {field.secret && (
                              <span className="text-[10px] text-muted-foreground font-normal">
                                {bn ? "(গোপনীয়)" : "(Confidential)"}
                              </span>
                            )}
                          </Label>

                          {field.textarea ? (
                            <Textarea
                              rows={4}
                              value={val}
                              onChange={(e) => updateCredential(def.id, field.key, e.target.value)}
                              placeholder={bn ? "এখানে কী পেস্ট করুন..." : "Paste key content here..."}
                              className="font-mono text-xs"
                            />
                          ) : (
                            <div className="relative">
                              <Input
                                type={field.secret && !isRevealed ? "password" : "text"}
                                value={val}
                                onChange={(e) => updateCredential(def.id, field.key, e.target.value)}
                                placeholder={bn ? `আপনার ${field.bn} লিখুন` : `Enter ${field.en}`}
                                className={field.secret ? "pr-10 font-mono text-sm" : "font-mono text-sm"}
                              />
                              {field.secret && (
                                <button
                                  type="button"
                                  onClick={() => setReveal((r) => ({ ...r, [revealKey]: !isRevealed }))}
                                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                  title={isRevealed ? "Hide" : "Show"}
                                >
                                  {isRevealed ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      {config.updatedAt
                        ? `${bn ? "সর্বশেষ সংরক্ষিত" : "Last updated"}: ${new Date(config.updatedAt).toLocaleString(bn ? "bn-BD" : "en-GB")}`
                        : bn
                        ? "এখনো সংরক্ষিত হয়নি"
                        : "Not configured yet"}
                    </p>

                    <Button
                      onClick={() => handleSave(def)}
                      disabled={isSaving}
                      className="gap-2 shrink-0 font-semibold"
                    >
                      {isSaving ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      {bn ? "সংরক্ষণ করুন" : "Save Gateway"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
