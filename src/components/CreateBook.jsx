import React, { useState } from "react";
import classes from "./createBook.module.css";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [src, setSrc] = useState("");
  const ref = React.createRef();

  let createBook = () => {
    console.log(title, desc, src);
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
          onChange={()=> {setSrc(ref.current.files[0].name)}}
        />
      </label>
      <label>
        <img src={`/${src}`} alt={src} />
      </label>
      <button onClick={createBook}>Create</button>
    </div>
  );
};

export default CreateBook;
