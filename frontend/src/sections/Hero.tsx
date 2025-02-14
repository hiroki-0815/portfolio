"use client";

import me from "@/assets/images/me.png";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="py-10 relative z-0 overflow-x-clip">
      <div className="container">
        <div className=" flex flex-col items-center">
          <Image
            src={me}
            className="w-[900px] rounded-md"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2 rounded-lg"></div>
        </div>
        <div className="mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8">
            Hiroki Kusaka
          </h1>
          <p className="mt-4 px-5 py-4 z-50 text-center rounded-md text-white bg-slate-700 md:text-lg">
            Hi, I'm Hiroki! I'm currently studying to become a software
            engineer, with a strong focus on JavaScript and its ecosystem. I
            specialize in TypeScript for type safety and maintainability, React
            for building dynamic user interfaces, and Express.js for backend
            development.
          </p>
        </div>
      </div>
    </div>
  );
};
