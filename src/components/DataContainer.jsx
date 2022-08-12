import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

export let dataContainer = React.createContext(null);

const DataContainer = () => {
  const [dataDetails, setDataDetails] = useState([
    {
      id: Math.floor(Math.random() * 100),
      name: "Harry Poter",
      description: "My lovly book",
      src: "",
    },
    {
      id: Math.floor(Math.random() * 100),
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

export default DataContainer;
