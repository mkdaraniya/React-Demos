import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../features/todo/todoSlice';


function Todos() {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md">
          <span className="text-gray-300">{todo.text}</span>
          <div className="space-x-2">
            <button
              onClick={(e) => dispatch(updateTodo({id: todo.id, text: prompt('Update todo:', todo.text)}))}
              className="text-green-500 hover:text-green-400"
            >
              Update
            </button>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              className="text-red-500 hover:text-red-400"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Todos