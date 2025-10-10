import React from "react";
import { NavLink } from "react-router";

const Header2 = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a href="/" className="flex items-center gap-1.5">
          <img src="/src/assets/logo.png" alt="" className="w-10" />
          <p className="font-bold text-[#7a47c1] text-xl">HERO.IO</p>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <nav className="flex gap-8 font-medium text-[#151515]">
          <NavLink to="/">
            <i className="fa-regular fa-house"></i>Home
          </NavLink>
          <NavLink to="/app">
            <i className="fa-brands fa-app-store"></i>App
          </NavLink>
          <NavLink to="/installations">
            <i className="fa-solid fa-mobile-screen-button"></i>Installations
          </NavLink>
        </nav>
      </div>
      <div className="navbar-end">
        <a href="https://github.com/kawsar-hussain" target="blank">
          <button className="btn">
            <i className="fa-brands fa-github"></i>Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header2;
