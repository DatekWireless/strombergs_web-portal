import React from "react";
import styled from "styled-components";
import { colors } from "../styles/variables";
const Topbar = () => {
  return <TopbarContainer></TopbarContainer>;
};
const TopbarContainer = styled.div`
  width: 100vw;
  height: 7.5vh;
  background-color: ${colors.mainGreen};
`;

export default Topbar;
