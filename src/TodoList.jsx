import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodos, removeTodo } from '../features/todoSlice';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
