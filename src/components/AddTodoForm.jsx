import { useState } from "react";
import { todoAdded } from "../store/features/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
const AddTodoForm = () => {
    const [input , setInput] = useState("");
    const dispatch = useDispatch()
    const hanndleSubmit = (e) =>{
        e.preventDefault()
        if (/^\s*$/.test(input)) {
            alert("Enter a todo");
            setInput("")
            return
          }else{
            dispatch(todoAdded({
                id:nanoid(),
                name:input
            }));
            setInput("")
          }
          
    }
    return (
       <>
        <form action= "" className="flex space-x-3" onSubmit={hanndleSubmit}>
            <input value={input} onChange={(e)=> setInput(e.target.value)}  type="text" className="shadow appearance-none border rounded  " placeholder="Add todo"/>
            <button type="sumbit" className="bg-blue-500 hover:bg-blue-700 text-white p-2 ">Add</button>
        </form>
       </>
      );
}
 
export default AddTodoForm;