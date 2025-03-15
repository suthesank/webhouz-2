import { type NextRequest } from "next/server";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "87fbc4001@smtp-brevo.com",
    pass: "mKAJIUN7QwWOYv4G",
  },
});

export async function POST(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const enquiry = searchParams.get("enquiry");

    const info = await transporter.sendMail({
      from: '"WebHouz Enquiry Form" <suthesankanagasabai@webhouz.com>', // sender address
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
