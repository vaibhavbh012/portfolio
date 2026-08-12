"use client";

import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.8 },
    });

    setSubmitted(true);

    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            Let&apos;s build something intelligent together
          </p>
        </div>

        {/* Contact Container */}
        <div className="space-y-4">
          {/* Quick Email Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0b101b] border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-mono">Email Me</p>
                <p className="text-xs sm:text-sm font-bold text-white break-all">
                  {personalInfo.email}
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Quick Form */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#0b101b] border border-slate-800 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Your Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Vaibhav, I'd like to talk about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-200 hover:bg-white text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>

            {submitted && (
              <p className="text-xs text-emerald-400 font-mono text-center mt-3">
                Message prepared! Opening your mail client...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
