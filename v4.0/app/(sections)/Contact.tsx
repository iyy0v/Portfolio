import { Button, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Highlight, Input, Text, Textarea } from "@chakra-ui/react";
import Socials from "./Socials";


export default function Contact() {
    return(
        <Container 
        id="Contact"
        h="auto"
        minH="100vh"
        px={0}
        pt={{
          base: 10,
          md: 24
        }}
        pb={18}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="start"
        gap={16}
        className="w-[375px] sm:w-[480px] md:w-[674px] lg:w-[894px] xl:w-full min-w-[375px] sm:min-w-[480px] md:min-w-[674px] lg:min-w-[894px] xl:min-w-full"
        >
          
            <Flex 
            direction={{
                base:"column",
                xl: "row"
            }}
            justify="start"
            align={{
                base: "center",
                xl: "start"
            }}
            w="100%"
            gap={16}
            >
                <Container display="flex" flexDirection="column" justifyContent="start" alignItems="start" gap={8} w="fit-content" m={0}>
                    <Text className="text-3xl font-bold w-full">
                        Do you have a <span className="text-[#3182CE]">question</span> to ask or an <span className="text-[#3182CE]">opportunity</span> to present?
                    </Text>
                    <Text className="text-4xl font-bold w-full">
                        Feel free to <span className="text-[#3182CE]">reach out</span>.
                    </Text>
                </Container>

                <Grid
                templateColumns={"1fr 1fr"}
                gap={6} 
                flexGrow={1}
                w="100%"
                maxW="720px"
                px={4}
                >
                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <FormControl isRequired>
                            <FormLabel>Your Name</FormLabel>
                            <Input type="text" placeholder="John Doe" p={5} />
                            <FormErrorMessage>Name is required.</FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <FormControl>
                            <FormLabel>Your Email</FormLabel>
                            <Input type="email" placeholder="john@mail.com" p={5} />
                            <FormErrorMessage>Email is invalid.</FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormControl isRequired>
                            <FormLabel>Subject</FormLabel>
                            <Input type="text" placeholder="Subject..." p={5} />
                            <FormErrorMessage>Subject is required.</FormErrorMessage>
                        </FormControl>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormControl isRequired>
                            <FormLabel>Your Message</FormLabel>
                            <Textarea placeholder="Message..." p={5} h={{base: 40, xl:60}} resize="none" />
                            <FormErrorMessage>Message is required.</FormErrorMessage>
                        </FormControl>
                    </GridItem>
                
                    <GridItem colSpan={{ base: 2, xl: 1 }}>
                        <Button type="submit" colorScheme="blue" size="md" w={{base: "full", xl:"fit-content"}} >
                            Send Message
                        </Button>
                    </GridItem>
                </Grid>
            </Flex>

            <Socials />
        </Container>
    )
}