import { LOGIN_SUCCESS, SET_TOKEN } from "../constant";
import {
  all,
  call,
  fork,
  put,
  StrictEffect,
  takeEvery,
} from "redux-saga/effects";
import { AnyAction } from "redux";
import axios from "axios";
import { LoginResponse } from "../../types";
import { setToken } from "../actions";

const url = "https://reqres.in/api/login";

const loginUser = async (email: string, password: string) => {
  const res = await axios.post<LoginResponse>(url, { email, password });
  if (res) {
    return res.data;
  }
};

function* loginWithEmailPassword(
  action: AnyAction
): Generator<StrictEffect, any, LoginResponse> {
  const { email, password } = action.payload;
  try {
    const response = yield call(loginUser, email, password);
    if (response.token) {
      localStorage.setItem("token", response.token);
      yield put(setToken(response.token));
    }
    return response.token;
  } catch (err) {
    console.log("err:", err);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN_SUCCESS, loginWithEmailPassword);
}

export default function* authSaga() {
  yield all([fork(watchLogin)]);
}
