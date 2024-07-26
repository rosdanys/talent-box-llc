import nodemailer from "nodemailer";
import { ContactForm, HiredForm, TalentForm } from "@/types/contact";
import { SchemaFormHired } from "@/components/FormHired/FormHired";


const SMTP_PASSWORD = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
const SMTP_EMAIL_ADMIN = process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN;
const SMTP_EMAIL_ADMIN_FULLNAME =
  process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN_FULLNAME;

  // transport for email godaddy
/* const transport = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  secure: true,
  tls: {
    ciphers: "SSLv3",
  },
  requireTLS: true,
  port: 465,
  debug: true,
  auth: {
    user: SMTP_EMAIL_ADMIN,
    pass: SMTP_PASSWORD,
  },
}); */

// transport for gmail
const transport = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  debug: true,
  auth: {
    user: SMTP_EMAIL_ADMIN,
    pass: SMTP_PASSWORD,
  },
});



export async function sendMail({
  name,
  subject,
  body,
}: {
  name: string;
  subject: string;
  body: string;
}) {
  
  // Tester Email
  /* try {
    const testResult = await transport.verify()
    console.log(testResult);
    
   } catch (error) {
    console.log(error);
    
   }  */

  try {
    const sendResult = await transport.sendMail({
      to: SMTP_EMAIL_ADMIN_FULLNAME, // intercambiar to a from
      from: SMTP_EMAIL_ADMIN,
      subject,
      html: body,
    });
    return sendResult.messageId;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function sendMailAttachment({
  name,
  subject,
  body,
  attachment
}: {
  name: string;
  subject: string;
  body: string;
  attachment:any
}) {
 
   // Tester Email
  try {
    const testResult = await transport.verify()
    console.log("is ",testResult );
    
   } catch (error) {
    console.log(error);
   }  

  try {
    const sendResult = await transport.sendMail({
      to: SMTP_EMAIL_ADMIN_FULLNAME, // intercambiar to a from
      from: SMTP_EMAIL_ADMIN,
      subject,
      html: body,
      attachments: attachment
    });
    return sendResult.messageId;
  } catch (error) {
    console.log(error);
    return;
  }
}
// for contact
export async function compileTemplateMail(formdata: ContactForm) {
  let htmlContent = `
  <div style="font-family: sans-serif;">
    <h1>Contact Form Inquiry</h1>
      <p>You have received the following inquiry:</p>
      <br>
        <p>Name: {{ fullName }}</p>
        <p>Email: <a href="mailto:{{ email }}">{{ email }}</a></p>
        <p>Phone: <a href="tel:{{ phone }}">{{ phone }}</a></p>
        <p>Message:</p>
        <p>{{ message }}</p>
      <br>
  </div>`;

  // replace merge tags with values
  htmlContent = replaceMergeTags(formdata, htmlContent);

  return htmlContent;
}

// for Talent
export async function compileTemplateMailTalent(formdata: TalentForm) {
  let htmlContent = `
  <div style="font-family: sans-serif;">
      <br>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>
        <p>Company Name: {{ companyName }}</p>
        <p>Email: <a href="mailto:{{ email }}">{{ email }}</a></p>
        <p>Phone: <a href="tel:{{ phone }}">{{ phone }}</a></p>
        <p>Role: {{ role }}</p>
      <br>
  </div>`;
  // replace merge tags with values
  htmlContent = replaceMergeTags(formdata, htmlContent);

  return htmlContent;
}
// for Hired
export async function compileTemplateMailHired(formdata) {
  let htmlContent = `
  <div style="font-family: sans-serif;">
      <br>
        <p>First Name: {{ firstName }}</p>
        <p>Last Name: {{ lastName }}</p>       
        <p>Email: <a href="mailto:{{ email }}">{{ email }}</a></p>
        <p>Phone: <a href="tel:{{ phone }}">{{ phone }}</a></p>
        <p>I am: {{ iam }}</p>
        <p>Workplace preference: {{ workPlace }}</p>
        <p>Tax Status: {{ taxStatus }}</p>
      <br>
  </div>`;
  // replace merge tags with values
  htmlContent = replaceMergeTags(formdata, htmlContent);

  return htmlContent;
}
/**
 * Replaces any instance of {{ variableName }} with the values
 * @param data (object)  The data object whose keys are the variable names (string) along with corresponding values
 * @param htmlString (string)   The HTML string to be updated
 * @return The updated HTML string
 */
export const replaceMergeTags = (
  data: { [x: string]: any },
  htmlString: string,
) => {
  Object.keys(data)?.forEach((key) => {
    if (htmlString.includes(`{{ ${key} }}`)) {
      let val = data[key];

      // check if value is an array
      if (val instanceof Array) {
        const listElements = val.map((item) => {
          return `<li>${item}</li>`;
        });

        // create an unordered list in HTML
        val = `<ul>${listElements}</ul>`;
      }

      const regexPattern = new RegExp(`\\{\\{\\s*${key}\\s*\\}\\}`, "g");
      htmlString = htmlString.replace(regexPattern, val);
    }
  });

  return htmlString;
};
