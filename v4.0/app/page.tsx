'use client';
import { hero, skills, projects } from "@/utils/data";
import { Box, Container, useColorModeValue, Text, Grid, Image, Flex, Heading, useDisclosure} from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { TypewriterEffectSmooth } from "@/components/TypewriterEffect";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useEffect, useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/3D-Card";
import { Meteors } from "@/components/Meteors";
import { GlareCard } from "@/components/GlareCard";
import { MovingCards } from "@/components/MovingCards";
import Project from "@/components/Project";
import Contact from "./(sections)/Contact";
import Socials from "./(sections)/Socials";

export default function Home() {
  const [showDesc, setShowDesc] = useState(false);
  const bg = useColorModeValue("gray.50", "#030310");
  const color = useColorModeValue("#030310", "gray.50");

  const toggleDesc = () => {
    setTimeout(() => {
      setShowDesc(true)
    }, 1000);
  }

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
        <meta name="description" content="Ayoub's portfolio" />  
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Meteors number={40} />
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
        py={24}
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
            base: "start",
          }}
          justifyItems={{
            base: "start",
          }}
          gap={{
            base: 5,
            xl:10
          }}
          >
            <CardContainer className="w-fit ">
              <CardBody className="bg-blue-500 rounded-md w-60 h-60 lg:w-80 lg:h-80 group/card dark:hover:shadow-2xl dark:hover:shadow-indigo -500/[0.4]">
                <CardItem translateZ="100" >
                  <Image src="./me.png" alt="Ayoub NAIT MIHOUB" rounded={10} width={320}/>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            <Flex flexDirection="column">
              <TypewriterEffectSmooth words={hero.salutation} duration={1} cursorDuration={1} cursorClassName="h-14 sm:h-18 lg:h-24 xl:h-24"/>
              <TypewriterEffectSmooth words={hero.name} delay={3} duration={2} cursorClassName="h-8 sm:h-10 lg:h-14 xl:h-14"/>
              <TypewriterEffectSmooth words={hero.title} delay={6} duration={3} onDone={toggleDesc} cursorDuration={3} cursorClassName="h-10 sm:h-10 lg:h-16 xl:h-16"/>
            </Flex>
          </Grid>
          
          {showDesc ? <TextGenerateEffect words={hero.description} duration={1} delay={0.05} className="w-[452px] sm:w-[562px] md:w-[674px] lg:w-[894px] xl:w-full" />  : <div className="h-32"></div>}

        </Container>

        <Container 
        id="Education"
        h="auto"
        minH="100vh"
        px={0}
        py={{
          base: 10,
          md: 28
        }}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap={10}
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          <Heading as="h1" className="text-7xl font-bold w-full ml-8 sm:ml-0">
            Education
          </Heading>

          <Flex 
          direction="column" 
          justify="center" 
          align="center" 
          gap={{
            base: 10,
            md: 28
          }} 
          w="100%" 
          flexGrow={1}
          >
            <GlareCard>
              <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 4fr"
              }}
              templateRows={{
                base: "1fr 2fr",
                md: "1fr"
              }}
              justifyItems="center"
              alignItems="center"
              gap={{
                base: 2,
                sm: 6
              }}
              px={6}
              py={10}
              >
                <Image src="./usthb.png" alt="USTHB" width={100}/>
                <Flex 
                direction="column" 
                justify={{
                  base: "center",
                  md: "space-between"
                }}
                align="start"
                justifySelf="start"
                gap={2}
                >
                  <Text className="text-sm md:text-md italic text-gray-400">
                    Sep 2022 - Jun 2024
                  </Text>
                  <Text as="h2" className="text-2xl md:text-3xl font-bold">
                    Master of Science in <span className="text-blue-500">Software Engineering</span>
                  </Text>
                  <Text className="text-md md:text-xl text-gray-400">
                    University of Science and Technology - Houari Boumediene
                  </Text>
                </Flex>
              </Grid>
            </GlareCard>

            <GlareCard className="w-full">
              <Grid
              templateColumns={{
                base: "1fr",
                md: "1fr 4fr"
              }}
              templateRows={{
                base: "1fr 2fr",
                md: "1fr"
              }}
              justifyItems="center"
              alignItems="center"
              gap={{
                base: 2,
                sm: 6
              }}
              px={6}
              py={10}
              >
                <Image src="./usthb.png" alt="USTHB" width={100}/>
                <Flex 
                direction="column" 
                justify={{
                  base: "center",
                  md: "space-between"
                }}
                align="start"
                justifySelf="start"
                gap={2}
                >
                  <Text className="text-sm md:text-md italic text-gray-400">
                    Sep 2019 - Jun 2022
                  </Text>
                  <Text as="h2" className="text-2xl md:text-3xl font-bold">
                    Bachelor of Science in <span className="text-blue-500">Computer Science</span>
                  </Text>
                  <Text className="text-md md:text-xl text-gray-400">
                    University of Science and Technology - Houari Boumediene
                  </Text>
                </Flex>
              </Grid>
            </GlareCard>
          </Flex>

        </Container>

        <Container 
        id="Skills"
        h="auto"
        minH="100vh"
        px={0}
        py={{
          base: 10,
          md: 28
        }}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap={10}
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          <Heading as="h1" className="text-7xl font-bold w-full ml-8 sm:ml-0">
            Skills & Tech Stack
          </Heading>

          <Flex 
          direction="column" 
          justify="center" 
          align="center" 
          gap={{
            base: 8,
            md: 22
          }} 
          w="100%" 
          flexGrow={1}
          >
            <MovingCards items={skills[0]} speed="slow" />
            <MovingCards items={skills[1]} speed="slow" direction="right"/>
            <MovingCards items={skills[2]} speed="slow" />
          </Flex>
        </Container>

        <Container 
        id="Projects"
        h="auto"
        minH="100vh"
        px={0}
        py={{
          base: 10,
          md: 28
        }}
        display="flex"
        flexDirection="column"
        justifyContent="start"
        alignItems="center"
        gap={14}
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          <Heading as="h1" className="text-7xl font-bold w-full ml-8 sm:ml-0">
            Projects & Experience
          </Heading>

          <Flex
          direction="column"
          align="center"
          gap={10}
          w="100%"
          >
            {
              projects.map((project, index) => <Project key={index} content={project} />)
            }
          </Flex>
        </Container>

        <Contact />

      </Container>

    </Box>
  );
}
