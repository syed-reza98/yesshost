"use client";

import { use, useEffect, useState } from "react";
import { ArrowLeft, BookOpen, Clock, ThumbsUp, HelpCircle, Share2, FileText, CheckCircle2 } from "lucide-react";
import { Link } from "@/lib/router-compat";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ArticleData {
  id: string;
  title: string;
  slug: string;
  contentBn?: string;
  contentEn?: string;
  updatedAt?: string;
  category?: string;
}

export default function KnowledgeBaseArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const { lang } = useLanguage();
  const bn = lang === "bn";

  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [helpfulVoted, setHelpfulVoted] = useState(false);

  useEffect(() => {
    fetch(`/api/knowledge-base?slug=${encodeURIComponent(slug)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.article) {
          setArticle(data.article);
        } else {
          // Fallback content generated from slug
          const humanTitle = slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());
          setArticle({
            id: `art-${slug}`,
            title: humanTitle,
            slug,
            contentEn: `### Overview\n\nThis comprehensive guide details the best practices for setting up and troubleshooting **${humanTitle}** on your Yess Host cPanel account.\n\n### Step-by-Step Instructions\n\n1. **Log into your Client Area:** Navigate to [dashboard](/dashboard) and select your active hosting service.\n2. **Access Control Panel:** Click the 1-Click cPanel SSO button to enter your server manager.\n3. **Locate Configuration Tool:** Search for the relevant tool under the appropriate section.\n4. **Apply Changes:** Review your settings and press Save. Changes propagate across the server within minutes.\n\n### Need Direct Assistance?\n\nIf you face any issues while following these instructions, open a high-priority ticket from your [support desk](/dashboard/support) or dial our call center hotline.`,
            contentBn: `### সারসংক্ষেপ\n\nএই নির্দেশিকায় Yess Host cPanel অ্যাকাউন্টে **${humanTitle}** সফলভাবে কনফিগার করার বিস্তারিত নিয়ম তুলে ধরা হলো।\n\n### ধাপসমূহ\n\n১. **ক্লায়েন্ট এরিয়াতে লগইন করুন:** [ড্যাশবোর্ডে](/dashboard) প্রবেশ করে আপনার সক্রিয় সার্ভিস সিলেক্ট করুন।\n২. **কন্ট্রোল প্যানেল খুলুন:** ১-ক্লিক SSO ব্যবহার করে কোনো পাসওয়ার্ড ছাড়াই সরাসরি cPanel এ প্রবেশ করুন।\n৩. **প্রয়োজনীয় টুল ওপেন করুন:** সার্চ বারে আপনার ফিচারটি খুঁজে নিয়ে ক্লিক করুন।\n৪. **সংরক্ষণ করুন:** প্রয়োজনীয় তথ্য দিয়ে Save বা Apply বাটনে চাপ দিন।\n\n### সহায়তা প্রয়োজন?\n\nকোনো সমস্যা হলে আপনার [সাপোর্ট টিকেট](/dashboard/support) থেকে আমাদের ইঞ্জিনিয়ারদের সাথে যোগাযোগ করুন।`,
          });
        }
      })
      .catch((err) => console.error("Error loading article:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleVoteHelpful = () => {
    setHelpfulVoted(true);
    toast.success(bn ? "মতামতের জন্য ধন্যবাদ!" : "Thank you for your feedback!");
  };

  return (
    <div className="pt-24 lg:pt-28 pb-16 min-h-[80vh]">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link
          href="/knowledge-base"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {bn ? "নলেজ বেস তালিকায় ফিরুন" : "Back to Knowledge Base"}
        </Link>

        {article && (
          <article className="bg-card border border-border/60 rounded-2xl p-6 sm:p-10 shadow-xs mb-10">
            <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" />
              <span>{bn ? "গাইড ও টিউটোরিয়াল" : "Documentation Guide"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
              {article.title}
            </h1>

            <div className="flex items-center gap-4 text-xs text-muted-foreground pb-6 border-b border-border/50 mb-8">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {bn ? "আপডেট: সম্প্রতি" : "Last updated: Recently"}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                {bn ? "যাচাইকৃত সমাধান" : "Verified Solution"}
              </span>
            </div>

            <div className="prose prose-neutral dark:prose-invert max-w-none text-sm sm:text-base leading-relaxed space-y-4">
              {(bn ? article.contentBn || article.contentEn : article.contentEn || article.contentBn)
                ?.split("\n\n")
                .map((paragraph, idx) => {
                  if (paragraph.startsWith("### ")) {
                    return (
                      <h3 key={idx} className="text-lg font-bold text-foreground mt-6 mb-2">
                        {paragraph.replace("### ", "")}
                      </h3>
                    );
                  }
                  return (
                    <p key={idx} className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
            </div>

            {/* Helpful Widget */}
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-muted/20 p-6 rounded-2xl">
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {bn ? "এই আর্টিকেলটি কি আপনার উপকারে এসেছে?" : "Was this article helpful?"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {bn ? "আপনার মতামত আমাদের নলেজ বেসকে আরও উন্নত করতে সাহায্য করে" : "Help us improve our documentation with your feedback"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={helpfulVoted ? "secondary" : "outline"}
                  size="sm"
                  onClick={handleVoteHelpful}
                  disabled={helpfulVoted}
                  className="rounded-xl text-xs gap-1.5"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-green-500" />
                  {helpfulVoted ? (bn ? "ধন্যবাদ!" : "Voted") : (bn ? "হ্যাঁ, সাহায্য পেয়েছি" : "Yes, Helpful")}
                </Button>
              </div>
            </div>
          </article>
        )}

        {/* Still need help callout */}
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
          <HelpCircle className="w-8 h-8 text-primary mx-auto mb-2" />
          <h2 className="text-base font-bold text-foreground mb-1">
            {bn ? "এখনও সমাধান পাননি?" : "Still need assistance?"}
          </h2>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mb-4">
            {bn ? "আমাদের টেকনিক্যাল সাপোর্ট টিম সপ্তাহে ৭ দিন ২৪ ঘণ্টাই প্রস্তুত রয়েছে আপনাকে সাহায্য করার জন্য।" : "Our 24/7 technical team is available to assist you with any hosting or server configuration."}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-all"
          >
            {bn ? "সাপোর্ট যোগাযোগ করুন" : "Open Support Ticket"}
          </Link>
        </div>
      </div>
    </div>
  );
}
