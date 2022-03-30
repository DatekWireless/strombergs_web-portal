import React from "react";
import styled from "styled-components";
import { Reset } from "styled-reset";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./navigation/routes";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Topbar />
        <MainView>
          <Sidebar />
          <Reset />
          <Routes />
        </MainView>
      </PageWrapper>
    </Router>
  );
}

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainView = styled.div`
  flex: 1;
  display: flex;
`;
export default App;
