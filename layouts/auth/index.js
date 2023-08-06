// noinspection ES6UnusedImports

import React from "react";
import SignIn from "views/auth/signIn";
// Chakra imports
import {Box, useColorModeValue} from "@chakra-ui/react";

// Layout components

// Custom Chakra theme
export default function Auth() {
  // states and functions
  // functions for changing the states from components
  const authBg = useColorModeValue("white", "navy.900");
  document.documentElement.dir = "ltr";
  return (
    <Box
      bg={authBg}
      float="right"
      minHeight="100vh"
      height="100%"
      position="relative"
      w="100%"
      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
      transitionDuration=".2s, .2s, .35s"
      transitionProperty="top, bottom, width"
      transitionTimingFunction="linear, linear, ease"
    >
      <SignIn/>
    </Box>
  );
}
