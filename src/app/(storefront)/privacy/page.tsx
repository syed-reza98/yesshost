"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold tracking-tight text-foreground mb-4">
        {bn ? "গোপনীয়তা নীতিমালা" : "Privacy Policy"}
      </h1>
      <p className="text-xs text-muted-foreground mb-8">
        {bn ? "সর্বশেষ হালনাগাদ: মার্চ ২০২৬" : "Last updated: March 2026"}
      </p>

      <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "তথ্য সংগ্রহ" : "Information Collection"}
          </h2>
          <p>
            {bn
              ? "অ্যাকাউন্ট তৈরি এবং ডোমেইন নিবন্ধনের সময় আপনার নাম, ইমেইল, ফোন নম্বর ও বিলিং ঠিকানা সংগ্রহ করা হয়।"
              : "We collect personal information necessary to deliver and manage your hosting accounts and ICANN domain registrations."}
          </p>
        </div>

        <div className="p-5 rounded-xl border border-border bg-card">
          <h2 className="text-base font-bold text-foreground mb-2">
            {bn ? "তথ্যের নিরাপত্তা" : "Data Security"}
          </h2>
          <p>
            {bn
              ? "সকল সংবেদনশীল ডেটা এনক্রিপ্ট করে সুরক্ষিত রাখা হয় এবং কোনো তৃতীয় পক্ষের কাছে বিক্রয় করা হয় না।"
              : "We utilize modern encryption and strict access controls to safeguard your personal and financial credentials."}
          </p>
        </div>
      </div>
    </div>
  );
}
