import React from "react";
import styled from "styled-components";
const Home = () => {
  return (
    <Wrapper>
      <Content>
        home
        <hr />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 92.5vh;
  flex: 1;
  overflow: auto;
`;

const Content = styled.h1`
  font-size: 1.25rem;
  padding: 2.5rem;
  font-family: "Roboto";
`;
export default Home;
