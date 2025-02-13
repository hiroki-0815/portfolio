import React from "react";

interface Props {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({ eyebrow, title, description }: Props) => {
  return (
    <div className="text-center">
      <h3
        className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text
        font-extrabold tracking-wide text-sm uppercase mt-6 md:text-2xl lg:text-3xl "
      >
        {eyebrow}
      </h3>
      <h1 className="text-lg font-serif capitalize mt-6 tracking-widest md:text-3xl lg:text-5xl">
        {title}
      </h1>
      <p className="text-white/60 mt-6 text-sm md:text-lg">{description}</p>
    </div>
  );
};

export default SectionHeader;
