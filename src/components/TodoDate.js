import React, { useState } from "react";
import ListTodo from "./ListTodo";

const TodoDate = () => {
    const [dateTodo, setDateTodo] = useState('')
    const [listTodo, setListTodo] = useState([])

    let dateFromInput = (e) => {
        setDateTodo(e.target.value)
    }
    let createNewTodo = () => {
        let newList = {
            id: (new Date()).getTime(),
            list: dateTodo
        }
        setListTodo([...listTodo, newList])
    }

    return (
        <div>
            <input onChange={dateFromInput} value={dateTodo} />
            <button onClick={createNewTodo}>Create</button>
            <ListTodo listTodo={listTodo} setListTodo={setListTodo} />
        </div>
    )
}

export default TodoDate;