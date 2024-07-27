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
        images: string[];
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
                <DirectionAwareHover imageUrl={content.images[0]}>
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
                                <Text w="w-full" className="text-justify whitespace-pre-wrap">{content.description}</Text>
                                <Divider className="bg-white"/>
                                <Text w="full" className="text-gray-400 text-justify">{content.stack}</Text>
                            </Container>
                            <Carousel autoSlide={true}>
                                {content.images.map((image, index) => (
                                    <Image key={index} src={image} alt={content.title} width={720} height={405} className="inset-0 min-w-full object-contain" unoptimized={true} />
                                ))}
                            </Carousel>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}