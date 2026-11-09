"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, RefreshCw, MessageCircle, Phone, PhoneOff, PhoneIncoming, Mic, MicOff, User, Clock, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useWebRTCCall } from "@/hooks/useWebRTCCall";

interface ChatSession {
  id: string;
  visitorName: string;
  visitorEmail?: string;
  visitorPhone?: string;
  status: "active" | "closed" | "waiting";
  lastMessage: string;
  updatedAt: string;
}

interface ChatMessage {
  id: string;
  chatId: string;
  sender: "visitor" | "agent";
  message: string;
  timestamp: string;
}

export default function CallCenterLiveChatPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [chats, setChats] = useState<ChatSession[]>([
    {
      id: "chat-1",
      visitorName: "Rakibul Hasan",
      visitorEmail: "rakib@example.com",
      visitorPhone: "+8801712345678",
      status: "active",
      lastMessage: "আমার ডোমেইনের DNS রেকর্ড এখনো আপডেট হয়নি, একটু দেখবেন?",
      updatedAt: "2 mins ago",
    },
    {
      id: "chat-2",
      visitorName: "Tanvir Ahmed",
      visitorEmail: "tanvir.dev@gmail.com",
      status: "waiting",
      lastMessage: "BDIX VPS কি ইনস্ট্যান্ট প্রোভিশন হয়?",
      updatedAt: "10 mins ago",
    },
    {
      id: "chat-3",
      visitorName: "Farhana Sultana",
      visitorEmail: "farhana@corp.bd",
      status: "closed",
      lastMessage: "ধন্যবাদ, সমস্যার সমাধান হয়েছে।",
      updatedAt: "1 hour ago",
    },
  ]);

  const [selectedChatId, setSelectedChatId] = useState<string>("chat-1");
  const [messages, setMessages] = useState<Record<string, ChatMessage[]>>({
    "chat-1": [
      { id: "m1", chatId: "chat-1", sender: "visitor", message: "হ্যালো, Yess Host সাপোর্ট এ কথা বলতে চাচ্ছিলাম।", timestamp: "10:30 AM" },
      { id: "m2", chatId: "chat-1", sender: "agent", message: "শুভ সকাল! Yess Host সাপোর্টে স্বাগতম। আপনাকে কীভাবে সহায়তা করতে পারি?", timestamp: "10:31 AM" },
      { id: "m3", chatId: "chat-1", sender: "visitor", message: "আমার ডোমেইনের DNS রেকর্ড এখনো আপডেট হয়নি, একটু দেখবেন?", timestamp: "10:32 AM" },
    ],
    "chat-2": [
      { id: "m4", chatId: "chat-2", sender: "visitor", message: "BDIX VPS কি ইনস্ট্যান্ট প্রোভিশন হয়?", timestamp: "10:20 AM" },
    ],
  });

  const [reply, setReply] = useState("");
  const msgEnd = useRef<HTMLDivElement>(null);

  const selectedChat = chats.find((c) => c.id === selectedChatId) || chats[0];
  const currentMessages = messages[selectedChatId] || [];

  const {
    callStatus,
    duration,
    isMuted,
    endCall,
    toggleMute,
  } = useWebRTCCall({ chatId: selectedChatId, role: "admin" });

  const formattedDuration = `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, "0")}`;

  useEffect(() => {
    msgEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentMessages]);

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reply.trim()) return;

    const newMsg: ChatMessage = {
      id: crypto.randomUUID(),
      chatId: selectedChatId,
      sender: "agent",
      message: reply.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => ({
      ...prev,
      [selectedChatId]: [...(prev[selectedChatId] || []), newMsg],
    }));

    setReply("");
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-primary" />
            <span>{bn ? "লাইভ চ্যাট ও অডিও কল কনসোল" : "Live Chat & Real-Time Call Desk"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "ওয়েবসাইটের ভিজিটর ও ক্লায়েন্টদের সাথে সরাসরি মেসেজিং ও কল সাপোর্ট" : "Engage visitors in real-time, handle incoming WebRTC audio calls, and resolve queries"}
          </p>
        </div>

        {/* Call Indicator */}
        {callStatus === "connected" && (
          <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 px-4 py-2 rounded-2xl animate-pulse">
            <Phone className="w-4 h-4 text-green-500" />
            <span className="text-xs font-mono font-bold text-green-600">
              Live Call: {formattedDuration}
            </span>
            <Button size="sm" variant="destructive" onClick={endCall} className="h-7 text-xs rounded-lg">
              <PhoneOff className="w-3.5 h-3.5 mr-1" /> End
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-card border border-border/60 rounded-3xl overflow-hidden shadow-xs min-h-[600px]">
        {/* Visitors Chat Queue */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/60 p-4 bg-muted/20 flex flex-col">
          <div className="flex items-center justify-between mb-3 px-1">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
              {bn ? "সক্রিয় চ্যাট তালিকা" : "Active Inquiries"}
            </h2>
            <Badge variant="secondary" className="text-[10px]">
              {chats.length} conversations
            </Badge>
          </div>

          <div className="space-y-2 flex-1 overflow-y-auto">
            {chats.map((chat) => {
              const isSelected = chat.id === selectedChatId;
              return (
                <button
                  key={chat.id}
                  onClick={() => setSelectedChatId(chat.id)}
                  className={`w-full text-left p-3.5 rounded-2xl transition-all border ${
                    isSelected
                      ? "bg-card border-primary/50 shadow-xs"
                      : "bg-card/50 border-border/40 hover:bg-card text-foreground"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-xs text-foreground truncate">{chat.visitorName}</span>
                    <span className="text-[10px] text-muted-foreground">{chat.updatedAt}</span>
                  </div>
                  <p className="text-xs text-muted-foreground truncate mb-2">{chat.lastMessage}</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${
                        chat.status === "active"
                          ? "bg-green-500/10 text-green-600"
                          : chat.status === "waiting"
                          ? "bg-amber-500/10 text-amber-600"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {chat.status}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Message Thread & Call Area */}
        <div className="lg:col-span-8 flex flex-col h-[600px]">
          {/* Top Bar */}
          <div className="p-4 border-b border-border/60 flex items-center justify-between bg-card shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {selectedChat.visitorName.charAt(0)}
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{selectedChat.visitorName}</h3>
                <p className="text-xs text-muted-foreground">
                  {selectedChat.visitorEmail || "Direct Web Visitor"} {selectedChat.visitorPhone ? `• ${selectedChat.visitorPhone}` : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast.info(bn ? "ভয়েস কল প্রস্তুত হচ্ছে..." : "Connecting WebRTC voice channel...")}
                className="rounded-xl text-xs gap-1.5 h-9"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="hidden sm:inline">{bn ? "অডিও কল" : "Call Visitor"}</span>
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {currentMessages.map((msg) => {
              const isAgent = msg.sender === "agent";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAgent ? "items-end" : "items-start"}`}
                >
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] text-muted-foreground">
                    <span>{isAgent ? (bn ? "সাপোর্ট এজেন্ট" : "You (Support)") : selectedChat.visitorName}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>
                  <div
                    className={`max-w-md p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      isAgent
                        ? "bg-primary text-primary-foreground rounded-br-none shadow-xs"
                        : "bg-muted text-foreground rounded-bl-none border border-border/40"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              );
            })}
            <div ref={msgEnd} />
          </div>

          {/* Reply Bar */}
          <div className="p-4 border-t border-border/60 bg-card shrink-0">
            <form onSubmit={handleSendReply} className="flex gap-2">
              <Input
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder={bn ? "উত্তর লিখুন..." : "Type reply to visitor..."}
                className="flex-1 rounded-xl text-xs h-11"
              />
              <Button type="submit" disabled={!reply.trim()} className="rounded-xl text-xs px-5 h-11">
                <Send className="w-4 h-4 mr-1.5" />
                {bn ? "পাঠান" : "Send Reply"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
