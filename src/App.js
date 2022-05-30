import React, { useEffect } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "./features/AuthenticationSlice";
import { fetchAdmins } from "./features/AdminsSlice";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import MainPage from "./components/MainPage";
import { useGetAdminsQuery } from "../src/features/api/ApiSlice";

Amplify.configure(awsExports);

function App() {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAdminsQuery("");
  console.log(data);

  useEffect(async () => {
    const isLogged = await getToken();
    localStorage.setItem("API_token", isLogged.getIdToken().getJwtToken());
    dispatch(logOut(!!isLogged));
    // dispatch(fetchAdmins);
  }, []);

  const getToken = () => {
    let data = Auth.currentSession();
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
