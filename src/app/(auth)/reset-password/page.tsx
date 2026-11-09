"use client";

import { useState } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowLeft, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;

    if (password !== confirmPassword) {
      toast.error(bn ? "পাসওয়ার্ড দুটি মিলছে না" : "Passwords do not match");
      return;
    }

    if (password.length < 8) {
      toast.error(bn ? "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে" : "Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      toast.success(bn ? "পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!" : "Password successfully updated!");
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
              {bn ? "নতুন পাসওয়ার্ড সেট করুন" : "Set New Password"}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed">
              {bn
                ? "আপনার অ্যাকাউন্টের নিরাপত্তার জন্য একটি শক্তিশালী পাসওয়ার্ড তৈরি করুন।"
                : "Create a strong and secure new password for your Yess Host account."}
            </p>
          </div>

          {success ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {bn ? "পাসওয়ার্ড সফলভাবে সংরক্ষিত হয়েছে" : "Password Reset Successfully"}
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                {bn
                  ? "আপনি এখন নতুন পাসওয়ার্ড ব্যবহার করে সরাসরি অ্যাকাউন্টে লগইন করতে পারেন।"
                  : "You can now log into your client dashboard using your new credentials."}
              </p>
              <Link
                href="/login"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                {bn ? "এখনই লগইন করুন" : "Sign In Now"}
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "নতুন পাসওয়ার্ড" : "New Password"}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 8 characters"
                    className="pl-10 pr-10 h-11 rounded-xl text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {bn ? "পাসওয়ার্ড নিশ্চিত করুন" : "Confirm New Password"}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-type password"
                    className="pl-10 pr-10 h-11 rounded-xl text-sm"
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
                    {bn ? "সংরক্ষণ করা হচ্ছে..." : "Updating..."}
                  </>
                ) : (
                  bn ? "পাসওয়ার্ড পরিবর্তন করুন" : "Reset Password"
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
}
