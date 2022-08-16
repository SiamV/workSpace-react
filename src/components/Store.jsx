import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

// use Default only for testing components. In other case alwais use Provider
export let dataContainer = React.createContext(null);

const Store = () => {
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      title: "Harry Poter",
      description: "My lovly book",
      src: "",
    },
    {
      id: crypto.randomUUID(),
      title: "Piter Pen",
      description: "This book I read in my school",
      src: "",
    },
  ]);

  let createBook = (book) => {
    setBooks([...books, book]);
  };

  let updateBook = (bookId, book) => {
    setBooks(books.map((it) => (it.id === bookId ? (it = book) : it)));
  };
  let deleteBook = (bookId) => {
    setBooks(books.filter((it) => it.id !== bookId));
  };

  return (
    <BrowserRouter>
      {/* If dont use Provider use DEFAULT value when create Context */}
      <dataContainer.Provider
        value={{ books, createBook, updateBook, deleteBook }}>
        <Main />
      </dataContainer.Provider>
    </BrowserRouter>
  );
};

export default Store;
