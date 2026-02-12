"use client";

import Footer from "@/components/Footer";
import { getLatestNews, NewsItem } from "@/lib/cms_v2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ChevronRight, Tag } from "lucide-react";

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    getLatestNews().then(setNews);
  }, []);

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Institutional <span className="text-primary italic">News</span>.
          </h1>
          <p className="text-xl text-secondary/70 italic leading-relaxed">
            The latest updates, press releases, and announcements from Koforidua Training Center.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {news.map((item) => (
            <div key={item.id} className="group glass rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2">
                    <Tag size={12} /> {item.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-secondary/40 text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed line-clamp-3 italic">
                  {item.snippet}
                </p>
                <div className="pt-4">
                  <Link href={`/news/${item.id}`} className="font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                    Read Story <ChevronRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
