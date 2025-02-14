import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="px-3 md:px-7 py-5">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
