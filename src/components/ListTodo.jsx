import React from "react";
import List from "./List";
import classes from "./listTodo.module.css"

const ListTodo = ({ listTodo, setListTodo }) => {
    return (
        <div className={classes.mainBlockListTodo}>
            {listTodo.map(list =>
                <div key={list.id}>
                    <List idListItem={list.id}
                        listItem={list.list}
                        listTodo={listTodo}
                        setListTodo={setListTodo} />
                </div>
            )}
        </div>
    )
}

export default ListTodo;
