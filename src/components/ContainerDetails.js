import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

const ContainerDetails = () => {
  return (
    <ContainerDetailsWrapper>
      <Text>
        <Span>Eier:</Span> Coop Mega AS
      </Text>
      <Text>
        <Span>Gatenavn:</Span> Hammerstads gate
      </Text>
      <Text>
        <Span>Nummer:</Span> 10C
      </Text>
      <Text>
        <Span>Enhet ID:</Span> 22S-328752863292
      </Text>
    </ContainerDetailsWrapper>
  );
};
const ContainerDetailsWrapper = styled.div`
  display: block;
  border: 2px solid ${colors.blue};
  padding: 1rem;
  border-radius: 7.5px;
`;
const Text = styled.p`
  margin-right: 1rem;
`;

const Span = styled.p`
  font-weight: 600;
`;

export default ContainerDetails;
