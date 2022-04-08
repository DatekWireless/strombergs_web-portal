import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { paths } from "../navigation/paths";
import { ReactComponent as AddUser } from "../assets/icons/AddUser.svg";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Wrapper>
      <Content>
        <Title>
          Hjem <BreakingLine />
        </Title>
        <CardsWrapper>
          <SectionCards>
            <Card to={paths.admins}>
              <CardHeaderWrapper>
                <CardHeader>Se administratorers status</CardHeader>
              </CardHeaderWrapper>
            </Card>
            <Card to={paths.users}>
              <CardHeaderWrapper>
                <CardHeader>Se brukeres status</CardHeader>
              </CardHeaderWrapper>
            </Card>
            <Card to={paths.units}>
              <CardHeaderWrapper>
                <CardHeader>Se enheters status</CardHeader>
              </CardHeaderWrapper>
            </Card>
            <Card to={paths.profile}>
              <CardHeaderWrapper>
                <CardHeader>Se profilen din</CardHeader>
              </CardHeaderWrapper>
            </Card>
          </SectionCards>
          <AddUserCard onClick={onOpen}>
            <AddUserIcon />
            <AddUserText>Opprett en ny administratør</AddUserText>
          </AddUserCard>
        </CardsWrapper>
      </Content>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ny administratør</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost">Lagre</Button>
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
  font-family: "Roboto";
  background-color: white;
  height: auto;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const BreakingLine = styled.hr`
  border-top: 2px solid grey;
`;
const CardsWrapper = styled.div`
  display: flex;

  margin-top: 4rem;
`;
const SectionCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-right: 2rem;
`;

const Card = styled(Link)`
  display: flex;
  justify-content: center;
  width: 12.5rem;
  height: 5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 2px solid green;
  border-radius: 7.5px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.greenPaleLight};
    box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -webkit-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -moz-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
  }
`;

const CardHeaderWrapper = styled.div`
  height: 1.75rem;
  padding: 0.25rem 0 0.25rem 0;
  border-bottom: 3px solid ${colors.greenLight};
`;
const CardHeader = styled.h1`
  color: ${colors.grey};
  text-decoration: none;
  font-size: 0.85rem;
`;
const AddUserCard = styled.div`
  width: auto;
  border: 2px solid ${colors.greenMain};
  width: 12.5rem;
  height: 5rem;
  padding: 1rem;
  border-radius: 7.5px;
  display: flex;
  align-items: center;
  border: 2px solid ${colors.blue};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.blueLight};
    box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -webkit-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -moz-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
  }
  cursor: pointer;
`;
const AddUserIcon = styled(AddUser)`
  width: 4rem;
  margin: 1rem;
`;

const AddUserText = styled.p`
  font-size: 0.85rem;
`;

// const Button = styled.button``;
export default Home;
