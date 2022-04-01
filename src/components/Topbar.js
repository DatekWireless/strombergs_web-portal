import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { ReactComponent as MainLogo } from "../assets/images/Logo.svg";
import { ReactComponent as MenuProfile } from "../assets/icons/MenuProfile.svg";
const Topbar = () => {
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
          <ProfileContainerText>Hei! Filip</ProfileContainerText>
          <MenuProfile />
        </ProfileContainer>
      </HeaderMainSection>
    </TopbarContainer>
  );
};
const TopbarContainer = styled.div`
  width: 100vw;
  height: 7.5vh;
  background-color: ${colors.mainGreen};
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 17.5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderMainSection = styled.div`
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
  padding: 0.5rem 0 0.5rem 0;
  border-bottom: 4px solid ${colors.greenLight};
`;
const HeaderText = styled.h1`
  font-family: "Roboto";
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.white};
`;

const ProfileContainer = styled.div`
  width: 10%;
  background-color: ${colors.greenPale};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem 0 1rem;
`;

const ProfileContainerText = styled.p`
  color: ${colors.grey};
  font-size: 1.25rem;
  font-weight: 600;
  font-family: "Roboto";
`;
export default Topbar;
