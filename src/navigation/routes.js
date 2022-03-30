import React from "react";
import { Switch, Route } from "react-router-dom";
import paths from "./paths";
import Home from "../components/Home";
import Admins from "../components/Admins";
import Users from "../components/Users";
import Units from "../components/Units";
import Profile from "../components/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route path={paths.admins} component={Admins} />
      <Route path={paths.profile} component={Profile} />
      <Route path={paths.users} component={Users} />
      <Route path={paths.units} component={Units} />
    </Switch>
  );
};

export default Routes;
