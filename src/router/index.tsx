import React from "react";
import Login from "../component/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../component/home";
import AppTemplate from "../template/app-template";
import About from "../component/about";
import PrivatedRoute from "./privated";
import { Todo } from "../component/todo";

const Routing = () => {
  return (
    <AppTemplate>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <PrivatedRoute path="/todo" redirect="/login">
          <Route component={Todo} path="/todo" exact />
        </PrivatedRoute>
      </Switch>
    </AppTemplate>
  );
};
const AppRouter = () => {
  return (
    <Router>
      <Routing />
    </Router>
  );
};
export default AppRouter;
