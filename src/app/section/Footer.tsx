import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip mt-8">
      <div className="absolute h-[50px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
      <div className="container mx-auto">
        <div className="border-white/15 py-6 text-sm flex flex-col items-center text-center">
          <div className="text-white/70">&copy; 2024. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
