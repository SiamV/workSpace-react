import React, { useState } from "react";
import ListTodo from "./ListTodo";
import classes from "./todoDate.module.css"

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
        <div className={classes.navMain}>
            <div >
                <input onChange={dateFromInput} value={dateTodo} />
                <button onClick={createNewTodo}>Create</button>
            </div>
            <ListTodo listTodo={listTodo} setListTodo={setListTodo} />
        </div>
    )
}

export default TodoDate;
