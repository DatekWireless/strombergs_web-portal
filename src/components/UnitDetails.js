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
} from "@chakra-ui/react";
import Container from "./Container";
import ContainerDetails from "../components/ContainerDetails";
import UnitInfo from "./UnitInfo";
import { ReactComponent as Add } from "../assets/icons/Add.svg";
const UnitDetails = () => {
  let { path, url } = useRouteMatch();
  return (
    <AdminInfoContainer>
      <Content>
        <Header>Detaljer</Header> <BreakingLine />
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
              <AddContainer variant="subtle" colorScheme="cyan">
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

const Header = styled.h1`
  margin-right: 2rem;
`;
const BreakingLine = styled.hr`
  border-top: 2px solid grey;
`;

const TabContainer = styled(Tabs)`
  margin-top: 3rem;
`;
const AddContainer = styled(Tag)`
  margin-top: 1rem;
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
