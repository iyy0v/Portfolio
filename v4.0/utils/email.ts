import emailjs from '@emailjs/browser';

export const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
export const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
export const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY as string;

export default async function sendEmail({
    name,
    email,
    subject,
    message
}: {
    name: string,
    email: string,
    subject: string,
    message: string
}) {
    await emailjs.send(
        serviceID, 
        templateID, 
        {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        }, 
        { publicKey: publicKey }
    ).then((res) => {
        return new Response("OK")
    }).catch((err) => {
        console.error(err)
        return new Response("ERROR")
    })
}