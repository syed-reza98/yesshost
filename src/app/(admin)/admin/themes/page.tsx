"use client";

import { useEffect, useState } from "react";
import { Palette, Plus, Trash2, Eye, RefreshCw, Loader2, Search, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { formatAmount } from "@/lib/formatPrice";
import { toast } from "sonner";

interface ThemeItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  priceBdt: string;
  previewUrl?: string | null;
  isActive: boolean;
}

export default function AdminThemesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [themes, setThemes] = useState<ThemeItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  // New Theme Form
  const [name, setName] = useState("");
  const [category, setCategory] = useState("business");
  const [priceBdt, setPriceBdt] = useState("1499");
  const [previewUrl, setPreviewUrl] = useState("");

  const fetchThemes = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/themes");
      if (res.ok) {
        const data = await res.json();
        setThemes(data.themes || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemes();
  }, []);

  const handleCreateTheme = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !priceBdt) return;
    setSaving(true);

    try {
      const res = await fetch("/api/themes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          category,
          priceBdt,
          previewUrl: previewUrl.trim() || null,
        }),
      });

      if (res.ok) {
        toast.success(bn ? "থিম সফলভাবে যুক্ত হয়েছে!" : "Theme listed successfully!");
        setDialogOpen(false);
        setName("");
        setPreviewUrl("");
        fetchThemes();
      } else {
        toast.error("Failed to add theme");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteTheme = async (id: string) => {
    if (!confirm(bn ? "আপনি কি এই থিমটি মুছে ফেলতে চান?" : "Are you sure you want to delete this theme?")) return;
    try {
      const res = await fetch("/api/themes", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success(bn ? "থিম মুছে ফেলা হয়েছে" : "Theme deleted");
        fetchThemes();
      }
    } catch (err) {
      toast.error("Failed to delete theme");
    }
  };

  const filtered = themes.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Palette className="w-6 h-6 text-primary" />
            <span>{bn ? "থিম স্টোর ম্যানেজমেন্ট" : "Theme Store & Marketplace Catalog"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "মার্কেটপ্লেসে রেডিমেড ওয়েবসাইট টেমপ্লেট ও মূল্য তালিকা পরিচালনা" : "Review approved WordPress templates, seller submissions, and bundle pricing"}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button size="sm" variant="outline" onClick={fetchThemes} disabled={loading} className="rounded-xl text-xs gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            {bn ? "নতুন থিম যোগ করুন" : "Add New Theme"}
          </Button>
        </div>
      </div>

      <div className="relative max-w-xs">
        <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={bn ? "থিম বা ক্যাটাগরি খুঁজুন..." : "Filter themes..."}
          className="pl-9 h-10 rounded-xl text-xs"
        />
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "থিমের নাম" : "Theme Title"}</th>
                <th className="py-3 px-4">{bn ? "ক্যাটাগরি" : "Category"}</th>
                <th className="py-3 px-4">{bn ? "মূল্য (BDT)" : "Price"}</th>
                <th className="py-3 px-4">{bn ? "প্রিভিউ" : "Live Demo"}</th>
                <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filtered.map((t) => (
                <tr key={t.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-xs text-foreground">
                    {t.name}
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="text-[10px] uppercase font-semibold">
                      {t.category}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-primary text-xs">
                    {formatAmount(t.priceBdt, lang)}
                  </td>
                  <td className="py-4 px-4">
                    {t.previewUrl ? (
                      <a
                        href={t.previewUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Preview
                      </a>
                    ) : (
                      <span className="text-xs text-muted-foreground">Standard sandbox</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteTheme(t.id)}
                      className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-xs text-muted-foreground">
                    {bn ? "কোনো থিম পাওয়া যায়নি" : "No themes found in catalog"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-foreground">
              {bn ? "নতুন থিম যুক্ত করুন" : "Publish Theme Template"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateTheme} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "থিমের নাম" : "Theme Title"}</label>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Apex Corporate Portal"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "ক্যাটাগরি" : "Category"}</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="business">Corporate / Business</option>
                  <option value="ecommerce">E-Commerce Store</option>
                  <option value="portfolio">Portfolio / Creative</option>
                  <option value="blog">Blog / News Portal</option>
                  <option value="agency">Agency</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">{bn ? "মূল্য (BDT)" : "Price (BDT)"}</label>
                <Input
                  type="number"
                  required
                  value={priceBdt}
                  onChange={(e) => setPriceBdt(e.target.value)}
                  placeholder="1499"
                  className="h-10 rounded-xl text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "লাইভ ডেমো লিংক (ঐচ্ছিক)" : "Live Demo URL (Optional)"}</label>
              <Input
                type="url"
                value={previewUrl}
                onChange={(e) => setPreviewUrl(e.target.value)}
                placeholder="https://preview.example.com"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)} className="rounded-xl text-xs">
                {bn ? "বাতিল" : "Cancel"}
              </Button>
              <Button type="submit" disabled={saving} className="rounded-xl text-xs">
                {saving ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                    {bn ? "সংরক্ষণ হচ্ছে..." : "Saving..."}
                  </>
                ) : (
                  bn ? "থিম প্রকাশ করুন" : "Publish Theme"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
