import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

export let dataContainer = React.createContext(null);

const Store = () => {
  const [dataDetails, setDataDetails] = useState([
    {
      id: crypto.randomUUID(),
      name: "Harry Poter",
      description: "My lovly book",
      src: "",
    },
    {
      id: crypto.randomUUID(),
      name: "Piter Pen",
      description: "This book I read in my school",
      src: "",
    },
  ]);
  return (
    <BrowserRouter>
    <dataContainer.Provider value={[dataDetails, setDataDetails]}>
      <Main />
    </dataContainer.Provider>
    </BrowserRouter>
  );
};

export default Store;
