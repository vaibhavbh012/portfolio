"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
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
    <div className="min-h-screen bg-[#05070b] text-[#f1f5f9] flex flex-col lg:flex-row antialiased selection:bg-blue-600/30 selection:text-cyan-300">
      {/* Persistent Left Sidebar (Desktop) */}
      <Sidebar />

      {/* Mobile Top Navigation Header */}
      <MobileNav />

      {/* Main Content Scroll Area (Right Side on Desktop) */}
      <main className="flex-1 lg:ml-64 xl:ml-72 min-w-0 min-h-screen flex flex-col bg-[#05070b]">
        {/* Split-Screen Hero */}
        <Hero />

        {/* Asymmetric 01 About Section */}
        <About />

        {/* Stacked 02 Experience Section */}
        <Experience />

        {/* Bento Grid 03 Projects Section (Centerpiece) */}
        <Projects />

        {/* Technical 04 Skills Matrix Dashboard */}
        <Skills />

        {/* Credentials & 05 Achievements Section (LeetCode & Certs) */}
        <Achievements />

        {/* Academic Profile 06 Education Section */}
        <Education />

        {/* Split-Screen 07 Contact Section */}
        <Contact />

        {/* Minimalist Footer */}
        <Footer />
      </main>
    </div>
  );
}
