import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { useParams } from "react-router-dom";

const AdminDetails = () => {
  const { id } = useParams();

  return (
    <AdminInfoContainer>
      <Content>
        <Header>Details</Header> <hr />
        <InfoBox>
          <Navn>
            {" "}
            <Header>Navn: </Header>
            <Text>Magnus Johansen</Text>
          </Navn>
          <Role>
            {" "}
            <Header>Rolle: </Header>
            <Text>Admin</Text>
          </Role>
          <ID>
            {" "}
            <Header>AdminID: </Header>
            <Text>1SA-4433242342342343</Text>
          </ID>
          <Created>
            <Header>Opprettet: </Header>
            <Text>31.03.2022, 14:33</Text>
          </Created>
        </InfoBox>
        {/* <NewUserBox></NewUserBox> */}
      </Content>
    </AdminInfoContainer>
  );
};

const AdminInfoContainer = styled.div`
  height: 92.5vh;
  display: flex;
  flex: 1;
`;
const Content = styled.div`
  font-size: 1.25rem;
  padding: 2.5rem;
  font-family: "Roboto";
`;
const InfoBox = styled.div`
  width: auto;
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin: 2.5rem 0 2.5rem 0;
  padding: 1rem;
`;
const Navn = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
`;
const Role = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
`;
const ID = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
`;
const Created = styled.div`
  display: flex;
  margin: 1rem 0 1rem 0;
`;

const Header = styled.h1`
  margin-right: 2rem;
`;
const Text = styled.p`
  color: grey;
`;

export default AdminDetails;
