import React from "react";
import { Route } from "react-router-dom";
import { routes } from "../helper";

const Routes = () => {
  return routes.map((route, key) => (
    <Route key={key} exact path={route.path}>
      <route.component />
    </Route>
  ));
};

export default Routes;
