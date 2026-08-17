"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#05070b]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-[#0b1018] border border-[#1e2e47] p-5 sm:p-8 shadow-2xl z-10 text-white"
        >
          {/* Close button with 44px touch target */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center gap-2 mb-2.5 pr-10">
            <span className="px-2.5 py-0.5 rounded-md bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-[10px] sm:text-xs font-mono font-semibold">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2.5 py-0.5 rounded-md bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-[10px] sm:text-xs font-mono">
                {project.badge}
              </span>
            )}
            <span className="text-slate-500 text-xs font-mono">{project.date}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-white mb-2">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-xs sm:text-sm font-mono text-blue-400 mb-4">
              {project.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
            {project.description}
          </p>

          {/* Key Architecture Details */}
          {project.details && (
            <div className="space-y-4 mb-6">
              {/* Architecture Blueprint */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#070b12] border border-[#172233]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-cyan-400 font-semibold">
                  <Cpu className="w-4 h-4 shrink-0" />
                  <span>Model Architecture</span>
                </div>
                <p className="text-xs font-mono text-slate-300 leading-relaxed break-words">
                  {project.details.architecture}
                </p>
              </div>

              {/* Dataset Specifications */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#070b12] border border-[#172233]">
                <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-indigo-400 font-semibold">
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>Dataset & Corpus</span>
                </div>
                <p className="text-xs font-mono text-slate-300 leading-relaxed">
                  {project.details.dataset}
                </p>
              </div>

              {/* Evaluation Metrics Cards */}
              {project.details.evaluationMetrics && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2 flex items-center gap-2">
                    <BarChart className="w-4 h-4 text-cyan-400" />
                    <span>Evaluation Benchmarks</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {project.details.evaluationMetrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3 rounded-xl bg-[#070b12] border border-[#172233] text-center"
                      >
                        <div className="text-xs sm:text-sm font-bold font-mono text-cyan-300">
                          {m.score}
                        </div>
                        <div className="text-[10px] uppercase font-mono text-slate-400 mt-0.5">
                          {m.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[11px] font-mono text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-[#172233] flex flex-wrap items-center justify-end gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-200 text-xs font-mono font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial min-h-[42px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-mono font-semibold transition-colors shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial min-h-[42px] px-5 py-2.5 rounded-xl bg-[#070b12] hover:bg-[#0f1724] border border-[#172233] text-slate-200 text-xs font-mono font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
