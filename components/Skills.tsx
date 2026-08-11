"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  BrainCircuit,
  Layers,
  Wrench,
  BookOpen,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons: Record<string, React.ReactNode> = {
    Terminal: <Terminal className="w-4 h-4 text-blue-400" />,
    BrainCircuit: <BrainCircuit className="w-4 h-4 text-purple-400" />,
    Layers: <Layers className="w-4 h-4 text-cyan-400" />,
    Wrench: <Wrench className="w-4 h-4 text-emerald-400" />,
    BookOpen: <BookOpen className="w-4 h-4 text-amber-400" />,
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Skills
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            Technologies I work with
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-800 mb-8">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === idx
                  ? "bg-blue-600 text-white font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {cat.title.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Active Category Skills Card */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-6 sm:p-7 rounded-3xl bg-[#0b101b] border border-slate-800 shadow-xl"
        >
          <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
            {categoryIcons[skillCategories[activeCategory].icon]}
            <h3 className="text-base font-bold text-white">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {skillCategories[activeCategory].skills.map((skill, idx) => (
              <span
                key={idx}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-colors ${
                  skill.highlight
                    ? "bg-slate-900 text-blue-300 border border-blue-500/30"
                    : "bg-slate-900/60 text-slate-300 border border-slate-800"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
