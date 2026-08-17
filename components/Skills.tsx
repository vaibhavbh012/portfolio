"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Brain,
  Layers,
  Database,
  Wrench,
  BookOpen,
  Sparkles,
  Server,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code className="w-4 h-4 text-blue-400 shrink-0" />,
      skills: ["Python", "C++", "SQL"],
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: <Brain className="w-4 h-4 text-cyan-400 shrink-0" />,
      skills: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Regression",
        "Classification",
        "Feature Engineering",
        "Model Evaluation",
        "Ensemble Learning",
        "CNN",
        "Transfer Learning",
        "NLP",
      ],
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="w-4 h-4 text-fuchsia-400 shrink-0" />,
      skills: ["LLMs", "RAG", "Prompt Engineering"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-4 h-4 text-indigo-400 shrink-0" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-4 h-4 text-purple-400 shrink-0" />,
      skills: ["MySQL"],
    },
    {
      title: "Backend / API",
      icon: <Server className="w-4 h-4 text-teal-400 shrink-0" />,
      skills: ["FastAPI"],
    },
    {
      title: "Developer Tools & Environments",
      icon: <Wrench className="w-4 h-4 text-emerald-400 shrink-0" />,
      skills: [
        "Power BI",
        "Git",
        "GitHub",
        "Jupyter Notebook",
        "Google Colab",
        "VS Code",
      ],
    },
    {
      title: "Core Computer Science Coursework",
      icon: <BookOpen className="w-4 h-4 text-rose-400 shrink-0" />,
      skills: [
        "Data Structures and Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Object-Oriented Programming (OOP)",
        "Machine Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 px-4 sm:px-6 border-b border-[#172233]">
      <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest block mb-1">
            04 • Technical Toolbelt
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            Core technologies, ML architectures, and software stack
          </p>
        </div>

        {/* Skills Matrix Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#0b1018] border border-[#172233] hover:border-[#1e2e47] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-[#172233]">
                  <div className="p-1.5 rounded-lg bg-[#0f1724] border border-[#1e2e47]">
                    {group.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-mono">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-[#070b12] border border-[#172233] text-[11px] sm:text-xs font-mono text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
