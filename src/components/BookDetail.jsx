import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataContainer } from "./Store";
import fotoDefault from "../img/default.png";
import classes from "./bookDetail.module.css";
import CreateBook from "./CreateBook";

const BookDetail = () => {
  let navigate = useNavigate();
  const [updateMode, setUpdateMode] = useState(false);
  let { idBook } = useParams();
  let { books, deleteBook } = useContext(dataContainer);
  let book = books.find((it) => it.id === idBook);
  let clickUpdateBook = () => {
    setUpdateMode(!updateMode);
  };
  let clickDeleteBook = () => {
    deleteBook(book.id);
    navigate("/");
  };
  return (
    <div className={classes.bookContainer}>
      {updateMode ? (
        // with props updateMode
        <CreateBook
          book={book}
          updateMode={updateMode}
          setUpdateMode={setUpdateMode}
        />
      ) : (
        <div>
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
          <div className={classes.blockButton}>
            <button onClick={clickUpdateBook}>Update</button>
            <button onClick={clickDeleteBook}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default BookDetail;
