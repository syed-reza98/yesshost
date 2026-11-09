"use client";

import { useEffect, useState } from "react";
import { Megaphone, Plus, Trash2, Tag, Bell, Globe, Sparkles, Check, RefreshCw } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface CampaignItem {
  id: string;
  title: string;
  type: "top_banner" | "popup_announcement" | "email_broadcast";
  messageBn: string;
  messageEn: string;
  isActive: boolean;
  clicks: number;
  startDate: string;
}

const initialCampaigns: CampaignItem[] = [
  {
    id: "camp-1",
    title: "Summer Cloud Hosting Flash Sale (20% OFF)",
    type: "top_banner",
    messageBn: "গ্রীষ্মকালীন বিশেষ অফার! কুপন কোড SUMMER20 দিয়ে যেকোনো হোস্টিং প্ল্যানে পান ২০% ইনস্ট্যান্ট ছাড়!",
    messageEn: "Summer Cloud Flash Sale! Use promo code SUMMER20 for 20% instant off on all web hosting plans!",
    isActive: true,
    clicks: 1420,
    startDate: "2026-11-01",
  },
  {
    id: "camp-2",
    title: "BDIX Dedicated 10Gbps Server Launch",
    type: "popup_announcement",
    messageBn: "বাংলাদেশে নতুন 10Gbps হাইপার-স্পিড BDIX ডেডিকেটেড সার্ভার উপলব্ধ!",
    messageEn: "Announcing new 10Gbps ultra-low latency BDIX bare metal dedicated nodes in Dhaka!",
    isActive: true,
    clicks: 680,
    startDate: "2026-10-15",
  },
];

export default function AdminMarketingPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [campaigns, setCampaigns] = useState<CampaignItem[]>(initialCampaigns);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Form
  const [title, setTitle] = useState("");
  const [type, setType] = useState<"top_banner" | "popup_announcement">("top_banner");
  const [messageBn, setMessageBn] = useState("");
  const [messageEn, setMessageEn] = useState("");

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !messageEn.trim()) return;

    const newCamp: CampaignItem = {
      id: `camp-${Date.now()}`,
      title: title.trim(),
      type,
      messageBn: messageBn.trim() || messageEn.trim(),
      messageEn: messageEn.trim(),
      isActive: true,
      clicks: 0,
      startDate: new Date().toISOString().split("T")[0],
    };

    setCampaigns((prev) => [newCamp, ...prev]);
    setDialogOpen(false);
    setTitle("");
    setMessageBn("");
    setMessageEn("");
    toast.success(bn ? "ক্যাম্পেইন সফলভাবে চালু হয়েছে!" : "Marketing campaign launched!");
  };

  const handleToggle = (id: string) => {
    setCampaigns((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isActive: !c.isActive } : c))
    );
    toast.success(bn ? "ক্যাম্পেইন স্ট্যাটাস আপডেট হয়েছে" : "Campaign status toggled");
  };

  const handleDelete = (id: string) => {
    if (!confirm(bn ? "আপনি কি এটি মুছে ফেলতে চান?" : "Are you sure?")) return;
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
    toast.success(bn ? "ক্যাম্পেইন মুছে ফেলা হয়েছে" : "Campaign deleted");
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Megaphone className="w-6 h-6 text-primary" />
            <span>{bn ? "মার্কেটিং ও প্রমোশনাল ক্যাম্পেইন" : "Marketing Campaigns & Banners"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "হোমপেজ অফার ব্যানার, অ্যানাউন্সমেন্ট পপআপ ও সেলস নোটিফিকেশন নিয়ন্ত্রণ" : "Configure site-wide notification banners, flash deals, and promotional popups"}
          </p>
        </div>

        <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm self-start">
          <Plus className="w-3.5 h-3.5" />
          {bn ? "নতুন ক্যাম্পেইন চালু করুন" : "Launch Campaign"}
        </Button>
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "ক্যাম্পেইনের নাম" : "Campaign Title"}</th>
                <th className="py-3 px-4">{bn ? "ফরম্যাট" : "Format"}</th>
                <th className="py-3 px-4">{bn ? "মেসেজ (ইংরেজি/বাংলা)" : "Message Snippet"}</th>
                <th className="py-3 px-4">{bn ? "ক্লিক ট্র্যাকিং" : "Interactions"}</th>
                <th className="py-3 px-4">{bn ? "স্ট্যাটাস" : "Status"}</th>
                <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {campaigns.map((c) => (
                <tr key={c.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-xs text-foreground">
                    {c.title}
                    <span className="block text-[10px] text-muted-foreground font-normal">
                      Started: {c.startDate}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="text-[10px] uppercase font-semibold">
                      {c.type.replace(/_/g, " ")}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground max-w-sm truncate">
                    {bn ? c.messageBn : c.messageEn}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs font-semibold text-primary">
                    {c.clicks} clicks
                  </td>
                  <td className="py-4 px-4">
                    <button onClick={() => handleToggle(c.id)}>
                      <Badge
                        className={`text-[10px] cursor-pointer ${
                          c.isActive
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {c.isActive ? "Active" : "Paused"}
                      </Badge>
                    </button>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDelete(c.id)}
                      className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-foreground">
              {bn ? "নতুন প্রমোশনাল ক্যাম্পেইন তৈরি" : "Create Marketing Campaign"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateCampaign} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "ক্যাম্পেইনের শিরোনাম" : "Campaign Name"}</label>
              <Input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Flash 20% Discount Deal"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "ক্যাম্পেইন ধরন" : "Display Format"}</label>
              <select
                value={type}
                onChange={(e: any) => setType(e.target.value)}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="top_banner">Top Site-Wide Notice Bar</option>
                <option value="popup_announcement">Hero Announcement Banner</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "মেসেজ (ইংরেজি)" : "Message (English)"}</label>
              <Input
                required
                value={messageEn}
                onChange={(e) => setMessageEn(e.target.value)}
                placeholder="Summer Sale: 20% discount with code SUMMER20"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "মেসেজ (বাংলা)" : "Message (Bengali)"}</label>
              <Input
                value={messageBn}
                onChange={(e) => setMessageBn(e.target.value)}
                placeholder="গ্রীষ্মকালীন অফার! SUMMER20 কোডে ২০% ছাড়"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="rounded-xl text-xs">
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" className="rounded-xl text-xs">
                {bn ? "ক্যাম্পেইন চালু করুন" : "Publish Campaign"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
