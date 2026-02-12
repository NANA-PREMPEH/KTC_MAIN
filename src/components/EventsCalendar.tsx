"use client";

import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
}

export default function EventsCalendar({ events }: { events: Event[] }) {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div key={event.id} className="glass p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-8 hover:bg-white hover:shadow-2xl transition-all group">
          <div className="md:w-32 flex flex-col items-center justify-center border-r border-secondary/5 pr-8">
            <span className="text-3xl font-black text-primary leading-none uppercase">{event.date.split(" ")[1].replace(",", "")}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-secondary/40 mt-1">{event.date.split(" ")[0]}</span>
          </div>
          
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-accent/10 text-accent-dark text-[10px] font-bold uppercase tracking-widest rounded-full">
                {event.category}
              </span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{event.title}</h3>
            <div className="flex flex-wrap gap-6 text-sm text-secondary/60">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-primary" />
                {event.time}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                {event.location}
              </div>
            </div>
          </div>
          
          <button className="self-center bg-secondary text-white px-8 py-3 rounded-2xl font-bold hover:bg-primary transition-all active:scale-95 shadow-lg">
            Register
          </button>
        </div>
      ))}
    </div>
  );
}
