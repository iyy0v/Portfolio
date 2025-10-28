"use client";

import { DirectionAwareHover } from "./HoverCard";
import Carousel from "./Carousel";
import {
	ModalOverlay,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Divider,
	useDisclosure,
	Flex,
	Container,
	Text,
} from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Project({
	content,
}: {
	content: {
		title: string;
		description: string;
		stack: string;
		images: string[];
		linkUrl?: string;
		githubUrl?: string;
	};
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button
				h="fit-content"
				w="fit-content"
				px={0}
				onClick={() => {
					onOpen();
				}}
			>
				<DirectionAwareHover imageUrl={content.images[0]}>
					<p className="font-bold text-xl">{content.title}</p>
				</DirectionAwareHover>
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="6xl">
				<ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
				<ModalContent
					bg="primary"
					p={{
						base: 2,
						md: 8,
					}}
					gap={{
						base: 2,
						md: 4,
					}}
				>
					<ModalHeader
						fontSize={{
							base: 16,
							sm: 24,
						}}
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						{content.title}
						{content.linkUrl && (
							<Link
								href={content.linkUrl}
								isExternal
								className="inline-block align-middle ml-4 mt-1"
							>
								<FaExternalLinkAlt
									size={24}
									className="hover:text-blue-500 cursor-pointer transition-all"
								/>
							</Link>
						)}
						{content.githubUrl && (
							<Link
								href={content.githubUrl}
								isExternal
								className="inline-block align-middle ml-4"
							>
								<FaGithub
									size={32}
									className="hover:text-blue-500 cursor-pointer transition-all"
								/>
							</Link>
						)}
					</ModalHeader>
					<ModalCloseButton />

					<ModalBody>
						<Flex
							direction="column"
							justify="start"
							align="center"
							gap={{
								base: 0,
								md: 2,
							}}
						>
							<Container minW="full" display="flex" flexDir="column" gap={4}>
								<Text w="w-full" className="whitespace-pre-wrap">
									{content.description}
								</Text>
								<Divider className="bg-white" />
								<Text w="full" className="text-gray-400 text-justify">
									{content.stack}
								</Text>
							</Container>
							<Carousel autoSlide={true}>
								{content.images.map((image, index) => (
									<Image
										key={index}
										src={image}
										alt={content.title}
										width={720}
										height={405}
										className="inset-0 min-w-full object-contain"
										unoptimized={true}
									/>
								))}
							</Carousel>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
