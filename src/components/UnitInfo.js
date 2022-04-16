import React, { useState } from "react";
import styled from "styled-components";
import {
  Badge,
  Box,
  Switch,
  useToast,
  createStandaloneToast,
} from "@chakra-ui/react";
import { customTheme } from "../styles/theme";
const UnitInfo = () => {
  const toast = createStandaloneToast();
  const [inOperation, setInOperation] = useState(false);
  const changeStatusHandler = () => {
    setInOperation(!inOperation);
    toast({
      backgroundColor: "red",
      title: "Status endret",
      description: "Du har nå endret status for enheten",
      status: "success",
      duration: 15000,
      isClosable: true,
      variant: "subtle",
    });
  };
  return (
    <>
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
        <Span>Enhet_ID:</Span> 22S-328752863292
      </Text>
      <StatusContainer>
        <Text>
          <Span>Status:</Span>{" "}
        </Text>
        {inOperation ? (
          <Badge colorScheme="green">i drift</Badge>
        ) : (
          <Badge colorScheme="red">ikke i drift</Badge>
        )}
      </StatusContainer>
      <Switch onChange={changeStatusHandler} colorScheme="green" size="md">
        Endre status på drift av enhet
      </Switch>
    </>
  );
};
const Text = styled.p`
  margin-right: 1rem;
`;

const Span = styled.span`
  font-weight: 600;
`;
const StatusContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default UnitInfo;
