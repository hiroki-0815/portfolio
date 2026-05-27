"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

import randomVideoCall from "../assets/random-video-call.png";
import searchFeature from "../assets/search-feature.png";
import chatFeature from "../assets/chat-feature.png";
import Card from "../components/Card";

type FeatureSlide = {
  titleKey: string;
  descriptionKey: string;
  image: StaticImageData;
};

const portfolioProjects = [
  {
    titleKey: "nativbaseApp.title",
    descriptionKey: "nativbaseApp.description",
    frontendTools: [
      { frontendTool: "Typescript" },
      { frontendTool: "Next.js" },
      { frontendTool: "React" },
      { frontendTool: "Socket.io" },
      { frontendTool: "React Query" },
      { frontendTool: "Zustand" },
      { frontendTool: "Leaflet" },
      { frontendTool: "Tailwind CSS" },
    ],
    backendTools: [
      { backendTool: "Typescript" },
      { backendTool: "Express.js" },
      { backendTool: "MongoDB" },
      { backendTool: "Socket.io" },
      { backendTool: "Redis" },
      { backendTool: "Twilio" },
      { backendTool: "Stripe" },
      { backendTool: "AWS S3" },
    ],
    link: "https://nativbase.com/ja",
    featureSlides: [
      {
        titleKey: "nativbaseApp.features.randomVideoCall.title",
        descriptionKey: "nativbaseApp.features.randomVideoCall.description",
        image: randomVideoCall,
      },
      {
        titleKey: "nativbaseApp.features.search.title",
        descriptionKey: "nativbaseApp.features.search.description",
        image: searchFeature,
      },
      {
        titleKey: "nativbaseApp.features.chat.title",
        descriptionKey: "nativbaseApp.features.chat.description",
        image: chatFeature,
      },
    ],
    codeSrc: [
      { frontend: "https://github.com/hiroki-0815/nativbase-frontend" },
      { backend: "https://github.com/hiroki-0815/nativbase-backend" },
    ],
  },
];

const ProjectFeatureSlideshow = ({ slides }: { slides: FeatureSlide[] }) => {
  const t = useTranslations("Projects");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPreviousSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  const showNextSlide = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="mb-6 overflow-hidden rounded-md bg-slate-900/70 ring-1 ring-white/10">
      <div className="relative mx-auto aspect-[16/9] w-full max-w-[720px] bg-black">
        <Image
          src={activeSlide.image}
          alt={t(activeSlide.titleKey)}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="mb-1 text-xs uppercase tracking-[0.2em] text-green-300">
            {activeIndex + 1} / {slides.length}
          </div>
          <h4 className="text-xl font-semibold text-white">
            {t(activeSlide.titleKey)}
          </h4>
          <p className="mt-2 text-sm leading-6 text-emerald-100 md:text-base">
            {t(activeSlide.descriptionKey)}
          </p>
        </div>

        <div className="flex items-center gap-4 md:self-end">
          <button
            type="button"
            aria-label="Previous feature"
            onClick={showPreviousSlide}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-green-200/70 bg-green-400 text-gray-950 shadow-lg shadow-green-950/30 transition hover:bg-green-300"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <div className="flex items-center gap-2.5">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.titleKey}
                type="button"
                aria-label={`Show ${t(slide.titleKey)}`}
                onClick={() => setActiveIndex(slideIndex)}
                className={`h-3 rounded-full transition-all ${
                  activeIndex === slideIndex
                    ? "w-10 bg-green-400 shadow-md shadow-green-950/40"
                    : "w-3 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next feature"
            onClick={showNextSlide}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-green-200/70 bg-green-400 text-gray-950 shadow-lg shadow-green-950/30 transition hover:bg-green-300"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const t = useTranslations("Projects");

  return (
    <section className="flex flex-col pb-16 lg:py-24" id="projects">
      <div className="items-center">
        <h2 className="font-serif text-3xl text-white md:text-5xl mt-2 font-semibold">
          {t("featuredProjects")}
        </h2>
      </div>
      {portfolioProjects.map((project, projectIndex) => (
        <Card
          key={projectIndex}
          className="p-6 flex flex-col bg-gray-800 rounded-3xl z-0 overflow-hidden 
            after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
            after:-outline-offset-2 after:rounded-3xl after:outline-white/20 lg:px-16"
          style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
        >
          <div className="grid gap-16">
            <div>
              <h3 className="text-green-500 text-2xl md:text-4xl mt-2 mb-4 lg:mt-5 font-semibold tracking-wide">
                {t(project.titleKey)}
              </h3>

              <div>
                <div className="text-xl mb-2">{t("aboutApp")}</div>
                <p className="px-5 py-4 bg-slate-700 rounded-md">
                  {t(project.descriptionKey)}
                </p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-12 w-auto items-center justify-center rounded-md bg-green-400 px-6 font-semibold text-gray-950 shadow-lg shadow-green-950/30 transition hover:bg-green-300"
                >
                  <span>{t("viewLiveSite")}</span>
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              )}

              <hr className="border-t-2 my-4 lg:my-6 border-white/5" />

              <ProjectFeatureSlideshow slides={project.featureSlides} />

              <div className="flex flex-col md:flex-row gap-2">
                <div className="mb-4 px-6 py-4 rounded-md md:w-1/2 bg-slate-700">
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-2">
                      {t("frontend")}
                    </div>
                    {project.codeSrc[0].frontend ? (
                      <a
                        href={project.codeSrc[0].frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-sm md:text-base transition duration-200 ease-in-out hover:font-bold"
                      >
                        {t("viewFrontendCode")}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base">
                        {t("noFrontendCode")}
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2 mb-1">
                    {project.frontendTools.map((item, toolIndex) => (
                      <li
                        key={toolIndex}
                        className="flex flex-row gap-2 items-center text-sm md:text-base lg:text-lg text-slate-50"
                      >
                        <Check className="w-5 h-5" />
                        <span>{item.frontendTool}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 px-6 py-4 rounded-md md:w-1/2 bg-slate-700">
                  <div className="mb-4">
                    <div className="text-2xl font-bold mb-2">
                      {t("backend")}
                    </div>
                    {project.codeSrc[1].backend ? (
                      <a
                        href={project.codeSrc[1].backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-sm md:text-base transition duration-200 ease-in-out hover:font-bold"
                      >
                        {t("viewBackendCode")}
                      </a>
                    ) : (
                      <span className="text-sm md:text-base">
                        {t("noBackendCode")}
                      </span>
                    )}
                  </div>

                  <ul className="flex flex-col gap-2 mb-1">
                    {project.backendTools.map((item, toolIndex) => (
                      <li
                        key={toolIndex}
                        className="flex flex-row gap-2 items-center text-sm md:text-base text-slate-50"
                      >
                        <Check className="w-5 h-5" />
                        <span>{item.backendTool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default ProjectsSection;
