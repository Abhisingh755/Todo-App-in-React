import {useState} from "react"
import "./style.css"
export const Todoinput = ({getData}) => {

    const [text, setText] = useState("")

const show_change = (e) => {
setText(e.target.value)
}

const on_click = () =>{
getData(text);

}
    return <>
  <input type="text" placeholder="Todo " onChange={show_change}/>
  <button onClick={on_click} className="add_button"  title="Add Items in your grocery list">Submit </button>  

    </>
};
