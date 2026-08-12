"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
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
    <header className="lg:hidden sticky top-0 left-0 right-0 z-50 bg-[#070b12]/95 backdrop-blur-xl border-b border-[#172233] px-4 py-2.5 sm:px-6">
      <div className="max-w-full flex items-center justify-between">
        {/* Brand identity */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 cursor-pointer py-1"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#1e2e47] bg-[#0b1018] shrink-0">
            <Image
              src={profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover object-top"
              sizes="32px"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm text-slate-100 truncate">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 -mt-0.5">
              Data Science / AI
            </span>
          </div>
        </div>

        {/* Action Controls with 44px touch targets */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-1.5 min-h-[38px] px-3 rounded-xl bg-blue-600/90 text-white font-mono text-xs font-semibold shadow-sm active:scale-95 transition-transform"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl bg-[#0b1018] border border-[#172233] text-slate-300 hover:text-white active:scale-95 transition-transform"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
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
            className="bg-[#070b12] border-t border-[#172233] mt-2.5 pt-2 pb-4 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-[#0f1724] text-left transition-colors active:bg-[#131c2e]"
                >
                  <span className="text-slate-500 font-bold">{item.num}</span>
                  <span className="font-medium text-slate-200 text-sm">{item.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                </button>
              ))}

              <div className="pt-3 mt-2 border-t border-[#172233] flex items-center justify-between px-2">
                <span className="text-[11px] font-mono text-slate-400">Vaibhav Bhardwaj</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-white"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-amber-400"
                    aria-label="LeetCode Profile"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-blue-400"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
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
