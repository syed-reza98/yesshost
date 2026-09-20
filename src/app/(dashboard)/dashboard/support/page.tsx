"use client";

import { useEffect, useState, useMemo } from "react";
import { Headphones, Plus, MessageSquare, Send, Clock, CheckCircle2, AlertCircle, ChevronLeft, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import EmptyState from "@/components/EmptyState";
import DataToolbar from "@/components/DataToolbar";

type Ticket = {
  id: string;
  ticketNumber: string;
  subject: string;
  department: string;
  priority: string;
  status: string;
  createdAt: string;
};

type Reply = {
  id: string;
  userId: string;
  message: string;
  isStaff: boolean;
  createdAt: string;
};

const statusConfig: Record<string, { color: string; labelEn: string; labelBn: string }> = {
  open: { color: "bg-amber-500/10 text-amber-600 border-amber-500/20", labelEn: "Open", labelBn: "উন্মুক্ত" },
  answered: { color: "bg-blue-500/10 text-blue-600 border-blue-500/20", labelEn: "Answered", labelBn: "উত্তর দেওয়া হয়েছে" },
  waiting_client: { color: "bg-purple-500/10 text-purple-600 border-purple-500/20", labelEn: "Awaiting Reply", labelBn: "উত্তরের অপেক্ষায়" },
  closed: { color: "bg-muted text-muted-foreground border-border", labelEn: "Closed", labelBn: "বন্ধ" },
};

export default function SupportPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const { user } = useAuth();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Ticket creation modal
  const [createOpen, setCreateOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [department, setDepartment] = useState("Technical Support");
  const [priority, setPriority] = useState("medium");
  const [message, setMessage] = useState("");
  const [creating, setCreating] = useState(false);

  // Selected ticket chat view
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [replyMessage, setReplyMessage] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/support/tickets");
      if (res.ok) {
        const data = await res.json();
        setTickets(data.tickets || []);
      }
    } catch (err) {
      console.error("Failed to load tickets:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const openTicketDetail = async (ticket: Ticket) => {
    setSelectedTicket(ticket);
    try {
      const res = await fetch(`/api/support/tickets?id=${ticket.id}`);
      if (res.ok) {
        const data = await res.json();
        setReplies(data.replies || []);
      }
    } catch (err) {
      console.error("Failed to load replies:", err);
    }
  };

  const handleCreateTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      toast.error(bn ? "বিষয় এবং বার্তা উভয়ই পূরণ করুন" : "Please fill in both subject and message");
      return;
    }
    setCreating(true);
    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, department, priority, message }),
      });
      if (res.ok) {
        toast.success(bn ? "সাপোর্ট টিকিট তৈরি হয়েছে!" : "Support ticket created!");
        setCreateOpen(false);
        setSubject("");
        setMessage("");
        fetchTickets();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to create ticket");
      }
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setCreating(false);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !replyMessage.trim()) return;
    setSendingReply(true);
    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "reply",
          ticketId: selectedTicket.id,
          message: replyMessage.trim(),
        }),
      });
      if (res.ok) {
        setReplyMessage("");
        openTicketDetail(selectedTicket);
        fetchTickets();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to send reply");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to send reply");
    } finally {
      setSendingReply(false);
    }
  };

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchSearch =
        t.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
        t.subject.toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || t.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [tickets, search, statusFilter]);

  if (selectedTicket) {
    const st = statusConfig[selectedTicket.status] || statusConfig.open;
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSelectedTicket(null);
              setReplies([]);
            }}
            className="gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            {bn ? "সকল টিকিটে ফিরুন" : "Back to Tickets"}
          </Button>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs font-bold text-muted-foreground">
                #{selectedTicket.ticketNumber}
              </span>
              <h2 className="text-lg font-bold text-foreground mt-0.5">
                {selectedTicket.subject}
              </h2>
            </div>
            <Badge variant="outline" className={st.color}>
              {bn ? st.labelBn : st.labelEn}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>{bn ? "বিভাগ: " : "Department: "}{selectedTicket.department}</span>
            <span>{bn ? "অগ্রাধিকার: " : "Priority: "}{selectedTicket.priority}</span>
            <span>{new Date(selectedTicket.createdAt).toLocaleDateString("en-GB")}</span>
          </div>
        </div>

        {/* Replies Thread */}
        <div className="space-y-4">
          {replies.map((r) => (
            <div
              key={r.id}
              className={`p-4 rounded-xl border max-w-2xl ${
                r.isStaff
                  ? "bg-primary/5 border-primary/20 ml-0 mr-auto"
                  : "bg-secondary/40 border-border mr-0 ml-auto"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-foreground">
                  {r.isStaff ? "Support Team" : (user?.name || "Client")}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {new Date(r.createdAt).toLocaleString("en-GB", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                {r.message}
              </p>
            </div>
          ))}
        </div>

        {/* Reply Box */}
        {selectedTicket.status !== "closed" && (
          <form onSubmit={handleSendReply} className="space-y-3 pt-2">
            <Textarea
              rows={3}
              placeholder={bn ? "এখানে আপনার উত্তর লিখুন..." : "Write your reply here..."}
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              required
            />
            <div className="flex justify-end">
              <Button type="submit" disabled={sendingReply} className="gap-2">
                {sendingReply ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {bn ? "উত্তর পাঠান" : "Post Reply"}
              </Button>
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "সাপোর্ট ডেস্ক" : "Support Desk"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "যেকোনো কারিগরি সহায়তা বা বিলিং জিজ্ঞাসায় আমাদের এক্সপার্ট টিম রয়েছে" : "Submit tickets and get prompt help from our technical specialists"}
          </p>
        </div>
        <Button onClick={() => setCreateOpen(true)} className="gap-2">
          <Plus className="w-4 h-4" />
          {bn ? "নতুন টিকিট খুলুন" : "Open New Ticket"}
        </Button>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "টিকিট খুঁজুন..." : "Search tickets..."}
        filters={[
          {
            key: "status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: bn ? "সকল স্ট্যাটাস" : "All Status", value: "all" },
              { label: bn ? "উন্মুক্ত" : "Open", value: "open" },
              { label: bn ? "উত্তর দেওয়া হয়েছে" : "Answered", value: "answered" },
              { label: bn ? "বন্ধ" : "Closed", value: "closed" },
            ],
          },
        ]}
      />

      {/* New Ticket Modal */}
      {createOpen && (
        <div className="p-5 bg-card border border-border rounded-xl shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              {bn ? "নতুন সাপোর্ট টিকিট তৈরি করুন" : "Create New Support Ticket"}
            </h3>
            <button
              onClick={() => setCreateOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বাতিল" : "Cancel"}
            </button>
          </div>

          <form onSubmit={handleCreateTicket} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-3">
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "বিষয়" : "Subject"}
                </label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={bn ? "সমস্যার সংক্ষিপ্ত বিবরণ" : "Brief description of the problem"}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "বিভাগ" : "Department"}
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing & Invoicing">Billing & Invoicing</option>
                  <option value="Sales & Pre-sales">Sales & Pre-sales</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "অগ্রাধিকার" : "Priority"}
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full h-10 px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "বিস্তারিত বার্তা" : "Detailed Message"}
                </label>
                <Textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={bn ? "কী ধরনের সমস্যায় পড়েছেন বিস্তারিত লিখুন..." : "Provide as much detail as possible..."}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCreateOpen(false)}
              >
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={creating}>
                {creating && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {bn ? "টিকিট জমা দিন" : "Submit Ticket"}
              </Button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="p-12 text-center bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Headphones}
          title={bn ? "কোনো সাপোর্ট টিকিট নেই" : "No tickets found"}
          description={bn ? "আপনার এখনও কোনো সাপোর্ট রিকুয়েস্ট নেই।" : "You don't have any support tickets open."}
          actionLabel={bn ? "নতুন টিকিট তৈরি করুন" : "Open Ticket"}
          onAction={() => setCreateOpen(true)}
        />
      ) : (
        <div className="space-y-3">
          {filtered.map((t) => {
            const st = statusConfig[t.status] || statusConfig.open;
            return (
              <div
                key={t.id}
                onClick={() => openTicketDetail(t)}
                className="p-4 sm:p-5 bg-card border border-border rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:border-primary/40 hover:bg-muted/10 transition-all shadow-xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-foreground">
                        #{t.ticketNumber}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {t.subject}
                      </span>
                      <Badge variant="outline" className={st.color}>
                        {bn ? st.labelBn : st.labelEn}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span>{t.department}</span>
                      <span>•</span>
                      <span>{new Date(t.createdAt).toLocaleDateString("en-GB")}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right text-xs font-semibold text-primary">
                  {bn ? "বিস্তারিত ও উত্তর →" : "View & Reply →"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
