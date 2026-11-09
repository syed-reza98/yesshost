"use client";

import { useEffect, useState } from "react";
import { BookOpen, Plus, Trash2, Search, RefreshCw, FileText, Loader2, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "@/lib/router-compat";
import { toast } from "sonner";

interface ArticleItem {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  contentEn?: string;
  contentBn?: string;
}

export default function AdminKnowledgeBasePage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [articles, setArticles] = useState<ArticleItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");

  // Form state
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("cpanel");
  const [contentEn, setContentEn] = useState("");
  const [contentBn, setContentBn] = useState("");

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/knowledge-base");
      if (res.ok) {
        const data = await res.json();
        setArticles(data.articles || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    setSaving(true);

    try {
      const res = await fetch("/api/knowledge-base", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          categoryId,
          contentEn,
          contentBn,
        }),
      });

      if (res.ok) {
        toast.success(bn ? "আর্টিকেল প্রকাশিত হয়েছে!" : "Article published successfully!");
        setDialogOpen(false);
        setTitle("");
        setContentEn("");
        setContentBn("");
        fetchArticles();
      } else {
        toast.error("Failed to publish article");
      }
    } catch (err) {
      toast.error("Network error");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm(bn ? "আপনি কি এই আর্টিকেলটি মুছে ফেলতে চান?" : "Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch("/api/knowledge-base", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success(bn ? "আর্টিকেল মুছে ফেলা হয়েছে" : "Article removed");
        fetchArticles();
      }
    } catch (err) {
      toast.error("Failed to delete article");
    }
  };

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.categoryId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <span>{bn ? "নলেজ বেস আর্টিকেল ম্যানেজার" : "Knowledge Base Documentation CMS"}</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {bn ? "গ্রাহকদের জন্য টেকনিক্যাল গাইড, cPanel নির্দেশিকা ও সমস্যার সমাধান রচনা করুন" : "Author, edit, and organize public technical documentation and self-help guides"}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start">
          <Button size="sm" variant="outline" onClick={fetchArticles} disabled={loading} className="rounded-xl text-xs gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            {bn ? "রিফ্রেশ" : "Refresh"}
          </Button>
          <Button size="sm" onClick={() => setDialogOpen(true)} className="rounded-xl text-xs gap-1.5 shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            {bn ? "নতুন আর্টিকেল লিখুন" : "Create Article"}
          </Button>
        </div>
      </div>

      <div className="relative max-w-xs">
        <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={bn ? "আর্টিকেল খুঁজুন..." : "Search articles..."}
          className="pl-9 h-10 rounded-xl text-xs"
        />
      </div>

      <div className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/20 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <th className="py-3 px-4">{bn ? "শিরোনাম" : "Title"}</th>
                <th className="py-3 px-4">{bn ? "ক্যাটাগরি" : "Category"}</th>
                <th className="py-3 px-4">{bn ? "স্লাগ (URL)" : "Slug"}</th>
                <th className="py-3 px-4 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/40">
              {filtered.map((a) => (
                <tr key={a.id} className="hover:bg-accent/5 transition-colors">
                  <td className="py-4 px-4 font-bold text-xs text-foreground">
                    {a.title}
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline" className="text-[10px] uppercase font-semibold">
                      {a.categoryId}
                    </Badge>
                  </td>
                  <td className="py-4 px-4 font-mono text-xs text-muted-foreground">
                    <Link
                      href={`/knowledge-base/${a.slug}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <span>/{a.slug}</span>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteArticle(a.id)}
                      className="h-8 w-8 p-0 rounded-lg text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-xs text-muted-foreground">
                    {bn ? "কোনো আর্টিকেল নেই" : "No articles found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-2xl rounded-3xl p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-foreground">
              {bn ? "নতুন নলেজ বেস গাইড তৈরি করুন" : "Publish Knowledge Base Article"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateArticle} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "আর্টিকেলের শিরোনাম" : "Article Title"}</label>
              <Input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. How to install WordPress on cPanel using Softaculous"
                className="h-10 rounded-xl text-xs"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "ক্যাটাগরি" : "Category"}</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full h-10 rounded-xl border border-input bg-background px-3 text-xs text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="cpanel">cPanel & Control Panel</option>
                <option value="domain-dns">Domain & DNS Setup</option>
                <option value="email">Email Accounts & Webmail</option>
                <option value="ssl-security">SSL Certificates & Security</option>
                <option value="billing">Billing, Invoices & Payments</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-foreground">{bn ? "বিষয়বস্তু (ইংরেজি / বাংলা)" : "Article Body Content (Markdown supported)"}</label>
              <Textarea
                rows={6}
                value={contentEn}
                onChange={(e) => setContentEn(e.target.value)}
                placeholder="Write step-by-step instructions with bullet points and bold highlights..."
                className="rounded-xl text-xs font-mono"
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
                  bn ? "আর্টিকেল প্রকাশ করুন" : "Publish Article"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
