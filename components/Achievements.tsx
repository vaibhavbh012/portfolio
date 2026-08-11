"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  ExternalLink,
  Code2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Achievements
          </h2>
          <p className="text-slate-400 text-sm font-normal">
            Coding milestones & certifications
          </p>
        </div>

        {/* LeetCode Milestone Card */}
        <div className="space-y-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-3xl bg-[#0b101b] border border-amber-500/30 shadow-xl"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <h3 className="text-base font-bold text-white">
                    {ach.title}
                  </h3>
                </div>
                <span className="text-xs text-amber-400 font-mono font-bold px-2.5 py-1 rounded-full bg-amber-950/60 border border-amber-500/30">
                  {ach.metric}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {ach.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800 mb-3">
                {ach.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold font-mono"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}

          {/* Certifications Header */}
          <div className="pt-4">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#0b101b] border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/30">
                    {cert.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
