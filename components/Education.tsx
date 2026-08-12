"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;
  const university = education[0];
  const schoolEducation = education.slice(1);

  return (
    <section id="education" className="w-full py-16 px-4 sm:px-6 border-b border-[#172233]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
            06 • Academics
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Academic foundation & Data Science specialization
          </p>
        </div>

        {/* Academic Profile Cards */}
        <div className="space-y-4">
          {/* Primary University Profile Card */}
          {university && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-7 rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5 pb-3.5 border-b border-[#172233]">
                <div className="flex items-center gap-3">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-[#0f1724] border border-[#1e2e47] text-blue-400 shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {university.institution}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 font-semibold mt-0.5">
                      {university.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-blue-950/70 border border-blue-500/40 text-blue-300 font-mono text-xs font-bold">
                    CGPA: {university.grade}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 mb-3.5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{university.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{university.location}</span>
                </span>
              </div>

              {university.highlights && (
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#172233]">
                  {university.highlights.map((high, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[10px] sm:text-[11px] font-mono text-slate-300 font-medium"
                    >
                      {high}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Secondary Schooling Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {schoolEducation.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block mb-1">
                    {edu.period}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-mono">
                    {edu.degree}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-mono mt-0.5">
                    {edu.institution}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-[#172233] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-500">{edu.location}</span>
                  <span className="text-xs font-mono font-semibold text-cyan-300">
                    Grade: {edu.grade}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
