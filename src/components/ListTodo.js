import React from "react";
import List from "./List";

const ListTodo = ({ listTodo, setListTodo }) => {
    return (
        <div>{listTodo.map(list =>
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