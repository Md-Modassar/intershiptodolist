import React from 'react'
import "./App.css"

const Todo = (props) => {

  return (

    <>
       <div className='todo'>
       <i class="ri-pencil-fill" onClick={()=>props.onEdit(props.id)}></i>
       <i class="ri-delete-bin-6-fill" onClick={()=>{
        props.onSelect(props.id)
       }}></i>
         <li>{props.text}</li>

        </div>
    </>
        
    
  )
}

export default Todo