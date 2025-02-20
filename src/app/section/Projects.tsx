"use client";

import Image from "next/image";
import { Check, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

import languageExchangeApp from "../assets/languageExchangeApp.png";
import foodOrderingApp from "../assets/foodOrderingApp.png";
import Card from "../components/Card";

const portfolioProjects = [
  {
    titleKey: "languageExchangeApp.title",
    descriptionKey: "languageExchangeApp.description",
    frontendTools: [
      { frontendTool: "Typescript" },
      { frontendTool: "React.js" },
      { frontendTool: "Socket.io" },
      { frontendTool: "Tailwind CSS" },
      { frontendTool: "Shadcn" },
      { frontendTool: "Redux" },
    ],
    backendTools: [
      { backendTool: "Typescript" },
      { backendTool: "Socket.io" },
      { backendTool: "Express.js" },
      { backendTool: "MongoDB" },
    ],
    link: "https://langfy-frontend.onrender.com",
    image: languageExchangeApp,
    codeSrc: [
      { frontend: "https://github.com/hiroki-0815/langfy-frontend" },
      { backend: "https://github.com/hiroki-0815/langfy-backend" },
    ],
  },
  {
    titleKey: "foodOrderingApp.title",
    descriptionKey: "foodOrderingApp.description",
    frontendTools: [
      { frontendTool: "Typescript" },
      { frontendTool: "Vue.js" },
      { frontendTool: "Tailwind CSS" },
      { frontendTool: "Shadcn" },
    ],
    backendTools: [
      { backendTool: "Typescript" },
      { backendTool: "Express.js" },
      { backendTool: "MongoDB" },
    ],
    link: "https://mern-food-ordering-app-frontend-09fm.onrender.com",
    image: foodOrderingApp,
    codeSrc: [
      {
        frontend:
          "https://github.com/hiroki-0815/mern-food-ordering-app-frontend",
      },
      {
        backend:
          "https://github.com/hiroki-0815/mern-food-ordering-app-backend",
      },
    ],
  },
];

const ProjectsSection = () => {
  const t = useTranslations("Projects");

  return (
    <section className="flex flex-col pb-16 lg:py-24" id="projects">
      <div className="items-center">
        <h2 className="font-serif text-3xl text-white md:text-5xl mt-6 font-semibold">
          {t("featuredProjects")}
        </h2>
      </div>

      {portfolioProjects.map((project, projectIndex) => (
        <Card
          key={projectIndex}
          className="p-6 flex flex-col mt-10 bg-gray-800 rounded-3xl z-0 overflow-hidden 
            after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
            after:-outline-offset-2 after:rounded-3xl after:outline-white/20 lg:px-16 lg:py-14"
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

              <hr className="border-t-2 my-4 lg:my-6 border-white/5" />

              <div className="flex gap-2">
                {/* Frontend Section */}
                <div className="mb-4 px-6 py-4 rounded-md w-1/2 bg-slate-700">
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

                {/* Backend Section */}
                <div className="mb-4 px-6 py-4 rounded-md w-1/2 bg-slate-700">
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

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-950 h-12 w-auto px-6 rounded-md font-semibold inline-flex items-center justify-center my-6 hover:opacity-75 transition-opacity duration-200"
              >
                <span>{t("viewLiveSite")}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            <div className="relative justify-center items-center">
              <Image
                src={project.image}
                alt={t(project.titleKey)}
                className="mb-4 overflow-hidden object-cover rounded-md"
              />
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default ProjectsSection;
