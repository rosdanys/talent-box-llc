"use server";

import { ContactForm, TalentForm } from "@/types/contact";
import { compileTemplateMail, compileTemplateMailTalent, sendMail } from "./mail/sending";

// Action for Contact
export async function sendContactForm(formdata: ContactForm) {
  const sending =  await sendMail({
    name: formdata.fullName,
    subject: "Contact Form Inquiry",
    body: await compileTemplateMail(formdata),
  })
  return sending
}
// Action for  Secure Talent
export async function sendTalentForm(formdata: TalentForm) {
  const fullName = formdata.firstName + " " +formdata.lastName
  const sending =  await sendMail({
    name: fullName,
    subject: "Secure Talent from " + formdata.companyName,
    body: await compileTemplateMailTalent(formdata),
  })
  return sending
}
