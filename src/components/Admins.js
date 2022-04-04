import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import Admin from "../components/Admin";
import AdminDetails from "./AdminDetails.js";

const Admins = () => {
  const { url } = useRouteMatch();
  return (
    <Wrapper>
      <Content>
        <Title>Administratorer</Title>
        <BreakingLine />
        <Admin name="Magnus Johansen" isLogged={true} userID={1} />
        <Admin name="Arne Mortensen" userID={2} />
        <Admin name="Filip Iversen" userID={3} />
        <Admin name="Vilde Rasmussen" userID={4} />
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
`;
const Title = styled.h1`
  font-weight: 600;
`;

const BreakingLine = styled.hr`
  border-top: 2px solid grey;
`;

export default Admins;
