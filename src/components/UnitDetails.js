import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
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
  Stack,
  Text,
} from "@chakra-ui/react";
import Container from "./Container";
import ContainerDetails from "../components/ContainerDetails";
import UnitInfo from "./UnitInfo";
import { ReactComponent as Add } from "../assets/icons/Add.svg";
const UnitDetails = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let { path, url } = useRouteMatch();
  return (
    <AdminInfoContainer>
      <Content>
        <Title>Detaljer</Title> <BreakingLine />
        <TabContainer variant="soft-rounded" size="sm" colorScheme="green">
          <TabList>
            <Tab>Enhet</Tab>
            <Tab>Kontainere</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <UnitInfo />
            </TabPanel>
            <TabPanel>
              <AddContainer
                onClick={onOpen}
                variant="subtle"
                colorScheme="cyan"
              >
                <TagLabel>Legg til en kontainer</TagLabel>
                <TagRightIcon boxSize="12px" as={Add} />
              </AddContainer>
              <ContainersData>
                <Containers>
                  <Container type="Matavfall" />
                  <Container type="Matavfall" />
                  <Container type="Plast" />
                  <Container type="Glass og metal" />
                </Containers>
                <Switch>
                  <Route
                    exact
                    path={`${path}/:containerId`}
                    children={<ContainerDetails />}
                  />
                </Switch>
              </ContainersData>
            </TabPanel>
          </TabPanels>
        </TabContainer>
      </Content>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ny kontainer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Fraksjon</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi fraksjon"
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Innkasttype</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi innkasttype"
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Oppstart av drift</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi oppastart av drift"
                />
              </Stack>
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
    </AdminInfoContainer>
  );
};

const AdminInfoContainer = styled.div`
  height: 92.5vh;
  display: flex;
  flex: 1;
  background-color: ${colors.greyLight};
`;
const Content = styled.div`
  font-size: 1.25rem;
  padding: 2.5rem;
  margin: 2rem;
  font-family: "Roboto";
  width: 60%;
  background-color: white;
  height: auto;
`;

const Title = styled.h1`
  font-weight: 600;
`;
const BreakingLine = styled.hr`
  border-top: 2px solid grey;
`;

const TabContainer = styled(Tabs)`
  margin-top: 3rem;
`;
const AddContainer = styled(Tag)`
  margin-top: 1rem;
  cursor: pointer;
  border: 2px solid white;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 2px solid #69b1bf;
  }
`;

const Containers = styled.div`
  min-height: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 2rem 0 0;
`;
const ContainersData = styled.div`
  display: flex;
  margin-top: 1.5rem;
`;
export default UnitDetails;
