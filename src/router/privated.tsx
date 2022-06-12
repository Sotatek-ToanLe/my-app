import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { AppState } from "../store/reducers";
interface Props extends RouteProps {
  redirect?: string;
}

const PrivatedRoute: React.FC<Props> = ({ redirect, ...props }) => {
  const token = useSelector((s: AppState) => s.auth.token);
  if (!token) {
    return redirect ? (
      <Redirect
        to={{
          pathname: redirect,
          state: {
            from: props.location,
          },
        }}
      />
    ) : null;
  }
  return <Route {...props} />;
};
export default PrivatedRoute;
