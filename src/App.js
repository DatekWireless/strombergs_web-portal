import React, { useEffect } from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/MainPage";

import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

function App() {
  // let AWStoken = "";

  useEffect(() => {
    getToken();
  });

  const getToken = async () => {
    var data = await Auth.currentSession();
    console.log(data);
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
