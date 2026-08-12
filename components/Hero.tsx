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
    <section id="hero" className="w-full flex items-center py-8 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#172233] bg-tech-grid">
      <div className="max-w-5xl w-full mx-auto">
        {/* Mobile Layout: Vertical Stack | Desktop: 2-Column Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* 1. Mobile Top: Status Badge (Always at Top) */}
          <div className="w-full flex lg:hidden justify-center mb-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b1018] border border-[#1e2e47] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-medium truncate">
                Open to AI & Data Science Roles
              </span>
            </div>
          </div>

          {/* 2. Mobile Profile Photo / Desktop Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center lg:order-2 lg:col-span-5 lg:items-end justify-center"
          >
            <div className="relative p-2.5 sm:p-3 rounded-2xl bg-[#0b1018] border border-[#1e2e47] shadow-xl w-48 sm:w-56 md:w-64 lg:w-full max-w-xs sm:max-w-sm">
              {/* Responsive Photo Container (approx 180-220px on mobile) */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group">
                <Image
                  src={profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 200px, 320px"
                />

                {/* Upload / Change Photo Overlay */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute inset-0 bg-slate-950/70 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white cursor-pointer"
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

              {/* Reset Photo Option */}
              {isCustom && (
                <button
                  onClick={resetToDefault}
                  className="mt-2 w-full flex items-center justify-center gap-1.5 py-1 px-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-[10px] font-mono transition-colors"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>Reset to Default Photo</span>
                </button>
              )}

              {uploadError && (
                <p className="mt-1.5 text-rose-400 text-[10px] font-mono text-center">
                  {uploadError}
                </p>
              )}

              {/* Desktop-only Panel Footer */}
              <div className="hidden lg:flex mt-3 pt-3 border-t border-[#172233] items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px] font-mono text-slate-300">AI / ML / DS</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-950/60 border border-blue-500/30 text-blue-300 text-[11px] font-mono font-bold">
                  <GraduationCap className="w-3 h-3 text-blue-400" />
                  <span>8.04 CGPA</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Mobile Content / Desktop Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:order-1 lg:col-span-7"
          >
            {/* Desktop Status Badge */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b1018] border border-[#1e2e47] w-fit mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-300 font-medium">
                Open to AI & Data Science Opportunities
              </span>
            </div>

            {/* Name Heading (Responsive Clamp) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              {personalInfo.name}
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl font-mono text-blue-400 font-semibold mb-4 sm:mb-5">
              Passionate about AI/ML & Data Science
            </p>

            {/* Narrative Professional Summary */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal">
              {personalInfo.heroDescription}
            </p>

            {/* Mobile CGPA & Domain Card Row */}
            <div className="flex lg:hidden items-center justify-center gap-2 mb-6 w-full max-w-xs">
              <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-[#0b1018] border border-[#1e2e47] text-cyan-300 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI / ML / DS</span>
              </div>
              <div className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-xl bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-mono font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>8.04 CGPA</span>
              </div>
            </div>

            {/* Action CTAs (Stacked on Mobile, 44px touch height) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto max-w-md sm:max-w-none">
              <a
                href="#projects"
                className="min-h-[44px] flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-semibold shadow-lg shadow-blue-950 transition-all active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download
                className="min-h-[44px] flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#1e2e47] hover:border-slate-500 text-slate-200 font-mono text-xs sm:text-sm font-medium transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
