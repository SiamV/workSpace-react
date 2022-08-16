import React from "react";
import { NavLink } from "react-router-dom";
import { dataContainer } from "./Store";
import fotoDefault from "../img/default.png";
import classes from './booksInfo.module.css'

const BooksInfo = () => {
  let data = React.useContext(dataContainer);
  return (
    <div className={classes.containerBooksInfo}>
      {data[0].map((it) => (
        <div key={it.id} className={classes.containerBook}>
          {it.src.length > 0 ? (
            <img src={it.src} alt={"foto"} />
          ) : (
            <img src={fotoDefault} alt={"foto"} />
          )}
          <NavLink to={`/book/${it.id}`}>
            <div>{it.name}</div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default BooksInfo;
