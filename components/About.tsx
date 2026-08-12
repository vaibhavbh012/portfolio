"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Cpu,
  BarChart3,
  Terminal,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { personalInfo } = portfolioData;

  const coreFocusAreas = [
    {
      icon: <Brain className="w-4 h-4 text-blue-400 shrink-0" />,
      title: "Machine Learning",
      description: "Supervised & Unsupervised pipelines, Ensemble methods, and predictive modeling.",
    },
    {
      icon: <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />,
      title: "Deep Learning",
      description: "Convolutional Neural Networks (CNNs), Transfer Learning, and Medical AI diagnosis.",
    },
    {
      icon: <BarChart3 className="w-4 h-4 text-indigo-400 shrink-0" />,
      title: "Data Science & Analytics",
      description: "EDA, high-volume statistical analysis, feature engineering, and market intelligence.",
    },
    {
      icon: <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />,
      title: "Python Engineering",
      description: "Core algorithms, data structures, model training, and automated workflows.",
    },
    {
      icon: <Database className="w-4 h-4 text-purple-400 shrink-0" />,
      title: "SQL & Databases",
      description: "Relational data extraction, schema management, and complex data querying.",
    },
    {
      icon: <Code className="w-4 h-4 text-rose-400 shrink-0" />,
      title: "NLP & Topic Mining",
      description: "TF-IDF vectorization, LDA Topic Modeling, and unstructured text analysis.",
    },
  ];

  return (
    <section id="about" className="w-full py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#172233]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column: Section Index & Title */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <div className="lg:sticky lg:top-24">
            <span className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 select-none block mb-0.5 sm:mb-1">
              01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              About
            </h2>
            <p className="text-xs font-mono text-slate-400 mt-1 sm:mt-2">
              Background, focus areas, and technical core
            </p>
          </div>
        </div>

        {/* Right Column: Narrative & Focus Cards */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8">
          {/* Narrative Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-7 rounded-2xl bg-[#0b1018] border border-[#172233] shadow-lg"
          >
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {personalInfo.aboutDescription}
            </p>
          </motion.div>

          {/* Compact Focus Cards (1 Column on Mobile, 2 on Tablet/Desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {coreFocusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="p-1.5 rounded-lg bg-[#0f1724] border border-[#1e2e47]">
                    {area.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-mono">
                    {area.title}
                  </h3>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
