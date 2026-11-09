"use client";

import { useEffect, useState } from "react";
import { Layers, Save, RefreshCw, Globe, FileText, Check, HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function AdminCMSPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [activeSection, setActiveSection] = useState<"hero" | "announcements" | "faq">("hero");

  // Hero settings
  const [heroTitleEn, setHeroTitleEn] = useState("Enterprise Web Hosting & Fast Cloud Servers in Bangladesh");
  const [heroTitleBn, setHeroTitleBn] = useState("বাংলাদেশে দ্রুতগতির সুপারফাস্ট ওয়েব হোস্টিং ও ক্লাউড সার্ভার");
  const [heroSubEn, setHeroSubEn] = useState("NVMe SSD storage, LiteSpeed server, free automated SSL, and 24/7 localized support.");
  const [heroSubBn, setHeroSubBn] = useState("NVMe SSD স্টোরেজ, LiteSpeed সার্ভার, ফ্রি SSL সার্টিফিকেট এবং ২৪/৭ ডেডিকেটেড সাপোর্ট।");

  // Hotline & Announcement
  const [hotline, setHotline] = useState("+88 096 38 205 205");
  const [supportEmail, setSupportEmail] = useState("support@yesshost.com");
  const [saving, setSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success(bn ? "কন্টেন্ট সফলভাবে সংরক্ষিত হয়েছে!" : "CMS content successfully updated!");
    }, 600);
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Layers className="w-6 h-6 text-primary" />
            <span>{bn ? "সিএমএস ও ওয়েবসাইট কন্টেন্ট" : "Content Management System (CMS)"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "হোমপেজ ব্যানার, টাইটেল, যোগাযোগ নম্বর ও কনফিগারেশন পরিবর্তন করুন" : "Manage landing page copy, corporate banners, support phone numbers, and localized headlines"}
          </p>
        </div>

        <Button onClick={handleSave} disabled={saving} className="rounded-xl text-xs gap-1.5 shadow-sm self-start">
          <Save className="w-3.5 h-3.5" />
          {saving ? (bn ? "সংরক্ষণ হচ্ছে..." : "Saving...") : (bn ? "পরিবর্তন সংরক্ষণ করুন" : "Save Changes")}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Navigation tabs */}
        <div className="lg:col-span-3 space-y-1.5">
          <button
            onClick={() => setActiveSection("hero")}
            className={`w-full text-left p-3.5 rounded-2xl text-xs font-semibold transition-all border ${
              activeSection === "hero"
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card border-border/50 text-foreground hover:bg-muted/40"
            }`}
          >
            {bn ? "হোমপেজ হিরো সেকশন" : "Storefront Hero & Headlines"}
          </button>
          <button
            onClick={() => setActiveSection("announcements")}
            className={`w-full text-left p-3.5 rounded-2xl text-xs font-semibold transition-all border ${
              activeSection === "announcements"
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card border-border/50 text-foreground hover:bg-muted/40"
            }`}
          >
            {bn ? "যোগাযোগ ও হটলাইন ইনফো" : "Hotline & Contact Settings"}
          </button>
          <button
            onClick={() => setActiveSection("faq")}
            className={`w-full text-left p-3.5 rounded-2xl text-xs font-semibold transition-all border ${
              activeSection === "faq"
                ? "bg-primary text-primary-foreground border-primary shadow-xs"
                : "bg-card border-border/50 text-foreground hover:bg-muted/40"
            }`}
          >
            {bn ? "এফএকিউ ও সহায়তা গাইড" : "Homepage FAQs & Answers"}
          </button>
        </div>

        {/* Content editor */}
        <div className="lg:col-span-9 bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-xs">
          {activeSection === "hero" && (
            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "হিরো হেডলাইন (ইংরেজি)" : "Main Headline (English)"}
                </label>
                <Input
                  value={heroTitleEn}
                  onChange={(e) => setHeroTitleEn(e.target.value)}
                  className="rounded-xl text-xs h-10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "হিরো হেডলাইন (বাংলা)" : "Main Headline (Bengali)"}
                </label>
                <Input
                  value={heroTitleBn}
                  onChange={(e) => setHeroTitleBn(e.target.value)}
                  className="rounded-xl text-xs h-10"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "সাব-হেডিং বিবরণ (ইংরেজি)" : "Sub-Headline (English)"}
                </label>
                <Textarea
                  rows={3}
                  value={heroSubEn}
                  onChange={(e) => setHeroSubEn(e.target.value)}
                  className="rounded-xl text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "সাব-হেডিং বিবরণ (বাংলা)" : "Sub-Headline (Bengali)"}
                </label>
                <Textarea
                  rows={3}
                  value={heroSubBn}
                  onChange={(e) => setHeroSubBn(e.target.value)}
                  className="rounded-xl text-xs"
                />
              </div>
            </form>
          )}

          {activeSection === "announcements" && (
            <form onSubmit={handleSave} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "সাপোর্ট হটলাইন ফোন নম্বর" : "Official Support Hotline Phone"}
                </label>
                <Input
                  value={hotline}
                  onChange={(e) => setHotline(e.target.value)}
                  className="rounded-xl text-xs h-10 font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "অফিসিয়াল সাপোর্ট ইমেইল" : "Customer Support Email"}
                </label>
                <Input
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  className="rounded-xl text-xs h-10 font-mono"
                />
              </div>

              <div className="p-4 rounded-2xl bg-muted/20 border border-border/40 text-xs text-muted-foreground leading-relaxed">
                {bn ? "এখানে উল্লেখিত নম্বর ও ইমেইল হেডার, ফুটার এবং কন্টাক্ট পেজে স্বয়ংক্রিয়ভাবে আপডেট হয়।" : "These values automatically reflect across Navbar, Footer, Mobile Bottom Bar, and the Contact page."}
              </div>
            </form>
          )}

          {activeSection === "faq" && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-muted/20 border border-border/40">
                <h4 className="text-xs font-bold text-foreground mb-1">
                  1. How fast is server provisioning?
                </h4>
                <p className="text-xs text-muted-foreground">
                  All shared hosting and domain registrations are provisioned in real-time as soon as payment is confirmed by bKash or Nagad.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-muted/20 border border-border/40">
                <h4 className="text-xs font-bold text-foreground mb-1">
                  2. Do you offer BDIX connected low-latency servers?
                </h4>
                <p className="text-xs text-muted-foreground">
                  Yes, our BDIX hosting and VPS nodes reside in Tier-III facilities in Dhaka with sub-5ms ping across all Bangladeshi ISPs.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
