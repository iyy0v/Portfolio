'use client';

import { GlareCard } from "@/components/GlareCard";
import { Container, Flex, Grid, Heading, Text, Image } from "@chakra-ui/react";

export default function Education() {
    return (
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
                <Image src="./usthb.png" alt="USTHB" width={100} />
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
                <Image src="./usthb.png" alt="USTHB" width={100} />
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
    )
}