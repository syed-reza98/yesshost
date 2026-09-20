"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function RefundPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        {bn ? "রিফান্ড নীতিমালা" : "Refund Policy"}
      </h1>
      <p className="text-xs text-muted-foreground mb-8">
        {bn ? "সর্বশেষ হালনাগাদ: মার্চ ২০২৬" : "Last updated: March 2026"}
      </p>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "৩০ দিনের মানিব্যাক গ্যারান্টি" : "30-Day Money-Back Guarantee"}
          </h2>
          <p>
            {bn
              ? "আমাদের শেয়ার্ড ও ক্লাউড হোস্টিং সেবায় সন্তুষ্ট না হলে ৩০ দিনের মধ্যে পূর্ণ রিফান্ড দাবি করতে পারবেন।"
              : "Shared and cloud hosting packages are backed by our unconditional 30-day money-back guarantee."}
          </p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "নন-রিফান্ডেবল আইটেম" : "Non-Refundable Services"}
          </h2>
          <p>
            {bn
              ? "ডোমেইন রেজিস্ট্রেশন, ট্রান্সফার, ডেডিকেটেড সার্ভার ও থিম ক্রয় নন-রিফান্ডেবল।"
              : "Domain registration fees, domain transfers, dedicated servers, and theme license purchases are non-refundable once activated."}
          </p>
        </div>
      </div>
    </div>
  );
}
