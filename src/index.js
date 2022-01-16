import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={AuthLayout} />
      <Redirect from="/" to="/pages" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
