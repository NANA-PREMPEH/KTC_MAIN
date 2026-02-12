"use client";

import Link from "next/link";
import { GraduationCap, Lock, Mail, ArrowRight, Github } from "lucide-react";

export default function StudentPortalLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-bg-soft">
      <div className="max-w-md w-full glass p-10 rounded-[3rem] shadow-2xl space-y-8 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        
        <div className="text-center space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <GraduationCap className="text-white" size={24} />
            </div>
            <span className="font-heading font-black text-2xl tracking-tighter text-secondary">KTC Portal</span>
          </Link>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-secondary/50 text-sm italic">Access your academic records and e-learning materials.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">Student ID / Email</label>
            <div className="relative">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
              <input 
                type="text" 
                placeholder="stu-12345"
                className="w-full pl-14 pr-6 py-4 rounded-full glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-4">
              <label className="text-xs font-bold uppercase tracking-widest text-secondary/40">Password</label>
              <Link href="#" className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest shadow-sm">Forgot?</Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-14 pr-6 py-4 rounded-full glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all flex items-center justify-center gap-2 group"
          >
            Sign In to Portal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-secondary/10"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-widest text-secondary/30"><span className="bg-bg-soft px-4">Problem Signing in?</span></div>
        </div>

        <div className="text-center">
          <p className="text-sm text-secondary/60 italic">
            Don't have an account? <Link href="/admissions" className="text-primary font-bold hover:underline">Apply for Admission</Link>
          </p>
        </div>

        {/* Support Link */}
        <div className="pt-8 border-t border-secondary/10 flex justify-center gap-8 text-[10px] font-bold uppercase tracking-tighter text-secondary/40">
           <Link href="/contact" className="hover:text-primary transition-colors">Contact Support</Link>
           <Link href="/manual" className="hover:text-primary transition-colors">Portal Guide</Link>
        </div>
      </div>
    </main>
  );
}
