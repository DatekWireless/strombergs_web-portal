import React from "react";
import { Switch, Route } from "react-router-dom";
import { paths } from "./paths.js";
import Home from "../components/Home";
import Admins from "../components/Admins";
import Users from "../components/Users";
import Units from "../components/Units";
import Profile from "../components/Profile";

import AdminDetails from "../components/AdminDetails";
import UnitDetails from "../components/UnitDetails";
import Registration from "../components/Registration";
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
    path: [paths.registration],
    component: () => <Registration />,
  },
  {
    path: [paths.units],
    exact: true,
    component: () => <Units />,
  },
  {
    path: [paths.profile],
    component: ({ signOut }) => <Profile signOut={signOut} />,
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

const Routes = ({ ...props }) => {
  return (
    <>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.component {...props} />}
          />
        ))}
      </Switch>
    </>
  );
};

export default Routes;
