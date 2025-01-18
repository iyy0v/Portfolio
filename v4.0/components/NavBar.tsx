'use client'

import { Box, Container, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from "@chakra-ui/react";
import {useColorModeValue}  from "@chakra-ui/react"; 
import { TfiMenu } from "react-icons/tfi";
import { Link } from 'react-scroll'
import NextLink from 'next/link';

export default function NavBar() {
    const links = [
        "About",
        "Education",
        "Skills",
        "Projects",
        "Contact",
    ]

    const bg = useColorModeValue("gray.50", "#030310");
    const color = useColorModeValue("#030310", "gray.50");

    return (
        <Container
        transition="box-shadow 0.2s"
        minW="100vw"
        position="fixed"
        top={0}
        justifyContent={{base:'end', sm:'center'}}
        alignContent={{base:'end', sm:'center'}}
        display='flex'
        p={4}
        bgColor={{base: 'transparent', sm: bg}}
        textColor={color}
        zIndex={1000}
        >
            <Stack 
            mx="auto" 
            maxW="1200px" 
            display={{ base: "none", sm: "flex" }}
            direction="row"
            gap={8}
            >
                {links.map((link) => {
                    return (
                        <Link key={link} activeClass="active" to={link} spy={true} smooth={true} duration={1000} className="nav">
                            <Text textStyle='nav' cursor='pointer'>{link}</Text>
                        </Link>
                    )
                })}
            </Stack>
            <Box
            display={{ base: "inline-block", sm: "none" }}
            bg={bg}
            rounded={10}
            >
                <Menu>
                    <MenuButton as={IconButton} icon={<TfiMenu size={18} />} variant="outline" aria-label="Options" bg={bg}/>
                    <MenuList zIndex={900} bg={bg}>
                        {links.map((link) => {
                            return (
                                <Link key={link} activeClass={"mobileActive"} to={link} spy={true} smooth={true} duration={1000}>
                                    <MenuItem bg={bg} cursor='pointer' className="hover:bg-white/10">{link}</MenuItem>
                                </Link>
                            )
                        })}
                    </MenuList>
                </Menu>
            </Box>
        </Container>
    )
}