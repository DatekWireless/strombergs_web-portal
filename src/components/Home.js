import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { paths } from "../navigation/paths";
const Home = () => {
  return (
    <Wrapper>
      <Content>
        Hjem
        <hr />
        <Cards>
          <Card to={paths.admins}>
            <CardHeaderWrapper>
              <CardHeader>Se administratorers status</CardHeader>
            </CardHeaderWrapper>
          </Card>
          <Card to={paths.users}>
            <CardHeaderWrapper>
              <CardHeader>Se brukeres status</CardHeader>
            </CardHeaderWrapper>
          </Card>
          <Card to={paths.units}>
            <CardHeaderWrapper>
              <CardHeader>Se enheters status</CardHeader>
            </CardHeaderWrapper>
          </Card>
          <Card to={paths.profile}>
            <CardHeaderWrapper>
              <CardHeader>Se profilen din</CardHeader>
            </CardHeaderWrapper>
          </Card>
        </Cards>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 92.5vh;
  flex: 1;
  overflow: auto;
`;

const Content = styled.div`
  font-size: 1.25rem;
  padding: 2.5rem;
  font-family: "Roboto";
`;

const Cards = styled.div`
  width: 65%;
  flex-wrap: wrap;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

const Card = styled(Link)`
  display: flex;
  justify-content: center;
  width: 12.5rem;
  height: 7.5rem;
  padding: 1rem;
  border: 2px solid green;
  border-radius: 7.5px;
  margin: 1rem 1rem;
  text-decoration: none;
  &:hover {
    background-color: ${colors.greenPaleLight};
  }
`;

const CardHeaderWrapper = styled.div`
  height: 1.75rem;
  padding: 0.25rem 0 0.25rem 0;
  border-bottom: 3px solid ${colors.greenLight};
`;
const CardHeader = styled.h1`
  color: ${colors.grey};
  text-decoration: none;
  font-size: 0.85rem;
`;

export default Home;
