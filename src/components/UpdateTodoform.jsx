import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoUpdate } from "../store/features/todo/todoSlice";

const UpdateTodoform = () => {
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate);
  const [update, setUpate] = useState(todoToUpdate.name);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (/^\s*$/.test(update)) {
      alert("Enter a todo");
      setUpate("");
      return;
    } else {
      dispatch(
        todoUpdate({
          id: todoToUpdate.id,
          name: update,
        })
      );
    }
  };

  return (
    <form action="" className="flex space-x-3" onSubmit={handleSubmit}>
      <input
        value={update}
        onChange={(e) => setUpate(e.target.value)}
        type="text"
        className="shadow appearance-none border rounded "
        placeholder="update"
      />
      <button
        type="submit" // Corrected the typo here
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-7  rounded focus:outline focus:shadow-outline"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateTodoform;
