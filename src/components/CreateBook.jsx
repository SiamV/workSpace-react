import React, { useContext, useState } from "react";
import classes from "./createBook.module.css";
import { dataContainer } from "./DataContainer";
import { NavLink } from "react-router-dom";

const CreateBook = () => {
  let data = useContext(dataContainer);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState("");
  const ref = React.createRef();

  let createBook = () => {
    data[1]([
      ...data[0],
      {
        id: Date.now(),
        name: title,
        description: desc,
        src: "",
      },
    ]);
  };

  return (
    <div className={classes.mainContainer}>
      <label>
        Title:
        <input
          type={"text"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <label>
        Description:
        <input
          type={"text"}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </label>
      <label>
        Choose img:
        <input
          type="file"
          accept={"image/*"}
          ref={ref}
          onChange={(e) => {
            setSrc(e.target.files[0]);
          }}
        />
      </label>
      <label>
        <img src={`/${src}`} alt={src} />
      </label>
      {/* don't work NavLink */}

      <NavLink to={"/"}>
        <button onClick={createBook}>Create</button>
      </NavLink>
    </div>
  );
};

export default CreateBook;
