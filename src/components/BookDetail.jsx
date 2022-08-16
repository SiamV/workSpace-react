import React, { useState, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { dataContainer } from "./Store";
import fotoDefault from "../img/default.png";
import classes from "./bookDetail.module.css";
import CreateBook from "./CreateBook";

const BookDetail = () => {
  const [updateMode, setUpdateMode] = useState(false);
  let { idBook } = useParams();
  let { books, deleteBook } = useContext(dataContainer);
  let book = books.find((it) => it.id === idBook);
  let clickUpdateBook = () => {
    setUpdateMode(!updateMode);
  };
  let clickDeleteBook = () => {
    deleteBook(book.id);
  };
  return (
    <div className={classes.bookContainer}>
      <div>
        {book.src.length > 0 ? (
          <img src={book.src} alt={"foto"} />
        ) : (
          <img src={fotoDefault} alt={"foto"} />
        )}
      </div>
      <div>
        <h1>{book.title}</h1>
        <div>{book.description}</div>
      </div>
      <div>
        <div>
          {updateMode ? (
            // with props updateMode
            <CreateBook
              book={book}
              updateMode={updateMode}
              setUpdateMode={setUpdateMode}
            />
          ) : (
            <button onClick={clickUpdateBook}>Update</button>
          )}
        </div>
        <div>
          <NavLink to={"/"}>
            <button onClick={clickDeleteBook}>Delete</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
