import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./paths";
import Home from "../components/Home";
// import Admins from "../components/Admins";
// import Users from "../components/Users";
// import Units from "../components/Units";
// import Profile from "../components/Profile";
import Template from "../components/Template";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={paths.home} component={Home} />
      <Route path="/:id" children={<Template />} />
      {/* <Route path={paths.profile} component={Profile} />
      <Route path={paths.users} component={Users} />
      <Route path={paths.units} component={Units} /> */}
    </Switch>
  );
};

export default Routes;
