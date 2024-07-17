'use client';
import { Box, Container, useColorModeValue, Text, Grid, Image, Flex, Heading } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import { TypewriterEffect, TypewriterEffectSmooth } from "@/components/TypewriterEffect";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { useEffect, useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/3D-Card";
import { Meteors } from "@/components/Meteors";
import { TracingBeam } from "@/components/TracingBeam";
import { FollowerPointerCard, FollowPointer } from "@/components/FollowingPointer";
import { GlareCard } from "@/components/GlareCard";
import { MovingCards } from "@/components/MovingCards";

export default function Home() {
  const [showDesc, setShowDesc] = useState(false);
  const bg = useColorModeValue("gray.50", "#030310");
  const color = useColorModeValue("#030310", "gray.50");

  const name = [
    {
      text: "I'm",
      className: "text-3xl md:text-4xl lg:text-6xl",
    },
    {
      text: "Ayoub NAIT MIHOUB",
      className: "text-blue-500 dark:text-blue-500 text-3xl md:text-4xl lg:text-6xl",
    },
    {
      text: ",",
      className: "text-3xl md:text-4xl lg:text-6xl",
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

  const skills = [
    [
      {
        url: "./html.svg",
        name: "HTML",
      },
      {
        url: "./css.svg",
        name: "CSS",
      },
      {
        url: "./javascript.svg",
        name: "JavaScript",
      },
      {
        url: "./typescript.svg",
        name: "TypeScript",
      },
      {
        url: "./python.svg",
        name: "python",
      },
      {
        url: "./java.svg",
        name: "Java",
      },
      {
        url: "./c.svg",
        name: "C",
      },
      {
        url: "./php.svg",
        name: "PHP",
      },
    ],
    [
      {
        url: "./tailwindcss.svg",
        name: "TailwindCSS",
      },
      {
        url: "./sass.svg",
        name: "Sass",
      },
      {
        url: "./React.svg",
        name: "React",
      },
      {
        url: "./nextjs.svg",
        name: "NextJS",
      },
      {
        url: "./redux.svg",
        name: "Redux",
      },
      {
        url: "/reactQuery.png",
        name: "React Query",
      },
      {
        url: "./bootstrap.svg",
        name: "Bootstrap",
      },
      {
        url: "./mui.svg",
        name: "MaterialUI",
      },
      
      {
        url: "./keystonejs.svg",
        name: "KeystoneJS",
      },
      {
        url: "./django.svg",
        name: "Django",
      },
    ],
    [
      {
        url: "./nodejs.svg",
        name: "NodeJS",
      },
      {
        url: "./git.svg",
        name: "Git",
      },
      {
        url: "./graphql.svg",
        name: "GraphQL",
      },
      {
        url: "./mysql.svg",
        name: "MySQL",
      },
      {
        url: "./postgresql.svg",
        name: "PostgreSQL",
      },
      {
        url: "./oracle.svg",
        name: "Oracle",
      },
      {
        url: "./figma.svg",
        name: "Figma"
      },
      {
        url: "./bash.svg",
        name: "Bash"
      }
    ]
  ]

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
              <TypewriterEffectSmooth words={[{text: "Hi there !", className: "text-5xl md:text-6xl lg:text-8xl"}]} duration={1} cursorDuration={1} cursorClassName="h-14 sm:h-18 lg:h-24 xl:h-24"/>
              <TypewriterEffectSmooth words={name} delay={3} duration={2} cursorDuration={3} cursorClassName="h-10 sm:h-10 lg:h-16 xl:h-16"/>
              <TypewriterEffectSmooth words={title} delay={6} duration={3} onDone={toggleDesc} cursorClassName="h-8 sm:h-10 lg:h-14 xl:h-14"/>
            </Flex>
          </Grid>
          
          {showDesc ? <TextGenerateEffect words={description} duration={1} delay={0.05} className="w-[452px] sm:w-[562px] md:w-[674px] lg:w-[894px] xl:w-full" />  : <div className="h-32"></div>}

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
        className="w-[390px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[390px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
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
              p={8}
              >
                <Image src="./usthb.png" alt="USTHB" width={100}/>
                <Flex 
                direction="column" 
                justify={{
                  base: "center",
                  md: "space-between"
                }}
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
              p={8}
              >
                <Image src="./usthb.png" alt="USTHB" width={100}/>
                <Flex 
                direction="column" 
                justify={{
                  base: "center",
                  md: "space-between"
                }}
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
        className="w-[390px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[390px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          <Heading as="h1" className="text-7xl font-bold w-full ml-8 sm:ml-0">
            Skills
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
            <MovingCards items={skills[1]} speed="slow" />
            <MovingCards items={skills[2]} speed="slow" />
          </Flex>
        </Container>

        <Container 
        id="Experience"
        bgColor='cyan' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          <Heading as="h1" className="text-7xl font-bold w-full ml-8 sm:ml-0">
            Experience
          </Heading>
        </Container>

        <Container 
        id="Projects"
        bgColor='purple' 
        minW='100%' 
        height={2000} 
        pt={16}
        >
          <Heading as="h1" className="text-7xl font-bold w-full">
            Projects
          </Heading>
          
        </Container>
      </Container>
    </Box>
  );
}
