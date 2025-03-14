"use client";

import me from "../assets/me.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Hero");

  return (
    <div className="py-10 relative z-0 overflow-x-clip" id="home">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="font-serif text-white text-3xl md:text-5xl text-center mt-8">
          {t("name")}
        </h1>
        <ul className="mt-4">
          <li>
            <div className="flex flex-row gap-2 items-center">
              <div className=" text-white text-[14px]">GitHub:</div>
              <div>
                <a
                  href="https://github.com/hiroki-0815/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[14px] underline rounded transition inline-block"
                >
                  https://github.com/hiroki-0815/
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="text-white text-[14px] rounded transition inline-block">
              Gmail: hirokikusaka765@gmail.com
            </div>
          </li>
        </ul>
        <div className="max-w-[900px] w-full flex flex-col items-center">
          <div className="mt-6 w-full">
            <Image src={me} className="rounded-md w-full" alt={t("altText")} />
          </div>
          <p className="mt-4 px-5 py-4 text-center rounded-md text-white md:text-lg w-full">
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
};
