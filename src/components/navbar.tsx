


import { useState } from "react";

import {
Box, Stack,
  Flex,
  Text,
  IconButton,
  Button,
  Link,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import logoPic from "../assets/logoPic.png";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <Box>
      <Flex minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} align={"center"}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={isMobile ? "center" : "left"}
            fontWeight="bold"
            fontSize="xl"
            fontFamily="monospace">
            <Image src={logoPic} alt="Panaverse Logo" height={60} />
          </Text>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
          mr={5}
          spacing={3}>
          <Link href="/" variant="ghost">
            Home
          </Link>
          <Link href="/about" variant="ghost">
            About
          </Link>
          <Link href="/courses" variant="ghost">
            Courses
          </Link>
          <Link href="/about" variant="ghost">
            Mentors
          </Link>
          <Link href="/about" variant="ghost">
            Apply Now
          </Link>
          <Link href="/contact-us" variant="ghost">
            Contact
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}

