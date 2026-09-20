"use client";

import { useEffect, useState, useMemo } from "react";
import { Headphones, Search, MessageSquare, Send, ChevronLeft, Loader2, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import DataToolbar from "@/components/DataToolbar";

type TicketItem = {
  id: string;
  ticketNumber: string;
  subject: string;
  department: string;
  priority: string;
  status: string;
  createdAt: string;
  userName?: string | null;
  userEmail?: string | null;
};

type ReplyItem = {
  id: string;
  userId: string;
  userName: string;
  message: string;
  isStaff: boolean;
  createdAt: string;
};

const statusConfig: Record<string, { color: string; labelEn: string; labelBn: string }> = {
  open: { color: "bg-amber-500/10 text-amber-600 border-amber-500/20", labelEn: "Open", labelBn: "উন্মুক্ত" },
  answered: { color: "bg-blue-500/10 text-blue-600 border-blue-500/20", labelEn: "Answered", labelBn: "উত্তর দেওয়া হয়েছে" },
  waiting_client: { color: "bg-purple-500/10 text-purple-600 border-purple-500/20", labelEn: "Awaiting Client", labelBn: "গ্রাহকের অপেক্ষায়" },
  closed: { color: "bg-muted text-muted-foreground border-border", labelEn: "Closed", labelBn: "বন্ধ" },
};

export default function AdminTicketsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Ticket detail view
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [sendingReply, setSendingReply] = useState(false);

  const fetchTickets = async () => {
    try {
      const res = await fetch("/api/admin/tickets");
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

  const openTicket = async (ticket: TicketItem) => {
    try {
      const res = await fetch(`/api/admin/tickets?ticketId=${ticket.id}`);
      if (res.ok) {
        const data = await res.json();
        setSelectedTicket(data.ticket);
      }
    } catch (e) {
      console.error("Failed to load ticket detail:", e);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTicket || !replyMessage.trim()) return;
    setSendingReply(true);
    try {
      const res = await fetch("/api/admin/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticketId: selectedTicket.id,
          message: replyMessage.trim(),
        }),
      });
      if (res.ok) {
        setReplyMessage("");
        toast.success(bn ? "উত্তর সফলভাবে পাঠানো হয়েছে" : "Reply posted successfully");
        openTicket(selectedTicket);
        fetchTickets();
      } else {
        const err = await res.json();
        toast.error(err.error || "Failed to send");
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to reply");
    } finally {
      setSendingReply(false);
    }
  };

  const handleUpdateStatus = async (status: string) => {
    if (!selectedTicket) return;
    try {
      const res = await fetch("/api/admin/tickets", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedTicket.id, status }),
      });
      if (res.ok) {
        setSelectedTicket({ ...selectedTicket, status });
        toast.success(bn ? "স্ট্যাটাস আপডেট হয়েছে" : "Status updated");
        fetchTickets();
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to update status");
    }
  };

  const filtered = useMemo(() => {
    return tickets.filter((t) => {
      const matchSearch =
        t.ticketNumber.toLowerCase().includes(search.toLowerCase()) ||
        t.subject.toLowerCase().includes(search.toLowerCase()) ||
        (t.userEmail || "").toLowerCase().includes(search.toLowerCase());
      const matchStatus = statusFilter === "all" || t.status === statusFilter;
      return matchSearch && matchStatus;
    });
  }, [tickets, search, statusFilter]);

  if (selectedTicket) {
    const st = statusConfig[selectedTicket.status] || statusConfig.open;
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedTicket(null)}
            className="gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            {bn ? "সকল টিকিটে ফিরুন" : "Back to Queue"}
          </Button>

          <div className="flex items-center gap-2">
            <select
              value={selectedTicket.status}
              onChange={(e) => handleUpdateStatus(e.target.value)}
              className="h-8 px-2 text-xs font-semibold rounded-md border border-border bg-background"
            >
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="waiting_client">Waiting Client</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-xs space-y-2">
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
          <div className="text-xs text-muted-foreground flex flex-wrap gap-4 pt-1">
            <span>Client: <strong className="text-foreground">{selectedTicket.userName}</strong> ({selectedTicket.userEmail})</span>
            <span>Department: {selectedTicket.department}</span>
            <span>Priority: {selectedTicket.priority}</span>
          </div>
        </div>

        {/* Message Thread */}
        <div className="space-y-4">
          {selectedTicket.replies?.map((r: ReplyItem) => (
            <div
              key={r.id}
              className={`p-4 rounded-xl border max-w-2xl ${
                r.isStaff
                  ? "bg-primary/5 border-primary/20 mr-0 ml-auto"
                  : "bg-secondary/40 border-border ml-0 mr-auto"
              }`}
            >
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-bold text-foreground">
                  {r.isStaff ? "Support Staff (You)" : r.userName}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {new Date(r.createdAt).toLocaleString("en-GB")}
                </span>
              </div>
              <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
                {r.message}
              </p>
            </div>
          ))}
        </div>

        {/* Reply Composer */}
        <form onSubmit={handleSendReply} className="space-y-3 pt-2">
          <Textarea
            rows={4}
            placeholder={bn ? "গ্রাহকের জন্য উত্তর লিখুন..." : "Type response to client..."}
            value={replyMessage}
            onChange={(e) => setReplyMessage(e.target.value)}
            required
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={sendingReply} className="gap-2">
              {sendingReply ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              {bn ? "উত্তর পাঠান" : "Post Staff Reply"}
            </Button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "সাপোর্ট টিকিট কিউ" : "Support Tickets Queue"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "গ্রাহকদের সমস্ত প্রশ্ন ও সমস্যার তাৎক্ষণিক সমাধান দিন" : "Client support desk and ticket resolution management"}
          </p>
        </div>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "টিকিট নম্বর, বিষয় বা গ্রাহকের ইমেইল..." : "Search ticket #, subject, or email..."}
        filters={[
          {
            key: "status",
            value: statusFilter,
            onChange: setStatusFilter,
            options: [
              { label: bn ? "সকল স্ট্যাটাস" : "All Status", value: "all" },
              { label: bn ? "উন্মুক্ত" : "Open", value: "open" },
              { label: bn ? "গ্রাহকের অপেক্ষায়" : "Waiting Client", value: "waiting_client" },
              { label: bn ? "উত্তর দেওয়া হয়েছে" : "Answered", value: "answered" },
              { label: bn ? "বন্ধ" : "Closed", value: "closed" },
            ],
          },
        ]}
      />

      {loading ? (
        <div className="p-16 text-center bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 text-muted-foreground uppercase text-[11px] font-semibold border-b border-border">
                <tr>
                  <th className="px-4 py-3">{bn ? "টিকিট নম্বর ও বিষয়" : "Ticket & Subject"}</th>
                  <th className="px-4 py-3">{bn ? "গ্রাহক" : "Client"}</th>
                  <th className="px-4 py-3">{bn ? "বিভাগ" : "Department"}</th>
                  <th className="px-4 py-3">{bn ? "স্ট্যাটাস" : "Status"}</th>
                  <th className="px-4 py-3">{bn ? "তারিখ" : "Date"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((t) => {
                  const st = statusConfig[t.status] || statusConfig.open;
                  return (
                    <tr
                      key={t.id}
                      onClick={() => openTicket(t)}
                      className="hover:bg-muted/20 transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3">
                        <div className="font-mono text-xs font-bold text-muted-foreground">
                          #{t.ticketNumber}
                        </div>
                        <div className="font-semibold text-foreground">{t.subject}</div>
                      </td>
                      <td className="px-4 py-3 text-xs">
                        <div className="font-medium text-foreground">{t.userName || "Client"}</div>
                        <div className="text-muted-foreground">{t.userEmail}</div>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">{t.department}</td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className={st.color}>
                          {bn ? st.labelBn : st.labelEn}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(t.createdAt).toLocaleDateString("en-GB")}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button size="sm" variant="outline" className="h-8 text-xs">
                          {bn ? "উত্তর দিন" : "Reply"}
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
