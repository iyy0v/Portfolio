import { chakra, Container, Flex, Grid, Text } from "@chakra-ui/react";
import {useColorModeValue}  from "@chakra-ui/react"; 
import NextLink from 'next/link'
import { useState } from "react";
import { Link } from 'react-scroll'

export default function NavBar() {
    const links = [
        "About",
        "Education",
        "Skills",
        "Experience",
        "Projects",
    ]

    const bg = useColorModeValue("gray.50", "#030310");
    const color = useColorModeValue("#030310", "gray.50");

    return (
        <Container
        transition="box-shadow 0.2s"
        minW="100vw"
        overflowY="hidden"
        position="fixed"
        top={0}
        justifyContent='center'
        alignContent='center'
        display='flex'
        p={4}
        bgColor={bg}
        textColor={color}
        zIndex={1000}
        >
            <Flex 
            mx="auto" 
            maxW="1200px" 
            gap={8}
            >
                {links.map((link) => {
                    return <Link key={link} activeClass="active" to={link} spy={true} smooth={true} duration={1000}>
                            <Text textStyle='nav' cursor='pointer'>{link}</Text>
                        </Link>
                })}
            </Flex>
        </Container>
    )
}