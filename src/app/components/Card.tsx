import React from "react";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const Card = ({ children, style, className = "" }: Props) => {
  return (
    <div
      className={`p-6 text-white flex flex-col mt-10 pb-4 bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
      after:-z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline 
      after:-outline-offset-2 after:rounded-3xl after:outline-white/20 lg:px-16 lg:py-14 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
