import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { colors } from "../styles/variables";
import { Tooltip } from "@chakra-ui/react";
import { ReactComponent as MainLogo } from "../assets/images/Logo.svg";
import { ReactComponent as MenuProfile } from "../assets/icons/MenuProfile.svg";
const Topbar = ({user}) => {
  const isLogged = useSelector(
    (state) => (state) => state.authenticationReducer.authentication
  );
  return (
    <TopbarContainer>
      <LogoContainer>
        <MainLogo />
      </LogoContainer>
      <HeaderMainSection>
        <HeaderContainer>
          <Header>
            <HeaderText>Smart Avfallshåndtering</HeaderText>
          </Header>
        </HeaderContainer>
        <ProfileContainer>
          <Tooltip hasArrow label={isLogged ? "pålogget" : "ikke pålogget"}>
            <ProfileContainerText>{user?.attributes?.email}</ProfileContainerText>
          </Tooltip>
          <MenuProfile />
        </ProfileContainer>
      </HeaderMainSection>
    </TopbarContainer>
  );
};
const TopbarContainer = styled.div`
  width: 100vw;
  height: 7.5vh;
  background-color: ${colors.greenMain};
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 17.5vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.greenPale};
`;

const HeaderMainSection = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 17.5vw);
  height: 100%;
`;

const HeaderContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`;
const Header = styled.div`
  padding: 0.25rem 0 0.25rem 0;
  border-bottom: 4px solid ${colors.greenLight};
`;
const HeaderText = styled.h1`
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.white};
`;

const ProfileContainer = styled.div`
  width: auto;
  background-color: ${colors.greenPale};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem 0 1rem;
`;

const ProfileContainerText = styled.p`
  display: inline;
  color: ${colors.grey};
  font-size: 1.25rem;
  font-weight: 300;
  font-family: "Roboto";
  margin-right: 1rem;
`;
export default Topbar;
