"use client";

import { useEffect, useState, useRef } from "react";
import { MessageSquare, Phone, Shield, Search, Send, User, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface ChatSession {
  id: string;
  visitorName: string;
  visitorEmail?: string;
  visitorPhone?: string;
  status: string;
  createdAt: string;
}

interface ChatMessage {
  id: string;
  chatId: string;
  senderType: "visitor" | "agent" | "bot";
  message: string;
  createdAt: string;
}

export default function CallCenterConsolePage() {
  const [chats, setChats] = useState<ChatSession[]>([]);
  const [selectedChat, setSelectedChat] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [supportPinQuery, setSupportPinQuery] = useState("");
  const [verifiedCustomer, setVerifiedCustomer] = useState<any | null>(null);
  const [pinSearching, setPinSearching] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // SSE Stream Listener
  useEffect(() => {
    if (!selectedChat?.id) return;

    const eventSource = new EventSource(`/api/realtime/stream?chatId=${selectedChat.id}`);

    eventSource.addEventListener("message", (e) => {
      try {
        const newMsg: ChatMessage = JSON.parse(e.data);
        setMessages((prev) => {
          if (prev.some((m) => m.id === newMsg.id)) return prev;
          return [...prev, newMsg];
        });
      } catch (err) {}
    });

    return () => {
      eventSource.close();
    };
  }, [selectedChat?.id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleVerifyPin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supportPinQuery || supportPinQuery.length !== 6) {
      toast.error("Please enter a valid 6-digit Support PIN");
      return;
    }

    setPinSearching(true);
    try {
      const res = await fetch(`/api/support/pin-lookup?pin=${supportPinQuery}`);
      const data = await res.json();
      if (res.ok && data.customer) {
        setVerifiedCustomer(data.customer);
        toast.success(`Verified: ${data.customer.fullName}`);
      } else {
        setVerifiedCustomer(null);
        toast.error("Invalid Support PIN. Identity not verified.");
      }
    } catch (err) {
      toast.error("Error looking up Support PIN");
    } finally {
      setPinSearching(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChat || !inputMessage.trim()) return;

    const msgText = inputMessage.trim();
    setInputMessage("");

    // Optimistic UI
    const tempId = crypto.randomUUID();
    const optimisticMsg: ChatMessage = {
      id: tempId,
      chatId: selectedChat.id,
      senderType: "agent",
      message: msgText,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, optimisticMsg]);

    try {
      await fetch("/api/support/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId: selectedChat.id,
          senderType: "agent",
          message: msgText,
        }),
      });
    } catch (err) {
      toast.error("Failed to deliver message");
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Omnichannel Support Console
        </h1>
        <p className="text-muted-foreground text-sm mt-1">
          Handle live visitor inquiries, verify customer identity via 6-digit Support PIN, and manage softphone calls.
        </p>
      </div>

      {/* Support PIN Verification Card */}
      <div className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Customer Identity Verification
          </h2>
        </div>

        <form onSubmit={handleVerifyPin} className="flex flex-col sm:flex-row gap-3 max-w-xl">
          <input
            type="text"
            maxLength={6}
            value={supportPinQuery}
            onChange={(e) => setSupportPinQuery(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter 6-digit Support PIN (e.g. 739201)"
            className="flex-1 px-4 py-2.5 rounded-xl border border-input bg-background font-mono text-base font-bold tracking-widest focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            disabled={pinSearching}
            className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {pinSearching ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
            Verify PIN
          </button>
        </form>

        {verifiedCustomer && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              <div>
                <div className="text-sm font-bold text-emerald-500">
                  Identity Verified: {verifiedCustomer.fullName}
                </div>
                <div className="text-xs text-muted-foreground">
                  Email: {verifiedCustomer.email} • Phone: {verifiedCustomer.phone || "N/A"}
                </div>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-500">
              Verified Client
            </span>
          </div>
        )}
      </div>

      {/* Live Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[560px] rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm">
        {/* Chat List */}
        <div className="border-r border-border/60 flex flex-col bg-muted/20">
          <div className="p-4 border-b border-border/60">
            <h3 className="font-bold text-sm flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-primary" /> Active Visitor Inquiries
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-border/60 p-2 space-y-1">
            {chats.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground text-xs">
                No active chat sessions waiting. Listening on native SSE stream...
              </div>
            ) : (
              chats.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChat(c)}
                  className={`w-full p-3 rounded-xl text-left transition-colors flex items-center gap-3 ${
                    selectedChat?.id === c.id ? "bg-primary/10 border border-primary/30" : "hover:bg-muted/50"
                  }`}
                >
                  <div className="w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">
                    {c.visitorName.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-xs truncate">{c.visitorName}</div>
                    <div className="text-[11px] text-muted-foreground truncate">{c.visitorEmail || "Guest"}</div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Chat Messages Console */}
        <div className="lg:col-span-2 flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-border/60 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-foreground">{selectedChat.visitorName}</h3>
                  <p className="text-xs text-muted-foreground">{selectedChat.visitorEmail || "Web Visitor"}</p>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                  Live via SSE
                </span>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
                {messages.map((m) => {
                  const isAgent = m.senderType === "agent";
                  return (
                    <div key={m.id} className={`flex ${isAgent ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                          isAgent
                            ? "bg-primary text-primary-foreground rounded-tr-none"
                            : "bg-muted text-foreground rounded-tl-none border border-border/50"
                        }`}
                      >
                        <p>{m.message}</p>
                        <span className="text-[10px] opacity-70 block mt-1 text-right">
                          {new Date(m.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-3 border-t border-border/60 flex items-center gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type an official response..."
                  className="flex-1 px-4 py-2 rounded-xl border border-input bg-background text-xs focus:ring-2 focus:ring-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground text-center p-8 space-y-2">
              <MessageSquare className="w-10 h-10 opacity-30" />
              <p className="text-sm font-medium">Select a visitor conversation to start chatting</p>
              <p className="text-xs opacity-70">Real-time incoming queries will stream directly to this window.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
