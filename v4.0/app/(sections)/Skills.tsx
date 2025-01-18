'use client';

import { MovingCards } from "@/components/MovingCards";
import { Container, Flex, Heading } from "@chakra-ui/react";


export default function Skills() {
    return (
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
    )
}


const skills = [
    [
        {
            url: "./skills/html.svg",
            name: "HTML",
        },
        {
            url: "./skills/css.svg",
            name: "CSS",
        },
        {
            url: "./skills/javascript.svg",
            name: "JavaScript",
        },
        {
            url: "./skills/typescript.svg",
            name: "TypeScript",
        },
        {
            url: "./skills/python.svg",
            name: "python",
        },
        {
            url: "./skills/java.svg",
            name: "Java",
        },
        {
            url: "./skills/c.svg",
            name: "C",
        },
        {
            url: "./skills/php.svg",
            name: "PHP",
        },
    ],
    [
        {
            url: "./skills/tailwindcss.svg",
            name: "TailwindCSS",
        },
        {
            url: "./skills/sass.svg",
            name: "Sass",
        },
        {
            url: "./skills/react.svg",
            name: "React",
        },
        {
            url: "./skills/nextjs.svg",
            name: "NextJS",
        },
        {
            url: "./skills/redux.svg",
            name: "Redux",
        },
        {
            url: "./skills/reactQuery.png",
            name: "React Query",
        },
        {
            url: "./skills/bootstrap.svg",
            name: "Bootstrap",
        },
        {
            url: "./skills/mui.svg",
            name: "MaterialUI",
        },
        
        {
            url: "./skills/keystonejs.svg",
            name: "KeystoneJS",
        },
        {
            url: "./skills/django.svg",
            name: "Django",
        },
    ],
    [
        {
            url: "./skills/nodejs.svg",
            name: "NodeJS",
        },
        {
            url: "./skills/git.svg",
            name: "Git",
        },
        {
            url: "./skills/graphql.svg",
            name: "GraphQL",
        },
        {
            url: "./skills/mysql.svg",
            name: "MySQL",
        },
        {
            url: "./skills/postgresql.svg",
            name: "PostgreSQL",
        },
        {
            url: "./skills/oracle.svg",
            name: "Oracle",
        },
        {
            url: "./skills/figma.svg",
            name: "Figma"
        },
        {
            url: "./skills/bash.svg",
            name: "Bash"
        }
    ]
  ]
  