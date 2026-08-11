"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group relative overflow-hidden"
    >
      {/* Top subtle glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Header Tags */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
              {project.category}
            </span>
          </div>
          <span className="text-xs text-slate-400 font-mono">{project.date}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 tracking-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Highlight Metric Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 group-hover:border-cyan-500/30 transition-colors mb-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
              Validated Metric
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono">
              {project.metric.value}
            </div>
          </div>
          <span className="text-xs text-slate-300 font-medium text-right max-w-[140px]">
            {project.metric.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Key Highlights */}
        <div className="space-y-2 mb-6">
          <h4 className="text-[11px] uppercase font-mono tracking-wider text-slate-400 font-semibold">
            Key Contributions
          </h4>
          <ul className="space-y-1.5">
            {project.highlights.slice(0, 4).map((h, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span className="line-clamp-2">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onSelect(project)}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-cyan-500/20"
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              aria-label="View on GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
