"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="w-full py-16 px-4 sm:px-6 border-b border-[#172233]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
            02 • Professional Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Industry internships & applied data science track record
          </p>
        </div>

        {/* Stacked Experience Cards */}
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-7 rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl transition-all"
            >
              {/* Company & Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#172233]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0f1724] border border-[#1e2e47] flex items-center justify-center font-mono font-black text-sm sm:text-base text-blue-400 shrink-0">
                    IBM
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate">
                        {exp.company}
                      </h3>
                      <span className="px-2 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-semibold">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-cyan-300 font-semibold mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 self-start sm:self-auto">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0f1724] border border-[#172233] flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Calendar className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{exp.period}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {exp.description}
              </p>

              {/* Metrics Summary Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4 p-3 rounded-xl bg-[#070b12] border border-[#172233]">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-500">Corpus Volume</span>
                  <span className="text-xs font-bold font-mono text-cyan-300">97,682+ Postings</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-500">ML Regressors</span>
                  <span className="text-xs font-bold font-mono text-indigo-300">Linear, RF, XGBoost</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-500">NLP Methods</span>
                  <span className="text-xs font-bold font-mono text-blue-300">TF-IDF & LDA</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 mb-4">
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li
                      key={rIdx}
                      className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Tags */}
              <div className="pt-3 border-t border-[#172233] flex flex-wrap gap-1.5">
                {exp.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[10px] sm:text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
