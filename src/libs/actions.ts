"use server";

import { ContactForm, HiredForm, TalentForm } from "@/types/contact";
import { compileTemplateMail, compileTemplateMailHired, compileTemplateMailTalent, sendMail, sendMailAttachment } from "./mail/sending";
import { SchemaFormHired } from "@/components/FormHired/FormHired";

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
// Action for  Secure Talent
export async function sendHiredForm(formdata: SchemaFormHired) {
  const fullName = formdata.firstName + " " +formdata.lastName
  const sending =  await sendMailAttachment({
    name: fullName,
    subject: "Get hired by " + fullName,
    body: await compileTemplateMailHired(formdata),
    attachment: formdata.cvfile
  })
  return sending
}