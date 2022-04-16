import React from "react";
import { Link } from "react-router-dom";
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
} from "@chakra-ui/react";

const Users = () => {
  return (
    <Wrapper>
      <Content>
        <Title> Brukere</Title>
        <BreakingLine />
        <TableMainContainer>
          <Table variant="striped" size="sm" colorScheme={"teal"}>
            <Thead>
              <Tr>
                <Th>Navn</Th>
                <Th>Gatenavn</Th>
                <Th>Nummer</Th>
                <Th>Epost</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
              <Tr>
                <Td>Tobias Jørgensen</Td>
                <Td>Vøyensvingen</Td>
                <Td>14B</Td>
                <Td>tj@gmail.com</Td>
              </Tr>
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
