import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[50px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10"></div>
      <div className="container mx-auto">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center text-center">
          <a
            href="https://github.com/hiroki-0815/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-8 py-2 bg-white text-gray-900 text-[14px] rounded hover:bg-gray-200 transition mb-4 inline-block"
          >
            Visit GitHub
          </a>
          <div className="text-white/70">&copy; 2024. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
