"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import { useProfileImage } from "./useProfileImage";

const navSections = [
  { id: "about", num: "01", label: "About" },
  { id: "experience", num: "02", label: "Experience" },
  { id: "projects", num: "03", label: "Projects" },
  { id: "skills", num: "04", label: "Skills" },
  { id: "achievements", num: "05", label: "Achievements" },
  { id: "education", num: "06", label: "Education" },
  { id: "contact", num: "07", label: "Contact" },
];

export default function MobileNav() {
  const { personalInfo } = portfolioData;
  const { profileImage } = useProfileImage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-[#070b12]/95 backdrop-blur-xl border-b border-[#172233] px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Brand identity */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#1e2e47] bg-[#0b1018]">
            <Image
              src={profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
              sizes="32px"
            />
          </div>
          <span className="font-bold text-sm text-slate-100">
            {personalInfo.name}
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/90 text-white font-mono text-xs font-semibold shadow-sm"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Drawer menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-[#070b12] border-t border-[#172233] mt-3 pt-3 pb-4"
          >
            <div className="flex flex-col gap-1">
              {navSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-[#0f1724] text-left transition-colors"
                >
                  <span className="text-slate-500">{item.num}</span>
                  <span className="font-medium text-slate-200">{item.label}</span>
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-[#172233] flex items-center justify-between px-2">
                <span className="text-[11px] font-mono text-slate-400">Vaibhav Bhardwaj</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
