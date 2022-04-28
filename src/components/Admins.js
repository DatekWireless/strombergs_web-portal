import React, { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import Admin from "../components/Admin";
import { useSelector, useDispatch } from "react-redux";
import { addAdmin, deleteAdmin } from "../features/AdminsSlice";
import { ReactComponent as Add } from "../assets/icons/Add.svg";
import {
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
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

const Admins = () => {
  const admins = useSelector((state) => state.adminsReducer.admins);
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [adminData, setAdminData] = useState({ name: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleShowRepeatPassword = () =>
    setShowRepeatPassword(!showRepeatPassword);

  const inputNameHandler = (event) => {
    setAdminData({
      name: event.target.value,
    });
  };
  const saveAdminHandler = () => {
    dispatch(addAdmin(adminData));
    setAdminData({ name: "" });
    onClose();
  };

  return (
    <Wrapper>
      <Content>
        <Title>Administratorer</Title>
        <BreakingLine />
        <AddUnit onClick={onOpen} variant="subtle" size="md" colorScheme="cyan">
          <TagLabel>Opprett en ny administratør</TagLabel>
          <TagRightIcon boxSize="12px" as={Add} />
        </AddUnit>
        <StackAdmins spacing={2}>
          {admins.map((admin, index) => (
            <Admin name={admin.name} key={index} />
          ))}
          {/* <Admin name="Magnus Johansen" isLogged={true} userID={1} /> */}
        </StackAdmins>
      </Content>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ny administrator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Stack spacing={1}>
                <Text fontSize="xs">Navn</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  type="text"
                  placeholder="Navn"
                  value={adminData.name}
                  onChange={(event) => inputNameHandler(event)}
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Epost</Text>
                <Input
                  type="email"
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="Epost"
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Passord</Text>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    focusBorderColor="teal.400"
                    variant="filled"
                    placeholder="Passord"
                  />
                  <InputRightElement width="3.5rem" marginRight="5px">
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                      {showPassword ? "Skjul" : "Vis"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Gjenta passord</Text>
                <InputGroup>
                  <Input
                    type={showRepeatPassword ? "text" : "password"}
                    focusBorderColor="teal.400"
                    variant="filled"
                    placeholder="Gjenta passord"
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
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost" onClick={saveAdminHandler}>
              Legg til
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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

const StackAdmins = styled(Stack)`
  margin-top: 1.25rem;
`;

export default Admins;
