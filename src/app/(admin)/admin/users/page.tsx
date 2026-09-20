"use client";

import { useEffect, useState, useMemo } from "react";
import { Users, Search, Shield, ShieldAlert, KeyRound, Wallet, Plus, Edit2, Loader2, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import DataToolbar from "@/components/DataToolbar";

type UserItem = {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string | null;
  company?: string | null;
  supportPin?: string | null;
  createdAt: string;
};

export default function AdminUsersPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Wallet adjustment modal
  const [selectedUser, setSelectedUser] = useState<UserItem | null>(null);
  const [creditAmount, setCreditAmount] = useState("500");
  const [creditReason, setCreditReason] = useState("");
  const [adjusting, setAdjusting] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/admin/users");
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users || []);
      }
    } catch (err) {
      console.error("Failed to load users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSetRole = async (userId: string, newRole: string) => {
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "set_role", userId, role: newRole }),
      });
      if (res.ok) {
        toast.success(bn ? "ইউজার রোল পরিবর্তিত হয়েছে" : "User role updated successfully");
        fetchUsers();
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to update role");
    }
  };

  const handleCreditWallet = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser || !creditAmount) return;
    setAdjusting(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "credit_wallet",
          userId: selectedUser.id,
          creditAmount,
          reason: creditReason,
        }),
      });
      if (res.ok) {
        toast.success(bn ? "ওয়ালেট ব্যালেন্স সফলভাবে যোগ হয়েছে" : "Wallet credited successfully");
        setSelectedUser(null);
        setCreditReason("");
      }
    } catch (err: any) {
      toast.error(err.message || "Credit failed");
    } finally {
      setAdjusting(false);
    }
  };

  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchSearch =
        (u.name || "").toLowerCase().includes(search.toLowerCase()) ||
        (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
        (u.phone || "").toLowerCase().includes(search.toLowerCase());
      const matchRole = roleFilter === "all" || u.role === roleFilter;
      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "ব্যবহারকারী ব্যবস্থাপনা" : "User Management"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "সকল নিবন্ধিত গ্রাহক ও স্টাফ সদস্যদের পরিচালনা করুন" : "Manage all registered customers, roles, and support credentials"}
          </p>
        </div>
      </div>

      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "নাম, ইমেইল অথবা ফোন দিয়ে খুঁজুন..." : "Search name, email, or phone..."}
        filters={[
          {
            key: "role",
            value: roleFilter,
            onChange: setRoleFilter,
            options: [
              { label: bn ? "সকল রোল" : "All Roles", value: "all" },
              { label: bn ? "অ্যাডমিন" : "Admin", value: "admin" },
              { label: bn ? "কল সেন্টার" : "Call Center", value: "call_center" },
              { label: bn ? "ইউজার" : "User", value: "user" },
            ],
          },
        ]}
      />

      {/* Credit Wallet Modal */}
      {selectedUser && (
        <div className="p-5 bg-card border border-border rounded-xl shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              {bn ? "ওয়ালেট এডজাস্টমেন্ট: " : "Credit User Wallet: "}
              <span className="text-primary">{selectedUser.name || selectedUser.email}</span>
            </h3>
            <button
              onClick={() => setSelectedUser(null)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বাতিল" : "Cancel"}
            </button>
          </div>

          <form onSubmit={handleCreditWallet} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "পরিমাণ (টাকা)" : "Amount (BDT)"}
                </label>
                <Input
                  type="number"
                  min="10"
                  step="10"
                  value={creditAmount}
                  onChange={(e) => setCreditAmount(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">
                  {bn ? "কারণ / নোট" : "Reason / Administrative Note"}
                </label>
                <Input
                  value={creditReason}
                  onChange={(e) => setCreditReason(e.target.value)}
                  placeholder="e.g. Promotional credit / refund"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <Button type="button" variant="outline" onClick={() => setSelectedUser(null)}>
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={adjusting}>
                {adjusting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {bn ? "ব্যালেন্স যোগ করুন" : "Add Balance"}
              </Button>
            </div>
          </form>
        </div>
      )}

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
                  <th className="px-4 py-3">{bn ? "ব্যবহারকারী" : "User"}</th>
                  <th className="px-4 py-3">{bn ? "যোগাযোগ" : "Contact"}</th>
                  <th className="px-4 py-3">{bn ? "রোল" : "Role"}</th>
                  <th className="px-4 py-3">{bn ? "সাপোর্ট পিন" : "Support PIN"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "অ্যাকশন" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((u) => (
                  <tr key={u.id} className="hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-foreground">{u.name || "Unnamed"}</div>
                      <div className="text-xs text-muted-foreground font-mono">{u.email}</div>
                    </td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">
                      {u.phone || "—"}
                      {u.company && <div className="text-[11px]">{u.company}</div>}
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={u.role}
                        onChange={(e) => handleSetRole(u.id, e.target.value)}
                        className="h-8 px-2 text-xs font-semibold rounded-md border border-border bg-background"
                      >
                        <option value="user">User</option>
                        <option value="call_center">Call Center</option>
                        <option value="admin">Admin</option>
                      </select>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs font-bold text-foreground">
                      {u.supportPin || "—"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedUser(u)}
                        className="gap-1.5 h-8 text-xs"
                      >
                        <Wallet className="w-3.5 h-3.5" />
                        {bn ? "ওয়ালেট ক্রেডিট" : "Credit"}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
