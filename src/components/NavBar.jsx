import React from "react";
import { NavLink } from "react-router-dom";
import style from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBarContainer}>
      <NavLink to={"/project-search"}>
        <button>Search </button>
      </NavLink>
      <NavLink to={"/modal"}>
        <button>Modal</button>
      </NavLink>
      <NavLink to={"/"}>
        <button>New Project</button>
      </NavLink>
      <NavLink to={"/"}>
        <button>New Project</button>
      </NavLink>
    </div>
  );
};

export default NavBar;
