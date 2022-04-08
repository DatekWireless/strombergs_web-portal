import React, { useState } from "react";
import styled from "styled-components";
import { Badge, Switch, useToast } from "@chakra-ui/react";
const UnitInfo = () => {
  const toast = useToast();
  const [inOperation, setInOperation] = useState(false);
  const changeStatusHandler = () => {
    setInOperation(!inOperation);
    toast({
      title: "Status endret",
      description: "Du har nå endret status for enheten",
      status: "success",
      duration: 1500,
      isClosable: true,
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
