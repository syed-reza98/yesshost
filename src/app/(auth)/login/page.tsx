"use client";

import { useState } from "react";
import { Link, useNavigate, useLocation } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email: email.trim(),
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error(bn ? "ভুল ইমেইল বা পাসওয়ার্ড" : "Invalid email or password");
      } else {
        toast.success(bn ? "লগইন সফল হয়েছে!" : "Login successful!");
        window.location.href = "/dashboard";
      }
    } catch (err: any) {
      toast.error(bn ? "লগইন ব্যর্থ হয়েছে" : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          {bn ? "হোমে ফিরুন" : "Back to Home"}
        </Link>

        <div className="p-8 rounded-2xl bg-card border border-border/50 shadow-xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {bn ? "স্বাগতম" : "Welcome Back"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {bn ? "আপনার অ্যাকাউন্টে লগইন করুন" : "Sign in to your Yess Host account"}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">{bn ? "ইমেইল" : "Email"}</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold">{bn ? "পাসওয়ার্ড" : "Password"}</label>
                <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                  {bn ? "পাসওয়ার্ড ভুলে গেছেন?" : "Forgot Password?"}
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
              {loading ? (bn ? "লগইন হচ্ছে..." : "Signing in...") : (bn ? "লগইন করুন" : "Sign In")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
            {bn ? "অ্যাকাউন্ট নেই?" : "Don't have an account?"}{" "}
            <Link href="/signup" className="text-primary font-semibold hover:underline">
              {bn ? "সাইন আপ করুন" : "Sign Up"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
