import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { paths } from "./paths.js";
import Home from "../components/Home";
import Admins from "../components/Admins";
import Users from "../components/Users";
import Units from "../components/Units";
import Profile from "../components/Profile";
import AdminDetails from "../components/AdminDetails";
import UnitDetails from "../components/UnitDetails";
import Registration from "../components/Registration";
import MainPage from "../components/MainPage.js";
import { useHistory } from "react-router-dom";
import { Amplify, Auth } from "aws-amplify";


export const routes = [
  {
    path: "/home/:param",
    exact: true,
    component: ({ signOut }) => <MainPage signOut={signOut} />,
  },
  {
    path: "*",
    exact: false,
    component: ({ signOut }) => <MainPage signOut={signOut} />,
  },
];

const Routes = ({ ...props }) => {
 

  useEffect(async () => {
    const token = await getToken();
    localStorage.setItem("API_token", token.getIdToken().getJwtToken());
  }, []);

  const getToken = async () => {
    let data = await Auth.currentSession();
    if (data) {
      return data;
    }
  };

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
