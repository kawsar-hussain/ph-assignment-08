import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white">
      <header className="px-20 py-5 flex items-center justify-between shadow-sm sticky">
        <a href="/" className="flex items-center gap-1.5">
          <img src="/src/assets/logo.png" alt="" className="w-10" />
          <p className="font-bold text-[#7a47c1] text-xl">HERO.IO</p>
        </a>
        <nav className="flex gap-6 font-medium text-[#151515]">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/app">App</NavLink>
          <NavLink to="/installations">Installations</NavLink>
        </nav>
        <a href="https://github.com/kawsar-hussain" target="blank">
          <button className="btn">
            <i class="fa-brands fa-github"></i>Contribute
          </button>
        </a>
      </header>
    </div>
  );
};

export default Header;
