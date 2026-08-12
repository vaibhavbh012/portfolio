"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  Download,
  ExternalLink,
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
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#2563eb", "#38bdf8", "#818cf8"],
      });
    } catch {
      // Fallback
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Index & Direct Information */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="font-mono text-4xl sm:text-5xl font-extrabold text-slate-800 select-none block mb-1">
              07
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Let&apos;s build something <span className="text-blue-400">intelligent.</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-slate-400 mb-8 leading-relaxed">
              Open for Machine Learning, Data Science, and AI Engineering roles. Feel free to reach out directly.
            </p>

            {/* Clickable Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] flex items-center justify-between transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-[#0f1724] border border-[#1e2e47] text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10px] uppercase font-mono text-slate-500">Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-400 hover:text-white transition-all shrink-0 ml-2"
                  title="Copy email to clipboard"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] flex items-center justify-between transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0f1724] border border-[#1e2e47] text-cyan-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-mono text-slate-500">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#0b1018] border border-[#172233] flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#0f1724] border border-[#1e2e47] text-rose-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-500">Location</span>
                  <span className="text-xs sm:text-sm font-mono text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="mt-6 pt-6 border-t border-[#172233]">
            <a
              href={personalInfo.resumePath}
              download
              className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#0b1018] border border-[#172233] shadow-xl"
          >
            <h3 className="text-base font-bold text-white font-mono mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs font-mono text-slate-400 mb-6">
              Drop a note or interview inquiry — I usually reply within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-blue-950/40 border border-blue-500/30 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-sm font-bold font-mono text-white">
                  Message Prepared!
                </h4>
                <p className="text-xs text-slate-300 font-mono">
                  Thank you for reaching out, {formData.name}. You can also email me directly at {personalInfo.email}.
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=Inquiry from ${encodeURIComponent(
                    formData.name
                  )}&body=${encodeURIComponent(formData.message)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-mono font-semibold hover:bg-blue-500 transition-colors mt-2"
                >
                  <span>Open in Mail Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b12] border border-[#172233] focus:border-blue-500 text-xs font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b12] border border-[#172233] focus:border-blue-500 text-xs font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-slate-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, team, or opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#070b12] border border-[#172233] focus:border-blue-500 text-xs font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs transition-all shadow-md shadow-blue-950 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
