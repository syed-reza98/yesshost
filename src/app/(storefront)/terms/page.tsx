"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        {bn ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
      </h1>
      <p className="text-xs text-muted-foreground mb-8">
        {bn ? "সর্বশেষ হালনাগাদ: মার্চ ২০২৬" : "Last updated: March 2026"}
      </p>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "১. গ্রহণযোগ্য ব্যবহারের নীতিমালা" : "1. Acceptable Use Policy"}
          </h2>
          <p>
            {bn
              ? "আমাদের সার্ভারে কোনো ধরনের স্প্যাম, ফিশিং, ম্যালওয়্যার বা কপিরাইট লঙ্ঘিত কনটেন্ট রাখা সম্পূর্ণ নিষিদ্ধ।"
              : "All services provided by Yess Host may only be used for lawful purposes. Transmission, distribution, or storage of any material in violation of applicable laws is prohibited."}
          </p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "২. বিলিং এবং স্বয়ংক্রিয় রিনিউয়াল" : "2. Billing & Renewals"}
          </h2>
          <p>
            {bn
              ? "সেবার মেয়াদ শেষ হওয়ার ৭ দিন পূর্বে ইনভয়েস তৈরি হয়। নির্ধারিত তারিখের মধ্যে পেমেন্ট সম্পন্ন না হলে সেবা সাময়িক স্থগিত হতে পারে।"
              : "Invoices are generated 7 days prior to service renewal. Non-payment by the due date may result in automatic suspension of services."}
          </p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "৩. আপটাইম এসএলএ" : "3. Uptime SLA"}
          </h2>
          <p>
            {bn
              ? "আমরা ৯৯.৯% নেটওয়ার্ক ও সার্ভার আপটাইম গ্যারান্টি প্রদান করি। সিডিউলড মেইনটেন্যান্স এই হিসাবের অন্তর্ভুক্ত নয়।"
              : "We guarantee 99.9% network and server uptime across all web hosting platforms, excluding scheduled maintenance."}
          </p>
        </div>
      </div>
    </div>
  );
}
