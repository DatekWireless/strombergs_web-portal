import React from "react";
import { colors } from "../styles/variables";
import { Badge } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Delete } from "../assets/icons/Delete.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";

const Admin = ({ name, userID, isLogged }) => {
  const { url } = useRouteMatch();

  return (
    <AdminContainer exact="true" to={`${url}/${userID}`}>
      <UserName>{name}</UserName>
      {isLogged ? (
        <Badge colorScheme="green" variant="subtle">
          pålogget
        </Badge>
      ) : null}
      <IconsWrapper>
        <IconDelete />
        <IconEdit />
      </IconsWrapper>
    </AdminContainer>
  );
};

const AdminContainer = styled(Link)`
  padding: 0.75rem;
  width: 30rem;
  border-radius: 5px;
  border: 2px solid ${colors.greenPale};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.greenPaleLight};
    box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -webkit-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
    -moz-box-shadow: 1px 5px 10px -5px rgba(79, 79, 79, 0.48);
  }
  text-decoration: none;
  font-size: 1.25rem;
  font-family: "Roboto";
  font-weight: 500;
  color: black;
`;

const UserName = styled.p``;

const IconsWrapper = styled.div`
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconDelete = styled(Delete)`
  width: 1rem;
`;
const IconEdit = styled(Edit)`
  width: 1rem;
`;

export default Admin;
