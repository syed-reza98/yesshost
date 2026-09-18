"use client";

import { motion } from "framer-motion";
import { Shield, Users, Globe, Server, Award, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const stats = [
    { value: "5,000+", label: bn ? "সক্রিয় ক্লায়েন্ট" : "Active Clients" },
    { value: "99.99%", label: bn ? "আপটাইম গ্যারান্টি" : "Uptime Guarantee" },
    { value: "24/7", label: bn ? "সাপোর্ট সার্ভিস" : "Support Service" },
    { value: "10+", label: bn ? "বছরের অভিজ্ঞতা" : "Years Experience" },
  ];

  const values = [
    { icon: Shield, title: bn ? "নিরাপত্তা" : "Security", desc: bn ? "আমরা আপনার ডেটার সুরক্ষা সর্বোচ্চ গুরুত্ব দিই।" : "We prioritize the security of your data above all." },
    { icon: Clock, title: bn ? "নির্ভরযোগ্যতা" : "Reliability", desc: bn ? "৯৯.৯% আপটাইম গ্যারান্টি সহ সেবা প্রদান করি।" : "We deliver services with 99.9% uptime guarantee." },
    { icon: Users, title: bn ? "গ্রাহক সেবা" : "Customer Service", desc: bn ? "২৪/৭ বাংলা ও ইংরেজি ভাষায় সাপোর্ট।" : "24/7 support in both Bengali and English." },
    { icon: Globe, title: bn ? "গ্লোবাল নেটওয়ার্ক" : "Global Network", desc: bn ? "USA, সিঙ্গাপুর ও বাংলাদেশে সার্ভার লোকেশন।" : "Server locations in USA, Singapore and Bangladesh." },
    { icon: Server, title: bn ? "আধুনিক প্রযুক্তি" : "Modern Technology", desc: bn ? "NVMe SSD, LiteSpeed ও সর্বশেষ প্রযুক্তি ব্যবহার।" : "Using NVMe SSD, LiteSpeed and latest technology." },
    { icon: Award, title: bn ? "মানসম্মত সেবা" : "Quality Service", desc: bn ? "আন্তর্জাতিক মানের হোস্টিং সেবা প্রদান।" : "Providing international standard hosting services." },
  ];

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      <section className="container mx-auto px-4 text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
            {bn ? "আমাদের সম্পর্কে" : "About Us"}
          </span>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-6 tracking-tight">
            {bn ? "Yess Host — আপনার বিশ্বস্ত হোস্টিং পার্টনার" : "Yess Host — Your Trusted Hosting Partner"}
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            {bn ? "২০১৫ সাল থেকে বাংলাদেশে প্রিমিয়াম কোয়ালিটি ওয়েব হোস্টিং, ডোমেইন রেজিস্ট্রেশন ও ক্লাউড সার্ভিস প্রদান করে আসছি।" : "Since 2015, we have been providing premium quality web hosting, domain registration and cloud services in Bangladesh."}
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 text-center shadow-sm">
              <div className="text-3xl lg:text-4xl font-extrabold text-primary mb-2">{s.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">
          {bn ? "আমাদের মূল বৈশিষ্ট্যসমূহ" : "Our Core Strengths"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
