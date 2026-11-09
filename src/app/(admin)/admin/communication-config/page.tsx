"use client";

import { useEffect, useState } from "react";
import { Settings, Save, RefreshCw, Mail, MessageSquare, Phone, ShieldCheck, KeyRound } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function AdminCommunicationConfigPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  // SMS Gateway
  const [smsProvider, setSmsProvider] = useState("greenweb");
  const [smsApiKey, setSmsApiKey] = useState("gw_live_sec_9941a8e293810f");
  const [smsSenderId, setSmsSenderId] = useState("YESSHOST");

  // SMTP Email
  const [smtpHost, setSmtpHost] = useState("mail.yesshost.com");
  const [smtpPort, setSmtpPort] = useState("465");
  const [smtpUser, setSmtpUser] = useState("noreply@yesshost.com");
  const [smtpPass, setSmtpPass] = useState("••••••••••••••••");

  // WebRTC STUN/TURN
  const [stunServer, setStunServer] = useState("stun:stun.l.google.com:19302");
  const [turnServer, setTurnServer] = useState("turn:turn.yesshost.com:3478");

  const [saving, setSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success(bn ? "কমিউনিকেশন কনফিগারেশন সংরক্ষিত হয়েছে!" : "Communication gateway settings saved!");
    }, 700);
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Settings className="w-6 h-6 text-primary" />
            <span>{bn ? "কমিউনিকেশন ও গেটওয়ে কনফিগ" : "Communication Gateways & WebRTC"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "এসএমএস গেটওয়ে, আউটবাউন্ড এসএমটিপি ইমেইল ও ওয়েবআরটিসি ভয়েস সার্ভার সেটিংস" : "Configure automated OTP SMS providers, transactional SMTP servers, and WebRTC STUN/TURN infrastructure"}
          </p>
        </div>

        <Button onClick={handleSave} disabled={saving} className="rounded-xl text-xs gap-1.5 shadow-sm self-start">
          <Save className="w-3.5 h-3.5" />
          {saving ? (bn ? "সংরক্ষণ হচ্ছে..." : "Saving...") : (bn ? "কনফিগ সংরক্ষণ করুন" : "Save Settings")}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SMS Settings */}
        <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border/40">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground">{bn ? "এসএমএস গেটওয়ে (OTP ও অ্যালার্ট)" : "SMS Gateway Integration"}</h3>
              <p className="text-[11px] text-muted-foreground">Order receipts & Support PIN delivery</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">SMS Provider</label>
            <select
              value={smsProvider}
              onChange={(e) => setSmsProvider(e.target.value)}
              className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="greenweb">Greenweb Bangladesh (Masking SMS)</option>
              <option value="bulksms">BulkSMS BD API</option>
              <option value="mimsms">MimSMS Enterprise</option>
              <option value="twilio">Twilio Global SMS</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">API Token / Secret Key</label>
            <Input
              type="password"
              value={smsApiKey}
              onChange={(e) => setSmsApiKey(e.target.value)}
              className="h-10 rounded-xl text-xs font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Masking Sender ID</label>
            <Input
              value={smsSenderId}
              onChange={(e) => setSmsSenderId(e.target.value)}
              className="h-10 rounded-xl text-xs font-mono uppercase"
            />
          </div>
        </div>

        {/* Transactional SMTP */}
        <div className="p-6 rounded-3xl bg-card border border-border/60 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border/40">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground">{bn ? "ট্রানজেকশনাল এসএমটিপি ইমেইল" : "Transactional SMTP Dispatcher"}</h3>
              <p className="text-[11px] text-muted-foreground">Invoices, password resets & tickets</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">SMTP Server Host</label>
              <Input
                value={smtpHost}
                onChange={(e) => setSmtpHost(e.target.value)}
                className="h-10 rounded-xl text-xs font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Port (SSL/TLS)</label>
              <Input
                value={smtpPort}
                onChange={(e) => setSmtpPort(e.target.value)}
                className="h-10 rounded-xl text-xs font-mono"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Username / From Address</label>
            <Input
              value={smtpUser}
              onChange={(e) => setSmtpUser(e.target.value)}
              className="h-10 rounded-xl text-xs font-mono"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-foreground">Password / Mailbox Token</label>
            <Input
              type="password"
              value={smtpPass}
              onChange={(e) => setSmtpPass(e.target.value)}
              className="h-10 rounded-xl text-xs font-mono"
            />
          </div>
        </div>

        {/* WebRTC Calling Infrastructure */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-card border border-border/60 shadow-xs space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-border/40">
            <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-foreground">{bn ? "ওয়েবআরটিসি ব্রাউজার অডিও কল ইনফ্রা" : "WebRTC Audio STUN/TURN Gateway"}</h3>
              <p className="text-[11px] text-muted-foreground">NAT traversal and peer-to-peer browser phone calls</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">Primary STUN Server URI</label>
              <Input
                value={stunServer}
                onChange={(e) => setStunServer(e.target.value)}
                className="h-10 rounded-xl text-xs font-mono"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">TURN Relay Server URI (Fallback)</label>
              <Input
                value={turnServer}
                onChange={(e) => setTurnServer(e.target.value)}
                className="h-10 rounded-xl text-xs font-mono"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
