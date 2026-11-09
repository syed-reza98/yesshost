"use client";

import { motion } from "framer-motion";
import { XCircle, RefreshCw, Headphones, ArrowLeft } from "lucide-react";
import { useSearchParams, Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PaymentFailPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [searchParams] = useSearchParams();
  const ref = searchParams.get("ref") || "";

  return (
    <div className="pt-28 pb-20 min-h-[75vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md w-full bg-card border border-border/60 rounded-3xl p-8 shadow-sm"
      >
        <div className="w-16 h-16 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-10 h-10" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          {bn ? "পেমেন্ট সম্পন্ন হয়নি" : "Payment Incomplete"}
        </h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {bn
            ? "লেনদেনটি সফলভাবে সম্পন্ন করা যায়নি। গেটওয়ে থেকে কোনো ফান্ড কাটা হয়নি অথবা সময় শেষ হয়ে গেছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
            : "The transaction could not be authorized by the payment gateway. No funds were debited. Please retry."}
        </p>

        {ref && (
          <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-xs text-muted-foreground mb-6">
            <span>Reference: </span>
            <span className="font-mono font-bold text-foreground">{ref}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard/billing"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            {bn ? "পুনরায় চেষ্টা করুন" : "Retry Payment"}
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-border text-foreground hover:bg-accent/10 transition-all"
          >
            <Headphones className="w-4 h-4" />
            {bn ? "সাপোর্ট সাহায্য" : "Contact Support"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
