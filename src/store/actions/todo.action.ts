import { Todo } from "../../types";
import {
  ACTION_EDIT_SUCCESS,
  ACTION_ADD_SUCCESS,
  ADD_TODO,
  EDIT_TODO,
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
} from "../constant";

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST,
  };
};
export const getTodoListSuccess = (todos: Todo[]) => {
  return {
    type: GET_TODO_LIST_SUCCESS,
    payload: todos,
  };
};

export const addTodo = (todo: Todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const editTodo = (todo: Todo) => {
  return {
    type: EDIT_TODO,
    payload: todo,
  };
};
export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const deleteTodoSuccess = (todos: Todo[]) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: todos,
  };
};
export const actionEditSuccess = (todos: Todo[]) => {
  return {
    type: ACTION_EDIT_SUCCESS,
    payload: todos,
  };
};
export const actionAddSuccess = (todos: Todo[]) => {
  return {
    type: ACTION_ADD_SUCCESS,
    payload: todos,
  };
};
