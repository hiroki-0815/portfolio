import React from "react";

const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div
        className="absolute h-[50px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10
      bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm">
          <div className="text-white/70">&copy; 2024. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
