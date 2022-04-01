import React from "react";
import styled from "styled-components";
import Routes from "../navigation/routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainPage = () => {
  return (
    <PageWrapper>
      <Topbar />
      <MainView>
        <Sidebar />
        <Routes />
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
