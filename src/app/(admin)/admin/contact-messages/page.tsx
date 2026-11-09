"use client";

import { useEffect, useState } from "react";
import { Mail, RefreshCw, Send, CheckCircle2, Clock, Trash2, Reply, Search, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ContactMsg {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function AdminContactMessagesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [messages, setMessages] = useState<ContactMsg[]>([]);
  const [selectedMsg, setSelectedMsg] = useState<ContactMsg | null>(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [search, setSearch] = useState("");

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/contact-messages");
      if (res.ok) {
        const data = await res.json();
        setMessages(data.messages || []);
        if (data.messages && data.messages.length > 0 && !selectedMsg) {
          setSelectedMsg(data.messages[0]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedMsg) return;
    setSending(true);

    try {
      const res = await fetch("/api/admin/contact-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedMsg.id, reply: replyText.trim() }),
      });

      if (res.ok) {
        toast.success(bn ? "রিপ্লাই সফলভাবে পাঠানো হয়েছে!" : "Reply dispatched to contact!");
        setReplyText("");
        fetchMessages();
      }
    } catch (err) {
      toast.error("Failed to send reply");
    } finally {
      setSending(false);
    }
  };

  const filtered = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      (m.subject && m.subject.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Mail className="w-6 h-6 text-primary" />
            <span>{bn ? "কন্টাক্ট মেসেজ ও ইনকোয়ারি" : "Contact Inquiries & Submissions"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "পাবলিক কন্টাক্ট ফরম থেকে প্রেরিত মেসেজ ও রিপ্লাই পরিচালনা" : "Manage general contact form messages and outbound email responses"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchMessages} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border/60 rounded-3xl overflow-hidden shadow-xs min-h-[600px]">
        {/* Messages List Left */}
        <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border/60 p-4 bg-muted/20 flex flex-col">
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={bn ? "মেসেজ খুঁজুন..." : "Filter messages..."}
              className="pl-9 h-9 rounded-xl text-xs"
            />
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto">
            {filtered.map((msg) => {
              const isSelected = selectedMsg?.id === msg.id;
              return (
                <button
                  key={msg.id}
                  onClick={() => setSelectedMsg(msg)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    isSelected
                      ? "bg-card border-primary/50 shadow-xs"
                      : "bg-card/50 border-border/40 hover:bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-foreground truncate">{msg.name}</span>
                    <Badge
                      variant="outline"
                      className={`text-[9px] ${
                        msg.status === "replied"
                          ? "text-green-600 border-green-500/20 bg-green-500/10"
                          : "text-amber-600 border-amber-500/20 bg-amber-500/10"
                      }`}
                    >
                      {msg.status || "unread"}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-xs text-primary truncate mb-1">
                    {msg.subject || "General Inquiry"}
                  </h4>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed mb-2">
                    {msg.message}
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    {new Date(msg.createdAt).toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div className="py-12 text-center text-xs text-muted-foreground">
                {bn ? "কোনো মেসেজ নেই" : "No contact messages found"}
              </div>
            )}
          </div>
        </div>

        {/* Selected Message & Reply Right */}
        <div className="lg:col-span-7 flex flex-col h-[600px]">
          {selectedMsg ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-border/60 flex items-center justify-between bg-card shrink-0">
                <div>
                  <h3 className="text-sm font-bold text-foreground">
                    {selectedMsg.subject || "Contact Submission"}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    From: <span className="text-foreground font-semibold">{selectedMsg.name}</span> ({selectedMsg.email}) {selectedMsg.phone ? `• ${selectedMsg.phone}` : ""}
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <div className="p-5 rounded-2xl bg-muted/20 border border-border/40 text-xs sm:text-sm text-foreground leading-relaxed whitespace-pre-line">
                  {selectedMsg.message}
                </div>
              </div>

              {/* Reply Form */}
              <div className="p-4 border-t border-border/60 bg-card shrink-0">
                <form onSubmit={handleReply} className="space-y-3">
                  <Textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={bn ? "ইমেইল রিপ্লাই লিখুন..." : "Compose outbound reply email to contact..."}
                    className="min-h-[100px] rounded-xl text-xs resize-none"
                  />
                  <div className="flex justify-end">
                    <Button type="submit" disabled={sending || !replyText.trim()} size="sm" className="rounded-xl text-xs">
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      {sending ? (bn ? "পাঠানো হচ্ছে..." : "Sending...") : (bn ? "রিপ্লাই পাঠান" : "Send Reply")}
                    </Button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-xs text-muted-foreground">
              {bn ? "বাম পাশ থেকে একটি মেসেজ নির্বাচন করুন" : "Select an inquiry to view details and respond"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
