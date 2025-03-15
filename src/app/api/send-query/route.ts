import { type NextRequest } from "next/server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const enquiry = searchParams.get("enquiry");

    const info = await transporter.sendMail({
      from: `"WebHouz Enquiry Form" <${process.env.SMTP_SENDER_ADDRESS}>`, // sender address
      to: "help@webhouz.com", // list of receivers
      subject: `Enquiry from ${name} - ${email}`, // Subject line
      // text: "Hello world?", // plain text body
      html: `<p>Name: <strong>${name}</strong></p>
        <p>Email: <strong>${email}</strong></p>
        <p>Enquiry: <strong>${enquiry}</strong></p>
        `, // html body
    });

    return new Response(JSON.stringify({ messageId: info.messageId }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
