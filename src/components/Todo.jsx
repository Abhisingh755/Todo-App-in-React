import { Todoinput } from "./Todoinput";
import {TodoItem} from "./TodoItem"
import {nanoid} from "nanoid"
import {useState} from "react"
// import "./styles/TodoCss"

export const Todo = (props) => {
    const [list , setList] = useState([])
  

const handleClick = (data) =>{
    // console.log("recieved for child", {data});
    const payload ={
        title: data,
        status: false,
        id: nanoid(7),
    }
  setList ([...list, payload])
}

const  deleteItems=(id)=>{
    console.log(id)
    let newList = list.filter((e)=>e.id !==id);
    console.log(newList)
    setList(newList)
  }


    return <>
    <Todoinput getData ={handleClick}  />
    {list.map( (e) => (
        <TodoItem key={e.id} {...e}   deleteItems={deleteItems} />
    ))}
    </>

    
};
