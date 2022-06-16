import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import { Amplify, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import styled from "styled-components";
import { colors } from "./styles/variables";
import { ReactComponent as MainLogo } from "./assets/images/Logo.svg";
import PortalRoutes from "./navigation/PortalRoutes";

Amplify.configure(awsExports);

function App() {
  return (
    <AppWrapper>
      <AuthEl>
        {({ signOut, user }) => (
          <Router>
            <PortalRoutes signOut={signOut} user={user} />
            <Reset />
          </Router>
        )}
      </AuthEl>
      <Logo />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: ${colors.greyLight};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthEl = styled(Authenticator)`
  [data-amplify-container] {
    border: 1px solid ${colors.greenLight};
  }

  button.amplify-button {
    background-color: ${colors.greenMain};
    color: ${colors.blue};
    &:hover {
      background-color: ${colors.greenMain};
      color: ${colors.white};
    }
  }
  ${colors.greenMain} {
    border: 1px solid ${colors.greenMain};
  }
  button.amplify-field__show-password {
    background-color: white;
    &:focus {
      border: 1px solid ${colors.greenMain};
      box-shadow: none;
    }
  }
  .amplify-button[data-variation="link"] {
    background-color: ${colors.greenPale};
  }
  .amplify-input:focus {
    border: 1px solid ${colors.greenMain};
    box-shadow: none;
  }
`;

const Logo = styled(MainLogo)`
  width: 10rem;
  height: 10rem;
`;

export default App;
