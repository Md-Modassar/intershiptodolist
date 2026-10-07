
import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [inputelemet,setInputelement]=useState("")
  const [items,setItem]=useState([])
  const [editeid,setEditeid]=useState(null)





  const elementEvent=(event)=>{
    setInputelement(event.target.value)
  }
  
  const listofitem=()=>{
    if(inputelemet.trim()==="")return;
    //edite existing item
    if(editeid!==null){
      setItem((olditem)=>{
        return olditem.map((item,index)=>{
          return index===editeid?inputelemet:item;
        })
      })
      setEditeid(null)
      setInputelement("")
      return
    }
    //add new item
    setItem((olditem)=>{
      return[...olditem,inputelemet]
    })
    setInputelement("")

  }
  const edite=(id)=>{
    setInputelement(items[id])
    setEditeid(id)
  }
  const deleteItem=(id)=>{
    setItem((olditem)=>{
      return olditem.filter((arrele,index)=>{
        return index!==id
      })
    })
  }
  return (
    <div className="App">
      <h1>TodoList</h1>
      <div className='main'>
        <div className='add'><input type='text' placeholder='add element' value={inputelemet} onChange={elementEvent}/><button onClick={listofitem}>add</button></div>
       
       <ol>
         {
          items.map((itemval,index)=>{
          return <Todo key={index} id={index} text={itemval} onSelect={deleteItem} onEdit={edite}/>
         })}
       </ol>
      </div>
    </div>
  );
}

export default App;
