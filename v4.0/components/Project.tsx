"use client";
import { ModalOverlay, Button, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Divider, useDisclosure, Flex, Container, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { DirectionAwareHover } from "./HoverCard";
import Carousel from "./Carousel";

export default function Project({
    content,
}: {
    content: {
        title: string;
        description: string;
        stack: string;
        imageUrl: string;
        linkUrl?: string;
    };
}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <>
            <Button
            h="fit-content"
            w="fit-content"
            px={0}
            onClick={() => {
                onOpen()
            }}
            >
                <DirectionAwareHover imageUrl={content.imageUrl}>
                    <p className="font-bold text-xl">{content.title}</p>
                </DirectionAwareHover>
            </Button>
            
            <Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
                <ModalOverlay bg='blackAlpha.700' backdropFilter='blur(10px)'/>
                <ModalContent 
                bg="primary" 
                p={{
                base: 2,
                md: 8
                }}
                gap={{
                    base: 2,
                    md: 4
                }}
                >
                    <ModalHeader 
                    fontSize={{
                        base: 16,
                        sm:24
                    }}>
                        {content.title}
                    </ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <Flex
                        direction="column"
                        justify="start"
                        align="center"
                        gap={{
                            base: 0,
                            md: 2
                        }}
                        >
                            <Container minW="full" display="flex" flexDir="column" gap={4}>
                                <Text w="w-full" className="text-justify">{content.description}</Text>
                                <Divider className="bg-white"/>
                                <Text w="full" className="text-gray-400 text-justify">{content.stack}</Text>
                            </Container>
                            <Carousel autoSlide={true}>
                                <Image src={content.imageUrl} alt="Mail Management/Tracker" width={720} height={405} maxH="100%" rounded={5} className="inset-0 w-full object-cover" />
                                <Image src={content.imageUrl} alt="Mail Management/Tracker" width={720} height={405} maxH="100%" rounded={5} className="inset-0 w-full object-cover" />
                            </Carousel>
                            
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}