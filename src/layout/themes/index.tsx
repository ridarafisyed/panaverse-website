"use client";

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    darkPurple: {
      50: "#8A82FF",
      100: "#736AFF",
      200: "#5D5AFF",
      300: "#4635FF",
      400: "#300FFF",
      500: "#1A00FF",
      600: "#1400CC",
      700: "#0E0099",
      800: "#080066",
      900: "#020033",
      gradient: "linear-gradient(135deg, #6300C7, #000E25)",
    },
  },
  styles: {
    global: {
      body: {
        bg: "darkPurple.gradient",
        color: "gray.50",
      },
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});

export default theme;
