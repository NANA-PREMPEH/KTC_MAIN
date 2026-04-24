"use client";

import Footer from "@/components/Footer";
import { 
  History, 
  Target, 
  Compass, 
  Users, 
  UserCheck, 
  ShieldCheck, 
  FileText, 
  Download,
  GraduationCap
} from "lucide-react";
import Link from "next/link";

const historyEvents = [
  { year: "1999", title: "Foundation", description: "KTC was established to address the critical need for technical expertise in Ghana's road sector." },
  { year: "2005", title: "Regional Expansion", description: "Opened coordination offices in Kumasi and Takoradi to broaden institutional reach." },
  { year: "2012", title: "Global Certification", description: "Achieved international accreditation for our Highway Engineering curriculum." },
  { year: "2018", title: "E-Learning Era", description: "Launched the first comprehensive digital training portal for remote technical learning." },
  { year: "2024", title: "Modernization", description: "Redesigning our institutional footprint to meet 2030 infrastructure goals." },
];

const leadership = [
  { name: "Ing. Samuel Appiah", role: "Director General", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Mrs. Araba Mansa", role: "Director of Academics", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Dr. Kwesi Boateng", role: "Head of Research", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Ing. Faustina Osei", role: "Senior Consultant", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" },
];

const affiliations = [
  { name: "Ministry of Roads & Highways", type: "Parent Body" },
  { name: "International Road Federation", type: "Global Partner" },
  { name: "KNUST Engineering Dept", type: "Academic Affiliate" },
  { name: "Ghana Institution of Engineering", type: "Professional Body" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            Our <span className="text-primary italic">Heritage</span>,<br /> Your Future.
          </h1>
          <p className="text-2xl text-secondary/70 italic leading-relaxed border-l-8 border-primary pl-8">
            The Koforidua Training Center (KTC) is the flagship institution of the Ministry of Roads and Highways, pioneering engineering excellence for over two decades.
          </p>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-24 bg-secondary overflow-hidden relative">
        {/* Background Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
          <span className="text-[10vw] font-black text-white leading-none uppercase">Institutional Journey</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-6 text-accent">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <History size={28} />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-tighter">Our History</h2>
            </div>
            <p className="text-lg text-white/40 italic max-w-md">
              Tracing the milestones that shaped the Ministry of Roads and Highways Training Centre into a regional powerhouse.
            </p>
          </div>
        </div>
        
        <div className="relative z-10">
          {/* Main Timeline Line with Glow */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 shadow-[0_0_15px_rgba(255,215,0,0.1)]"></div>
          
          <div className="flex gap-12 overflow-x-auto px-12 pb-16 no-scrollbar scroll-smooth">
            {historyEvents.map((event, i) => (
              <div key={i} className="min-w-[320px] relative group pt-16">
                {/* Year Circle with Hover Glow */}
                <div className="absolute top-0 left-12 w-8 h-8 rounded-full bg-accent border-[4px] border-secondary -translate-y-1/2 z-20 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-500 cursor-pointer flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                </div>

                <div className="glass p-8 rounded-[2.5rem] border-white/10 hover:border-accent/50 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 group-hover:-translate-y-1">
                  <span className="text-3xl font-black text-accent mb-4 block leading-none opacity-40 group-hover:opacity-100 transition-opacity">{event.year}</span>
                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{event.title}</h3>
                  <p className="text-sm text-white/60 italic leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 glass rounded-[3rem] border-primary/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full group-hover:scale-150 transition-transform"></div>
              <Target size={48} className="text-primary mb-8" />
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-secondary/60 leading-relaxed italic">
                "To remain the premier center of excellence for technical training and consultancy in transport infrastructure within the West African sub-region."
              </p>
            </div>
            
            <div className="p-12 glass rounded-[3rem] border-accent/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/5 rounded-full group-hover:scale-150 transition-transform"></div>
              <Compass size={48} className="text-accent mb-8" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-secondary/60 leading-relaxed italic">
                "To provide world-class technical skills, sustainable project management, and innovative road engineering solutions that drive national development."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Organizational Structure</h2>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Governing Board", icon: <ShieldCheck size={24} /> },
              { label: "Management Team", icon: <Users size={24} /> },
              { label: "Academic Board", icon: <GraduationCap size={24} /> },
              { label: "ICT & Digital Lib", icon: <Compass size={24} /> },
            ].map((node, i) => (
              <div key={i} className="glass p-8 rounded-[2.5rem] text-center hover:bg-white hover:shadow-xl transition-all">
                <div className="text-primary mb-4 flex justify-center">{node.icon}</div>
                <h4 className="font-bold text-secondary">{node.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-bold mb-4">Core Leadership</h2>
              <p className="text-secondary/60 italic">Experienced professionals dedicated to technical excellence.</p>
            </div>
            <div className="h-0.5 flex-1 bg-secondary/5 hidden md:block mx-12 mb-6"></div>
            <UserCheck size={32} className="text-primary mb-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, i) => (
              <div key={i} className="group text-center">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden mb-6 shadow-xl grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-secondary/80 to-transparent">
                    <p className="text-white font-bold">{person.name}</p>
                  </div>
                </div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] text-primary">{person.role}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Strategic Plans */}
      <section className="py-32 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Affiliations */}
            <div>
              <h2 className="text-4xl font-bold mb-12">Global Affiliations</h2>
              <div className="space-y-4">
                {affiliations.map((org, i) => (
                  <div key={i} className="flex items-center justify-between p-6 glass rounded-2xl border-white/5 hover:border-primary/20 transition-all">
                    <p className="font-bold text-secondary">{org.name}</p>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60">{org.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Plans */}
            <div className="bg-primary p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/5 rounded-full"></div>
              <FileText size={48} className="text-accent mb-8" />
              <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter">Strategic Plan <span className="text-accent">2021-2025</span></h2>
              <p className="text-white/70 italic leading-relaxed mb-12">
                Our 5-year strategic roadmap outlines the transformation of KTC into a fully digital technical hub catering to the Smart Infrastructure needs of Ghana.
              </p>
              <button className="flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-accent hover:text-secondary transition-all shadow-xl shadow-black/20">
                Download PDF <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
