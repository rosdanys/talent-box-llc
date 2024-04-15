import nodemailer from "nodemailer";
import { ContactForm } from "@/types/contact";


export async function sendMail({
  name,
  subject,
  body,
}: {
  name: string;
  subject: string;
  body: string;
}) {
  const SMTP_PASSWORD = process.env.NEXT_PUBLIC_SMTP_PASSWORD;
  const SMTP_EMAIL_ADMIN = process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN;
  const SMTP_EMAIL_ADMIN_FULLNAME =
    process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN_FULLNAME;

  const transport = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: SMTP_EMAIL_ADMIN,
      pass: SMTP_PASSWORD,
    },
  });
  /* try {
    const testResult = await transport.verify()
    console.log(testResult);
    
   } catch (error) {
    console.log(error);
    
   }  */

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL_ADMIN_FULLNAME,
      to: SMTP_EMAIL_ADMIN,
      subject,
      html: body,
    });
    return sendResult.messageId;
  } catch (error) {
    console.log(error);
    return;
  }
}


export async function compileTemplateMail(formdata: ContactForm) {
  let htmlContent = `
  <div style="font-family: sans-serif;">
    <h1>Contact Form Inquiry</h1>
      <p>You have received the following inquiry:</p>
      <br>
        <p>Name: {{ fullName }}</p>
        <p>Email: {{ email }}</p>
        <p>Phone: {{ phone }}</p>
        <p>Message:</p>
        <p>{{ message }}</p>
      <br>
  </div>`

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
