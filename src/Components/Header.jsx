import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="flex  items-center justify-center lg:justify-between px-0 lg:px-20 py-3 lg:py-5 shadow-sm sticky top-0 bg-white z-10">
      <a href="/" className="hidden lg:flex items-center gap-1.5 ">
        <img src="/logo.png" alt="" className="w-10" />
        <p className="font-bold text-[#7a47c1] text-xl">HERO.IO</p>
      </a>
      <nav className="flex gap-8 font-medium text-[#151515]">
        <NavLink to="/" className="text-center">
          <i className="fa-regular fa-house "></i>Home
        </NavLink>
        <NavLink to="/app" className="text-center">
          <i className="fa-brands fa-app-store"></i>App
        </NavLink>
        <NavLink to="/installations" className="text-center">
          <i className="fa-solid fa-mobile-screen-button"></i>Installations
        </NavLink>
      </nav>
      {/* i removed this btn from small device and visible its in footer for small device, cause of better nav design for small device */}
      <a href="https://github.com/kawsar-hussain" target="blank" className="hidden lg:block">
        <button className="btn">
          <i className="fa-brands fa-github"></i>Contribute
        </button>
      </a>
    </header>
  );
};

export default Header;
