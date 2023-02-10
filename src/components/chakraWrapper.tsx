"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {theme} from "@chakra-ui/react"

type Props = {
  children: React.ReactNode;
};

const chakraWrapper = ({ children }: Props) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default chakraWrapper;