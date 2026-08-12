"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070b] text-[#f1f5f9] flex flex-col items-center justify-start antialiased selection:bg-blue-600/30 selection:text-cyan-300">
      {/* Top Floating / Sticky Portrait Navbar */}
      <Navbar />

      {/* Main Centered Portrait Column */}
      <main className="w-full flex flex-col items-center">
        {/* Centered Portrait Hero */}
        <Hero />

        {/* 01 About Section */}
        <About />

        {/* 02 Experience Section */}
        <Experience />

        {/* 03 Featured Projects Section */}
        <Projects />

        {/* 04 Technical Skills Section */}
        <Skills />

        {/* 05 Credentials & Achievements Section */}
        <Achievements />

        {/* 06 Education Section */}
        <Education />

        {/* 07 Contact Section */}
        <Contact />

        {/* Minimalist Footer */}
        <Footer />
      </main>
    </div>
  );
}
