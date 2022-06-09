import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import axios from "axios";

import { HStack, Stack, Text } from "@chakra-ui/react";
import { useAdminsQuery } from "../features/api/ApiSlice";

const AdminDetails = ({ adminId }) => {
  const { data, isSuccess } = useAdminsQuery();

  const [admin, setAdmin] = useState({});
  console.log(isSuccess);
  useEffect(() => {
    if (isSuccess) {
      data.length !== 0 && setAdmin(data.find((admin) => admin.Id === adminId));
    }
  }, [data]);
  return (
    <Wrapper>
      <Content>
        <Title>Detaljer {admin.Email}</Title> <BreakingLine />
        <InfoBox>
          <Stack>
            <HStack>
              <Heading fontSize="md">Epost: </Heading>
              <Text fontSize="md">{admin.Email}</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Rolle: </Heading>
              <Text fontSize="md">Admin</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Administrator ID: </Heading>
              <Text fontSize="md">{admin.Id}</Text>
            </HStack>
            <HStack>
              <Heading fontSize="md">Opprettet: </Heading>
              <Text fontSize="md">{admin.Updated}</Text>
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
