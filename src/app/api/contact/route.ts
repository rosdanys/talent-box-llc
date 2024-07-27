import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { ViewEmailContact } from "@/libs/mail/email-template-contact";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const json = req.json();
  const {
    fullName,
    email,
    phone,
    message
  } = await json;
   

  try {
    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_ADMIN,
      to: [process.env.NEXT_PUBLIC_RESEND_SENDING],
      subject: "New Contact Form by " + fullName,
      react: ViewEmailContact({
        fullName,
        email,
        phone,
        message
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
