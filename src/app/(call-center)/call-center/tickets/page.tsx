"use client";

import { useEffect, useState } from "react";
import { HeadphonesIcon, Send, RefreshCw, Clock, CheckCircle2, AlertCircle, MessageSquare, User, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface TicketReply {
  id: string;
  message: string;
  isStaff: boolean;
  createdAt: string;
  userName?: string;
}

interface SupportTicket {
  id: string;
  ticketNumber: string;
  subject: string;
  department: string;
  priority: string;
  status: string;
  createdAt: string;
  userName?: string;
  userEmail?: string;
  replies?: TicketReply[];
}

export default function CallCenterTicketsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<SupportTicket | null>(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(true);
  const [replying, setReplying] = useState(false);
  const [filter, setFilter] = useState("all");

  const fetchTickets = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tickets");
      if (res.ok) {
        const data = await res.json();
        setTickets(data.tickets || []);
        if (data.tickets && data.tickets.length > 0 && !selectedTicketId) {
          setSelectedTicketId(data.tickets[0].id);
        }
      }
    } catch (err) {
      console.error("Error fetching tickets:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchSingleTicket = async (id: string) => {
    try {
      const res = await fetch(`/api/admin/tickets?ticketId=${id}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedTicket(data.ticket);
      }
    } catch (err) {
      console.error("Error fetching single ticket:", err);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    if (selectedTicketId) {
      fetchSingleTicket(selectedTicketId);
    }
  }, [selectedTicketId]);

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedTicketId) return;
    setReplying(true);

    try {
      const res = await fetch("/api/admin/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicketId,
          message: replyText.trim(),
          status: "in_progress",
        }),
      });

      if (res.ok) {
        toast.success(bn ? "রিপ্লাই সফলভাবে পাঠানো হয়েছে!" : "Reply dispatched to customer!");
        setReplyText("");
        fetchSingleTicket(selectedTicketId);
        fetchTickets();
      }
    } catch (err) {
      toast.error(bn ? "রিপ্লাই পাঠানো ব্যর্থ হয়েছে" : "Failed to send reply");
    } finally {
      setReplying(false);
    }
  };

  const filteredTickets = tickets.filter((t) => {
    if (filter === "all") return true;
    return t.status === filter;
  });

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <HeadphonesIcon className="w-6 h-6 text-primary" />
            <span>{bn ? "সাপোর্ট টিকেট হেল্পডেস্ক" : "Support Ticket Desk"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "গ্রাহকদের সাপোর্ট টিকেট পর্যালোচনা, ট্রায়াজ ও সরাসরি সমাধান" : "Customer technical requests, billing inquiries, and server escalations"}
          </p>
        </div>

        <Button size="sm" variant="outline" onClick={fetchTickets} disabled={loading} className="rounded-xl text-xs gap-1.5 self-start">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          {bn ? "রিফ্রেশ" : "Refresh Desk"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border/60 rounded-3xl overflow-hidden shadow-xs min-h-[600px]">
        {/* Tickets Left List */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/60 p-4 bg-muted/20 flex flex-col">
          <div className="flex items-center gap-1.5 mb-3 overflow-x-auto pb-1">
            {["all", "open", "in_progress", "resolved"].map((st) => (
              <button
                key={st}
                onClick={() => setFilter(st)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold capitalize transition-all ${
                  filter === st
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto">
            {filteredTickets.map((t) => {
              const isSelected = t.id === selectedTicketId;
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTicketId(t.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    isSelected
                      ? "bg-card border-primary/50 shadow-xs"
                      : "bg-card/50 border-border/40 hover:bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-primary font-bold">{t.ticketNumber}</span>
                    <Badge variant="outline" className="text-[9px] uppercase">
                      {t.priority}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-xs text-foreground truncate mb-1">{t.subject}</h4>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span>{t.department}</span>
                    <span className="capitalize font-semibold text-primary">{t.status}</span>
                  </div>
                </button>
              );
            })}
            {filteredTickets.length === 0 && (
              <div className="py-12 text-center text-xs text-muted-foreground">
                {bn ? "কোনো টিকেট নেই" : "No tickets found"}
              </div>
            )}
          </div>
        </div>

        {/* Selected Ticket Conversation & Resolution Area */}
        <div className="lg:col-span-8 flex flex-col h-[600px]">
          {selectedTicket ? (
            <>
              {/* Header */}
              <div className="p-4 border-b border-border/60 flex items-center justify-between bg-card shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-primary">{selectedTicket.ticketNumber}</span>
                    <h3 className="font-bold text-sm text-foreground truncate">{selectedTicket.subject}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Client: <span className="text-foreground font-semibold">{selectedTicket.userName || "Customer"}</span> ({selectedTicket.userEmail || "Registered"})
                  </p>
                </div>
                <Badge variant="secondary" className="capitalize text-xs">
                  {selectedTicket.status}
                </Badge>
              </div>

              {/* Thread */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {selectedTicket.replies && selectedTicket.replies.length > 0 ? (
                  selectedTicket.replies.map((reply) => (
                    <div
                      key={reply.id}
                      className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed border ${
                        reply.isStaff
                          ? "bg-primary/5 border-primary/20 text-foreground ml-4"
                          : "bg-muted/30 border-border/40 text-foreground mr-4"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2 text-[10px] text-muted-foreground border-b border-border/30 pb-1.5">
                        <span className="font-bold text-primary">
                          {reply.isStaff ? (bn ? "সাপোর্ট স্টাফ" : "Support Staff") : (selectedTicket.userName || "Client")}
                        </span>
                        <span>{new Date(reply.createdAt).toLocaleDateString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                      </div>
                      <p className="whitespace-pre-line leading-relaxed">{reply.message}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-xs text-muted-foreground">
                    {bn ? "কোনো মেসেজ নেই" : "No messages recorded on this ticket yet"}
                  </div>
                )}
              </div>

              {/* Reply Box */}
              <div className="p-4 border-t border-border/60 bg-card shrink-0">
                <form onSubmit={handleSendReply} className="space-y-2">
                  <Textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={bn ? "টিকেট রিপ্লাই লিখুন..." : "Write official support response..."}
                    className="min-h-[80px] rounded-xl text-xs resize-none"
                  />
                  <div className="flex justify-end">
                    <Button type="submit" disabled={replying || !replyText.trim()} size="sm" className="rounded-xl text-xs">
                      <Send className="w-3.5 h-3.5 mr-1.5" />
                      {replying ? (bn ? "পাঠানো হচ্ছে..." : "Sending...") : (bn ? "রিপ্লাই পাঠান" : "Post Reply")}
                    </Button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center flex-1 text-xs text-muted-foreground">
              {bn ? "বাম পাশ থেকে একটি টিকেট নির্বাচন করুন" : "Select a ticket from the left panel to inspect and reply"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
