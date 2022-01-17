import React, { useState } from "react"
import ToDoList from "./src/my"

const Abhi= () => {

    const [InputList, setInputList ] = useState(" ")
    const [Items , setItems] = useState([]);
    const ItemEvents = (event) => { 
        setInputList(event.target.value)
    }
  const listItems = () => {
setItems((e) => {
    return [...e, InputList]
}) 
setInputList(" ")
  }  
  const deleteItems= (id) => {
    console.log("deleted")

    setItems((e) => {
        return e.filter((arrElem, index) => {
            return index !== id
        })
    })
}

    return (
        <>
        <div>
            <div className="center_div"> </div>
            <br/>
            <h2>ToDo List</h2>
            <br/>
            <input placeholder="Notes to do" type="text" onChange={ItemEvents}/>
            <button onClick={listItems}>Add</button>
            
              {  Items.map((itemValue, index) => {
              return  <ToDoList text = {itemValue} key={index} id={index} onSelect={deleteItems} />
            })
        }

        </div>
        </>
    )
}

export default Abhi;