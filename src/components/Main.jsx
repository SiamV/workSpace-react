import React from "react";
import BooksInfo from "./BooksInfo";
import CreateBook from "./CreateBook";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";
import BookDetail from "./BookDetail";

const Main = () => {
  return (
    <div>
      <h1>Books library</h1>
      <Menu />
      <Routes>
        <Route exact path={"/"} element={<BooksInfo />} />
        <Route path={"/create-new-book"} element={<CreateBook />} />
        <Route path={"/book/:idBook"} element={<BookDetail />} />
      </Routes>
    </div>
  );
};

export default Main;
