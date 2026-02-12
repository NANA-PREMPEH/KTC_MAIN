"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getLatestNews, NewsItem } from "@/lib/cms_v2";
import Footer from "@/components/Footer";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";
import Link from "next/link";

export default function NewsDetailPage() {
  const { id } = useParams();
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLatestNews().then((news: NewsItem[]) => {
      const found = news.find((n: NewsItem) => n.id === id);
      setArticle(found || null);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="min-h-screen pt-32 text-center font-bold">Loading article...</div>;
  if (!article) return <div className="min-h-screen pt-32 text-center font-bold">Article not found.</div>;

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-4xl mx-auto px-6 mb-24">
        <Link href="/news" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Back to News
        </Link>
        
        <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute top-8 left-8">
            <span className="px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
              {article.category}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-secondary/40 text-sm font-bold uppercase tracking-widest">
              <Calendar size={18} />
              {article.date}
            </div>
            <button className="p-3 glass rounded-full text-primary hover:bg-primary hover:text-white transition-all">
              <Share2 size={20} />
            </button>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">{article.title}</h1>
          
          <div className="prose prose-lg max-w-none text-secondary/70 italic leading-relaxed space-y-6">
            <p className="text-xl text-secondary font-medium not-italic">{article.snippet}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. In today's rapidly changing infrastructure landscape, Koforidua Training Center remains at the forefront of technical excellence and innovation.
            </p>
            <blockquote className="border-l-4 border-primary pl-8 py-4 bg-bg-soft rounded-r-3xl my-12">
              <p className="text-2xl font-bold not-italic text-secondary">"KTC is not just a training center; it is a hub for industrial transformation in West Africa."</p>
              <footer className="mt-4 text-primary font-bold">— Director General, Ing. Samuel Appiah</footer>
            </blockquote>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
