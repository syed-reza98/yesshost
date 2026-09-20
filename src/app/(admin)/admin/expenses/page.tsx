"use client";

import { useState, useEffect, useMemo } from "react";
import { Receipt, Plus, Trash2, Loader2, CalendarRange, Wallet, Tag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import DataToolbar from "@/components/DataToolbar";
import EmptyState from "@/components/EmptyState";
import { formatAmount } from "@/lib/formatPrice";

const categories = [
  { value: "server", bn: "সার্ভার ও ডেটাসেন্টার", en: "Servers & Datacenter" },
  { value: "salary", bn: "বেতন ও কর্মী ভাতা", en: "Salaries & Payroll" },
  { value: "marketing", bn: "মার্কেটিং ও বিজ্ঞাপন", en: "Marketing & Ads" },
  { value: "software", bn: "সফটওয়্যার ও লাইসেন্স", en: "Software & Licences" },
  { value: "office", bn: "অফিস খরচ ও ইউটিলিটি", en: "Office & Utilities" },
  { value: "other", bn: "অন্যান্য খরচ", en: "Other Expenses" },
];

const templates = [
  { bn: "অফিস ভাড়া", en: "Office rent", category: "office" },
  { bn: "বিদ্যুৎ বিল", en: "Electricity bill", category: "office" },
  { bn: "ইন্টারনেট লাইন", en: "Internet bandwidth", category: "office" },
  { bn: "মাসিক স্টাফ বেতন", en: "Monthly salary", category: "salary" },
  { bn: "ক্লাউড সার্ভার ভাড়া", en: "Server infrastructure", category: "server" },
  { bn: "ফেসবুক/গুগল বিজ্ঞাপন", en: "Social ads", category: "marketing" },
];

export default function AdminExpensesPage() {
  const { lang } = useLanguage();
  const bn = lang === "bn";
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("server");
  const [amountBdt, setAmountBdt] = useState("");
  const [vendor, setVendor] = useState("");
  const [note, setNote] = useState("");
  const [expenseDate, setExpenseDate] = useState(new Date().toISOString().slice(0, 10));

  const fetchExpenses = async () => {
    try {
      const res = await fetch("/api/admin/expenses");
      if (res.ok) {
        const data = await res.json();
        setExpenses(data.expenses || []);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !category || !amountBdt) return;
    setSaving(true);
    try {
      const res = await fetch("/api/admin/expenses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          amountBdt,
          vendor,
          note,
          expenseDate,
        }),
      });

      if (res.ok) {
        toast.success(bn ? "খরচ রেকর্ড সফলভাবে যুক্ত হয়েছে" : "Expense recorded successfully");
        setShowForm(false);
        setTitle("");
        setAmountBdt("");
        setVendor("");
        setNote("");
        fetchExpenses();
      } else {
        const data = await res.json();
        toast.error(data.error || "Failed to create expense");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm(bn ? "আপনি কি নিশ্চিত এই খরচ রেকর্ড মুছে ফেলতে চান?" : "Delete this expense record?")) return;
    try {
      const res = await fetch("/api/admin/expenses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        toast.success(bn ? "রেকর্ড মুছে ফেলা হয়েছে" : "Expense deleted");
        fetchExpenses();
      }
    } catch (err: any) {
      toast.error(err.message || "Delete failed");
    }
  };

  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, e) => sum + Number(e.amountBdt || 0), 0);
  }, [expenses]);

  const filtered = useMemo(() => {
    return expenses.filter((e) => {
      const matchSearch =
        (e.title || "").toLowerCase().includes(search.toLowerCase()) ||
        (e.vendor || "").toLowerCase().includes(search.toLowerCase());
      const matchCat = categoryFilter === "all" || e.category === categoryFilter;
      return matchSearch && matchCat;
    });
  }, [expenses, search, categoryFilter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {bn ? "অপারেটিং খরচ ও ফিন্যান্স" : "Operating Expenses & Finance"}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {bn ? "সার্ভার, বেতন, অফিস ও অন্যান্য খরচ ব্যবস্থাপনা করুন" : "Manage datacenter, payroll, software, and company operating expenditures"}
          </p>
        </div>

        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="w-4 h-4" />
          {bn ? "নতুন খরচ যুক্ত করুন" : "Record Expense"}
        </Button>
      </div>

      {/* Summary Stat Card */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-card border border-border rounded-xl shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-600">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{bn ? "সর্বমোট অপারেটিং খরচ" : "Total Operating Expenses"}</p>
              <p className="text-xl font-bold font-mono text-foreground mt-0.5">
                ৳{formatAmount(totalExpense, lang)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 bg-card border border-border rounded-xl shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{bn ? "মোট খরচ এন্ট্রি" : "Total Entries"}</p>
              <p className="text-xl font-bold font-mono text-foreground mt-0.5">
                {expenses.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Add Form Modal/Panel */}
      {showForm && (
        <form onSubmit={handleCreate} className="p-6 bg-card border border-border rounded-xl shadow-md space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              {bn ? "নতুন খরচ রেকর্ড" : "Record Operating Expense"}
            </h3>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              ✕ {bn ? "বন্ধ করুন" : "Close"}
            </button>
          </div>

          {/* Quick template buttons */}
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">{bn ? "দ্রুত টেমপ্লেট:" : "Quick Templates:"}</label>
            <div className="flex flex-wrap gap-1.5">
              {templates.map((tpl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setTitle(bn ? tpl.bn : tpl.en);
                    setCategory(tpl.category);
                  }}
                  className="text-xs px-2.5 py-1 rounded-md bg-secondary border border-border text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                >
                  {bn ? tpl.bn : tpl.en}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "খরচের শিরোনাম" : "Title"}</label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Azure East Asia Cloud Server"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "ক্যাটাগরি" : "Category"}</label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {bn ? c.bn : c.en}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "পরিমাণ (টাকা)" : "Amount (BDT)"}</label>
              <Input
                type="number"
                step="1"
                value={amountBdt}
                onChange={(e) => setAmountBdt(e.target.value)}
                placeholder="e.g. 5000"
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "তারিখ" : "Date"}</label>
              <Input
                type="date"
                value={expenseDate}
                onChange={(e) => setExpenseDate(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "ভেন্ডর / প্রতিষ্ঠান (ঐচ্ছিক)" : "Vendor (Optional)"}</label>
              <Input
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                placeholder="e.g. Microsoft Azure / Dhaka Electric"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">{bn ? "নোট (ঐচ্ছিক)" : "Note (Optional)"}</label>
              <Input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="e.g. Invoice #29104"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
              {bn ? "বাতিল" : "Cancel"}
            </Button>
            <Button type="submit" disabled={saving}>
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {bn ? "সংরক্ষণ করুন" : "Save Expense"}
            </Button>
          </div>
        </form>
      )}

      {/* Filter toolbar */}
      <DataToolbar
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder={bn ? "খরচ বা ভেন্ডরের নাম দিয়ে খুঁজুন..." : "Search expense or vendor..."}
        filters={[
          {
            key: "category",
            value: categoryFilter,
            onChange: setCategoryFilter,
            options: [
              { label: bn ? "সকল ক্যাটাগরি" : "All Categories", value: "all" },
              ...categories.map((c) => ({ label: bn ? c.bn : c.en, value: c.value })),
            ],
          },
        ]}
      />

      {loading ? (
        <div className="p-16 text-center bg-card rounded-xl border border-border">
          <Loader2 className="w-8 h-8 animate-spin mx-auto text-primary" />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState
          icon={Receipt}
          title={bn ? "কোনো খরচ রেকর্ড পাওয়া যায়নি" : "No Expense Records Found"}
          description={
            bn
              ? "বর্তমানে কোনো অপারেটিং খরচ অন্তর্ভুক্ত নেই বা ফিল্টারের সাথে মিলছে না।"
              : "No operating expense records match your current filter."
          }
        />
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/40 text-muted-foreground uppercase text-[11px] font-semibold border-b border-border">
                <tr>
                  <th className="px-4 py-3">{bn ? "বিবরণ" : "Description"}</th>
                  <th className="px-4 py-3">{bn ? "ক্যাটাগরি" : "Category"}</th>
                  <th className="px-4 py-3">{bn ? "ভেন্ডর" : "Vendor"}</th>
                  <th className="px-4 py-3">{bn ? "তারিখ" : "Date"}</th>
                  <th className="px-4 py-3">{bn ? "পরিমাণ" : "Amount"}</th>
                  <th className="px-4 py-3 text-right">{bn ? "অ্যাকশন" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((e) => {
                  const cat = categories.find((c) => c.value === e.category);
                  return (
                    <tr key={e.id} className="hover:bg-muted/20 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-semibold text-foreground">{e.title}</div>
                        {e.note && <div className="text-xs text-muted-foreground">{e.note}</div>}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant="outline" className="text-xs">
                          {cat ? (bn ? cat.bn : cat.en) : e.category}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground">
                        {e.vendor || "—"}
                      </td>
                      <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(e.expenseDate).toLocaleDateString("en-GB")}
                      </td>
                      <td className="px-4 py-3 font-mono font-bold text-foreground">
                        ৳{formatAmount(e.amountBdt, lang)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDelete(e.id)}
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-rose-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
