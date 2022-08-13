import React, { useContext, useState } from "react";
import classes from "./createBook.module.css";
import { dataContainer } from "./DataContainer";
import { NavLink } from "react-router-dom";

const CreateBook = () => {
  let data = useContext(dataContainer);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("start");
  const ref = React.createRef();

  let createBook = () => {
    // data[1]([
    //   ...data[0],
    //   {
    //     id: Date.now(),
    //     name: title,
    //     description: desc,
    //     src: "",
    //   },
    // ]);
    console.log("url:", url);
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
        <img src={url} alt={'choose a foto'} width={'150px'}/>
      </label>
      <NavLink to={"/"}>
        <button onClick={createBook}>Create</button>
      </NavLink>
    </div>
  );
};

export default CreateBook;
