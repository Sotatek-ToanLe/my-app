import axios from "axios";
import {
  all,
  call,
  fork,
  put,
  StrictEffect,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { Todo, TodoRequest } from "../../types";
import {
  GET_TODO_LIST,
  ADD_TODO,
  DELETE_TODO_SUCCESS,
  EDIT_TODO,
} from "../constant";
import { getTodoListSuccess, getTotalCount } from "../actions";
import { AnyAction } from "redux";

const url = "http://localhost:2000/todos";

const getTodoList = async (params?: TodoRequest) => {
  const response = await axios.get<Todo[]>(url, {
    params: params ? params : undefined,
  });
  if (response.data) {
    return response.data;
  }
};

export function* getTodoListWithAPI(
  action: AnyAction
): Generator<StrictEffect, any, Todo[]> {
  const response = yield call(getTodoList, action.payload);
  const result = yield call(getTodoList);
  //@ts-ignore
  yield put(getTodoListSuccess({ todos: response }));
  yield put(getTotalCount(result.length));
}

export function* watchGetTodoList() {
  yield takeLatest(GET_TODO_LIST, getTodoListWithAPI);
}

const deleteTodo = async (id: number) => {
  const res = await axios.delete(`${url}/${id}`);
  if (res) {
    return res;
  }
};
function* deleteTodoWithAPI(
  action: AnyAction
): Generator<StrictEffect, any, any> {
  try {
    yield call(deleteTodo, action.payload);
  } catch (error) {
    console.log(error);
  }
}
export function* watchDeleteTodo() {
  yield takeEvery(DELETE_TODO_SUCCESS, deleteTodoWithAPI);
}

const postTodo = async (todo: Todo) => {
  const res = await axios.post(url, { ...todo });
  if (res) {
    return res;
  }
};

function* postTodoWithAPI(
  action: AnyAction
): Generator<StrictEffect, any, Todo[]> {
  try {
    yield call(postTodo, action.payload);
  } catch (error) {
    console.log(error);
  }
}
const putTodo = async (todo: Todo) => {
  const res = await axios.put(`${url}/${todo.id}`, { ...todo });
  if (res) {
    return res;
  }
};

function* putTodoWithAPI(
  action: AnyAction
): Generator<StrictEffect, any, Todo[]> {
  try {
    yield call(putTodo, action.payload);
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, postTodoWithAPI);
}
export function* watchEditTodo() {
  yield takeEvery(EDIT_TODO, putTodoWithAPI);
}

export default function* todoSaga() {
  yield all([
    fork(watchGetTodoList),
    fork(watchEditTodo),
    fork(watchAddTodo),
    fork(watchDeleteTodo),
  ]);
}
