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
  Sparkles,
  Terminal,
  Activity,
  Cpu,
} from "lucide-react";
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
    <section id="hero" className="min-h-[85vh] flex items-center py-12 sm:py-16 px-4 sm:px-8 border-b border-[#172233] bg-tech-grid">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Side: Editorial Typography & Actions (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1018] border border-[#1e2e47] w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 font-medium">
              Open to AI & Data Science Opportunities
            </span>
          </div>

          {/* Name Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-3 leading-tight">
            {personalInfo.name}
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl font-mono text-blue-400 font-semibold mb-6">
            Passionate about AI/ML & Data Science
          </p>

          {/* Exact Narrative Professional Summary */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mb-8 font-normal">
            {personalInfo.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="flex items-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.resumePath}
              download
              className="flex items-center gap-2 py-3 px-5 rounded-xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#1e2e47] hover:border-slate-500 text-slate-200 font-mono text-xs sm:text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Professional Profile & Dynamic Image Panel (Span 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center"
        >
          <div className="relative p-3 rounded-2xl bg-[#0b1018] border border-[#1e2e47] shadow-2xl max-w-xs sm:max-w-sm w-full">
            {/* Image Container with Dynamic Replace Overlay */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
              <Image
                src={profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 280px, 340px"
              />

              {/* Upload Overlay Button */}
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white cursor-pointer"
                title="Click to upload or replace photo"
              >
                <div className="p-2.5 rounded-full bg-blue-600 text-white shadow-lg">
                  <Camera className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-semibold">Change Photo</span>
                <span className="text-[10px] text-slate-400 font-mono">PNG, JPG, WEBP</span>
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

            {/* Reset Custom Photo Button if Custom */}
            {isCustom && (
              <button
                onClick={resetToDefault}
                className="mt-2.5 w-full flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-mono transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Default Photo</span>
              </button>
            )}

            {/* Error Feedback */}
            {uploadError && (
              <p className="mt-2 text-rose-400 text-xs font-mono text-center">
                {uploadError}
              </p>
            )}

            {/* Profile Panel Metadata & CGPA */}
            <div className="mt-3.5 pt-3.5 border-t border-[#172233] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#0f1724] border border-[#1e2e47] text-cyan-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-mono text-slate-500">Domain</span>
                  <span className="text-xs font-mono font-semibold text-slate-200">AI / ML / Data Science</span>
                </div>
              </div>

              {/* 8.04 CGPA Badge */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>8.04 CGPA</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
