"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Activity } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-16 px-4 sm:px-6 border-b border-[#172233]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
            03 • Engineering Lab
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Deep Learning, Computer Vision & NLP Systems
          </p>
        </div>

        {/* Vertical Portrait Project Feed */}
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl overflow-hidden flex flex-col group transition-all"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 sm:h-60 bg-slate-950 overflow-hidden border-b border-[#172233]">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 672px"
                  />
                )}
                {/* Metric Badge */}
                {project.metric && (
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#070b12]/90 backdrop-blur-md border border-[#1e2e47] text-cyan-300 text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-lg">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.metric.value} {project.metric.label}</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-mono text-slate-500">{project.date}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs font-mono text-blue-400 mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 3).map((high, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[10px] sm:text-[11px] font-mono text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-2.5 pt-4 border-t border-[#172233]">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 min-h-[42px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs transition-all active:scale-[0.98]"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Demo / Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[42px] min-h-[42px] flex items-center justify-center rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-300 hover:text-white transition-all active:scale-[0.98]"
                      aria-label="View Code on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
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
