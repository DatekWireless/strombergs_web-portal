import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "../components/MainPage.js";
import { Amplify, Auth } from "aws-amplify";

const approutes = [
  {
    path: "/home/:param",
    exact: true,
    component: ({ signOut, user }) => (
      <MainPage signOut={signOut} user={user} />
    ),
  },
  {
    path: "/home/:param/:id",
    exact: true,
    component: ({ signOut, user }) => <MainPage signOut={signOut} user={user}/>,
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

  const getToken = () => {
    let data = Auth.currentSession();
    if (data) {
      return data;
    }
  };

  return (
    <>
      <Switch>
        {approutes.map((route, index) => (
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
