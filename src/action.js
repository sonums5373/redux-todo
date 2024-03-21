import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './action';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: new Date().getTime(),
    text,
    completed: false,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export default action