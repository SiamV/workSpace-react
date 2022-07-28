import React, { useState } from "react";

const List = ({ idListItem, listItem, listTodo, setListTodo }) => {
    const [editMode, setEditMode] = useState(false)

    let editModeOn = () => {
        setEditMode(true)

    }

    return (
        <div>
            <input
                onChange={(e) => {
                    // let editList = listTodo.map(item => item.id === list.id
                    //     ? list.list = e.target.value
                    //     : null)
                    // setListTodo(editList)
                }}
                value={listItem} />
            {editMode
                ? <div>
                    <button onClick={() => { setEditMode(false) }}>Sent</button>
                </div>
                : <div>
                    <button onClick={editModeOn}>Edit</button>
                    <button onClick={() => {
                        let newList = listTodo.filter(item => item.id !== idListItem)
                        setListTodo(newList)
                    }}>Delete</button>
                </div>
            }
        </div>
    )
}

export default List;