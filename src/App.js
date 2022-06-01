import React, { useEffect, useState } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./features/AuthenticationSlice";
import { fetchAdmins } from "./features/AdminsSlice";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MainPage from "./components/MainPage";
import Routes from "../src/navigation/Routes";
import Home from "./components/Home";

Amplify.configure(awsExports);

function App() {
  

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <Routes signOut={signOut} />
          <Reset />
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
