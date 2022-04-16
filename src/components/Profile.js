import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { paths } from "../navigation/paths";

import { ReactComponent as LogInIcon } from "../assets/icons/LogIn.svg";
import { ReactComponent as LogOutIcon } from "../assets/icons/LogOut.svg";
const Profile = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Profil</Title>
        <BreakingLine />
        <ProfileContent>
          <Navn>Magnus Johanssen</Navn>
          <Epost>magnus@test.no</Epost>
          <LogContainer>
            <LogIn>
              <LogInIcon />
              <LogInText>Logg inn</LogInText>
            </LogIn>
            <LogOut>
              <LogOutIcon />
              <LogOutText>Logg ut</LogOutText>
            </LogOut>
          </LogContainer>
        </ProfileContent>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 92.5vh;
  display: flex;
  flex: 1;
  overflow: auto;
  background-color: ${colors.greyLight};
`;

const Content = styled.div`
  font-size: 1.25rem;
  padding: 2.5rem;
  margin: 2rem;
  border-radius: 5px;
  font-family: "Roboto";
  background-color: white;
  height: auto;
  overflow: auto;
  width: 60%;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const BreakingLine = styled.hr`
  border-top: 2px solid grey;
`;
const ProfileContent = styled.div`
  margin-top: 2.5rem;
`;
const Navn = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;
const Epost = styled(Navn)``;

const LogContainer = styled.div`
  margin-top: 1rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LogIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 7.5rem;
`;
const LogOut = styled(LogIn)``;

const LogInText = styled.p`
  display: inline-block;
  width: 5rem;
  text-align: left;
  font-size: 1rem;
`;
const LogOutText = styled(LogInText)``;

export default Profile;
