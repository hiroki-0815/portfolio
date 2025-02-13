import React from "react";
import TechIcon from "./TechIcon";

interface ToolboxItem {
  title: string;
  iconType: React.ElementType;
  className?: string; // Optional className for individual items
}

interface ToolboxItemsProps {
  toolboxItems: ToolboxItem[];
  className?: string;
}

const ToolBoxItems = ({ toolboxItems, className = "" }: ToolboxItemsProps) => {
  return (
    <div className={`grid grid-cols-2 gap-4 max-w-[400px] ${className}`}>
      {toolboxItems.map((item) => (
        <div
          key={item.title}
          className="inline-flex items-center outline outline-1 outline-white/30 rounded-md px-2 py-1 gap-4"
        >
          <TechIcon component={item.iconType} className="text-[#98D9CE]" />
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ToolBoxItems;
