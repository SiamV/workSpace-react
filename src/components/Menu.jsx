import React from 'react'
import {NavLink} from "react-router-dom";
import classes from "./menu.module.css"

const Menu = () => {
  return (
    <div className={classes.containerMenu}>
        <button><NavLink to={'/'}>Main</NavLink></button>
        <button><NavLink to={'/create-new-book'}>Create</NavLink></button>
    </div>
  )
}

export default Menu
