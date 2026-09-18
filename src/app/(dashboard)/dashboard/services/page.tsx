"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "@/lib/router-compat";
import {
  Server,
  ExternalLink,
  FolderTree,
  Database,
  Mail,
  KeyRound,
  AlertCircle,
  CheckCircle2,
  Clock,
  RefreshCw,
  PlusCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServiceItem {
  id: string;
  name: string;
  domain: string | null;
  cpanelUsername: string | null;
  packageName: string | null;
  serviceType: string;
  billingCycle: string;
  priceBdt: string;
  status: string;
  startDate: string;
  expiryDate: string;
  serverHostname?: string;
  serverIp?: string;
}

export default function ServicesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Password reset modal state
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [newPassword, setNewPassword] = useState("");
  const [resetting, setResetting] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/services");
      if (res.ok) {
        const data = await res.json();
        setServicesList(data.services || []);
      }
    } catch (err) {
      toast.error(bn ? "সার্ভিস লোড করতে সমস্যা হয়েছে" : "Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !newPassword) return;

    setResetting(true);
    try {
      const res = await fetch(`/api/services/${selectedService.id}/password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(bn ? "cPanel পাসওয়ার্ড সফলভাবে আপডেট হয়েছে!" : "cPanel password updated successfully!");
        setResetModalOpen(false);
        setNewPassword("");
      } else {
        toast.error(data.error || "Failed to update password");
      }
    } catch (err: any) {
      toast.error(err.message || "Network error");
    } finally {
      setResetting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "আমার হোস্টিং সার্ভিসসমূহ" : "My Hosting Services"}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            {bn ? "আপনার সক্রিয় cPanel অ্যাকাউন্ট ও সার্ভার রিসোর্স পরিচালনা করুন।" : "Manage your active cPanel accounts, single sign-on access, and server resources."}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchServices}
            className="p-2.5 rounded-xl border border-border/60 hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <Link
            href="/hosting-plans"
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <PlusCircle className="w-4 h-4" />
            {bn ? "নতুন হোস্টিং কিনুন" : "Order New Hosting"}
          </Link>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-muted-foreground flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">{bn ? "সার্ভিস লোড হচ্ছে..." : "Loading your hosting services..."}</p>
        </div>
      ) : servicesList.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-card border border-border/50 shadow-sm space-y-4">
          <Server className="w-12 h-12 text-muted-foreground mx-auto" />
          <h3 className="text-lg font-bold">{bn ? "কোনো সক্রিয় সার্ভিস পাওয়া যায়নি" : "No Active Services Found"}</h3>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {bn ? "আপনার অ্যাকাউন্টে এখনো কোনো হোস্টিং সার্ভিস সক্রিয় নেই। নতুন প্ল্যান অর্ডার করে শুরু করুন।" : "You don't have any active hosting services yet. Explore our packages to get started."}
          </p>
          <Link
            href="/hosting-plans"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90"
          >
            {bn ? "হোস্টিং প্যাকেজ দেখুন" : "Browse Hosting Plans"}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {servicesList.map((service) => {
            const isActive = service.status === "active";
            return (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-card border border-border/60 hover:border-primary/50 transition-all shadow-sm space-y-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {service.domain || service.name}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          isActive
                            ? "bg-emerald-500/10 text-emerald-500"
                            : service.status === "suspended"
                            ? "bg-rose-500/10 text-rose-500"
                            : "bg-amber-500/10 text-amber-500"
                        }`}
                      >
                        {service.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {service.packageName || "Shared Hosting"} • ৳{service.priceBdt} / {service.billingCycle}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                </div>

                {/* Server & cPanel Metadata */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-muted/40 text-xs">
                  <div>
                    <span className="text-muted-foreground block">{bn ? "cPanel ইউজারনেম" : "cPanel User"}</span>
                    <span className="font-mono font-bold text-foreground">{service.cpanelUsername || "Pending"}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{bn ? "সার্ভার নোড" : "Server Node"}</span>
                    <span className="font-medium text-foreground truncate block">{service.serverHostname || "Azure EastAsia"}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{bn ? "মেয়াদোত্তীর্ণ" : "Expires On"}</span>
                    <span className="font-medium text-foreground">
                      {new Date(service.expiryDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* SSO Actions */}
                {isActive && service.cpanelUsername && (
                  <div className="space-y-3 pt-2">
                    {/* Primary SSO Button */}
                    <a
                      href={`/api/services/${service.id}/sso?target=cpanel`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {bn ? "১-ক্লিকে cPanel এ লগইন করুন" : "Log in to cPanel (1-Click SSO)"}
                    </a>

                    {/* Direct Launch Shortcuts */}
                    <div className="grid grid-cols-4 gap-2">
                      <a
                        href={`/api/services/${service.id}/sso?target=filemanager`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 rounded-lg border border-border/60 hover:bg-muted text-center flex flex-col items-center gap-1 transition-colors"
                        title="Open File Manager"
                      >
                        <FolderTree className="w-4 h-4 text-primary" />
                        <span className="text-[11px] font-medium">{bn ? "ফাইল" : "Files"}</span>
                      </a>

                      <a
                        href={`/api/services/${service.id}/sso?target=phpmyadmin`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 rounded-lg border border-border/60 hover:bg-muted text-center flex flex-col items-center gap-1 transition-colors"
                        title="Open phpMyAdmin"
                      >
                        <Database className="w-4 h-4 text-primary" />
                        <span className="text-[11px] font-medium">{bn ? "ডাটাবেস" : "MySQL"}</span>
                      </a>

                      <a
                        href={`/api/services/${service.id}/sso?target=webmail`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-2 rounded-lg border border-border/60 hover:bg-muted text-center flex flex-col items-center gap-1 transition-colors"
                        title="Open Webmail"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-[11px] font-medium">{bn ? "ওয়েবমেইল" : "Webmail"}</span>
                      </a>

                      <button
                        onClick={() => {
                          setSelectedService(service);
                          setResetModalOpen(true);
                        }}
                        className="py-2 px-2 rounded-lg border border-border/60 hover:bg-muted text-center flex flex-col items-center gap-1 transition-colors"
                        title="Reset cPanel Password"
                      >
                        <KeyRound className="w-4 h-4 text-amber-500" />
                        <span className="text-[11px] font-medium">{bn ? "পাসওয়ার্ড" : "Password"}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* In-App cPanel Password Reset Modal */}
      <Dialog open={resetModalOpen} onOpenChange={setResetModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{bn ? "cPanel পাসওয়ার্ড পরিবর্তন করুন" : "Reset cPanel Password"}</DialogTitle>
            <DialogDescription>
              {bn
                ? `ইউজারনেম '${selectedService?.cpanelUsername}' এর জন্য নতুন cPanel পাসওয়ার্ড সেট করুন।`
                : `Set a new live password for cPanel account '${selectedService?.cpanelUsername}'.`}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handlePasswordReset} className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-sm font-semibold">{bn ? "নতুন পাসওয়ার্ড" : "New Password"}</label>
              <input
                type="text"
                required
                minLength={8}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="SecurePass123!#"
                className="w-full px-4 py-2.5 rounded-xl border border-input bg-background font-mono text-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <p className="text-xs text-muted-foreground">
                {bn ? "কমপক্ষে ৮টি অক্ষর ও স্পেশাল ক্যারেক্টার আবশ্যক।" : "Must be at least 8 characters with numbers and symbols."}
              </p>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <button
                type="button"
                onClick={() => setResetModalOpen(false)}
                className="px-4 py-2 rounded-xl border border-input text-sm font-medium hover:bg-muted"
              >
                {bn ? "বাতিল" : "Cancel"}
              </button>
              <button
                type="submit"
                disabled={resetting}
                className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
              >
                {resetting && <Loader2 className="w-4 h-4 animate-spin" />}
                {bn ? "পাসওয়ার্ড সংরক্ষণ করুন" : "Update Password"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
