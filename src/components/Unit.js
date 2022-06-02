import React from "react";
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
const Unit = ({
  id,
  url,
  owner,
  streetName,
  streetNumber,
  active,
  deleteUnit,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const confirmDeletingUnitHandler = () => {
    deleteUnit(id);
    onClose();
  };
  return (
    <>
      <Tr>
        <Td>
          <OwnerLink exact="true" to={`${url}/${id}`}>
            {owner}
          </OwnerLink>
        </Td>
        <Td>{streetName}</Td>
        <Td>{streetNumber}</Td>
        <Td>
          {active ? (
            <Badge colorScheme="green">i drift</Badge>
          ) : (
            <Badge colorScheme="red">ikke i drift</Badge>
          )}
        </Td>
        <Td onClick={onOpen}>x</Td>
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
              onClick={() => confirmDeletingUnitHandler()}
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

const OwnerLink = styled(Link)`
  position: relative;
  padding: 0.15rem;
  &:hover {
    border-bottom: 3px solid ${colors.greenLight};
  }
`;

export default Unit;
