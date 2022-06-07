import React, { useState, useRef, useEffect } from "react";
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
  Spinner,
} from "@chakra-ui/react";
import { useAdminsQuery } from "../../src/features/api/ApiSlice";
import { ComponentPropsToStylePropsMap } from "@aws-amplify/ui-react";
import axios from "axios";
const Admins = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useAdminsQuery();

  const [adminsList, setAdminsList] = useState("Initial State");

  useEffect(() => {
    if (isSuccess) {
      data.length === 0 ? setAdminsList("Error") : setAdminsList(data);
    }
  }, [useAdminsQuery()]);

  const dispatch = useDispatch();

  const deleteAdminHandler = (id) => {
    console.log("DeleteAdminHandlerID", id);
    // dispatch(deleteAdmin(id));

    const token = localStorage.getItem("API_token");
    console.log(token);

    let headers = {
      authorization: `Bearer ${token}`,
    };

    axios
      .delete(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/administrators/${id}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setAdminsList(adminsList.filter((admin) => admin.Id !== id));
        }
      });
  };

  return (
    <Wrapper>
      <Content>
        <Title>Administratorer</Title>
        <BreakingLine />
        {adminsList === "Initial State" ? (
          <SpinnerWrapper>
            <Spinner size="lg" color={colors.greenMain} />
          </SpinnerWrapper>
        ) : (
          <StackAdmins spacing={2}>
            {adminsList !== "Error" &&
              adminsList.map((admin, index) => (
                <Admin
                  deleteAdminHandler={deleteAdminHandler}
                  name={admin.Email}
                  key={index}
                  admin={admin}
                />
              ))}
          </StackAdmins>
        )}
      </Content>
      {/* <Modal
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
                  ref={AdminNameInputRef}
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
      </Modal> */}
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

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 4rem;
  padding-top: 1rem;
  justify-content: center;
`;
const StackAdmins = styled(Stack)`
  margin-top: 1.25rem;
`;

export default Admins;
