import React, { useContext, useState } from "react";
import classes from "./createBook.module.css";
import { dataContainer } from "./Store";
import { NavLink } from "react-router-dom";

const CreateBook = ({ book, updateMode, setUpdateMode }) => {
  let data = useContext(dataContainer);
  const [title, setTitle] = useState(updateMode ? book.title : "");
  const [desc, setDesc] = useState(updateMode ? book.description : "");
  const [url, setUrl] = useState(updateMode ? book.src : "");
  const ref = React.createRef();

  let createBook = () => {
    data.createBook({
      id: crypto.randomUUID(),
      title: title,
      description: desc,
      src: url,
    });
  };

  let updateBook = () => {
    data.updateBook(book.id, {
      id: book.id,
      title: title,
      description: desc,
      src: url,
    });
    setUpdateMode(false);
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
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              let url = reader.result;
              setUrl(url);
            };
          }}
        />
      </label>
      <label>
        <img src={url} alt={"choose a foto"} width={"150px"} />
      </label>
      <NavLink to={"/"}>
        {updateMode ? (
          <button onClick={updateBook}>Update</button>
        ) : (
          <button onClick={createBook}>Create</button>
        )}
      </NavLink>
    </div>
  );
};

export default CreateBook;
