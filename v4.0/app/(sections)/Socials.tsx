'use client';

import { Link } from "@chakra-ui/next-js";
import { Container, Divider, Flex, IconButton } from "@chakra-ui/react";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


export default function Socials() {

    return(
        <Container
        minW="full"
        minH="fit-content"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={10}
        py={8}
        > 
            <Divider w="100%" style={{ "borderColor": "#3182CE"}}/>

            <Flex gap={8}>
                <Link href="https://www.linkedin.com/in/ayoubnaitmihoub/" isExternal>
                    <FaLinkedin size={36} className="hover:text-blue-500 cursor-pointer transition-all"/>
                </Link>
                <Link href="https://github.com/iyy0v" isExternal>
                    <FaGithubSquare size={36} className="hover:text-blue-500 cursor-pointer transition-all"/>
                </Link>
                <Link href="https://x.com/AyoubNaitMihoub" isExternal>
                    <FaTwitterSquare size={36} className="hover:text-blue-500 cursor-pointer transition-all"/>
                </Link>
            </Flex>

            <Link href="mailto:naitmihoub.ayoub@gmail.com" isExternal className="no-underline hover:no-underline">
                naitmihoub.ayoub@gmail.com
            </Link>
          
        </Container>
    )
}