"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export default function ContactPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactInfo = [
    { icon: Phone, title: bn ? "ফোন" : "Phone", value: "+88 096 38 205 205", sub: bn ? "সকাল ১০টা - রাত ৮টা" : "10AM - 8PM" },
    { icon: Mail, title: bn ? "ইমেইল" : "Email", value: "support@yesshost.com", sub: bn ? "২৪ ঘণ্টার মধ্যে রিপ্লাই" : "Reply within 24 hours" },
    { icon: MapPin, title: bn ? "ঠিকানা" : "Address", value: bn ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh", sub: "" },
    { icon: Clock, title: bn ? "অফিস সময়" : "Office Hours", value: bn ? "শনি - বৃহস্পতি" : "Sat - Thu", sub: bn ? "সকাল ১০:০০ - রাত ৮:০০" : "10:00 AM - 8:00 PM" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(bn ? "সবগুলো প্রয়োজনীয় ফিল্ড পূরণ করুন" : "Please fill in all required fields");
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        toast.success(bn ? "মেসেজ পাঠানো সফল হয়েছে!" : "Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(bn ? "মেসেজ পাঠানো ব্যর্থ হয়েছে" : "Failed to send message");
      }
    } catch (err) {
      toast.error(bn ? "নেটওয়ার্ক সমস্যা হয়েছে" : "Network error occurred");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20 lg:pt-24 pb-16">
      <section className="container mx-auto px-4 text-center mb-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
            {bn ? "যোগাযোগ" : "Contact"}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            {bn ? "আমাদের সাথে যোগাযোগ করুন" : "Get in Touch"}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {bn ? "যেকোনো প্রশ্ন বা সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন।" : "Contact us for any questions or assistance."}
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground">{info.title}</h3>
                    <p className="text-base font-bold text-foreground mt-0.5">{info.value}</p>
                    {info.sub && <p className="text-xs text-muted-foreground mt-1">{info.sub}</p>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2 p-8 rounded-2xl bg-card border border-border/50 shadow-sm">
            {sent ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold">{bn ? "ধন্যবাদ!" : "Thank You!"}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {bn ? "আপনার মেসেজটি সফলভাবে পৌঁছেছে। আমাদের প্রতিনিধি দ্রুত আপনার সাথে যোগাযোগ করবেন।" : "Your message has been received. Our team will contact you shortly."}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  {bn ? "আরেকটি মেসেজ পাঠান" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">{bn ? "আপনার নাম" : "Your Name"} *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={bn ? "নাম লিখুন" : "Enter your name"}
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">{bn ? "ইমেইল এড্রেস" : "Email Address"} *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={bn ? "ইমেইল লিখুন" : "Enter your email"}
                      className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">{bn ? "বিষয়" : "Subject"}</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder={bn ? "মেসেজের বিষয়" : "Subject of your message"}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">{bn ? "মেসেজ" : "Message"} *</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={bn ? "বিস্তারিত লিখুন..." : "Type your message here..."}
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  {bn ? "মেসেজ পাঠান" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
