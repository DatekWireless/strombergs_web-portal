import React from "react";
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
const User = ({ user }) => {
  return (
    <Tr>
      <Td>{user.Name}</Td>
      <Td>{user.Address}</Td>
      <Td>{user.Email}</Td>
    </Tr>
  );
};

export default User;
