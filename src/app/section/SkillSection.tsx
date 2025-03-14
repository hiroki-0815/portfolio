import React from "react";
import { useTranslations } from "next-intl";

const SkillSection = () => {
  const t = useTranslations("Skills");

  return (
    <section className="flex flex-col pb-6 lg:py-10">
      <div className="items-center">
        <h2 className="font-serif text-3xl text-white md:text-5xl mt-2 font-semibold">
          {t("Skills")}
        </h2>
        <p className="mt-4 px-5 py-4 z-50 rounded-md text-white bg-slate-700 md:text-lg">
          {t("mySkills")}
        </p>
      </div>
    </section>
  );
};

export default SkillSection;
