import React, { useEffect } from "react";
import styled from "styled-components";
import Routes from "../navigation/PortalRoutes";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import Home from "./Home";
import Admins from "./Admins";
import Users from "./Users";
import Units from "./Units";
import Breadcrumbs from "./Breadcrumbs";

import awsExports from "../aws-exports";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../features/AuthenticationSlice";
import { Amplify, Auth } from "aws-amplify";
import { useAdminsQuery } from "../../src/features/api/ApiSlice";
import AdminDetails from "./AdminDetails";
import UnitDetails from "./UnitDetails";
Amplify.configure(awsExports);

const MainPage = ({ signOut, isLogged, user }) => {
  let { param, id } = useParams();

  const signOutHandler = () => {
    signOut();
    localStorage.clear("API_token");
  };

  return (
    <PageWrapper>
      <Topbar user={user} isLogged={isLogged} />
      <MainView>
        <Sidebar />
        <Breadcrumbs />
        {id === undefined && (
          <>
            {param === undefined && <Home />}
            {param === "main" && <Home />}
            {param === "administratorer" && <Admins />}
            {param === "brukere" && <Users />}
            {param === "enheter" && <Units />}
            {param === "profil" && (
              <Profile signOut={signOutHandler} user={user} />
            )}
          </>
        )}

        {id && (
          <>
            {param === "enheter" && id && <UnitDetails unitId={id} />}
            {param === "administratorer" && id && <AdminDetails adminId={id} />}
          </>
        )}
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
  position: relative;
`;
export default MainPage;
