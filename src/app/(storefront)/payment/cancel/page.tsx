"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, ShoppingCart } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PaymentCancelPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="pt-28 pb-20 min-h-[75vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center max-w-md w-full bg-card border border-border/60 rounded-3xl p-8 shadow-sm"
      >
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-2">
          {bn ? "পেমেন্ট বাতিল করা হয়েছে" : "Payment Cancelled"}
        </h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {bn
            ? "আপনি পেমেন্ট উইন্ডো বাতিল করেছেন। আপনার অর্ডার ও ইনভয়েসটি ড্রাফট হিসেবে সংরক্ষিত রয়েছে।"
            : "You cancelled the gateway checkout process. Your order and unpaid invoice remain available in your account."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            {bn ? "চেকআউটে ফিরুন" : "Return to Checkout"}
          </Link>
          <Link
            href="/dashboard/billing"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold border border-border text-foreground hover:bg-accent/10 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            {bn ? "বিলিং ওভারভিউ" : "Billing Overview"}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
