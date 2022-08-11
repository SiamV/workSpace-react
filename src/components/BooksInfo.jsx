import React from "react";
import { dataContainer } from "./DataContainer";

const BooksInfo = () => {
  let data = React.useContext(dataContainer);
  return (
    <div>
      {data[0].map((it) => (
        <div key={it.id}>
          <div>{it.name}</div>
          <div>{it.description}</div>
        </div>
      ))}
    </div>
  );
};

export default BooksInfo;
