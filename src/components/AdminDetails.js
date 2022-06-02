import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";

import { HStack, Stack, Text } from "@chakra-ui/react";

const AdminDetails = ({adminId}) => {
  return (
    <Wrapper>
      <Content>
        <Title>Detaljer {adminId}</Title> <BreakingLine />
        <InfoBox>
          <Stack>
            <HStack>
              <Heading fontSize="md">Navn: </Heading>
              <Text fontSize="md">Magnus Johansen</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Rolle: </Heading>
              <Text fontSize="md">Admin</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Administrator ID: </Heading>
              <Text fontSize="md">1SA-4433242342342343</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Opprettet: </Heading>
              <Text fontSize="md">31.03.2022, 14:33</Text>
            </HStack>
          </Stack>
        </InfoBox>
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
  width: 60%;
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
const InfoBox = styled.div`
  width: 50%;
  border: 2px solid ${colors.blue};
  border-radius: 5px;
  margin: 2.5rem 0 2.5rem 0;
  padding: 1rem;
`;

const Heading = styled(Text)`
  font-weight: 600;
`;

export default AdminDetails;
