"use client";

import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Globe } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Get in <span className="text-primary italic">Touch</span>.
              </h1>
              <p className="text-xl text-secondary/70 italic leading-relaxed">
                Have questions about our programs or admissions? Our team is here to help you navigate your journey at KTC.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <MapPin className="text-primary" />, title: "Address", content: "Koforidua Training Center, Eastern Region, Ghana" },
                { icon: <Phone className="text-primary" />, title: "Phone", content: "+233 (0) 50 123 4567" },
                { icon: <Mail className="text-primary" />, title: "Email", content: "info@ktc.gov.gh" },
                { icon: <Clock className="text-primary" />, title: "Working Hours", content: "Mon - Fri: 8:00 AM - 5:00 PM" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-lg">{item.title}</h4>
                    <p className="text-secondary/60 italic">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 glass rounded-[2.5rem] border-primary/10">
              <h4 className="font-bold flex items-center gap-2 mb-4">
                <Globe size={20} className="text-primary" />
                Regional Coordination
              </h4>
              <p className="text-sm text-secondary/60 italic">For regional inquiries, please contact our coordinating offices in Kumasi and Takoradi.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">Subject</label>
                <select className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary outline-none transition-all appearance-none bg-white">
                  <option>General Inquiry</option>
                  <option>Admissions Question</option>
                  <option>Course Details</option>
                  <option>E-Learning Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary/40 ml-4">Message</label>
                <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-bg-soft relative overflow-hidden grayscale opacity-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass p-4 rounded-2xl font-bold text-primary shadow-xl">Interactive Map Placeholder</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
