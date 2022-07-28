import React from "react";
import EditButton from "./EditButton";

const ListTodo = (props) => {
    return (
        <div>{props.listTodo.map(list =>
            <div key={list.id}>
                <input
                    onChange={(e) => {
                        // let editList = props.listTodo.map(item => item.id === list.id
                        //     ? list.list = e.target.value
                        //     : null)
                        // props.setListTodo(editList)
                    }}
                    value={list.list} />
                <EditButton id={list.id} list={props.listTodo} />
                <button onClick={() => {
                    let newList = props.listTodo.filter(item => item.id !== list.id)
                    props.setListTodo(newList)
                }}>Delete</button>
            </div>
        )}
        </div>
    )
}

export default ListTodo;