"use client";

import { useEffect, useState } from "react";
import { Server, Activity, CheckCircle2, XCircle, PlusCircle, RefreshCw, Loader2, ShieldCheck, MapPin } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ServerItem {
  id: string;
  name: string;
  hostname: string;
  ipAddress: string;
  whmUsername: string;
  location: string;
  maxAccounts: number;
  activeAccounts: number;
  isActive: boolean;
  status: string;
}

export default function AdminWhmPage() {
  const [serverList, setServerList] = useState<ServerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [testingId, setTestingId] = useState<string | null>(null);

  // Add Server Modal
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    hostname: "",
    ipAddress: "",
    whmUsername: "root",
    whmApiToken: "",
    location: "East Asia",
    maxAccounts: 500,
  });
  const [saving, setSaving] = useState(false);

  const fetchServers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/whm");
      if (res.ok) {
        const data = await res.json();
        setServerList(data.servers || []);
      } else {
        toast.error("Failed to load server list");
      }
    } catch (err) {
      toast.error("Network error loading servers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServers();
  }, []);

  const handleTestConnection = async (serverId: string) => {
    setTestingId(serverId);
    try {
      const res = await fetch("/api/admin/whm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "test", serverId }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Connection verified! cPanel & WHM Version: ${data.version}`);
      } else {
        toast.error(`Connection failed: ${data.reason || data.error}`);
      }
    } catch (err: any) {
      toast.error("Connection test failed: Network error");
    } finally {
      setTestingId(null);
    }
  };

  const handleAddServer = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/admin/whm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", ...form }),
      });

      if (res.ok) {
        toast.success("WHM Server registered successfully!");
        setAddModalOpen(false);
        setForm({
          name: "",
          hostname: "",
          ipAddress: "",
          whmUsername: "root",
          whmApiToken: "",
          location: "East Asia",
          maxAccounts: 500,
        });
        fetchServers();
      } else {
        toast.error("Failed to register server");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            WHM Server Cluster Orchestrator
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your multi-server cPanel nodes, test API tokens over port 2087, and monitor capacity.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchServers}
            className="p-2.5 rounded-xl border border-border/60 hover:bg-muted/50 transition-colors text-muted-foreground"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={() => setAddModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:opacity-90"
          >
            <PlusCircle className="w-4 h-4" />
            Add Server Node
          </button>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-muted-foreground flex flex-col items-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
          <p className="text-sm">Querying WHM cluster nodes...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {serverList.map((server) => {
            const isTesting = testingId === server.id;
            const pct = Math.round((server.activeAccounts / (server.maxAccounts || 500)) * 100);

            return (
              <div
                key={server.id}
                className="p-6 rounded-2xl bg-card border border-border/60 shadow-sm space-y-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-foreground">{server.name}</h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500">
                        <CheckCircle2 className="w-3 h-3" /> Online
                      </span>
                    </div>
                    <p className="text-xs font-mono text-muted-foreground">
                      {server.hostname} ({server.ipAddress})
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Server className="w-5 h-5" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-muted/40 text-xs">
                  <div>
                    <span className="text-muted-foreground block">User</span>
                    <span className="font-mono font-bold text-foreground">{server.whmUsername}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Location</span>
                    <span className="font-medium text-foreground">{server.location}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Port</span>
                    <span className="font-medium text-foreground">2087 (HTTPS)</span>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-muted-foreground">Account Load</span>
                    <span>{server.activeAccounts} / {server.maxAccounts} ({pct}%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${pct > 80 ? "bg-rose-500" : "bg-primary"}`}
                      style={{ width: `${Math.min(pct, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => handleTestConnection(server.id)}
                    disabled={isTesting}
                    className="px-4 py-2 rounded-xl bg-secondary text-secondary-foreground text-xs font-semibold hover:bg-secondary/80 flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {isTesting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Activity className="w-3.5 h-3.5" />}
                    Test Live Connection
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add Server Modal */}
      <Dialog open={addModalOpen} onOpenChange={setAddModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Register New WHM Node</DialogTitle>
            <DialogDescription>
              Connect a cPanel & WHM server node with root API token for automated account provisioning.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddServer} className="space-y-4 py-2">
            <div className="space-y-2">
              <label className="text-xs font-semibold">Server Display Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Cloud Node East Asia"
                className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold">Hostname</label>
                <input
                  type="text"
                  required
                  value={form.hostname}
                  onChange={(e) => setForm({ ...form, hostname: e.target.value })}
                  placeholder="node1.yesshost.com"
                  className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold">IP Address</label>
                <input
                  type="text"
                  required
                  value={form.ipAddress}
                  onChange={(e) => setForm({ ...form, ipAddress: e.target.value })}
                  placeholder="192.0.2.1"
                  className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold">WHM Root API Token</label>
              <input
                type="password"
                required
                value={form.whmApiToken}
                onChange={(e) => setForm({ ...form, whmApiToken: e.target.value })}
                placeholder="INSVHR5CGF22G..."
                className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm font-mono"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-xs font-semibold">Location</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  placeholder="East Asia"
                  className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold">Max Accounts</label>
                <input
                  type="number"
                  value={form.maxAccounts}
                  onChange={(e) => setForm({ ...form, maxAccounts: Number(e.target.value) })}
                  className="w-full px-3.5 py-2 rounded-xl border border-input bg-background text-sm"
                />
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <button
                type="button"
                onClick={() => setAddModalOpen(false)}
                className="px-4 py-2 rounded-xl border text-xs font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-5 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold disabled:opacity-50"
              >
                {saving ? "Registering..." : "Save Server"}
              </button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
