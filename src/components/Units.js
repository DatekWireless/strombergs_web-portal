import React, { useState, useRef, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { useSelector, useDispatch } from "react-redux";
import { addUnit, updateUnit } from "../features/UnitsSlice.js";
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
  Spinner,
} from "@chakra-ui/react";
import Unit from "./Unit";
import { ReactComponent as Add } from "../assets/icons/Add.svg";
import axios from "axios";

const Users = () => {
  const units = useSelector((state) => state.unitsReducer.units);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { url } = useRouteMatch();

  const OwnerInputRef = useRef();
  const StreetInputRef = useRef();
  const StreetNumberInputRef = useRef();
  const isWorkingInputRef = useRef();

  const token = localStorage.getItem("API_token");

  let headers = {
    authorization: `Bearer ${token}`,
  };
  useEffect(() => {
    axios
      .get(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/units`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        dispatch(updateUnit(res.data));
      });
  }, []);

  const createUnitHandler = () => {
    let unit = {
      Owner: "",
      StreetName: "",
      StreetNumber: null,
      Active: false,
    };
    unit = {
      Owner: OwnerInputRef.current.value,
      StreetName: StreetInputRef.current.value,
      StreetNumber: StreetNumberInputRef.current.value,
      Active: isWorkingInputRef.current.checked ? true : false,
    };

    axios
      .post(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/units`,
        unit,
        {
          headers: headers,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(addUnit(unit));
        }
      });

    onClose();
  };

  const deleteUnitHandler = (id) => {
    axios
      .delete(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/units/${id}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        dispatch(updateUnit(units.filter((unit) => unit.Id !== id)));
      });
  };

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
                    ref={OwnerInputRef}
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
                      ref={StreetInputRef}
                    />
                  </Stack>
                  <Stack spacing={1}>
                    <Text fontSize="xs">Nummer</Text>
                    <Input
                      variant="filled"
                      htmlSize={4}
                      width="auto"
                      ref={StreetNumberInputRef}
                    />
                  </Stack>
                </HStack>

                <RadioGroup defaultValue="2">
                  <Stack spacing={6} direction="row">
                    <Radio
                      colorScheme="teal"
                      style={{ border: "1px solid lightgrey" }}
                      ref={isWorkingInputRef}
                      value="1"
                    >
                      i drift
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={onClose}>
                Lukk
              </Button>
              <Button variant="ghost" onClick={createUnitHandler}>
                Lagre
              </Button>
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
                <Th>Slett</Th>
              </Tr>
            </Thead>
            <Tbody>
              {units.map((unit, index) => (
                <Unit
                  id={unit.Id}
                  key={index}
                  url={url}
                  owner={unit.Owner}
                  streetName={unit.StreetName}
                  streetNumber={unit.StreetNumber}
                  active={unit.Active}
                  deleteUnit={deleteUnitHandler}
                />
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

export default Users;
