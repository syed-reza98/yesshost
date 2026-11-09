"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, Loader2, Users, Lock, CheckCircle, Clock, ArrowLeft, Smile, Sparkles } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

type Room = {
  id: string;
  name: string;
  description: string | null;
  isActive: boolean;
  onlineCount?: number;
};

type RoomMessage = {
  id: string;
  roomId: string;
  userName: string;
  userId: string;
  message: string;
  createdAt: string;
};

const defaultRooms: Room[] = [
  { id: "room-general", name: "General Tech & Hosting", description: "General web hosting, servers, and tech discussions", isActive: true, onlineCount: 18 },
  { id: "room-wordpress", name: "WordPress & CMS Help", description: "Themes, plugins, optimization, and site design help", isActive: true, onlineCount: 12 },
  { id: "room-developers", name: "Developers & Devops", description: "Next.js, Node, Laravel, Docker, and API integrations", isActive: true, onlineCount: 9 },
  { id: "room-reseller", name: "Reseller Network", description: "Hosting business strategies and WHM reseller growth", isActive: true, onlineCount: 6 },
];

export default function ChatRoomsPage() {
  const { user } = useAuth();
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [rooms, setRooms] = useState<Room[]>(defaultRooms);
  const [selectedRoom, setSelectedRoom] = useState<Room>(defaultRooms[0]);
  const [messages, setMessages] = useState<RoomMessage[]>([
    {
      id: "msg-1",
      roomId: "room-general",
      userName: "YessHost Bot",
      userId: "bot",
      message: bn ? "স্বাগতম Yess Host কমিউনিটি চ্যাটরুমে! অনুগ্রহ করে ভদ্রতা বজায় রাখুন।" : "Welcome to the Yess Host community rooms! Feel free to ask questions and collaborate.",
      createdAt: new Date(Date.now() - 3600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: "msg-2",
      roomId: "room-general",
      userName: "Hasan R.",
      userId: "user-2",
      message: bn ? "LiteSpeed ওয়েব সার্ভারের ক্যাশিং কীভাবে কনফিগার করব?" : "Does anyone have best practices for LiteSpeed cache configuration?",
      createdAt: new Date(Date.now() - 1800000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
    {
      id: "msg-3",
      roomId: "room-general",
      userName: "Support Engineer",
      userId: "staff",
      message: bn ? "cPanel থেকে LSCache প্লাগইন অ্যাক্টিভ করে 'Recommended' প্রিসেট সেট করতে পারেন।" : "Install the LSCache plugin in WordPress and apply the standard Recommended preset for instant speedup.",
      createdAt: new Date(Date.now() - 600000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (!user) {
      toast.error(bn ? "চ্যাট করতে দয়া করে আগে লগইন করুন" : "Please log in to participate in community discussions");
      return;
    }

    setSending(true);
    const newMsg: RoomMessage = {
      id: crypto.randomUUID(),
      roomId: selectedRoom.id,
      userName: user.name || (bn ? "ব্যবহারকারী" : "Client"),
      userId: user.id || "current-user",
      message: input.trim(),
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setSending(false);
  };

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-[85vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-md bg-primary/10 text-primary">
                <MessageCircle className="w-5 h-5" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                {bn ? "লাইভ কমিউনিটি চ্যাট রুম" : "Community Live Chat Rooms"}
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {bn ? "হোস্টিং ব্যবহারকারী, ডেভেলপার এবং সাপোর্ট টিমের সাথে উন্মুক্ত প্রযুক্তি আলোচনা" : "Real-time discussions with fellow webmasters, developers, and hosting staff"}
            </p>
          </div>

          {!user && (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all self-start"
            >
              <Users className="w-4 h-4" />
              {bn ? "মেসেজ দিতে লগইন করুন" : "Log In to Participate"}
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm min-h-[580px]">
          {/* Rooms Sidebar */}
          <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-border/60 p-4 bg-muted/20">
            <h2 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
              {bn ? "রুম তালিকা" : "Available Rooms"}
            </h2>
            <div className="space-y-1.5">
              {rooms.map((room) => {
                const isSelected = room.id === selectedRoom.id;
                return (
                  <button
                    key={room.id}
                    onClick={() => setSelectedRoom(room)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "hover:bg-accent/10 text-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold truncate">{room.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                        {room.onlineCount} online
                      </span>
                    </div>
                    <p className={`text-xs truncate ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                      {room.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Chat Conversation Area */}
          <div className="lg:col-span-3 flex flex-col h-[580px]">
            {/* Header */}
            <div className="p-4 border-b border-border/60 flex items-center justify-between bg-card shrink-0">
              <div>
                <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span>{selectedRoom.name}</span>
                  <Badge variant="outline" className="text-[10px] font-normal border-green-500/30 text-green-600 bg-green-500/10">
                    Active Channel
                  </Badge>
                </h3>
                <p className="text-xs text-muted-foreground">{selectedRoom.description}</p>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => {
                const isMe = user?.id && msg.userId === user.id;
                const isStaff = msg.userId === "staff" || msg.userId === "bot";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-muted-foreground">
                      <span className={`font-semibold ${isStaff ? "text-primary" : "text-foreground"}`}>
                        {msg.userName}
                      </span>
                      {isStaff && (
                        <span className="px-1.5 py-0.2 rounded-sm text-[9px] bg-primary/10 text-primary font-bold">
                          STAFF
                        </span>
                      )}
                      <span>{msg.createdAt}</span>
                    </div>
                    <div
                      className={`max-w-md p-3 rounded-2xl text-sm leading-relaxed ${
                        isMe
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : isStaff
                          ? "bg-primary/10 text-foreground border border-primary/20 rounded-bl-none"
                          : "bg-muted text-foreground rounded-bl-none"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                );
              })}
              <div ref={scrollRef} />
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-border/60 bg-card shrink-0">
              {user ? (
                <form onSubmit={handleSend} className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={bn ? "আপনার মেসেজ লিখুন..." : "Type your message..."}
                    className="flex-1 rounded-xl"
                  />
                  <Button type="submit" disabled={sending || !input.trim()} className="rounded-xl">
                    <Send className="w-4 h-4 mr-1.5" />
                    {bn ? "পাঠান" : "Send"}
                  </Button>
                </form>
              ) : (
                <div className="text-center py-2 text-xs text-muted-foreground">
                  {bn ? "আলোচনায় অংশ নিতে " : "To send a message, please "}
                  <Link href="/login" className="text-primary font-semibold hover:underline">
                    {bn ? "লগইন করুন" : "Sign In"}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
