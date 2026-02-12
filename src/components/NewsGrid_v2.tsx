"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

import { getLatestNews, NewsItem } from "@/lib/cms_v2";
import { useEffect, useState } from "react";

export default function NewsGrid() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    getLatestNews().then(setNewsItems);
  }, []);
  return (
    <section className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight text-secondary">Institutional Updates</h2>
            <div className="h-1.5 w-24 bg-accent rounded-full mb-6"></div>
            <p className="text-secondary/60 max-w-xl text-lg italic">
              Stay informed about the latest developments, news, and events at Koforidua Training Center.
            </p>
          </div>
          <Link 
            href="/news" 
            className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all shrink-0"
          >
            View All News <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <Link 
              href={`/news/${news.id}`} 
              key={idx}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-secondary/5 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    {news.category}
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-2 text-secondary/40 text-xs font-bold uppercase tracking-widest">
                  <Calendar size={14} />
                  {news.date}
                </div>
                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                  {news.title}
                </h3>
                <p className="text-secondary/60 text-sm leading-relaxed line-clamp-2 italic">
                  Read more about {news.title.toLowerCase()} and how it impacts our community.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
