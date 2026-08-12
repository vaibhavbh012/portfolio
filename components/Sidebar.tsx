"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Download,
  User,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
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

export default function Sidebar() {
  const { personalInfo } = portfolioData;
  const { profileImage } = useProfileImage();
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const section of navSections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between w-64 xl:w-72 h-screen fixed top-0 left-0 bg-[#070b12] border-r border-[#172233] p-6 z-40">
      {/* Top: Identity Header */}
      <div>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3.5 pb-6 border-b border-[#172233] cursor-pointer group"
        >
          <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#1e2e47] bg-[#0b1018] shrink-0">
            <Image
              src={profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="48px"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-sm text-slate-100 group-hover:text-cyan-400 transition-colors truncate">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Data Science / AI
            </span>
          </div>
        </div>

        {/* Middle: Editorial Navigation Menu */}
        <nav className="mt-8 space-y-1.5">
          {navSections.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono transition-all text-left group ${
                  isActive
                    ? "bg-[#0f1724] text-cyan-300 font-semibold border-l-2 border-cyan-400 shadow-sm"
                    : "text-slate-400 hover:text-slate-200 hover:bg-[#0b1018]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] ${
                      isActive ? "text-cyan-400" : "text-slate-600 group-hover:text-slate-400"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom: Socials & Download Resume CTA */}
      <div className="pt-6 border-t border-[#172233] space-y-4">
        {/* Social Links Row */}
        <div className="flex items-center justify-between px-1">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-white hover:border-slate-600 transition-all"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
            aria-label="LeetCode Profile"
            title="LeetCode"
          >
            <LeetCodeIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-lg bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-rose-400 hover:border-rose-500/30 transition-all"
            aria-label="Email"
            title="Email"
          >
            <span className="font-mono text-xs font-bold">@</span>
          </a>
        </div>

        {/* Download Resume Button */}
        <a
          href={personalInfo.resumePath}
          download
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-950 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Download CV</span>
        </a>
      </div>
    </aside>
  );
}
