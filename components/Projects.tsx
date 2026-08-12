"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Cpu,
  Layers,
  ArrowUpRight,
  Activity,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects[0]; // Automated Skin Disease Detection System
  const secondary = projects.slice(1); // Job Market + Alzheimer's

  return (
    <section id="projects" className="py-20 px-4 sm:px-8 border-b border-[#172233]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-[#172233]">
          <div>
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-800 select-none block mb-1">
              03
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1">
              Applied Machine Learning, Computer Vision, and NLP architectures
            </p>
          </div>
        </div>

        {/* Bento Grid Container */}
        <div className="space-y-6">
          {/* Large Bento Card: Featured Project (Skin Disease Detection) */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 group transition-all"
            >
              {/* Image Banner (Span 6) */}
              <div className="lg:col-span-6 relative h-64 sm:h-72 lg:h-auto min-h-[260px] bg-slate-950 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#172233]">
                {featured.image && (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                {/* Metric Overlay */}
                {featured.metric && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#070b12]/90 backdrop-blur-md border border-[#1e2e47] text-cyan-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{featured.metric.value} {featured.metric.label}</span>
                  </div>
                )}
                <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-semibold">
                  {featured.category}
                </div>
              </div>

              {/* Content (Span 6) */}
              <div className="lg:col-span-6 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                      Featured Architecture
                    </span>
                    <span className="text-xs font-mono text-slate-500">{featured.date}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 mb-1 group-hover:text-cyan-300 transition-colors">
                    {featured.title}
                  </h3>

                  {featured.subtitle && (
                    <p className="text-xs font-mono text-blue-400 mb-3">
                      {featured.subtitle}
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                    {featured.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-5">
                    {featured.highlights.slice(0, 3).map((high, hIdx) => (
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
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {featured.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[11px] font-mono text-slate-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-3 pt-4 border-t border-[#172233]">
                  <button
                    onClick={() => setSelectedProject(featured)}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono font-semibold text-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Demo / Architecture</span>
                  </button>

                  {featured.githubUrl && (
                    <a
                      href={featured.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] hover:border-slate-500 text-slate-300 hover:text-white transition-all"
                      aria-label="View Code on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Secondary Bento Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondary.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] shadow-xl overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Top Image Preview */}
                  <div className="relative w-full h-44 bg-slate-950 overflow-hidden border-b border-[#172233]">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    {project.metric && (
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-md bg-[#070b12]/90 backdrop-blur-md border border-[#1e2e47] text-cyan-300 text-[11px] font-mono font-bold">
                        {project.metric.value} {project.metric.label}
                      </div>
                    )}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-blue-950/80 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs font-mono text-blue-400 mb-2.5">
                        {project.subtitle}
                      </p>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3 font-normal">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-[#070b12] border border-[#172233] text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3.5 rounded-xl bg-[#0f1724] hover:bg-slate-800 border border-[#1e2e47] text-slate-200 hover:text-white font-mono font-medium text-xs transition-all"
                  >
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] hover:border-slate-500 text-slate-400 hover:text-white transition-all"
                      aria-label="View Code on GitHub"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
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
