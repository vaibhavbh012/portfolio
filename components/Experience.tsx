"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Experience
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            My professional journey
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Company Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shadow-md">
                  <span className="font-extrabold text-base tracking-wider font-mono">IBM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {exp.period} • 2 mos
                  </p>
                </div>
              </div>

              {/* Vertical Timeline Nodes */}
              <div className="ml-5 pl-7 border-l-2 border-slate-800 space-y-6 relative">
                {/* Node 1 */}
                <div className="relative">
                  <div className="absolute -left-[35px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-[#030712]" />
                  <h4 className="text-base font-bold text-blue-400">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mb-2">
                    {exp.period}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <li
                        key={rIdx}
                        className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Location Tag */}
                  <div className="text-xs text-slate-400 font-mono mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
