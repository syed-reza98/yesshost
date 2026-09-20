"use client";

import { useEffect, useState } from "react";
import { User, Mail, Phone, Building, MapPin, Shield, KeyRound, Save, RefreshCw, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ProfilePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { user, refreshProfile } = useAuth();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [resettingPin, setResettingPin] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Bangladesh");
  const [vatId, setVatId] = useState("");
  const [supportPin, setSupportPin] = useState("");

  const loadProfile = async () => {
    try {
      const res = await fetch("/api/profile");
      if (res.ok) {
        const data = await res.json();
        const p = data.profile;
        if (p) {
          setFullName(p.fullName || p.name || "");
          setEmail(p.email || "");
          setPhone(p.phone || "");
          setCompanyName(p.companyName || "");
          setAddress(p.address || "");
          setCity(p.city || "");
          setCountry(p.country || "Bangladesh");
          setVatId(p.vatId || "");
          setSupportPin(p.supportPin || "—");
        }
      }
    } catch (err) {
      console.error("Failed to load profile:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phone,
          companyName,
          address,
          city,
          country,
          vatId,
        }),
      });
      if (res.ok) {
        toast.success(bn ? "প্রোফাইল সফলভাবে আপডেট হয়েছে!" : "Profile updated successfully!");
        refreshProfile();
      } else {
        const data = await res.json();
        toast.error(data.error || "Update failed");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleResetPin = async () => {
    setResettingPin(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resetPin: true }),
      });
      if (res.ok) {
        const data = await res.json();
        setSupportPin(data.updatedPin);
        toast.success(bn ? "নতুন সাপোর্ট পিন তৈরি হয়েছে!" : "New Support PIN generated!");
        refreshProfile();
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to reset PIN");
    } finally {
      setResettingPin(false);
    }
  };

  if (loading) {
    return (
      <div className="p-12 text-center bg-card rounded-xl border border-border">
        <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {bn ? "প্রোফাইল ও নিরাপত্তা" : "Profile & Security"}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {bn ? "আপনার ব্যক্তিগত তথ্য এবং ভেরিফিকেশন পিন পরিচালনা করুন" : "Manage your account details, billing contact, and Support PIN"}
        </p>
      </div>

      {/* Support PIN Card */}
      <div className="p-6 rounded-2xl bg-card border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <KeyRound className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {bn ? "সিক্রেট সাপোর্ট পিন" : "Secret Support PIN"}
            </span>
            <div className="text-2xl font-mono font-bold tracking-widest text-foreground mt-0.5">
              {supportPin}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {bn
                ? "কল সেন্টার বা সাপোর্টে কথা বলার সময় পরিচয় যাচাইয়ে এই পিনটি ব্যবহার করুন"
                : "Quote this 6-digit PIN when calling our customer support hotline"}
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={handleResetPin}
          disabled={resettingPin}
          className="gap-2 shrink-0"
        >
          {resettingPin ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
          {bn ? "পিন রিসেট করুন" : "Generate New PIN"}
        </Button>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="p-6 bg-card border border-border rounded-2xl shadow-xs space-y-5">
        <h3 className="text-base font-bold text-foreground">
          {bn ? "ব্যক্তিগত ও যোগাযোগ তথ্য" : "Personal & Contact Details"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "পূর্ণ নাম" : "Full Name"}
            </label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "ইমেইল এড্রেস" : "Email Address"}
            </label>
            <Input value={email} disabled className="bg-muted/50 cursor-not-allowed" />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "মোবাইল নম্বর" : "Phone Number"}
            </label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+8801700000000"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "কোম্পানি নাম (ঐচ্ছিক)" : "Company Name (optional)"}
            </label>
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Acme Tech BD"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "ঠিকানা" : "Address"}
            </label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House, Road, Area"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "শহর" : "City"}
            </label>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Dhaka"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              {bn ? "দেশ" : "Country"}
            </label>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-border">
          <Button type="submit" disabled={saving} className="gap-2">
            {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {bn ? "সংরক্ষণ করুন" : "Save Changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
