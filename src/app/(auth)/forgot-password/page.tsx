"use client";

import { useState } from "react";
import { Link } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Mail, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);

    // Simulate password reset dispatch
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success(bn ? "পাসওয়ার্ড রিসেট লিংক পাঠানো হয়েছে!" : "Password reset instructions sent!");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {bn ? "লগইনে ফিরুন" : "Back to Sign In"}
        </Link>

        <div className="p-8 rounded-3xl bg-card border border-border/60 shadow-xl">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {bn ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forgot Your Password?"}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {bn
                ? "আপনার নিবন্ধিত ইমেইল ঠিকানা দিন। আমরা আপনাকে পাসওয়ার্ড রিসেট করার লিংক পাঠাব।"
                : "Enter your registered email address and we'll send you instructions to reset your password."}
            </p>
          </div>

          {sent ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1">
                {bn ? "ইমেইল চেক করুন" : "Check Your Inbox"}
              </h3>
              <p className="text-xs text-muted-foreground max-w-xs mx-auto mb-6">
                {bn
                  ? `আমরা ${email} ঠিকানায় রিসেট নির্দেশিকা পাঠিয়েছি। স্প্যাম ফোল্ডারও চেক করতে পারেন।`
                  : `We sent password reset instructions to ${email}. Please check your inbox and spam folder.`}
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                {bn ? "লগইন পেজে যান" : "Return to Log In"}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "ইমেইল ঠিকানা" : "Email Address"}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="pl-10 h-11 rounded-xl text-sm"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl text-xs font-semibold shadow-md shadow-primary/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {bn ? "পাঠানো হচ্ছে..." : "Sending..."}
                  </>
                ) : (
                  bn ? "রিসেট লিংক পাঠান" : "Send Reset Link"
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
