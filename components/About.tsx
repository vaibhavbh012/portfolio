"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BarChart3,
  Bot,
  Code,
  MapPin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personalInfo, aboutCards } = portfolioData;

  const cardIcons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-5 h-5 text-blue-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-cyan-400" />,
    Bot: <Bot className="w-5 h-5 text-purple-400" />,
    Code: <Code className="w-5 h-5 text-emerald-400" />,
    MapPin: <MapPin className="w-5 h-5 text-rose-400" />,
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            About Me
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            A glimpse into my journey & focus
          </p>
        </div>

        {/* Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-7 rounded-3xl bg-[#0b101b] border border-slate-800 shadow-xl mb-6"
        >
          <p className="text-slate-300 text-sm leading-relaxed">
            {personalInfo.aboutDescription}
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aboutCards.slice(0, 4).map((card, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0b101b] border border-slate-800/90 flex items-center gap-3.5"
            >
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                {cardIcons[card.icon]}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {card.title}
                </h4>
                <p className="text-[11px] text-slate-400 truncate">
                  {card.badge || card.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
