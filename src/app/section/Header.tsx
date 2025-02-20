"use client";

import Link from "next/link";
import React from "react";
import LocalSwitcher from "../components/LocalSwitcher";

export const Header = () => {
  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-10 px-6">
      {/* Navigation */}
      <nav className="flex flex-row justify-center items-center gap-5 p-2 border w-[400px] text-white/80 border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#home" onClick={(e) => handleScrollToSection(e, "home")}>
          Home
        </Link>
        <Link
          href="#projects"
          className="nav-item hover:text-white"
          onClick={(e) => handleScrollToSection(e, "projects")}
        >
          Projects
        </Link>
        <LocalSwitcher />
      </nav>
    </div>
  );
};
