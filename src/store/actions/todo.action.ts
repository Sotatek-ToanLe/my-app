import { Todo, TodoRequest } from "../../types";
import {
  ADD_TODO,
  EDIT_TODO,
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  DELETE_TODO,
  GET_TOTAL,
  GET_TOTAL_SUCCESS,
} from "../constant";

export const getTodoList = (params: TodoRequest) => {
  return {
    type: GET_TODO_LIST,
    payload: params,
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

export const getTotalCount = () => {
  return {
    type: GET_TOTAL,
  };
};
export const getTotalCountSuccess = (total: number) => {
  return {
    type: GET_TOTAL_SUCCESS,
    payload: total,
  };
};
