import React from "react"

const  ToDoList = (props) => {

    return <> 
 <div>
 <button onClick= {() => {
     props.onSelect(props.id);
 } }  
 >Delete</button>
 <li> {props.text}</li> 

 </div>
</>

}

export default ToDoList