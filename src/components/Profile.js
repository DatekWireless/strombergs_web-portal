import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { paths } from "../navigation/paths";
const Profile = () => {
  return (
    <Wrapper>
      <Content>
        Profil
        <BreakingLine />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 92.5vh;
  flex: 1;
  overflow: auto;
  background-color: ${colors.greyLight};
`;

const Content = styled.h1`
  font-size: 1.25rem;
  padding: 2.5rem;
  font-family: "Roboto";
`;

const BreakingLine = styled.hr`
  border-top: 1px solid grey;
`;

export default Profile;
