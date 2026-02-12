"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GraduationCap, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-secondary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={28} />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter">KTC GHANA</span>
            </Link>
            <p className="text-white/60 leading-relaxed italic">
              Empowering transport and infrastructure professionals since 1999. The Ministry of Roads and Highways Training Centre.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-xl">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Programs", href: "/programs" },
                { name: "Admissions", href: "/admissions" },
                { name: "Student Portal", href: "/portal" },
                { name: "News & Events", href: "/news" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-xl">Resources</h4>
            <ul className="space-y-4">
              {["Downloads", "Career Portal", "Library", "E-Learning", "Research Papers"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-white/60 hover:text-accent transition-colors flex items-center gap-2 group italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-xl">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <p className="text-white/60 text-sm italic">Koforidua, Eastern Region, Ghana. Near Regional Hospital.</p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <p className="text-white/60 text-sm">+233 (0) 342 022 123</p>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <p className="text-white/60 text-sm">info@ktc.gov.gh</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm italic">
            © {year} Koforidua Training Center. Official Government Organ.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
