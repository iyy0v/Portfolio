'use client'

import { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Contact from "./(sections)/Contact";
import About from "./(sections)/About";
import Education from "./(sections)/Education";
import Skills from "./(sections)/Skills";
import Projects from "./(sections)/Projects";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";


export default function Home() {
  const bg = useColorModeValue("gray.50", "#030310");
  const color = useColorModeValue("#030310", "gray.50");

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    window.onload = function () {
      window.scrollTo(0, 0);
    }
  },[])

  return (
    <Box as="main" bgColor={bg} textColor={color}>
      <Head>
        <title>Ayoub NAIT MIHOUB - Website</title>
        <meta name="description" content="Ayoub - Portfolio" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NavBar />

      <Container 
      maxW="container.xl" 
      alignContent='center' 
      p={0}
      >
        
        <About />

        <Education />

        <Skills />

        <Projects />

        <Contact />

      </Container>
    </Box>
  );
}


