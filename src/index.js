import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
