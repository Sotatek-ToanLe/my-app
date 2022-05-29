import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { todoReducer } from "./todo.reducer";
const rootReducer = combineReducers({ auth: authReducer, todo: todoReducer });

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
