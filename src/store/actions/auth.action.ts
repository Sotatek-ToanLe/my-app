import { type } from "os";
import { RouteProps } from "react-router-dom";
import { LoginResponse, LoginUser } from "../../types";
import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_OUT,
  SET_TOKEN,
  REMOVE_TOKEN,
} from "../constant";

export const loginUserSuccess = (user: LoginUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};
export const loginOut = () => {
  return {
    type: LOGIN_OUT,
  };
};

export const setToken = (token: string) => {
  return {
    type: SET_TOKEN,
    payload: token,
  };
};
export const removeToken = () => {
  return {
    type: REMOVE_TOKEN,
  };
};
