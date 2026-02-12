"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react";
import GlobalSearch from "./GlobalSearch";
import ThemeToggle from "./ThemeToggle_v2";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About KTC", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Admissions", href: "/admissions" },
  { name: "Student Portal", href: "/portal" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto glass rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <GraduationCap className="text-white" size={24} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-xl leading-none text-primary">KTC</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary/60">Ghana</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-heading font-bold text-sm text-secondary/80 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA & Actions */}
        <div className="flex items-center gap-4">
          <GlobalSearch />
          <ThemeToggle />
          <Link
            href="/admissions"
            className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full font-heading font-bold text-sm hover:bg-primary-dark transition-all shadow-md active:scale-95"
          >
            Apply Now
          </Link>
          
          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-3xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-heading font-bold text-lg text-secondary border-b border-secondary/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admissions"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-white py-4 rounded-xl font-heading font-bold text-center mt-4"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
