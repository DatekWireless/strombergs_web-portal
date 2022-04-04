import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const Template = ({ name }) => {
  return (
    <Wrapper>
      <Content>
        {name}
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

export default Template;
