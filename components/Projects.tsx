"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 border-b border-[#172233]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Projects
          </h2>
          <p className="text-sm font-sans text-slate-400">
            Some of my recent work
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="w-full relative min-h-[580px] sm:min-h-[620px] flex flex-col">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full rounded-3xl bg-[#0b1018] border border-[#1e2e47] shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Top Project Image with Accuracy / Metric Badge */}
              <div className="relative w-full h-56 sm:h-72 bg-slate-950 overflow-hidden">
                {currentProject.image && (
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, 672px"
                  />
                )}

                {/* Floating Metric Badge */}
                {currentProject.metric && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#0b162c]/90 backdrop-blur-md border border-blue-500/40 text-cyan-300 text-xs font-mono font-bold shadow-lg">
                    {currentProject.metric.value} {currentProject.metric.label}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {currentProject.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {currentProject.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {currentProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-[#070b12] border border-[#172233] text-xs font-mono text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons (Side by Side) */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#172233]">
                  {/* Demo / Details Button */}
                  <button
                    onClick={() => setSelectedProject(currentProject)}
                    className="min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-200 hover:text-white font-mono text-xs sm:text-sm font-semibold transition-all active:scale-[0.98]"
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                    <span>Demo / Details</span>
                  </button>

                  {/* Code / GitHub Button */}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-200 hover:text-white font-mono text-xs sm:text-sm font-semibold transition-all active:scale-[0.98]"
                    >
                      <GithubIcon className="w-4 h-4 text-slate-400" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Controls (Left Arrow, Dots, Right Arrow) */}
        <div className="flex items-center justify-center gap-5 mt-6 sm:mt-8">
          {/* Previous Arrow */}
          <button
            onClick={prevProject}
            className="w-10 h-10 rounded-full bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 shadow-lg"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-7 h-2.5 bg-blue-500"
                    : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextProject}
            className="w-10 h-10 rounded-full bg-[#0b1018] hover:bg-[#0f1724] border border-[#172233] flex items-center justify-center text-slate-400 hover:text-white transition-all active:scale-95 shadow-lg"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
