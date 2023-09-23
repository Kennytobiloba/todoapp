import AddTodoForm from "./AddTodoForm"
import UpdateTodoform from "./UpdateTodoform"
import SingleTodoCard from "./singleTodoCard"
import {useSelector, useDispatch} from "react-redux"
import { todosCleared } from "../store/features/todo/todoSlice"




export const Card = () => {
  const myTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch()
  const toggleForm = useSelector((state) => state.todos.toggleForm);

  return (
    <div className='w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl rounded-lg  p-2 items-center flex flex-col space-y-10 justify-between' > 
    <div className='flex flex-col space-y-10 w-full h-3/4 min-h-max items-center'><h1 className="text-3xl font-semibold underline">My todo list</h1>
    <div className="w-3/4">
      {toggleForm ? <AddTodoForm/> : <UpdateTodoform/>}
        
        
    </div>
   <div className="w-3/4">
    <ul className=" w-full max-h-72 overflow-y-scroll">
      {
        myTodos.map((todo) => (
          <li key={todo.id} className="mb-3"> <SingleTodoCard id={todo.id} name={todo.name}/></li>
        ))
      }
     </ul>
   
   </div>

    </div>
    
   
     <button onClick={() => dispatch(todosCleared())} className='bg-red-500 hover:bg-re-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline'>Clear</button>
 </div>
  )
}
