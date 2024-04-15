"use server";

import { ContactForm } from "@/types/contact";
import { compileTemplateMail, sendMail } from "./mail/sending";
import { revalidatePath } from "next/cache";

export async function sendContactForm(formdata: ContactForm) {
  const sending =  await sendMail({
    name: formdata.fullName,
    subject: "Contact Form Inquiry",
    body: await compileTemplateMail(formdata),
  })
  return sending
}
