"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, User, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const CHAT_STORAGE_KEY = "yesshost_live_chat_id";

type Message = {
  id: string;
  sender_type: string;
  message: string;
  created_at: string;
};

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [started, setStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const bn = lang === "bn";

  useEffect(() => {
    const savedId = localStorage.getItem(CHAT_STORAGE_KEY);
    if (savedId) {
      setChatId(savedId);
      setStarted(true);
    }
  }, []);

  // Native SSE stream for chat messages
  useEffect(() => {
    if (!chatId) return;

    const eventSource = new EventSource(`/api/realtime/stream?chatId=${chatId}`);

    eventSource.addEventListener("message", (e) => {
      try {
        const msg = JSON.parse(e.data);
        setMessages((prev) => {
          if (prev.some((m) => m.id === msg.id)) return prev;
          return [
            ...prev,
            {
              id: msg.id,
              sender_type: msg.senderType || msg.sender_type,
              message: msg.message,
              created_at: msg.createdAt || msg.created_at,
            },
          ];
        });
      } catch (err) {}
    });

    return () => {
      eventSource.close();
    };
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSending(true);
    try {
      const res = await fetch("/api/support/chat/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await res.json();
      if (data.success && data.chatId) {
        setChatId(data.chatId);
        localStorage.setItem(CHAT_STORAGE_KEY, data.chatId);
        setStarted(true);
      } else {
        toast.error("Failed to start chat session");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setSending(false);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chatId) return;

    const text = input.trim();
    setInput("");

    // Optimistic UI
    const tempId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      {
        id: tempId,
        sender_type: "visitor",
        message: text,
        created_at: new Date().toISOString(),
      },
    ]);

    try {
      await fetch("/api/support/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chatId,
          senderType: "visitor",
          message: text,
        }),
      });
    } catch (err) {
      toast.error("Message delivery failed");
    }
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
          aria-label="Live Chat"
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[480px] bg-card border border-border/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-primary-foreground flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm">{bn ? "লাইভ সাপোর্ট চ্যাট" : "Live Support Chat"}</h3>
                <p className="text-[11px] opacity-80">{bn ? "আমরা সাধারণত সাথে সাথেই উত্তর দিই" : "We typically reply within minutes"}</p>
              </div>
              <button onClick={() => setOpen(false)} className="opacity-80 hover:opacity-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            {!started ? (
              <form onSubmit={handleStartChat} className="p-6 space-y-4 flex-1 flex flex-col justify-center">
                <p className="text-xs text-muted-foreground text-center">
                  {bn ? "আমাদের সাপোর্ট এজেন্টের সাথে কথা বলতে আপনার তথ্য দিন" : "Please introduce yourself to start chatting with an agent"}
                </p>

                <div className="space-y-2">
                  <div className="relative">
                    <User className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={bn ? "আপনার নাম" : "Your Name"}
                      className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-input bg-background"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-4 h-4 text-muted-foreground absolute left-3 top-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={bn ? "ইমেইল এড্রেস (ঐচ্ছিক)" : "Email Address (Optional)"}
                      className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-input bg-background"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  {bn ? "চ্যাট শুরু করুন" : "Start Conversation"}
                </button>
              </form>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-muted/20">
                  {messages.length === 0 ? (
                    <div className="text-center text-xs text-muted-foreground py-8">
                      {bn ? "চ্যাটে স্বাগতম! আপনার প্রশ্নটি লিখুন।" : "Welcome to live chat! How can we assist you today?"}
                    </div>
                  ) : (
                    messages.map((m) => {
                      const isVisitor = m.sender_type === "visitor";
                      return (
                        <div key={m.id} className={`flex ${isVisitor ? "justify-end" : "justify-start"}`}>
                          <div
                            className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed ${
                              isVisitor
                                ? "bg-primary text-primary-foreground rounded-tr-none"
                                : "bg-card text-foreground rounded-tl-none border border-border/60 shadow-sm"
                            }`}
                          >
                            <p>{m.message}</p>
                            <span className="text-[9px] opacity-60 block mt-1 text-right">
                              {new Date(m.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </span>
                          </div>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="p-3 border-t border-border/60 flex items-center gap-2 bg-card">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={bn ? "একটি বার্তা লিখুন..." : "Type your message..."}
                    className="flex-1 px-3 py-2 text-xs rounded-xl border border-input bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-primary text-primary-foreground hover:opacity-90"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
