"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";
import { useProfileImage } from "./useProfileImage";

const navLinks = [
  { name: "About", href: "#about", num: "01" },
  { name: "Experience", href: "#experience", num: "02" },
  { name: "Projects", href: "#projects", num: "03" },
  { name: "Skills", href: "#skills", num: "04" },
  { name: "Achievements", href: "#achievements", num: "05" },
  { name: "Education", href: "#education", num: "06" },
  { name: "Contact", href: "#contact", num: "07" },
];

export default function Navbar() {
  const { personalInfo } = portfolioData;
  const { profileImage } = useProfileImage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "about",
        "experience",
        "projects",
        "skills",
        "achievements",
        "education",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#070b12]/95 backdrop-blur-xl border-b border-[#172233] shadow-xl shadow-black/60"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#1e2e47] bg-[#0b1018] shrink-0">
            <Image
              src={profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="32px"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-slate-100 group-hover:text-cyan-300 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono text-cyan-400 -mt-0.5">
              Data Science / AI
            </span>
          </div>
        </a>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={personalInfo.resumePath}
            download
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-950 transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Menu Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-rose-400" /> : <Menu className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-[#070b12]/98 backdrop-blur-2xl border-b border-[#172233] px-4 sm:px-6 py-5 shadow-2xl"
          >
            <div className="max-w-xl mx-auto flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all flex items-center justify-between ${
                      isActive
                        ? "text-cyan-300 font-semibold bg-blue-950/40 border border-blue-500/30"
                        : "text-slate-300 hover:text-white hover:bg-[#0b1018]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-slate-500 font-bold">{link.num}</span>
                      <span className="text-sm font-medium">{link.name}</span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[#172233] flex items-center justify-between px-2">
                <span className="text-[11px] font-mono text-slate-400">Vaibhav Bhardwaj</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-amber-400"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#0b1018] border border-[#172233] text-slate-400 hover:text-blue-400"
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
