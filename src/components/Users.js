import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/variables";
import {
  Spinner,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import TableViewer from "react-js-table-with-csv-dl";
import User from "./User";
import { useUsersQuery } from "../../src/features/api/ApiSlice";

const Users = () => {
  const { data, error, isLoading, isFetching, isSuccess } = useUsersQuery();
  const [usersList, setUsersList] = useState("Initial State");
  useEffect(() => {
    if (isSuccess) {
      data.length === 0 ? setUsersList("Error") : setUsersList(data);
    }
  }, [useUsersQuery()]);

  // const token = localStorage.getItem("API_token");
  // let headers = {
  //   authorization: `Bearer ${token}`,
  // };

  // const getUsers = () => {
  //   axios
  //     .get(
  //       `https://gpshu4lon5.execute-api.eu-north-1.amazonaws.com/Test/users`,
  //       {
  //         headers: headers,
  //       }
  //     )
  //     .then((res) => {
  //      console.log(res.data);
  //     });
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

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
                <Th>Adresse</Th>
                <Th>Epost</Th>
              </Tr>
            </Thead>
            <Tbody>
              {usersList === "Initial State" ? (
                <SpinnerWrapper>
                  <Spinner size="lg" color={colors.greenMain} />
                </SpinnerWrapper>
              ) : (
                usersList !== "Error" &&
                usersList.map((user, index) => <User key={index} user={user} />)
              )}
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
const SpinnerWrapper = styled.div`
  width: 100%;
  height: 4rem;
  padding-top: 1rem;
  justify-content: center;
`;

export default Users;
