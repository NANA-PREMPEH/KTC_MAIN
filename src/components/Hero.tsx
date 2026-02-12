"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary font-bold text-sm animate-in fade-in slide-in-from-bottom-2">
            <CheckCircle size={16} />
            Accredited Institutional Excellence
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Empowering the Next Generation of <span className="text-primary italic">Professionals</span>
          </h1>
          
          <p className="text-lg text-secondary/70 leading-relaxed max-w-lg">
            Koforidua Training Center (KTC) provides world-class technical education and consultancy services in Ghana's transport and infrastructure sector.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:bg-primary-dark hover:scale-105 transition-all flex items-center gap-2 group"
            >
              Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 glass rounded-full font-bold flex items-center gap-2 hover:bg-white hover:shadow-lg transition-all active:scale-95">
              <Play size={20} className="text-primary" fill="currentColor" /> Watch Intro
            </button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-secondary/10">
            <div>
              <p className="text-2xl font-black text-primary">25+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50">Years Legacy</p>
            </div>
            <div className="w-px h-10 bg-secondary/10"></div>
            <div>
              <p className="text-2xl font-black text-primary">10k+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50">Graduates</p>
            </div>
            <div className="w-px h-10 bg-secondary/10"></div>
            <div>
              <p className="text-2xl font-black text-primary">50+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-secondary/50">Partners</p>
            </div>
          </div>
        </div>

        <div className="relative order-first md:order-last">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
            <div className="aspect-[4/5] bg-gray-200 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl shadow-2xl max-w-[240px] animate-float z-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <p className="font-bold text-sm">Next Intake: Aug 2026</p>
            </div>
            <p className="text-xs text-secondary/60 italic leading-relaxed">
              "Joining KTC was the best career decision I ever made." - Anita A.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
