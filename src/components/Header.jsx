/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Heading, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box display="flex" p={5}>
        <IconButton
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound="true"
          mr={5}
          onClick={toggleColorMode}
        />
        <Heading
          bgGradient="linear(to-r, red.500, blue.500, pink.500)"
          bgClip="text"
        >
          Todo App
        </Heading>
      </Box>
    </>
  );
};

export default Header;
