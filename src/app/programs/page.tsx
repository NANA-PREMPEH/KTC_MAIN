"use client";

import Footer from "@/components/Footer";
import { ChevronRight, Download, GraduationCap } from "lucide-react";
import { getPrograms, ProgramGroup } from "@/lib/cms_v2";
import { useEffect, useState } from "react";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<ProgramGroup[]>([]);

  useEffect(() => {
    getPrograms().then(setPrograms);
  }, []);
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">Explore Our <span className="text-primary italic">Programs</span></h1>
          <p className="text-xl text-secondary/70 italic leading-relaxed">
            From technical vocational training to advanced engineering certifications, KTC offers a comprehensive curriculum tailored for the infrastructure sector.
          </p>
        </div>

        <div className="space-y-20">
          {programs.map((group, idx) => (
            <div key={idx} className="space-y-8">
              <h2 className="text-3xl font-bold flex items-center gap-4">
                <span className="w-12 h-1 bg-primary rounded-full"></span>
                {group.category}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {group.items.map((item: any, i: number) => (
                  <div key={i} className="group glass p-8 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                        <GraduationCap size={24} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-2 leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-secondary/50 text-sm italic mb-6">Duration: {item.duration}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-secondary/5">
                      <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                        Details <ChevronRight size={16} />
                      </button>
                      <button className="p-2 hover:bg-bg-soft rounded-full transition-colors text-secondary/40 hover:text-primary" title="Download Syllabus">
                        <Download size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
