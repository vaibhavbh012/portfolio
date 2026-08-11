"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  User,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const [imageError, setImageError] = useState(false);
  const { personalInfo } = portfolioData;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden text-center"
    >
      {/* Subtle ambient night sky glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-xl w-full mx-auto flex flex-col items-center">
        {/* Centered Circular Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-slate-800/80 shadow-2xl shadow-blue-950/40 bg-slate-900">
            {!imageError ? (
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                onError={() => setImageError(true)}
                sizes="(max-width: 640px) 176px, 208px"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400">
                <User className="w-16 h-16 text-slate-500" />
              </div>
            )}
          </div>

          {/* Floating CGPA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 px-3 py-1.5 rounded-full bg-[#0b101b]/95 backdrop-blur-md border border-blue-500/40 shadow-xl shadow-black/60 flex items-center gap-1.5 text-xs font-mono"
          >
            <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-extrabold text-blue-300 text-xs">8.04</span>
            <span className="text-slate-400 text-[10px] uppercase tracking-wider">CGPA</span>
          </motion.div>
        </motion.div>

        {/* Name with subtle soft blue glow */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-blue-400 tracking-tight mb-3"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Headline / Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl font-semibold text-slate-100 mb-6"
        >
          Passionate about AI/ML & Data Science
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mb-8 font-normal"
        >
          {personalInfo.heroDescription}
        </motion.p>

        {/* Stacked Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-sm flex flex-col gap-3 mb-8"
        >
          {/* Primary View My Work Button */}
          <a
            href="#projects"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-200 hover:bg-white text-slate-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Outline Resume Button */}
          <a
            href={personalInfo.resumePath}
            download
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-slate-300" />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Bottom Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="LeetCode"
          >
            <LeetCodeIcon className="w-5 h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            className="p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-emerald-400 transition-all hover:scale-110"
            aria-label="Contact Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
