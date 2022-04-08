import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
import { Link, useRouteMatch } from "react-router-dom";

import { ReactComponent as Delete } from "../assets/icons/Delete.svg";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
const Container = ({ type }) => {
  let { url } = useRouteMatch();
  return (
    <UserContainer to={`${url}/${type}`}>
      <UserName>{type}</UserName>
      <IconsWrapper>
        <IconDelete />
        <IconEdit />
      </IconsWrapper>
    </UserContainer>
  );
};
const UserContainer = styled(Link)`
  padding: 0.35rem;
  width: 25rem;
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
  font-size: 1rem;
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
  width: 0.85rem;
`;
const IconEdit = styled(Edit)`
  width: 0.85rem;
`;

export default Container;
