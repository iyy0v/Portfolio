'use client'

import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/3D-Card"
import { TextGenerateEffect } from "@/components/TextGenerateEffect"
import { TypewriterEffectSmooth } from "@/components/TypewriterEffect"
import { Container, Flex, Grid, Image } from "@chakra-ui/react"



export default function About() {
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showDesc, setShowDesc] = useState(false);
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        // Ensure client-side rendering
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return null; // Render nothing until hydrated
    }

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

    return (
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
                  <Image src="./me.png" alt="Ayoub NAIT MIHOUB" rounded={10} width={320} />
                </CardItem>
              </CardBody>
            </CardContainer>
            
            <Flex flexDirection="column">
              <TypewriterEffectSmooth words={data.salutation} duration={0.5} cursorDuration={0.5} onDone={toggleName} cursorClassName="h-7 sm:h-10 md:h-12 lg:h-14 xl:h-14"/>
              {showName ? <TypewriterEffectSmooth words={data.name} duration={1.5} cursorDuration={1.3} onDone={toggleTitle} cursorClassName="h-9 sm:h-10 md:h-14 lg:h-24 xl:h-24"/> : <div className="h-9 sm:h-10 md:h-14 lg:h-22 xl:h-22"></div>}
              {showTitle ? <TypewriterEffectSmooth words={data.title} duration={1.5} onDone={toggleDesc} cursorClassName="h-7 sm:h-10 md:h-12 lg:h-16 xl:h-16"/> : <div className="h-7 sm:h-10 md:h-12 lg:h-16 xl:h-16"></div>}
            </Flex>
          </Grid>
          
          {showDesc ? <TextGenerateEffect words={data.description} duration={1} delay={0.05} className="w-[363px] sm:w-[584px] md:w-[700px] lg:w-[914px] xl:w-full max-w-[calc(100vw - 32px]" />  : <div className="h-32"></div>}

        </Container>
    )
}

const data = {
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