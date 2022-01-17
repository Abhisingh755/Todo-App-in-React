// import { Todoinput } from "./Todoinput";
// import {TodoItem} from "./TodoItem"
// import "./TodoCss"
import "./style.css"
export      const TodoItem= ({title,status, id,deleteItems}) => {
 const deleteData = (e) => {
deleteItems(id)
 }
    
    return   <>
 <div className="list_items">
    <li> {`${title}`}</li> 
  <button className="rmv_btn" onClick={deleteData}  title="Remove Items from  your grocery List">X</button>
   </div>
   </>
}