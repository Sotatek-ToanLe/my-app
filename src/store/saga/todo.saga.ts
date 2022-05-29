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
import { Todo } from "../../types";
import {
  ACTION_ADD_SUCCESS,
  GET_TODO_LIST,
  ACTION_EDIT_SUCCESS,
  ADD_TODO,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  EDIT_TODO,
} from "../constant";
import {
  actionAddSuccess,
  actionEditSuccess,
  deleteTodoSuccess,
  getTodoListSuccess,
} from "../actions";
import { AnyAction } from "redux";

const url = "https://jsonplaceholder.typicode.com/todos";

const getTodoList = async () => {
  const response = await axios.get<Todo[]>(url);
  if (response.data) {
    return response.data;
  }
};

function* getTodoListWithAPI(): Generator<StrictEffect, any, Todo[]> {
  const response = yield call(getTodoList);
  //@ts-ignore
  yield put(getTodoListSuccess({ todos: response }));
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
  const response = yield call(deleteTodo, action.payload);
  if (response.status === 200) {
    const todos = yield call(getTodoList);
    const result = todos.filter((el: Todo) => el.id !== action.payload);
    //@ts-ignore
    yield put(getTodoListSuccess({ todos: result }));
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
    const response = yield call(postTodo, action.payload);
    if (response) {
      const todos = yield call(getTodoList);
      const result = [...todos, action.payload];
      //@ts-ignore
      yield put(getTodoListSuccess({ todos: result }));
    }
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
    const response = yield call(putTodo, action.payload);
    if (response) {
      const todos = yield call(getTodoList);
      const result = todos.map((el) =>
        el.id === action.payload.id
          ? { ...el, title: action.payload.title }
          : { ...el }
      );
      //@ts-ignore
      yield put(getTodoListSuccess({ todos: result }));
    }
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
