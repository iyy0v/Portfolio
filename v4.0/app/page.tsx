'use client'

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


export default function Home() {
  const [showName, setShowName] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const bg = useColorModeValue("gray.50", "#030310");
  const color = useColorModeValue("#030310", "gray.50");

  const toggleName = () => {
    setTimeout(() => {
      setShowName(true)
    }, 900);
  }

  const toggleTitle= () => {
    setTimeout(() => {
      setShowTitle(true)
    }, 1000);
  }

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
        
        px={{
          base: 4,
          sm: 0
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={{
          base: 5,
          sm: 10
        }}
        overflow="visible"
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full max-w-[100vw]"
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
            sm: 10
          }}
          >
            <CardContainer className="w-fit">
              <CardBody className="bg-blue-500 rounded-md w-60 h-60 lg:w-80 lg:h-80 group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500/[0.4]">
                <CardItem translateZ="100" >
                  <Image src="./me.png" alt="Ayoub NAIT MIHOUB" rounded={10} width={320}/>
                </CardItem>
              </CardBody>
            </CardContainer>
            
            <Flex flexDirection="column">
              <TypewriterEffectSmooth words={hero.salutation} duration={0.5} cursorDuration={0.5} onDone={toggleName} cursorClassName="h-7 sm:h-10 md:h-12 lg:h-14 xl:h-14"/>
              {showName ? <TypewriterEffectSmooth words={hero.name} duration={1.5} cursorDuration={1.3} onDone={toggleTitle} cursorClassName="h-9 sm:h-10 md:h-14 lg:h-24 xl:h-24"/> : <div className="h-9 sm:h-10 md:h-14 lg:h-22 xl:h-22"></div>}
              {showTitle ? <TypewriterEffectSmooth words={hero.title} duration={1.5} onDone={toggleDesc} cursorClassName="h-7 sm:h-10 md:h-12 lg:h-16 xl:h-16"/> : <div className="h-7 sm:h-10 md:h-12 lg:h-16 xl:h-16"></div>}
            </Flex>
          </Grid>
          
          {showDesc ? <TextGenerateEffect words={hero.description} duration={1} delay={0.05} className="w-[363px] sm:w-[584px] md:w-[700px] lg:w-[914px] xl:w-full max-w-[calc(100vw - 32px]" />  : <div className="h-32"></div>}

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
          <Heading as="h1" size="72" className="text-3xl sm:text-5xl font-bold w-full min-h-16 overflow-visible text-center sm:text-left bg-clip-text text-transparent inline-block bg-gradient-to-b from-white to-blue-400">
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
        gap={{
          base: 5,
          sm: 10
        }}
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          <Heading as="h1" size="72" className="text-3xl sm:text-5xl font-bold w-full min-h-16 overflow-visible text-center sm:text-left bg-clip-text text-transparent inline-block bg-gradient-to-b from-white to-blue-400">
            Skills & Tech Stack
          </Heading>

          <Flex 
          direction="column" 
          justify="space-around" 
          align="center" 
          gap={{
            base: 0,
            sm: 22
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
          <Heading as="h1" size="72" className="text-3xl sm:text-5xl font-bold w-full min-h-16 overflow-visible text-center sm:text-left bg-clip-text text-transparent inline-block bg-gradient-to-b from-white to-blue-400">
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

const hero = {
  salutation: [
      {
          text: "Hello there 👋", 
          className: "text-xl sm:text-3xl md:text-4xl lg:text-5xl"
      }
  ],
  name: [
      {
          text: "I'm ",
          className: "text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
      },
      {
          text: "Ayoub NAIT MIHOUB",
          className: "text-blue-500 dark:text-blue-500 text-2xl sm:text-3xl md:text-5xl lg:text-7xl",
      },
      {
          text: ",",
          className: "text-2xl sm:text-3xl md:text-5xl lg:text-7xl"
      }
  ],
  title: [
      {
          text: "a ",
          className: "text-lg sm:text-3xl md:text-4xl lg:text-5xl"
      },
      {
          text: "Software Engineer",
          className: "text-blue-500 dark:text-blue-500 text-lg sm:text-3xl md:text-4xl lg:text-5xl",
      },
      {
          text: "/",
          className: "text-lg sm:text-3xl md:text-4xl lg:text-5xl",
      },
      {
          text: "Web Developer",
          className: "text-blue-500 dark:text-blue-500 text-lg sm:text-3xl md:text-4xl lg:text-5xl",
      },
      {
          text: "👨‍💻",
          className: "text-lg sm:text-3xl md:text-4xl lg:text-5xl",
      },
  ],
  description: "Passionate about creating innovative and efficient software solutions, I specialize in web development and software engineering with a focus on modern technologies and user-friendly designs."
}

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

const projects = [
  {
    title: "Mail Algérie - Mail Tracking & Management",
    description: "Developed a Progressive Web Application to optimize and modernize Air Algérie's mail management process, enhancing efficiency and ensuring document traceability. The application features a user-friendly interface for visualizing, adding, modifying, and deleting incoming and outgoing mails, supports OCR for mail digitization and Gemini AI for content auto-correction, and facilitates document sharing and collaboration. It includes mail searching/filtering, automatic alerts for response deadlines and other notifications, multilingual support, mobile adaptability and offline disponibility. The application also includes administration features for managing structures, users, roles, permissions, mails, viewing audit logs and generating reports.",
    stack: "TypeScript, React, Redux, React-Query, Next.js, HTML, TailwindCSS, Python, Nginx, Django, PostgreSQL, GraphQL, Firebase Cloud Messaging, Gemini API, Tesseract",
    images: [
      "/projects/air-mail/1.png",
      "/projects/air-mail/2.png",
      "/projects/air-mail/3.png",
      "/projects/air-mail/4.png",
      "/projects/air-mail/5.png",
      "/projects/air-mail/6.png",
      "/projects/air-mail/7.png",
      "/projects/air-mail/8.png",
      "/projects/air-mail/9.png",
      "/projects/air-mail/10.png",
      "/projects/air-mail/11.png",
      "/projects/air-mail/12.png",
      "/projects/air-mail/13.png",
      "/projects/air-mail/14.png",
      "/projects/air-mail/15.png",
      "/projects/air-mail/16.png",
      "/projects/air-mail/17.png",
      "/projects/air-mail/18.png",
      "/projects/air-mail/19.png",
      "/projects/air-mail/20.png",
      "/projects/air-mail/21.png",
      "/projects/air-mail/22.png",
      "/projects/air-mail/23.png",
      "/projects/air-mail/24.png",
    ]
  },
  {
    title: "Lolyzer - Stats & Analytics",
    description: `A serverless web app where users can access and analyze League of Legends accounts stats and history.
    - Account search on all available regions and servers.
    - General information displayed about the account : name, region, icon, level, rank (Solo/Duo and Flex).
    - Automated MMR check on WhatIsMyMMR.
    - Main champions played on the account displayed in order including their Mastery, Mastery Points and Last time played.
    - Statistics visualized in different charts including Win/Loss ratio on main game modes as well as played lanes from the last 20 recent games.
   - History of the last 20 recent games played with some very specific details including the Game Mode, Date, Duration, Result, Champion , Items , Runes, Score, Achievements, Players and more.
    - Multiple accounts can be added to the account list for quick access.`,
    stack: "HTML/CSS, JavaScript, React, TailwindCSS, Chart.JS, REST API",
    images: [
      "/projects/lolyzer/1.png",
      "/projects/lolyzer/2.png",
      "/projects/lolyzer/3.png",
      "/projects/lolyzer/4.png",
    ]
  },
  {
    title: "Flite - E-tourism plateform (Front-end)",
    description: "Created a responsive front end of an e-tourism plateform for traveling offers. Traveling agencies can post their offers while clients can search, filter, save and share those offers. The plateform includes a user-friendly interface, supports authentication and have an administration panel.",
    stack: "HTML/CSS, Sass, JavaScript, React, Bootstrap, REST API",
    images: [
      "/projects/flite/1.png",
      "/projects/flite/2.png",
      "/projects/flite/3.png",
      "/projects/flite/4.png",
    ]
  },
]
