"use client";

import Footer from "../section/Footer";
import { Header } from "../section/Header";
import { HeroSection } from "../section/Hero";
import ProjectsSection from "../section/Projects";

export default function HomePage() {
  return (
    <div className="px-3 md:px-7 py-5">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
