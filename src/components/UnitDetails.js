import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";
import UnitsSlice from "../features/UnitsSlice";
const UnitDetails = ({ unitId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let { path, url } = useRouteMatch();

  const [containers, setContainers] = useState([]);
  const[units, setUnits] = useState([]);
  const token = localStorage.getItem("API_token");
  let headers = {
    authorization: `Bearer ${token}`,
  };

  const fetchContainers = () => {
    axios
      .get(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/containers`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setContainers(res.data);
      });
  };

  const fetchUnits = () => {
    axios
      .get(
        `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/units/${unitId}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setUnits(res.data);
      });
  };

  useEffect(() => {
    fetchContainers();
    fetchUnits();
  }, []);

  const TypeInputRef = useRef();
  const InsertionTypeInputRef = useRef();
  const StartInputRef = useRef();
  const SizeInputRef = useRef();

  const changeUnitStatusHandler = (isActive) => {
    axios.put(
      `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/units`, {Active: isActive ? true : false}, {headers:headers}
    ).then(res => {
      res.status===200 && fetchUnits()
    })
  };
  const createContainerHandler = () => {
    let container = {
      Fraction: " ",
      Type: "",
      Startup: "",
      Size: "",
    };

    container = {
      Fraction: TypeInputRef.current.value,
      Type: InsertionTypeInputRef.current.value,
      Startup: StartInputRef.current.value,
      Size: SizeInputRef.current.value,
    };
    axios.post(
      `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/containers`,
      container,
      {
        headers: headers,
      }
    );
    onClose();
  };

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
              <UnitInfo
                units={units}
                statusPutApi={changeUnitStatusHandler}
              />
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
                  {containers &&
                    containers.map((container, index) => (
                      <Container
                        key={index}
                        fraction={container.Fraction}
                        containerId={container.Id}
                      />
                    ))}
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
                  ref={TypeInputRef}
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Innkasttype</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi innkasttype"
                  ref={InsertionTypeInputRef}
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Oppstart av drift</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi oppastart av drift"
                  ref={StartInputRef}
                />
              </Stack>
              <Stack spacing={1}>
                <Text fontSize="xs">Størelse</Text>
                <Input
                  focusBorderColor="teal.400"
                  variant="filled"
                  placeholder="oppgi størelse"
                  ref={SizeInputRef}
                />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button onClick={createContainerHandler} variant="ghost">
              Lagre
            </Button>
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
