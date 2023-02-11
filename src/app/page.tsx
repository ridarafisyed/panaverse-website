"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
// import Todo from "@/components/Todo/Todo";
import { Box, Container } from "@chakra-ui/react";

import React from "react";

const Home = () => {
  return (
    <Box w="100%" h="800px" bgGradient="linear( #6300C7, #000E25)" color="white">
      <Navbar />
      <h1>Welcome Home</h1>
      <Footer />
    </Box>
  );
};

export default Home;
