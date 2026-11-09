"use client";

import { useEffect, useState } from "react";
import { MessageCircle, RefreshCw, Send, Phone, User, Clock, CheckCircle2, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function AdminLiveChatPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [chats, setChats] = useState([
    { id: "c1", name: "Shahriar Ahmed", email: "shahriar@bdhost.com", phone: "+8801700112233", status: "active", message: "Dedicated Server এর কানেক্টিভিটি সংক্রান্ত তথ্য জানতে চাই।", agent: "Agent Imran", time: "5 mins ago" },
    { id: "c2", name: "Mehedi Hasan", email: "mehedi@gmail.com", phone: "+8801811223344", status: "resolved", message: "bKash পেমেন্টের ইনভয়েস রিসিট ডাউনলোড করেছি। ধন্যবাদ।", agent: "Support Bot", time: "25 mins ago" },
    { id: "c3", name: "Rubel Rana", email: "rubel@techcorp.com", phone: "+8801922334455", status: "active", message: "Custom Nameserver সেটআপে আটকে গেছি।", agent: "Agent Imran", time: "32 mins ago" },
  ]);

  const [search, setSearch] = useState("");
  const [selectedChat, setSelectedChat] = useState<any>(chats[0]);
  const [reply, setReply] = useState("");

  const filtered = chats.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) return;
    toast.success(bn ? "রিপ্লাই প্রেরিত হয়েছে!" : "Admin response dispatched!");
    setReply("");
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-primary" />
            <span>{bn ? "লাইভ চ্যাট সুপারভিশন" : "Live Chat Console & Transcripts"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "ওয়েবসাইটের সকল লাইভ চ্যাট সেশন পর্যবেক্ষণ ও সুপারভাইজর ইন্টারভেনশন" : "Real-time oversight of visitor inquiries, agent response speeds, and transcripts"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={() => toast.info("Chats synced")} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className="w-3.5 h-3.5" />
          {bn ? "রিফ্রেশ" : "Refresh Streams"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border/60 rounded-3xl overflow-hidden shadow-xs min-h-[600px]">
        {/* Left List */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/60 p-4 bg-muted/20 flex flex-col">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={bn ? "ভিজিটর খুঁজুন..." : "Search chat transcripts..."}
              className="pl-9 h-9 rounded-xl text-xs"
            />
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto">
            {filtered.map((c) => {
              const isSelected = selectedChat?.id === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedChat(c)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    isSelected
                      ? "bg-card border-primary/50 shadow-xs"
                      : "bg-card/50 border-border/40 hover:bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-foreground truncate">{c.name}</span>
                    <Badge variant="outline" className="text-[9px] uppercase">
                      {c.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{c.message}</p>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>Agent: {c.agent}</span>
                    <span>{c.time}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Active View */}
        <div className="lg:col-span-7 flex flex-col h-[600px]">
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-border/60 flex items-center justify-between bg-card shrink-0">
                <div>
                  <h3 className="text-sm font-bold text-foreground">{selectedChat.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {selectedChat.email} {selectedChat.phone ? `• ${selectedChat.phone}` : ""}
                  </p>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 text-[10px]">
                  Assigned: {selectedChat.agent}
                </Badge>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/40 text-xs leading-relaxed">
                  <span className="font-bold text-primary block mb-1">Customer Inquiry:</span>
                  {selectedChat.message}
                </div>

                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-xs leading-relaxed ml-6">
                  <span className="font-bold text-primary block mb-1">Agent Response:</span>
                  {bn ? "আমাদের টেকনিক্যাল টিম আপনার সেটিংস পর্যালোচনা করছে। অনুগ্রহ করে একটু অপেক্ষা করুন।" : "Our technical escalation desk is reviewing your DNS settings. One moment please."}
                </div>
              </div>

              <div className="p-4 border-t border-border/60 bg-card shrink-0">
                <form onSubmit={handleReply} className="flex gap-2">
                  <Input
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder={bn ? "সুপারভাইজর মেসেজ দিন..." : "Admin intervention message..."}
                    className="flex-1 rounded-xl text-xs h-10"
                  />
                  <Button type="submit" size="sm" className="rounded-xl text-xs h-10 px-4">
                    <Send className="w-3.5 h-3.5 mr-1" />
                    {bn ? "পাঠান" : "Send"}
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-xs text-muted-foreground">
              Select a conversation to review
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
