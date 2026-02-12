"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon, X, FileText, Book, Globe, ArrowRight } from "lucide-react";

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = [
    { title: "Highway Engineering 2026", type: "Program", icon: <Book size={18} /> },
    { title: "Admission Guidelines PDF", type: "Document", icon: <FileText size={18} /> },
    { title: "Institutional Strategic Plan", type: "About", icon: <Globe size={18} /> },
  ].filter(r => r.title.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 text-secondary/40 hover:text-primary transition-colors flex items-center gap-2 group"
      >
        <SearchIcon size={20} />
        <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-secondary/20 group-hover:text-primary/40">Cmd + K</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-secondary/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          
          <div className="relative w-full max-w-2xl glass rounded-[2.5rem] shadow-2xl overflow-hidden border-white/10 animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-secondary/5 flex items-center gap-4">
              <SearchIcon className="text-primary" size={24} />
              <input 
                autoFocus
                type="text" 
                placeholder="Search programs, documents, news..."
                className="flex-1 bg-transparent border-none outline-none text-xl font-heading font-bold placeholder:text-secondary/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary/5 rounded-full">
                <X size={20} className="text-secondary/40" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
              {query === "" ? (
                <div className="p-8 text-center space-y-2">
                  <p className="font-bold text-secondary/60">Quick Search</p>
                  <p className="text-xs text-secondary/30 italic">Search for programs, news, or institutional documents.</p>
                </div>
              ) : results.length > 0 ? (
                results.map((res, i) => (
                  <div key={i} className="flex items-center justify-between p-4 hover:bg-primary/5 rounded-2xl cursor-pointer group transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-bg-soft flex items-center justify-center text-primary">
                        {res.icon}
                      </div>
                      <div>
                        <p className="font-bold text-secondary">{res.title}</p>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/30">{res.type}</p>
                      </div>
                    </div>
                    <ArrowRight size={18} className="text-secondary/0 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-secondary/40 italic">No results found for "{query}"</div>
              )}
            </div>

            <div className="p-4 bg-bg-soft/50 border-t border-secondary/5 flex justify-between text-[10px] font-bold uppercase tracking-widest text-secondary/30">
              <div className="flex gap-4">
                <span>Enter to select</span>
                <span>Esc to close</span>
              </div>
              <span className="text-primary/60">KTC Global Search</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
