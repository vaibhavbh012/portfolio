"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Education
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            Academic foundation
          </p>
        </div>

        {/* Education List */}
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-[#0b101b] border border-slate-800 shadow-xl"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-xs text-blue-400 font-mono mt-0.5">
                    {edu.degree}
                  </p>
                </div>

                <span className="text-xs font-mono font-bold text-slate-200 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
                  {edu.gradeLabel}: {edu.grade}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-3 border-t border-slate-800/80">
                <span>{edu.period}</span>
                {edu.location && <span>{edu.location}</span>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
