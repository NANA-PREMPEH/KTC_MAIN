"use client";

import { Users, BookOpen, GraduationCap, Building2 } from "lucide-react";

const stats = [
  {
    label: "Satisfied Students",
    value: "10,000+",
    icon: <Users className="text-primary" size={24} />,
    description: "Professionals trained across various disciplines."
  },
  {
    label: "Years of Excellence",
    value: "25+",
    icon: <Building2 className="text-primary" size={24} />,
    description: "A legacy of technical training in Ghana."
  },
  {
    label: "Accredited Programs",
    value: "50+",
    icon: <BookOpen className="text-primary" size={24} />,
    description: "Diverse courses tailored for industry needs."
  },
  {
    label: "Success Rate",
    value: "95%",
    icon: <GraduationCap className="text-primary" size={24} />,
    description: "Ensuring career growth for our graduates."
  }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[2rem] border border-secondary/5 bg-bg-soft/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-secondary tracking-tighter">
                  {stat.value}
                </h3>
                <p className="text-lg font-bold text-primary italic">
                  {stat.label}
                </p>
                <p className="text-sm text-secondary/50 leading-relaxed italic">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
