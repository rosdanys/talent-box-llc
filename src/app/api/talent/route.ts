import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import ViewEmailTalent from "@/libs/mail/email-template-talent";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const json = req.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    role,
  } = await json;
   
  const fullName = firstName + " " + lastName;

  try {
    const data = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_RESEND_ADMIN,
      to: [process.env.NEXT_PUBLIC_RESEND_SENDING],
      subject: "Secure Talent by " + fullName,
      react: ViewEmailTalent({
        firstName,
        lastName,
        email,
        phone,
        companyName,
        role,
      }),     
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
