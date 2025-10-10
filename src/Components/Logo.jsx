import React from "react";

const Logo = () => {
  return (
    <div>
      <a href="/" className="lg:hidden flex items-center gap-1.5  justify-center py-2 bg-white">
        <img src="/logo.png" alt="" className="w-6" />
        <p className="font-bold text-[#7a47c1] text-md">HERO.IO</p>
      </a>
    </div>
  );
};

export default Logo;
