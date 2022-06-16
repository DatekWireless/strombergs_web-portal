import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { Link, useRouteMatch } from "react-router-dom";

import { ReactComponent as Delete } from "../assets/icons/Delete.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
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
const Container = ({
  fraction,
  type,
  size,
  startup,
  rangeKey,
  containerId,
  deleteContainer,
}) => {
  let { url } = useRouteMatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const confirmDeletingContainerHandler = () => {
    deleteContainer(containerId, rangeKey);
    onClose();
  };
  const custom_date = (d) => {
    let startDate = new Date(d);

    const custom_months = [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "December",
    ];
    const custom_days = [
      "mandag",
      "tirsdag",
      "onsdag",
      "torsdag",
      "fredag",
      "lørdag",
      "søndag",
    ];
    const date =
      ` ${startDate.getDate()}. 
      ${custom_months[startDate.getMonth()]}
      ${startDate.getFullYear()},
      ${custom_days[startDate.getDay()]}`
    var time = startDate.getHours() + ":" + startDate.getMinutes();
    return date;
  };

  const time = startup && custom_date(startup);

  return (
    <>
      <Tr>
        <Td>{fraction}</Td>
        <Td>{type}</Td>
        <Td>{time}</Td>
        <Td>{size}</Td>
        <Td>
          <IconDelete onClick={onOpen} />
        </Td>
      </Tr>
      <Modal
        motionPreset="slideInBottom"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Er du sikker at du vil slette denne enheten?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={() => confirmDeletingContainerHandler()}
            >
              Ja
            </Button>
            <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
              Nei
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
const UserContainer = styled(Link)`
  padding: 0.25rem;
  width: 22.5rem;
  border-radius: 5px;
  border: 2px solid ${colors.greenPale};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.greenPaleLight};
    box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
    -webkit-box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
    -moz-box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
  }
  text-decoration: none;
  font-size: 1.25rem;
  font-family: "Roboto";
  font-weight: 500;
  color: black;
`;
const LinkContainer = styled(Link)`
  width: 70%;
`;

const UserName = styled(Text)`
  padding-left: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
`;

const IconsWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconConatiner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &:hover {
    background-color: ${colors.greenPale};
    transition: all 0.1s ease-in-out;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconDelete = styled(Delete)`
  width: 0.65rem;
  height: 0.65rem;
  cursor: pointer;
`;
const IconEdit = styled(Edit)`
  width: 0.85rem;
`;

export default Container;
