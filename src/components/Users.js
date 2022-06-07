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
import TableViewer from "react-js-table-with-csv-dl";

const Users = () => {
  let table = [
    { number: 12, name: "Del Piero", position: "ST" },
    { number: 21, name: "Pirlo", position: "MC" },
    { number: 1, name: "Buffon", position: "GK" },
  ];

  return (
    <Wrapper>
      <Content>
        <Title> Brukere</Title>
        <BreakingLine />
        <TableViewer
          content={table}
          headers={["number", "name", "position"]}
          minHeight={0}
          maxHeight={400}
          activateDownloadButton={true}
        />
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
