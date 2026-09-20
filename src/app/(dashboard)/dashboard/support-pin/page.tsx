"use client";

import { useEffect, useState, useCallback } from "react";
import { KeyRound, Copy, RefreshCw, ShieldCheck, Clock, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

export default function SupportPinPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [pin, setPin] = useState<string>("");
  const [expiresAt, setExpiresAt] = useState<number>(0);
  const [now, setNow] = useState(Date.now());
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);

  const loadPin = useCallback(async () => {
    try {
      const res = await fetch("/api/support/pin");
      if (res.ok) {
        const data = await res.json();
        setPin(data.pin);
        setExpiresAt(new Date(data.expiresAt).getTime());
      }
    } catch {
      toast.error(bn ? "পিন লোড করা যায়নি" : "Failed to load support PIN");
    } finally {
      setLoading(false);
    }
  }, [bn]);

  const handleRegenerate = async () => {
    setGenerating(true);
    try {
      const res = await fetch("/api/support/pin", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setPin(data.pin);
        setExpiresAt(new Date(data.expiresAt).getTime());
        toast.success(bn ? "নতুন সাপোর্ট পিন তৈরি হয়েছে!" : "New support PIN generated!");
      } else {
        toast.error("Failed to generate PIN");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setGenerating(false);
    }
  };

  useEffect(() => {
    loadPin();
  }, [loadPin]);

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const copyPin = async () => {
    if (!pin) return;
    await navigator.clipboard.writeText(pin);
    toast.success(bn ? "পিন কপি হয়েছে!" : "Support PIN copied to clipboard!");
  };

  const remaining = Math.max(0, expiresAt - now);
  const mm = String(Math.floor(remaining / 60000)).padStart(2, "0");
  const ss = String(Math.floor((remaining % 60000) / 1000)).padStart(2, "0");
  const isExpired = remaining <= 0;

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {bn ? "সাপোর্ট পিন" : "Support PIN"}
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          {bn
            ? "ফোন বা লাইভ চ্যাটে পরিচয় নিশ্চিত করতে আমাদের টিমকে এই পিনটি জানান।"
            : "Share this temporary PIN with our team to verify your identity over phone or live chat."}
        </p>
      </div>

      <Card className="rounded-2xl border-border/70 bg-card/60 overflow-hidden shadow-sm">
        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary">
            <ShieldCheck className="w-5 h-5 shrink-0" />
            <p className="text-xs leading-relaxed">
              {bn
                ? "নিরাপত্তার স্বার্থে প্রতি ৬০ মিনিট পর পর পিন স্বয়ংক্রিয়ভাবে পরিবর্তিত হয়।"
                : "For account security, this PIN automatically rotates every 60 minutes."}
            </p>
          </div>

          <div className="text-center py-6 space-y-4">
            <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">
              {bn ? "আপনার সক্রিয় সাপোর্ট পিন" : "Your Active Support PIN"}
            </p>

            {loading ? (
              <div className="h-16 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-secondary/60 border border-border/80 shadow-inner">
                <span className="font-mono text-4xl sm:text-5xl font-black tracking-widest text-foreground">
                  {pin || "------"}
                </span>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {isExpired
                  ? bn ? "পিনটির মেয়াদ শেষ হয়ে গেছে" : "PIN has expired"
                  : bn ? `মেয়াদ বাকি: ${mm} মিনিট ${ss} সেকেন্ড` : `Expires in: ${mm}:${ss}`}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={copyPin}
              disabled={loading || isExpired}
              className="flex-1 h-12 gap-2 font-bold rounded-xl"
            >
              <Copy className="w-4 h-4" />
              {bn ? "পিন কপি করুন" : "Copy PIN"}
            </Button>
            <Button
              variant="outline"
              onClick={handleRegenerate}
              disabled={generating}
              className="flex-1 h-12 gap-2 font-bold rounded-xl"
            >
              {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
              {bn ? "নতুন পিন তৈরি করুন" : "Generate New PIN"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
