'use client';
import { Box, Container, useColorModeValue, Text, Grid, Image, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/TypewriterEffect";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/3D-Card";

export default function Home() {
  const [showDesc, setShowDesc] = useState(false);
  const bg = useColorModeValue("gray.50", "#030310");
  const color = useColorModeValue("#030310", "gray.50");

  const name = [
    {
      text: "I'm",
      className: "text-4xl md:text-6xl",
    },
    {
      text: "Ayoub NAIT MIHOUB",
      className: "text-blue-500 dark:text-blue-500 text-4xl md:text-6xl",
    },
    {
      text: ",",
      className: "text-4xl md:text-6xl",
    }
  ];

  const title = [
    {
      text: "a",
    },
    {
      text: "Software Engineer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "/",
    },
    {
      text: "Web Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: ".",
    },
  ];

  const description = "Passionate about creating innovative and efficient software solutions, I specialize in web development and software engineering with a focus on modern technologies and user-friendly designs.";

  const toggleDesc = () => {
    setTimeout(() => {
      setShowDesc(true)
    }, 1000);
  }

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
        id="About"
        minW='fit-content' 
        w="100%"
        h="auto"
        minH="100vh"
        pt={16}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
        overflow="visible"
        >
          <Grid 
          templateColumns={{
            base: "1fr",
            xl: "1fr 3fr"
          }}
          alignItems={{
            base: "center",
            sm:"start"
          }}
          justifyItems={{
            base: "center",
            sm:"start"
          }}
          gap={{
            base: 5,
            xl:10
          }}
          >
            <CardContainer className="w-fit">
              <CardBody className="bg-blue-500 rounded-md w-80 h-80">
                <CardItem translateZ="100" >
                  <Image src="./me.png" alt="Ayoub NAIT MIHOUB" rounded={10} width={320}/>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            <Flex flexDirection="column">
              <TypewriterEffectSmooth words={[{text: "Hi there !", className: "text-6xl md:text-8xl"}]} duration={1} cursorDuration={1} cursorClassName="h-12 md:h-24 xl:h-24"/>
              <TypewriterEffectSmooth words={name} delay={3} duration={2} cursorDuration={3} cursorClassName="h-12 md:h-16 xl:h-16"/>
              <TypewriterEffectSmooth words={title} delay={6} duration={3} onDone={toggleDesc}/>
            </Flex>
          </Grid>

          {showDesc && <TextGenerateEffect words={description} duration={1} delay={0.05} className="w-[894px] xl:w-full" />}
          
          
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
