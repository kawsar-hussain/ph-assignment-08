import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/app">App</NavLink>
        <NavLink to="/installations">Installations</NavLink>
      </nav>
    </div>
  );
};

export default Header;
