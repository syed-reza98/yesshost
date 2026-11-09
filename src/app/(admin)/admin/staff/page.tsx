"use client";

import { useEffect, useState } from "react";
import { UserCog, Users, Plus, Shield, KeyRound, Trash2, RefreshCw, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

interface StaffMember {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions?: string[];
  createdAt: string;
}

export default function AdminStaffPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [staffList, setStaffList] = useState<StaffMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // New staff form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("call_center");

  const fetchStaff = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/staff");
      if (res.ok) {
        const data = await res.json();
        setStaffList(data.staff || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) return;
    setSaving(true);

    try {
      const res = await fetch("/api/admin/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "add_staff",
          name: name.trim(),
          email: email.trim(),
          password,
          role,
          permissions: ["manage_tickets", "live_chat", "answer_calls"],
        }),
      });

      if (res.ok) {
        toast.success(bn ? "নতুন স্টাফ সদস্য সফলভাবে যুক্ত হয়েছে!" : "Staff member onboarded successfully!");
        setDialogOpen(false);
        setName("");
        setEmail("");
        setPassword("");
        fetchStaff();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to add staff member");
      }
    } catch (err) {
      toast.error("Network error adding staff member");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <UserCog className="w-6 h-6 text-primary" />
            <span>{bn ? "স্টাফ ও রোল ম্যানেজমেন্ট" : "Staff & Access Control"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "সাপোর্ট এজেন্ট, মডারেটর ও অ্যাডমিনদের অ্যাকাউন্ট এবং পারমিশন ব্যবস্থাপনা" : "Configure call center agents, escalation staff, and permission matrices"}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button size="sm" variant="outline" onClick={fetchStaff} disabled={loading} className="rounded-xl text-xs gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            {bn ? "নতুন স্টাফ যুক্ত করুন" : "Add Staff Member"}
          </Button>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "স্টাফ সদস্য" : "Staff Member"}</th>
                <th className="py-3 px-4">{bn ? "ইমেইল" : "Email"}</th>
                <th className="py-3 px-4">{bn ? "রোল" : "Role"}</th>
                <th className="py-3 px-4">{bn ? "অনুমোদিত পারমিশন" : "Permissions"}</th>
                <th className="py-3 px-4">{bn ? "যোগদানের তারিখ" : "Joined"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {staffList.map((staff) => (
                <tr key={staff.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {staff.name.charAt(0)}
                      </div>
                      <span className="font-bold text-xs text-foreground">{staff.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                    {staff.email}
                  </td>
                  <td className="py-4 px-4">
                    <Badge
                      className={`text-[10px] uppercase font-bold ${
                        staff.role === "admin"
                          ? "bg-destructive/10 text-destructive border-destructive/20"
                          : "bg-primary/10 text-primary border-primary/20"
                      }`}
                    >
                      {staff.role}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {staff.permissions && staff.permissions.length > 0 ? (
                        staff.permissions.map((p, i) => (
                          <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-muted text-muted-foreground">
                            {p.replace(/_/g, " ")}
                          </span>
                        ))
                      ) : (
                        <span className="text-[10px] text-muted-foreground">Standard console access</span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-muted-foreground">
                    {new Date(staff.createdAt).toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" })}
                  </td>
                </tr>
              ))}
              {staffList.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-xs text-muted-foreground">
                    {bn ? "কোনো স্টাফ পাওয়া যায়নি" : "No staff accounts found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-foreground">
              {bn ? "নতুন স্টাফ অ্যাকাউন্ট তৈরি" : "Create New Staff Account"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAddStaff} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "পূর্ণ নাম" : "Full Name"}</label>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Imran Hossain"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "ইমেইল" : "Email Address"}</label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="imran@yesshost.com"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "অস্থায়ী পাসওয়ার্ড" : "Temporary Password"}</label>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min 8 characters"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "রোল" : "Assigned Role"}</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="call_center">Support Agent (Call Center & Tickets)</option>
                <option value="moderator">Billing & Order Moderator</option>
                <option value="admin">Full Administrator</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="rounded-xl text-xs">
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={saving} className="rounded-xl text-xs">
                {saving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    {bn ? "তৈরি হচ্ছে..." : "Creating..."}
                  </>
                ) : (
                  bn ? "অ্যাকাউন্ট তৈরি করুন" : "Create Account"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
