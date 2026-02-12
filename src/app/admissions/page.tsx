"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, User, Mail, Phone, Book, FileText, Upload, Lock } from "lucide-react";

export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <main className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Information Side */}
          <div className="space-y-8 sticky top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm">
              <CheckCircle size={16} />
              Admission for 2026 Academic Year
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Start Your <span className="text-primary italic">Journey</span> at KTC.
            </h1>
            <p className="text-xl text-secondary/70 italic leading-relaxed">
              Our streamlined online application system helps you submit your details and documents in minutes.
            </p>
            
            <ul className="space-y-6 pt-8">
              {[
                { icon: <User className="text-primary" />, title: "Personal Details", desc: "Basic contact and residency information." },
                { icon: <Book className="text-primary" />, title: "Program Selection", desc: "Choose your desired field of study." },
                { icon: <FileText className="text-primary" />, title: "Academic Records", desc: "Upload your previous certificates." },
                { icon: <Lock className="text-primary" />, title: "Secure Submission", desc: "Your data is protected and encrypted." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">{item.title}</h4>
                    <p className="text-sm text-secondary/50 italic">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Form Side */}
          <div className="glass p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-bg-soft">
              <div 
                className="h-full bg-primary transition-all duration-500" 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>

            <div className="flex justify-between items-center mb-12">
              <h2 className="text-2xl font-bold">Online Application</h2>
              <span className="text-sm font-bold text-primary italic">Step {step} of 3</span>
            </div>

            <form className="space-y-8">
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@example.com"
                        className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+233..."
                        className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Select Program</label>
                    <select className="w-full px-6 py-4 rounded-2xl glass border-secondary/5 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none appearance-none bg-white">
                      <option>Select a course...</option>
                      <option>Highway Engineering</option>
                      <option>Labor-Based Methods</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Session Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      {["Full-Time", "Part-Time"].map((type) => (
                        <button key={type} type="button" className="py-4 border-2 border-primary/10 rounded-2xl font-bold hover:bg-primary/5 transition-all">
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-secondary/40">Upload Documents (PDF)</label>
                    <div className="border-2 border-dashed border-primary/20 rounded-[2.5rem] p-12 text-center space-y-4 hover:bg-primary/5 transition-all cursor-pointer">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <Upload size={28} />
                      </div>
                      <div>
                        <p className="font-bold">Drop your files here</p>
                        <p className="text-xs text-secondary/40 italic">Maximum file size: 5MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-8">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="px-8 py-4 glass rounded-full font-bold flex-1"
                  >
                    Back
                  </button>
                )}
                <button 
                  type="button" 
                  onClick={step === 3 ? undefined : nextStep}
                  className="px-8 py-4 bg-primary text-white rounded-full font-bold flex-1 flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:bg-primary-dark transition-all"
                >
                  {step === 3 ? "Submit Application" : "Continue"} <ArrowRight size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
