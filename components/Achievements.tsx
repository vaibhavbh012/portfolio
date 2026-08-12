"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { LeetCodeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="achievements" className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#172233]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column: Index & Title */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 select-none block mb-0.5 sm:mb-1">
              05
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Credentials & Achievements
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1 sm:mt-2">
              Competitive programming benchmarks and verified certifications
            </p>
          </div>
        </div>

        {/* Right Column: Achievements & Certs Cards */}
        <div className="lg:col-span-8 space-y-5 sm:space-y-6">
          {/* LeetCode Competitive Programming Card */}
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-7 rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl"
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-400 shrink-0">
                    <LeetCodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-white font-mono truncate">
                      {ach.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-mono text-amber-400 font-semibold">
                      DSA Mastery
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 font-mono text-[11px] sm:text-xs font-bold shrink-0">
                  {ach.metric}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3.5 font-normal">
                {ach.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#172233] mb-3.5">
                {ach.topics.map((topic, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[10px] sm:text-[11px] font-mono text-slate-300 font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Action */}
              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold transition-colors py-1"
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          ))}

          {/* Certifications List */}
          <div className="pt-2">
            <h3 className="text-xs sm:text-sm font-bold font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Verified Industry Certifications</span>
            </h3>

            <div className="space-y-2.5 sm:space-y-3">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-3.5 sm:p-4 md:p-5 rounded-xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-[#0f1724] border border-[#1e2e47] text-blue-400 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white font-mono">
                        {cert.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs font-mono text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] sm:text-xs font-mono text-cyan-300 self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/30">
                    {cert.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
