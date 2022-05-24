import React, { useEffect } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./features/AuthenticationSlice";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MainPage from "./components/MainPage";

Amplify.configure(awsExports);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogged = getToken();
    dispatch(logOut(!!isLogged));
  }, []);

  const getToken = async () => {
    let data = await Auth.currentSession();
    if (data) {
      return data;
    }
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <Router>
          <Reset />
          <MainPage signOut={signOut} />
        </Router>
      )}
    </Authenticator>
  );
}

export default App;
