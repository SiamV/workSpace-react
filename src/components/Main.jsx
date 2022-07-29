import React, { useState } from "react";
import ChangeDate from "./ChangeDate";
import NewCB from "./NewCB";

const Main = () => {
  const [list, setList] = useState("Fist Date");
    let newDate = (date) => {
        setList(date)
    }
  return (
    <div>
      <h1>Main</h1>
      <div>'Date from localState:'{list}</div>
      <ChangeDate setNewDateCB={newDate}/>
      <NewCB setNewCB={setList} />
    </div>
  );
};

export default Main;
