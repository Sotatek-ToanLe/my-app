import { AnyAction } from "redux";
import { Todo } from "../../types";
import {
  ACTION_ADD_SUCCESS,
  ACTION_EDIT_SUCCESS,
  ADD_TODO,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  EDIT_TODO,
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
} from "../constant";

const initialState = {
  todo: [] as Todo[],
  loading: false,
  total: 0,
};
export const todoReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_TODO_LIST:
      return { ...state };
    case GET_TODO_LIST_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        loading: true,
      };
    case "GET_TOTAL":
      return {
        ...state,
        total: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
      };
    case EDIT_TODO:
      return {
        ...state,
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        loading: true,
      };
    case ACTION_ADD_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        loading: true,
      };
    case ACTION_EDIT_SUCCESS:
      return {
        ...state,
        todo: action.payload,
        loading: true,
      };
    default:
      return { ...state };
  }
};
