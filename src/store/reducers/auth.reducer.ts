import { AnyAction } from "redux";
import { LoginUser, ActionLoginProps } from "../../types";
import { LOGIN_SUCCESS, LOGIN_USER, SET_TOKEN } from "../constant";
import { useSelector } from "react-redux";

const initState = {
  token: localStorage.getItem("token"),
  loading: false,
};

export const authReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return { ...state };
  }
};
