"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Camera,
  RotateCcw,
  GraduationCap,
  Mail,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import { useProfileImage } from "./useProfileImage";

export default function Hero() {
  const { personalInfo } = portfolioData;
  const { profileImage, isCustom, updateImage, resetToDefault } = useProfileImage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Please select a valid image file (.jpg, .png, .webp)");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setUploadError("Image size should be under 5MB");
      return;
    }

    setUploadError(null);
    try {
      await updateImage(file);
    } catch {
      setUploadError("Could not save image to storage");
    }
  };

  return (
    <section id="home" className="w-full pt-28 pb-16 px-4 sm:px-6 flex flex-col items-center justify-center text-center border-b border-[#172233] bg-tech-grid">
      <div className="max-w-xl w-full mx-auto flex flex-col items-center">
        
        {/* Centered Profile Photo with 8.04 CGPA & Dynamic Replace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mb-6"
        >
          <div className="relative p-2.5 rounded-3xl bg-[#0b1018] border border-[#1e2e47] shadow-2xl">
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 group">
              <Image
                src={profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 192px, 208px"
              />

              {/* Photo Change Button Overlay */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer"
                title="Click to upload or replace photo"
              >
                <div className="p-2 rounded-full bg-blue-600 text-white shadow-lg">
                  <Camera className="w-4 h-4" />
                </div>
                <span className="text-[11px] font-mono font-semibold">Change Photo</span>
              </button>

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-label="Upload custom profile photo"
              />
            </div>

            {/* Floating 8.04 CGPA Badge */}
            <div className="absolute -bottom-2.5 -right-2.5 px-3 py-1 rounded-xl bg-[#070b12] border border-blue-500/40 text-blue-300 text-xs font-mono font-bold shadow-xl flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>8.04 CGPA</span>
            </div>
          </div>

          {/* Reset Custom Photo */}
          {isCustom && (
            <button
              onClick={resetToDefault}
              className="mt-3 inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-[10px] font-mono transition-colors"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset to Default Photo</span>
            </button>
          )}

          {uploadError && (
            <p className="mt-2 text-rose-400 text-xs font-mono">
              {uploadError}
            </p>
          )}
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-base sm:text-lg font-mono text-blue-400 font-semibold mb-4"
        >
          Passionate about AI/ML & Data Science
        </motion.p>

        {/* Professional Summary */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mb-6 font-normal"
        >
          {personalInfo.heroDescription}
        </motion.p>

        {/* Domain Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0b1018] border border-[#1e2e47] text-cyan-300 text-xs font-mono mb-6 shadow-sm"
        >
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>AI / ML / Data Science • UPES</span>
        </motion.div>

        {/* Stacked Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full max-w-sm flex flex-col gap-3 mb-8"
        >
          <a
            href="#projects"
            className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>View My Work</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumePath}
            download
            className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#1e2e47] hover:border-slate-500 text-slate-200 font-mono text-xs sm:text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Bottom Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] hover:border-slate-500 text-slate-400 hover:text-white transition-all hover:scale-110"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] hover:border-amber-500/30 text-slate-400 hover:text-amber-400 transition-all hover:scale-110"
            aria-label="LeetCode Profile"
          >
            <LeetCodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-2xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] hover:border-blue-500/30 text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>

          <a
            href="#contact"
            className="p-3 rounded-2xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] hover:border-rose-500/30 text-slate-400 hover:text-rose-400 transition-all hover:scale-110"
            aria-label="Contact Email"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
