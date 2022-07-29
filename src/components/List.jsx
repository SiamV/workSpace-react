import React, { useState } from "react";

const List = ({ idListItem, listItem, listTodo, setListTodo }) => {
    const [editMode, setEditMode] = useState(false)
    const [localList, setLocalList] = useState(listItem)

    let editModeOn = () => {
        setEditMode(true)

    }
    let editSent = () => {
        let editedList = listTodo.map(item => item.id === idListItem ?
            { ...item, list: localList }
            : item)
        setListTodo(editedList)
        setEditMode(false)
    }
    return (
        <div>
            <input
                onChange={(e) => {
                    setLocalList(e.target.value)
                }}
                value={localList}
                readOnly={!editMode} />
            {editMode
                ? <div>
                    <button onClick={editSent}>Sent</button>
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