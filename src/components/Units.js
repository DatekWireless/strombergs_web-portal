import React, { useState } from "react";
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
} from "@chakra-ui/react";

const Users = () => {
  const { url } = useRouteMatch();
  const [units, setUnits] = useState([
    {
      eier: "XXL",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 1,
    },
    {
      eier: "Coop Mega",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 2,
    },
    {
      eier: "Frogner Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 3,
    },
    {
      eier: "Bygdøy Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 4,
    },
    {
      eier: "Majorstuen Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: false,
      id: 5,
    },
    {
      eier: "Hasle Borettslag",
      street: "Vøyensvingen",
      postcode: "14B",
      inUse: true,
      id: 6,
    },
  ]);
  return (
    <Wrapper>
      <Content>
        Enheter
        <BreakingLine />
        <TableMainContainer>
          <Table variant="striped" size="sm" colorScheme={"teal"}>
            <TableCaption>
              Klikk på et navn til en enhet for å se detaljer
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Eier</Th>
                <Th>Gatenavn</Th>
                <Th>Nummer</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {units.map((unit) => (
                <Tr key={unit.id}>
                  <Td>{unit.eier}</Td>
                  <Td>{unit.street}</Td>
                  <Td>{unit.postcode}</Td>
                  <Td>
                    {unit.inUse ? (
                      <Badge colorScheme="green">i drift</Badge>
                    ) : (
                      <Badge colorScheme="red">ikke i drift</Badge>
                    )}
                  </Td>
                </Tr>
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

const TableMainContainer = styled(TableContainer)`
  margin-top: 3rem;
`;

export default Users;
