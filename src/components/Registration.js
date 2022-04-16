import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowRepeatPassword = () =>
    setShowRepeatPassword(!showRepeatPassword);
  return (
    <Wrapper>
      <Content>
        <Title>Registrering av ny adminitrator</Title>
        <BreakingLine />
        <Stack spacing={5}>
          <Stack spacing={2}>
            <Text fontSize="sm">Navn</Text>
            <Input
              focusBorderColor="teal.400"
              variant="filled"
              placeholder="oppgi navn"
              type="text"
            />
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="sm">Epost</Text>
            <Input
              type="email"
              focusBorderColor="teal.400"
              variant="filled"
              placeholder="oppgi epost"
            />
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="sm">Passord</Text>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                focusBorderColor="teal.400"
                variant="filled"
                placeholder="oppgi passord"
              />
              <InputRightElement width="3.5rem" marginRight="5px">
                <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                  {showPassword ? "Skjul" : "Vis"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Stack spacing={2}>
            <Text fontSize="sm">Gjenta passord</Text>
            <InputGroup>
              <Input
                type={showRepeatPassword ? "text" : "password"}
                focusBorderColor="teal.400"
                variant="filled"
                placeholder="gjenta passord"
              />
              <InputRightElement width="3.5rem" marginRight="5px">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowRepeatPassword}
                >
                  {showRepeatPassword ? "Skjul" : "Vis"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
          <Button variant="solid" colorScheme="teal" width="5rem" border="2px">
            Lagre
          </Button>
        </Stack>
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
  width: 50%;
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
  margin-bottom: 2rem;
`;

export default Registration;
