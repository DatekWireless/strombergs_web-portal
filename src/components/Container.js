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
      <LinkContainer>
        <UserName>{type}</UserName>
      </LinkContainer>
      <IconsWrapper>
        <IconConatiner>
          <IconDelete />
        </IconConatiner>
        <IconConatiner>
          <IconEdit />
        </IconConatiner>
      </IconsWrapper>
    </UserContainer>
  );
};
const UserContainer = styled(Link)`
  padding: 0.25rem;
  width: 22.5rem;
  border-radius: 5px;
  border: 2px solid ${colors.greenPale};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${colors.greenPaleLight};
    box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
    -webkit-box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
    -moz-box-shadow: 1px 4px 8px -4px rgba(79, 79, 79, 0.48);
  }
  text-decoration: none;
  font-size: 1.25rem;
  font-family: "Roboto";
  font-weight: 500;
  color: black;
`;
const LinkContainer = styled(Link)`
  width: 70%;
`;

const UserName = styled.p`
  padding-left: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
`;

const IconsWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconConatiner = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  &:hover {
    background-color: ${colors.greenPale};
    transition: all 0.1s ease-in-out;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconDelete = styled(Delete)`
  width: 0.85rem;
`;
const IconEdit = styled(Edit)`
  width: 0.85rem;
`;

export default Container;
