import Hero from "@/components/Hero";
import { BookOpen, Construction, Users, GraduationCap, ChevronRight } from "lucide-react";
import Link from "next/link";
import Stats from "@/components/Stats_v2";
import NewsGrid from "@/components/NewsGrid_v2";
import Footer from "@/components/Footer";

const quickServices = [
  {
    title: "Labor-Based Construction",
    description: "Practical training in modern labor-intensive road building techniques.",
    icon: <Users className="text-white" size={24} />,
    color: "bg-primary"
  },
  {
    title: "Highways & Transport",
    description: "Advanced courses in highway engineering and transport management.",
    icon: <Construction className="text-white" size={24} />,
    color: "bg-secondary"
  },
  {
    title: "Project Management",
    description: "Equipping professionals with skills to manage large-scale infrastructure projects.",
    icon: <BookOpen className="text-white" size={24} />,
    color: "bg-primary-dark"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Quick Services Section */}
      <section className="py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Core Programs</h2>
            <div className="h-1.5 w-24 bg-accent mx-auto rounded-full"></div>
            <p className="mt-6 text-secondary/70 max-w-2xl mx-auto text-lg italic">
              Specialized training designed to meet the growing demands of Ghana's infrastructure sector.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {quickServices.map((service, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-3xl border border-secondary/5 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/10`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-secondary/60 leading-relaxed mb-6 italic">
                  {service.description}
                </p>
                <Link href="/programs" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Learn More <ChevronRight size={20} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 p-12 rounded-[40px] bg-primary text-white relative overflow-hidden shadow-2xl shadow-primary/20">
             <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-y-1/4 translate-x-1/4">
                <GraduationCap size={400} />
             </div>
             <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-2">Ready to advance your career?</h3>
                  <p className="text-white/70 italic text-lg">Join our next intake for the 2026 Academic Year.</p>
                </div>
                <Link 
                  href="/admissions" 
                  className="bg-accent hover:bg-white hover:text-primary text-primary px-10 py-4 rounded-full font-bold text-xl transition-all shrink-0 shadow-xl"
                >
                  Apply Online Now
                </Link>
             </div>
          </div>
        </div>
      </section>

      <Stats />
      <NewsGrid />
      <Footer />
    </main>
  );
}
