import React from "react";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070b14] text-white selection:bg-blue-500/20 selection:text-blue-200">
      {/* Subtle night-sky particles */}
      <NeuralBackground />

      {/* Floating Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* About Section */}
      <About />

      {/* Achievements & Certifications */}
      <Achievements />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <BackToTop />
    </main>
  );
}
