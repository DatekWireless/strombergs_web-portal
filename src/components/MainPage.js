import React from "react";
import styled from "styled-components";
import Routes from "../navigation/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import LogIn from "../components/LogIn";

const MainPage = () => {
  const loggedIn = true;
  return (
    <PageWrapper>
      <Topbar />
      <MainView>
        <Sidebar />
        {loggedIn ? <Routes /> : <LogIn />}
      </MainView>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainView = styled.div`
  flex: 1;
  display: flex;
`;
export default MainPage;
