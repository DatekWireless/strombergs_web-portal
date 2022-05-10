import React from "react";
import styled from "styled-components";
import Routes from "../navigation/Routes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainPage = ({ signOut, isLogged }) => {
  return (
    <PageWrapper>
      <Topbar isLogged={isLogged} />
      <MainView>
        <Sidebar />
        <Routes signOut={signOut} />
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
