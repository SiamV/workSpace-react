import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./menu.module.css";

const Menu = () => {
  return (
    <div className={classes.containerMenu}>
      <NavLink to={"/"}>
        <button>Main</button>
      </NavLink>
      <NavLink to={"/create-new-book"}>
        <button>Create</button>
      </NavLink>
    </div>
  );
};

export default Menu;
