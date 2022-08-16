import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { dataContainer } from "./Store";
import fotoDefault from "../img/default.png";
import classes from "./bookDetail.module.css";

const BookDetail = () => {
  let { idBook } = useParams();
  let data = useContext(dataContainer);
  let book = data[0].filter((it) => it.id === idBook);
  return (
    <div className={classes.bookContainer}>
      <div>
        {book[0].src.length > 0 ? (
          <img src={book[0].src} alt={"foto"} />
        ) : (
          <img src={fotoDefault} alt={"foto"} />
        )}
      </div>
      <div>
        <h1>{book[0].name}</h1>
        <div>{book[0].description}</div>
      </div>
    </div>
  );
};
export default BookDetail;
