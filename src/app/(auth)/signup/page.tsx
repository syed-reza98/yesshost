"use client";

import { useState } from "react";
import { Link, useNavigate } from "@/lib/router-compat";
import { User, Mail, Lock, Phone, ArrowRight, ArrowLeft } from "lucide-react";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Registration failed");
        setLoading(false);
        return;
      }

      toast.success(bn ? "রেজিস্ট্রেশন সফল হয়েছে! লগইন করা হচ্ছে..." : "Registration successful! Logging in...");

      // Automatically sign in
      const signInRes = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (!signInRes?.error) {
        window.location.href = "/dashboard";
      } else {
        navigate("/login");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
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
              {bn ? "নতুন অ্যাকাউন্ট তৈরি করুন" : "Create an Account"}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              {bn ? "হোস্টিং ও ডোমেইন ম্যানেজ করতে যোগ দিন" : "Join Yess Host to manage your hosting and domains"}
            </p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold">{bn ? "পূর্ণ নাম" : "Full Name"}</label>
              <div className="relative">
                <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

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
              <label className="text-sm font-semibold">{bn ? "ফোন নম্বর" : "Phone Number"}</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+8801700000000"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">{bn ? "পাসওয়ার্ড" : "Password"}</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-muted-foreground absolute left-3 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-2"
            >
              {loading ? (bn ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "Creating Account...") : (bn ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account")}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
            {bn ? "ইতিমধ্যে অ্যাকাউন্ট আছে?" : "Already have an account?"}{" "}
            <Link href="/login" className="text-primary font-semibold hover:underline">
              {bn ? "লগইন করুন" : "Sign In"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
