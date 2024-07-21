import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render"
import { transporter, smtpEmail } from "@/utils/nodemailer";
import Email from "@/components/Email";

export async function POST ( req: NextRequest, res: NextResponse ) {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const emailHtml = render(
        <Email name={name} email={email} subject={subject} message={message}/>
    )

    const options = {
        from: smtpEmail,
        to: smtpEmail,
        subject: subject,
        html: emailHtml
    };

    try {
        transporter.sendMail(options);
    } catch (error) {
        console.log('Failed to send email: ', error);
    }
    
    return new Response("OK");
}
