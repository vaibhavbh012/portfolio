"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-10 px-4 sm:px-6 border-t border-[#172233] bg-[#070b12]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-center sm:text-left">
        <div>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <p className="text-[11px] text-slate-600 mt-0.5">
            Designed for AI & Data Science Engineering.
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] hover:border-slate-600 text-slate-400 hover:text-white transition-colors"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
