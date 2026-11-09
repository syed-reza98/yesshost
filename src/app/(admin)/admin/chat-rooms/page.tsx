"use client";

import { useEffect, useState } from "react";
import { Users, Plus, Trash2, RefreshCw, MessageSquare, ShieldCheck, ToggleLeft, ToggleRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface ChatRoomAdmin {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  onlineCount: number;
  totalMessages: number;
}

const initialRooms: ChatRoomAdmin[] = [
  { id: "room-general", name: "General Tech & Hosting", description: "General web hosting, servers, and tech discussions", isActive: true, onlineCount: 18, totalMessages: 430 },
  { id: "room-wordpress", name: "WordPress & CMS Help", description: "Themes, plugins, optimization, and site design help", isActive: true, onlineCount: 12, totalMessages: 285 },
  { id: "room-developers", name: "Developers & Devops", description: "Next.js, Node, Laravel, Docker, and API integrations", isActive: true, onlineCount: 9, totalMessages: 190 },
  { id: "room-reseller", name: "Reseller Network", description: "Hosting business strategies and WHM reseller growth", isActive: true, onlineCount: 6, totalMessages: 84 },
];

export default function AdminChatRoomsPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [rooms, setRooms] = useState<ChatRoomAdmin[]>(initialRooms);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleToggleRoom = (id: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isActive: !r.isActive } : r))
    );
    toast.success(bn ? "রুম স্ট্যাটাস আপডেট হয়েছে" : "Room status toggled");
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newR: ChatRoomAdmin = {
      id: `room-${Date.now()}`,
      name: name.trim(),
      description: desc.trim() || "Community channel",
      isActive: true,
      onlineCount: 1,
      totalMessages: 0,
    };

    setRooms((prev) => [...prev, newR]);
    setDialogOpen(false);
    setName("");
    setDesc("");
    toast.success(bn ? "নতুন রুম তৈরি হয়েছে!" : "New community room created!");
  };

  const handleDeleteRoom = (id: string) => {
    if (!confirm(bn ? "আপনি কি এই রুমটি মুছে ফেলতে চান?" : "Are you sure you want to delete this room?")) return;
    setRooms((prev) => prev.filter((r) => r.id !== id));
    toast.success(bn ? "রুম মুছে ফেলা হয়েছে" : "Room deleted");
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            <span>{bn ? "কমিউনিটি চ্যাট রুম মডারেশন" : "Community Chat Rooms & Moderation"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "লাইভ চ্যাট রুম তৈরি, সক্রিয়/নিষ্ক্রিয় ও কমিউনিটি চ্যানেল পরিচালনা" : "Manage public peer discussion rooms, active member channels, and moderation"}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            {bn ? "নতুন রুম তৈরি" : "Create Room"}
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "চ্যানেলের নাম" : "Channel Name"}</th>
                <th className="py-3 px-4">{bn ? "বিবরণ" : "Description"}</th>
                <th className="py-3 px-4">{bn ? "অনলাইন সদস্য" : "Active Users"}</th>
                <th className="py-3 px-4">{bn ? "মোট মেসেজ" : "Total Messages"}</th>
                <th className="py-3 px-4">{bn ? "অবস্থা" : "Status"}</th>
                <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {rooms.map((r) => (
                <tr key={r.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-xs text-foreground">
                    {r.name}
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {r.description}
                  </td>
                  <td className="py-4 px-4 font-mono text-xs font-semibold text-primary">
                    {r.onlineCount} online
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                    {r.totalMessages}
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleToggleRoom(r.id)}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Badge
                        className={`text-[10px] cursor-pointer ${
                          r.isActive
                            ? "bg-green-500/10 text-green-600 border-green-500/20"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {r.isActive ? "Active" : "Disabled"}
                      </Badge>
                    </button>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteRoom(r.id)}
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
              {bn ? "নতুন কমিউনিটি রুম তৈরি" : "Create Community Discussion Channel"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateRoom} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "রুমের নাম" : "Room Name"}</label>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Node.js & Docker Hosting"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "সংক্ষিপ্ত বিবরণ" : "Description"}</label>
              <Input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="e.g. Deployment discussions and questions"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="rounded-xl text-xs">
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" className="rounded-xl text-xs">
                {bn ? "রুম প্রকাশ করুন" : "Create Channel"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
