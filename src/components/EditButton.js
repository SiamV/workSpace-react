import React, { useState } from "react";

const EditButton = (props) => {
    const [editMode, setEditMode] = useState(false)

    let editModeOn = () => {
        setEditMode(true)

    }

    return (
        <div>
            {editMode
                ? <button onClick={() => { setEditMode(false) }}>Sent</button>
                : <button onClick={editModeOn}>Edit
                </button>
            }

        </div>
    )
}

export default EditButton;