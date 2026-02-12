"use client";

import { Bell, Book, Calendar, FileText, GraduationCap, LayoutDashboard, Settings, UserCircle } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle_v2";

export default function StudentDashboard() {
  const announcements = [
    { title: "Mid-Semester Examinations Schedule", date: "Feb 15, 2026", type: "Exam" },
    { title: "Workshop on Sustainable Highway Design", date: "Feb 20, 2026", type: "Workshop" },
  ];

  return (
    <main className="min-h-screen bg-bg-soft flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white flex-col border-r border-secondary/5 sticky top-0 h-screen">
        <div className="p-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <span className="font-heading font-black text-xl text-secondary">KTC Portal</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {[
            { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
            { icon: <Book size={20} />, label: "My Courses" },
            { icon: <Calendar size={20} />, label: "Academic Calendar" },
            { icon: <FileText size={20} />, label: "Results" },
            { icon: <Settings size={20} />, label: "Settings" },
          ].map((item, i) => (
            <button 
              key={i} 
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-secondary/50 hover:bg-primary/5 hover:text-primary'}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-8 border-t border-secondary/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-primary">AA</div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-secondary">Anita Appiah</p>
              <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">Student</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-h-screen">
        {/* Header */}
        <header className="glass sticky top-0 z-30 px-8 py-4 flex items-center justify-between border-b border-white/10">
          <h2 className="text-xl font-bold">Dashboard Overview</h2>
          <div className="flex items-center gap-6">
            <ThemeToggle />
            <button className="relative p-2 text-secondary/40 hover:text-primary transition-colors">
              <Bell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-white"></span>
            </button>
            <UserCircle size={32} className="text-secondary/20" />
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Welcome Card */}
          <div className="bg-primary p-12 rounded-[3.5rem] text-white overflow-hidden relative shadow-2xl shadow-primary/20">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-1/4 translate-y-1/4">
               <GraduationCap size={440} />
            </div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl font-bold">Good morning, Anita!</h1>
              <p className="text-white/60 max-w-sm italic">You have 2 pending assignments and your mid-semester exams start in 3 days. Good luck!</p>
              <button className="bg-accent text-primary px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-white transition-all">
                View Schedule
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-6">
               {[
                 { label: "Current GPA", value: "3.85", color: "text-primary" },
                 { label: "Courses Completed", value: "12/18", color: "text-accent" },
                 { label: "Attendance", value: "95%", color: "text-primary" },
                 { label: "Library Books", value: "3", color: "text-accent" }
               ].map((stat, i) => (
                 <div key={i} className="bg-white p-8 rounded-3xl border border-secondary/5 shadow-sm">
                   <p className="text-sm font-bold uppercase tracking-widest text-secondary/30 mb-2">{stat.label}</p>
                   <p className={`text-4xl font-black ${stat.color}`}>{stat.value}</p>
                 </div>
               ))}
            </div>

            {/* Announcements */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Announcements</h3>
              <div className="space-y-4">
                {announcements.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-secondary/5 shadow-sm flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-bg-soft flex items-center justify-center shrink-0">
                      <FileText size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-secondary text-sm">{item.title}</p>
                      <p className="text-[10px] text-secondary/30 font-bold uppercase mt-1">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
