'use client';
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "./components/NavBar";

export default function Home() {
  
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.900", "gray.50");

  return (
    <Box as="main" bgColor={bg} textColor={color}>
      <Head>
        <title>Ayoub NAIT MIHOUB - Website</title>
        <meta name="description" content="Ayoub's portfolio" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <NavBar />

      <Container 
      maxW="container.xl" 
      alignContent='center' 
      p={0}
      >
        <Container 
        id="Home"
        bgColor='orange'
        minW='100%' 
        height={2000} 
        pt={16}
        >
          Home
        </Container>

        <Container 
        id="Education"
        bgColor='blue' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          Education
        </Container>

        <Container 
        id="Projects"
        bgColor='purple' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          Projects
        </Container>

        <Container 
        id="Skills"
        bgColor='green' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          Skills
        </Container>

        <Container 
        id="Contact"
        bgColor='cyan' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          Contact
        </Container>
      </Container>
    </Box>
  );
}
