"use client";

import { useState } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, Shield, Headphones, ArrowLeft, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLoginPage() {
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
        toast.error(bn ? "ভুল ইমেইল বা পাসওয়ার্ড" : "Invalid staff credentials");
      } else {
        toast.success(bn ? "স্টাফ পোর্টাল ভেরিফাইড!" : "Staff session authenticated!");
        // Fetch session to determine role
        const sessionRes = await fetch("/api/auth/session");
        if (sessionRes.ok) {
          const session = await sessionRes.json();
          const role = session?.user?.role;
          if (role === "admin") {
            window.location.href = "/admin";
            return;
          } else if (role === "call_center") {
            window.location.href = "/call-center";
            return;
          }
        }
        window.location.href = "/admin";
      }
    } catch (err) {
      toast.error(bn ? "লগইন ব্যর্থ হয়েছে" : "Login attempt failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-destructive/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {bn ? "হোমে ফিরুন" : "Back to Storefront"}
        </Link>

        <div className="p-8 rounded-3xl bg-card border border-border/80 shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-3 border border-destructive/20">
              <Shield className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              {bn ? "অ্যাডমিন ও স্টাফ লগইন" : "Staff Console Authentication"}
            </h1>
            <p className="text-xs text-muted-foreground mt-1">
              {bn ? "শুধুমাত্র অনুমোদিত অ্যাডমিনিস্ট্রেটর ও সাপোর্ট এজেন্টের জন্য" : "Authorized administrative and call center personnel only"}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                {bn ? "স্টাফ ইমেইল" : "Staff Email"}
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@yesshost.com"
                  className="pl-10 h-11 rounded-xl text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">
                {bn ? "পাসওয়ার্ড" : "Password"}
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <Input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
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

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-11 rounded-xl text-xs font-semibold bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-md shadow-destructive/20"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {bn ? "ভেরিফাই করা হচ্ছে..." : "Authenticating Staff..."}
                </>
              ) : (
                bn ? "স্টাফ প্যানেলে প্রবেশ করুন" : "Secure Staff Login"
              )}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <Link href="/login" className="text-xs text-muted-foreground hover:text-foreground">
              {bn ? "ক্লায়েন্ট কাস্টমার লগইন করতে চান? এখানে ক্লিক করুন" : "Regular customer? Switch to Client Login"}
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
