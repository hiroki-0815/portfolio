"use client";

import me from "../assets/me.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="py-10 relative z-0 overflow-x-clip" id="home">
      <div className="container mx-auto flex flex-col items-center">
        <Image src={me} className="w-[900px] rounded-md" alt={t("altText")} />

        <h1 className="font-serif text-white text-3xl md:text-5xl text-center mt-8">
          {t("name")}
        </h1>
        <p className="mt-4 px-5 py-4 z-50 text-center rounded-md text-white bg-slate-700 md:text-lg">
          {t("description")}
        </p>
      </div>
    </div>
  );
};
