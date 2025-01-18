'use client';

import Project from "@/components/Project";
import { Container, Flex, Heading } from "@chakra-ui/react";


export default function Projects() {
    return (
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
    )
}


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
      ],
      linkUrl: "https://github.com/iyy0v/LOL-analyzer"
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
  