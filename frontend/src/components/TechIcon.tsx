import React from "react";

interface Props {
  component: React.ElementType;
  className?: string;
}

const TechIcon = ({ component: Component, className = "" }: Props) => {
  return <Component className={`size-4 md:size-12 ${className}`} />;
};

export default TechIcon;
