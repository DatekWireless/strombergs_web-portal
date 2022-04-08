import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./paths.js";
import Home from "../components/Home";
import Admins from "../components/Admins";
import Users from "../components/Users";
import Units from "../components/Units";
import Profile from "../components/Profile";

import AdminDetails from "../components/AdminDetails.js";
import UnitDetails from "../components/UnitDetails";

export const routes = [
  {
    path: [paths.home],
    exact: true,
    component: () => <Home />,
  },
  {
    path: [paths.admins],
    exact: true,
    component: () => <Admins />,
  },
  {
    path: [paths.users],
    component: () => <Users />,
  },
  {
    path: [paths.units],
    exact: true,
    component: () => <Units />,
  },
  {
    path: [paths.profile],
    component: () => <Profile />,
  },
  {
    path: [paths.adminDetails],
    exact: true,
    component: () => <AdminDetails />,
  },
  {
    path: [paths.unitDetails],
    component: () => <UnitDetails />,
  },
];

const Routes = () => {
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.component />}
          />
        ))}
      </Switch>
    </>
  );
};

export default Routes;
