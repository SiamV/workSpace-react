import React, { useState } from 'react'

const ChangeDate = ({setNewDateCB}) => {
    const[newList, setNewList] = useState('')
    let newDate = () => {
        setNewDateCB(newList)
    }
  return (
    <div>
        <input onChange={(e)=>{setNewList(e.target.value)}} value={newList}/>
        <button onClick={newDate}>New Date</button>
    </div>
  )
}

export default ChangeDate
