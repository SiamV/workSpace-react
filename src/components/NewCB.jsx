import React from 'react'

const NewCB = ({setNewCB}) => {
  return (
    <div>
        <button onClick={()=>{setNewCB('newDateFromNEwCB')}}>new Date</button>
    </div>
  )
}

export default NewCB
