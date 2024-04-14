"use server";

import { ContactForm } from "@/types/contact";
import { sendMail } from "./mail/sending";

import fs from "fs";
import path from "path";

export async function sendContactForm(formdata: ContactForm) {
  const sending =  await sendMail({
    name: formdata.fullName,
    subject: "Contact Form Inquiry",
    body: await compileTemplateMail(formdata),
  })
   console.log(sending);
  return sending
}

export async function compileTemplateMail(formdata: ContactForm) {
  const htmlFilePath = path.join(process.cwd(), "src/libs/mail", "template.html");

  let htmlContent = fs.readFileSync(
    htmlFilePath,
    "utf8"
  );

   // replace merge tags with values
   htmlContent = replaceMergeTags(formdata, htmlContent);

  return htmlContent;
}

export const stripHTMLTags = (htmlString: string) => {
  // also replaces <br> tags with new lines
  return htmlString.replace(/<br>/g, "\n").replace(/<[^>]+>/g, "");
};

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
