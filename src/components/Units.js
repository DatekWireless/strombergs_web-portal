import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Badge,
  useToast,
  Tag,
  TagLabel,
  TagRightIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  textDecoration,
  HStack,
  Input,
  Checkbox,
  Text,
  Radio,
  RadioGroup,
  FormControl,
} from "@chakra-ui/react";

import { ReactComponent as Add } from "../assets/icons/Add.svg";
const Users = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { url } = useRouteMatch();
  const [value, setValue] = useState("1");
  const [units, setUnits] = useState([
    {
      owner: "XXL",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 1,
    },
    {
      owner: "Coop Mega",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 2,
    },
    {
      owner: "Frogner Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 3,
    },
    {
      owner: "Bygdøy Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 4,
    },
    {
      owner: "Majorstuen Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 5,
    },
    {
      owner: "Hasle Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 6,
    },
  ]);
  return (
    <Wrapper>
      <Content>
        <Title>Enheter</Title>
        <BreakingLine />
        <AddUnit onClick={onOpen} variant="subtle" size="md" colorScheme="cyan">
          <TagLabel>Legg til en ny kunde/enhet</TagLabel>
          <TagRightIcon boxSize="12px" as={Add} />
        </AddUnit>
        <Modal
          isCentered
          closeOnOverlayClick={false}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Ny enhet</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Stack spacing={5}>
                <Stack spacing={1}>
                  <Text fontSize="xs">Eier</Text>
                  <Input
                    focusBorderColor="teal.400"
                    variant="filled"
                    placeholder="oppgi eier"
                  />
                </Stack>
                <HStack>
                  <Stack spacing={1}>
                    <Text fontSize="xs">Gatenavn</Text>
                    <Input
                      focusBorderColor="teal.400"
                      variant="filled"
                      placeholder="oppgi gatenavn"
                      htmlSize={32}
                      width="auto"
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontSize="xs">Nummer</Text>
                    <Input variant="filled" htmlSize={4} width="auto" />
                  </Stack>
                </HStack>

                <RadioGroup onChange={setValue} value={value}>
                  <Stack spacing={6} direction="row">
                    <Radio
                      colorScheme="teal"
                      style={{ border: "1px solid lightgrey" }}
                      value="1"
                    >
                      i drift
                    </Radio>
                    <Radio
                      colorScheme="teal"
                      style={{ border: "1px solid lightgrey" }}
                      value="2"
                    >
                      ikke i drift
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={onClose}>
                Lukk
              </Button>
              <Button variant="ghost">Lagre</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <TableMainContainer>
          <Table variant="striped" size="sm" colorScheme={"teal"}>
            <TableCaption>
              Klikk på en eier til en enhet for å se detaljer
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Eier</Th>
                <Th>Gatenavn</Th>
                <Th>Nummer</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {units.map((unit) => (
                <Tr key={unit.id}>
                  <Td>
                    <OwnerLink exact="true" to={`${url}/${unit.owner}`}>
                      {unit.owner}
                    </OwnerLink>
                  </Td>
                  <Td>{unit.street}</Td>
                  <Td>{unit.postcode}</Td>
                  <Td>
                    {unit.inUse ? (
                      <Badge colorScheme="green">i drift</Badge>
                    ) : (
                      <Badge colorScheme="red">ikke i drift</Badge>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableMainContainer>
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
const AddUnit = styled(Tag)`
  margin-top: 2rem;
  cursor: pointer;
  border: 2px solid white;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 2px solid #69b1bf;
  }
`;

const TableMainContainer = styled(TableContainer)`
  margin-top: 3rem;
`;
const OwnerLink = styled(Link)`
  position: relative;
  padding: 0.15rem;
  &:hover {
    border-bottom: 3px solid ${colors.greenLight};
  }
`;

export default Users;
