import { useState } from 'react';
import { BsCheckSquare, BsTrash } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { todoDelected , togggleInputForm} from '../store/features/todo/todoSlice';
import { useDispatch } from 'react-redux';

const SingleTodoCard = (props) => {
  const [done , setDone] = useState(false)
  const distpatch = useDispatch();
  return (
    <div className="flex justify-between bg-red-100 py-2 rounded shadow">
      <div className="px-4">
        <h1 className={done ? "font-semibold line-through" : "font-semibold"}>{props.name}</h1>
      </div>
      <div className="px-4 flex space-x-4">
        <BsCheckSquare onClick={() => setDone(!done)} className="cursor-pointer text-green-700" size={20} />
        <FaEdit onClick={() => distpatch(togggleInputForm({id: props.id, name:props.name,}))} className="cursor-pointer text-yellow-700" size={20} />
        <BsTrash onClick={()=> distpatch(todoDelected(props.id))} className="cursor-pointer text-red-700" size={20} />
      </div>
      
    </div>
  );
};

export default SingleTodoCard;
