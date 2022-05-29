export interface LoginUser {
  email: string;
  password: string;
}
export interface ActionLoginProps<T = any> {
  type: string;
  payload: T;
}

export interface LoginResponse {
  token: string;
}
export type ActionType = ActionLoginProps<{
  user: LoginUser;
  history: string;
}>;
