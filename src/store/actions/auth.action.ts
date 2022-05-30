import { LoginUser } from "../../types";
import { LOGIN_SUCCESS, SET_TOKEN, REMOVE_TOKEN } from "../constant";

export const loginUserSuccess = (user: LoginUser) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
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
