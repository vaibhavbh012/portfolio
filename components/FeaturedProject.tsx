"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  BarChart3,
  TrendingUp,
  Cpu,
  Layers,
  CheckCircle2,
  Database,
  ArrowRight,
  PieChart,
  Activity,
  Code2,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData, Project } from "@/data/portfolio";
import ProjectModal from "./ProjectModal";

export default function FeaturedProject() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeModelTab, setActiveModelTab] = useState<"xgboost" | "rf" | "linear">("xgboost");
  const { featuredProject } = portfolioData;

  const modelComparison = {
    xgboost: {
      name: "XGBoost Regressor (Best)",
      r2: "0.864",
      rmse: "₹1.42 LPA",
      mae: "₹0.98 LPA",
      strengths: "Handles non-linear salary interactions & sparse TF-IDF text features optimally.",
    },
    rf: {
      name: "Random Forest Regressor",
      r2: "0.821",
      rmse: "₹1.68 LPA",
      mae: "₹1.15 LPA",
      strengths: "Robust ensemble bagging, captures categorical variance across company tiers.",
    },
    linear: {
      name: "Linear Regression (Baseline)",
      r2: "0.683",
      rmse: "₹2.35 LPA",
      mae: "₹1.74 LPA",
      strengths: "Fast baseline reference, provides direct feature weight interpretability.",
    },
  };

  const topSkillsDemand = [
    { skill: "Python", frequency: "78%", count: "76.1K jobs" },
    { skill: "SQL / Databases", frequency: "64%", count: "62.5K jobs" },
    { skill: "Machine Learning / AI", frequency: "58%", count: "56.6K jobs" },
    { skill: "Data Analytics & EDA", frequency: "52%", count: "50.8K jobs" },
    { skill: "NLP & Text Mining", frequency: "41%", count: "40.1K jobs" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        {/* Featured Project Header Banner */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/40 text-indigo-300 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>FEATURED INTERNSHIP SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Flagship <span className="gradient-text-ai">AI Project</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            End-to-end data science architecture engineered during the IBM Data Science Internship.
          </p>
        </div>

        {/* Large Dashboard-Style Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-slate-900/80 border-2 border-cyan-500/30 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl overflow-hidden"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-blue-950/90 border border-blue-500/50 text-blue-300 text-xs font-mono font-bold tracking-wide">
                {featuredProject.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                {featuredProject.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">{featuredProject.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 px-3 py-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>97,682 Postings Corpus</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {featuredProject.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mb-4">
                  {featuredProject.subtitle}
                </p>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Key Project Highlights</span>
                </h4>
                <ul className="space-y-2">
                  {featuredProject.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                  Core Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setSelectedProject(featuredProject)}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-cyan-500/25 hover:-translate-y-0.5"
                >
                  <Cpu className="w-4 h-4" />
                  <span>View Technical Details</span>
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Dashboard Simulation */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              {/* Card: Predictive Model Benchmarking */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-cyan-400" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      Salary Regressor Comparison
                    </h4>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-mono">Comparative Metrics</span>
                </div>

                {/* Model Selector Tabs */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 mb-4 text-xs font-mono">
                  <button
                    onClick={() => setActiveModelTab("xgboost")}
                    className={`py-1.5 px-2 rounded-lg text-center font-bold transition-all ${
                      activeModelTab === "xgboost"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    XGBoost
                  </button>
                  <button
                    onClick={() => setActiveModelTab("rf")}
                    className={`py-1.5 px-2 rounded-lg text-center font-bold transition-all ${
                      activeModelTab === "rf"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Random Forest
                  </button>
                  <button
                    onClick={() => setActiveModelTab("linear")}
                    className={`py-1.5 px-2 rounded-lg text-center font-bold transition-all ${
                      activeModelTab === "linear"
                        ? "bg-cyan-500 text-slate-950"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Linear Reg.
                  </button>
                </div>

                {/* Active Model Stats */}
                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 font-mono">R² Score</span>
                    <p className="text-base sm:text-lg font-extrabold text-cyan-300 font-mono mt-0.5">
                      {modelComparison[activeModelTab].r2}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 font-mono">RMSE Error</span>
                    <p className="text-base sm:text-lg font-extrabold text-indigo-300 font-mono mt-0.5">
                      {modelComparison[activeModelTab].rmse}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800/80">
                    <span className="text-[10px] text-slate-400 font-mono">MAE Error</span>
                    <p className="text-base sm:text-lg font-extrabold text-emerald-300 font-mono mt-0.5">
                      {modelComparison[activeModelTab].mae}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 italic">
                  &ldquo;{modelComparison[activeModelTab].strengths}&rdquo;
                </p>
              </div>

              {/* Card: In-Demand Skill Frequency Breakdown */}
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-indigo-400" />
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                      NLP In-Demand Skill Extraction
                    </h4>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">TF-IDF Extracted</span>
                </div>

                <div className="space-y-2.5">
                  {topSkillsDemand.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">{item.skill}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500 text-[11px]">{item.count}</span>
                          <span className="text-cyan-400 font-bold">{item.frequency}</span>
                        </div>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                          style={{ width: item.frequency }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
