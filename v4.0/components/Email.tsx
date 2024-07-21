import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Body } from "@react-email/body";
import { Heading } from "@react-email/heading";
import { Container } from "@react-email/container";
import { Text } from "@react-email/text";
import { Tailwind } from "@react-email/tailwind";

interface EmailProps {
    name: string,
    email: string,
    subject: string,
    message: string
}

const Email = ({name, email, subject, message}: EmailProps) =>{
    return (
        <Html>
            <Head />
            <Tailwind>
                <Body>
                    <Container>
                        <Heading>Message from <span className="text-blue-500">{name}</span></Heading>
                        <Text>{`<${email}>`}</Text>
                        <div className="w-full h-[2px] bg-blue-500"></div>
                        <Text className="text-xl font-semibold">{subject}</Text>
                        <Text className="text-md">{message}</Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default Email;
