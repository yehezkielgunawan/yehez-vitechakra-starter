import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import ContainerWrapper from "./components/wrapper/ContainerWrap";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ContainerWrapper>
        <App />
      </ContainerWrapper>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
