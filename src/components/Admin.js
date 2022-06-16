import React from "react";
import { colors } from "../styles/variables";
import { Badge } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Delete } from "../assets/icons/Delete.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
const Admin = ({ name, id, userID, isLogged, deleteAdminHandler, admin }) => {
  const { url } = useRouteMatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const confirmDeletingAdminHandler = (id) => {
    deleteAdminHandler(id);
    onClose();
  };

  const adminId = id;
  return (
    <div>
      <AdminContainer>
        <LinkContainer exact="true" to={`${url}/${admin.Id}`}>
          <UserName>{name}</UserName>
          {isLogged ? (
            <Badge colorScheme="green" variant="subtle">
              pålogget
            </Badge>
          ) : null}
        </LinkContainer>
        <IconsWrapper>
          <IconConatiner title="slett" onClick={onOpen}>
            <IconDelete />
          </IconConatiner>
          {/* <IconConatiner title="rediger">
            <IconEdit />
          </IconConatiner> */}
        </IconsWrapper>
      </AdminContainer>
      <Modal
        motionPreset="slideInBottom"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Er du sikker at du vil slette denne administratøren?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button
              colorScheme="teal"
              variant="solid"
              mr={3}
              onClick={() => confirmDeletingAdminHandler(admin.Id, admin.Created)}
            >
              Ja
            </Button>
            <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
              Nei
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

const AdminContainer = styled.div`
  padding: 0.25rem;
  width: 30rem;
  border-radius: 5px;
  border: 2px solid ${colors.greenDark};
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
  width: 80%;
`;

const UserName = styled(Text)`
  padding-left: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
`;

const IconsWrapper = styled.div`
  width: 5%;
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
  width: 0.75rem;
`;
const IconEdit = styled(Edit)`
  width: 0.75rem;
`;

export default Admin;
