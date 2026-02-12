"use client";

import Footer from "@/components/Footer";
import { getLatestNews, getEvents, NewsItem, EventItem } from "@/lib/cms_v2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ChevronRight, Tag, Bell, Newspaper, CalendarDays } from "lucide-react";
import EventsCalendar from "@/components/EventsCalendar";

type TabType = "news" | "events" | "announcements";

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<TabType>("news");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [events, setEvents] = useState<EventItem[]>([]);

  useEffect(() => {
    getLatestNews().then(setNews);
    getEvents().then(setEvents);
  }, []);

  const blogs = news.filter(n => n.category === "Blog");
  const announcements = news.filter(n => n.category === "Announcements");
  const generalNews = news.filter(n => n.category === "News");

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Information <span className="text-primary italic">Hub</span>.
            </h1>
            <p className="text-xl text-secondary/70 italic leading-relaxed">
              Stay connected with institutional breakthroughs, upcoming workshops, and official updates from KTC.
            </p>
          </div>
          
          {/* Custom Tabs */}
          <div className="glass p-2 rounded-[2rem] flex gap-2">
            {[
              { id: "news", label: "News & Blog", icon: <Newspaper size={18} /> },
              { id: "events", label: "Events", icon: <CalendarDays size={18} /> },
              { id: "announcements", label: "Memos", icon: <Bell size={18} /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "text-secondary/60 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[60vh]">
          {activeTab === "news" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
                        Read Full Story <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "events" && (
             <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <EventsCalendar events={events} />
             </div>
          )}

          {activeTab === "announcements" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {announcements.map((item) => (
                <div key={item.id} className="glass p-8 rounded-[2.5rem] border-l-8 border-accent group hover:bg-white hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="space-y-4 max-w-4xl">
                      <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                        <Bell size={14} /> Official Memo
                      </div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-secondary/60 italic leading-relaxed">{item.snippet}</p>
                    </div>
                    <div className="shrink-0 flex items-center">
                      <Link href={`/news/${item.id}`} className="bg-bg-soft text-secondary px-6 py-3 rounded-2xl font-bold hover:bg-secondary hover:text-white transition-all">
                        View Notice
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
