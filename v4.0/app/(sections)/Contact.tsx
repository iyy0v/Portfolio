'use client'

import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { validationSchema } from "@/utils/validations";
import Socials from "./Socials";
import { Button, Container, Flex, FormControl, FormLabel, Grid, GridItem, Text } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'

type ContactProps = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export default function Contact() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast()

    const handleSubmit = async (
        values: ContactProps,
        {
            setSubmitting,
            resetForm,
        } : {
            setSubmitting: (isUbmitting: boolean) => void;
            resetForm: () => void;
        }
        
    ) => {
        try {
            setLoading(true)
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values),
            }).then((res) => {
                toast({
                    title: 'Your message was sent.',
                    description: "Thank you!",
                    status: 'success',
                    variant: 'left-accent',
                    position: 'bottom-right',
                    duration: 3000,
                })
            });

            resetForm()

            console.log("Email sent successfully!");
        } catch (error) {
            toast({
                title: 'Failed to send message.',
                description: "Please try again later, or contact me using my email..",
                status: 'error',
                variant: 'left-accent',
                position: 'bottom-right',
                duration: 3000,
            })
            console.error("Failed to send email: ", error);
        } finally {
            setSubmitting(false)
            setLoading(false);
        }
    }

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
                <Formik
                initialValues={{ name: "", email: "", subject: "", message: "" }}
                validationSchema={toFormikValidationSchema(validationSchema)}
                onSubmit={handleSubmit}
                >
                    <Form className="w-full flex justify-center items-center">
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
                                    <Field id="name" name="name" type="text" placeholder="John Doe" className="py-2 px-4 bg-transparent rounded-md border focus:shadow-[0_0_0_2px_#60a5fa] focus:shadow-blue-400 focus:outline-none transition-shadow duration-300 w-full" />
                                    <ErrorMessage name="name" component="div" className="text-red-500" />
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={{ base: 2, md: 1 }}>
                                <FormControl>
                                    <FormLabel>Your Email</FormLabel>
                                    <Field id="email" name="email" type="email" placeholder="john@mail.com" className="py-2 px-4 bg-transparent rounded-md border focus:shadow-[0_0_0_2px_#60a5fa] focus:shadow-blue-400 focus:outline-none transition-shadow duration-300 w-full" />
                                    <ErrorMessage name="email" component="div" className="text-red-500" />
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <FormControl>
                                    <FormLabel>Subject</FormLabel>
                                    <Field id="subject" name="subject" type="text" placeholder="Subject..." className="py-2 px-4 bg-transparent rounded-md border focus:shadow-[0_0_0_2px_#60a5fa] focus:shadow-blue-400 focus:outline-none transition-shadow duration-300 w-full" />
                                    <ErrorMessage name="subject" component="div" className="text-red-500" />
                                </FormControl>
                            </GridItem>

                            <GridItem colSpan={2}>
                                <FormControl isRequired>
                                    <FormLabel>Your Message</FormLabel>
                                    <Field as="textarea" id="message" name="message" placeholder="Message..." className="py-2 px-4 bg-transparent rounded-md border focus:shadow-[0_0_0_2px_#60a5fa] focus:shadow-blue-400 focus:outline-none transition-shadow duration-300 w-full min-h-32 resize-none" />
                                    <ErrorMessage name="message" component="div" className="text-red-500" />
                                </FormControl>
                            </GridItem>
                        
                            <GridItem colSpan={{ base: 2, xl: 1 }}>
                                <Button 
                                type="submit"
                                colorScheme="blue" 
                                size="md" 
                                w={{base: "full", xl:"fit-content"}} 
                                isLoading={isLoading}
                                >
                                    Send Message
                                </Button>
                            </GridItem>
                        </Grid>
                    </Form>
                </Formik>
            </Flex>

            <Socials />
        </Container>
    )
}