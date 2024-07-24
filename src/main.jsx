/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <ChakraProvider>
      <ColorModeScript initial="light" />
      <App />
    </ChakraProvider>{" "}
  </>
);
