import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { paths } from "../navigation/paths";
import { useSelector } from "react-redux";
import { ReactComponent as LogInIcon } from "../assets/icons/LogIn.svg";
import { ReactComponent as LogOutIcon } from "../assets/icons/LogOut.svg";
const Profile = ({ signOut, user }) => {
  const isLoggedIn = useSelector(
    (state) => state.authenticationReducer.authentication
  );
  return (
    <Wrapper>
      <Content>
        <Title>Profil</Title>
        <BreakingLine />
        <ProfileContent>
          <Epost>Epost: </Epost>
          <EpostData>{user.attributes.email}</EpostData>
          <Id>Id: </Id>
          <IdData>{user.username}</IdData>
          <LogContainer>
            {isLoggedIn && (
              <LogIn>
                <LogInIcon />
                <LogInText>Logg inn</LogInText>
              </LogIn>
            )}
            <LogOut>
              <LogOutIcon />
              <LogOutText onClick={signOut}>Logg ut</LogOutText>
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
const Id = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
const IdData = styled.p`
  font-weight: 400;
  font-size: 1rem;
`;
const Epost = styled(Id)``;
const EpostData = styled(IdData)``;
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
  width: 6.5rem;
  border: 3px solid ${colors.white};
  padding: 0.125rem;
`;
const LogOut = styled(LogIn)`
  &:hover {
    border-bottom: 3px solid ${colors.greenLight};
  }
  cursor: pointer;
`;

const LogInText = styled.p`
  display: inline-block;
  width: 5rem;
  text-align: left;
  font-size: 0.85rem;
  margin-left: 1rem;
`;
const LogOutText = styled(LogInText)``;

export default Profile;
