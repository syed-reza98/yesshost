"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, FileText, Server } from "lucide-react";
import { useSearchParams, Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PaymentSuccessPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get("invoice_id") || searchParams.get("ref") || "";

  return (
    <div className="pt-28 pb-20 min-h-[75vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md w-full bg-card border border-border/60 rounded-3xl p-8 shadow-sm"
      >
        <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          {bn ? "পেমেন্ট সফল হয়েছে!" : "Payment Successful!"}
        </h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {bn
            ? "আপনার পেমেন্ট সফলভাবে গৃহীত হয়েছে এবং ইনভয়েসটি পেইড হিসেবে চিহ্নিত হয়েছে। আপনার সার্ভিস সক্রিয় করা হচ্ছে।"
            : "Your payment was cleared successfully. Your server services and domain are now provisioning automatically."}
        </p>

        {invoiceId && (
          <div className="p-3 rounded-xl bg-muted/40 border border-border/40 text-xs text-muted-foreground mb-6">
            <span>Reference / Invoice: </span>
            <span className="font-mono font-bold text-foreground">{invoiceId}</span>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            <Server className="w-4 h-4" />
            {bn ? "আমার সার্ভিসসমূহ" : "View My Services"}
          </Link>
          <Link
            href="/dashboard/billing"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-border text-foreground hover:bg-accent/10 transition-all"
          >
            <FileText className="w-4 h-4" />
            {bn ? "ইনভয়েস হিস্ট্রি" : "Billing History"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
