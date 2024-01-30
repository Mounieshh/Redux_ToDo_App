/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

// Reading data
function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="font-bold text-xl m-3 p-3">Todos</div>
      {todos.map((todo) => (
        <div className= "border-2 border-black p-1 m-3 list-none"key={todo.id}>
          <li>{todo.text}
          </li>
          <div className="w-full text-end">
          <button className = "border-none text-end bg-slate-600"onClick={() => dispatch(removeTodo(todo.id))}>
            ❌
          </button>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default Todos;
