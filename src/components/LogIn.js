import React from "react";
import { colors } from "../styles/variables";
import styled from "styled-components";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const LogIn = () => {
  return (
    <FormControl>
      <FormLabel htmlFor="email">Epost adresse</FormLabel>
      <Input id="email" type="email" />
      <FormLabel htmlFor="password">Passord</FormLabel>
      <Input id="password" type="password" />
    </FormControl>
  );
};

export default LogIn;
