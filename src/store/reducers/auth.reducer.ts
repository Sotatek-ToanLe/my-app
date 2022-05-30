import { AnyAction } from "redux";
import { LoginUser, ActionLoginProps } from "../../types";
import {
  LOGIN_OUT,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REMOVE_TOKEN,
  SET_TOKEN,
} from "../constant";
import { useSelector } from "react-redux";

const initState = {
  token: "",
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
    case REMOVE_TOKEN:
      return { ...state, token: "" };

    default:
      return { ...state };
  }
};
