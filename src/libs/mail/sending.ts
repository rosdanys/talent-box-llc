import nodemailer from 'nodemailer'
export async function sendMail({
  name,
  subject,
  body,
}: {
  name: string;
  subject: string;
  body: string;
}) {
    const SMTP_PASSWORD = process.env.NEXT_PUBLIC_SMTP_PASSWORD
    const SMTP_EMAIL_ADMIN = process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN
    const SMTP_EMAIL_ADMIN_FULLNAME = process.env.NEXT_PUBLIC_SMTP_EMAIL_ADMIN_FULLNAME
    
    const transport = nodemailer.createTransport({
      service:"gmail",
      secure: true,
      auth:{
        user:SMTP_EMAIL_ADMIN,
        pass:SMTP_PASSWORD
      }
    })
   /* try {
    const testResult = await transport.verify()
    console.log(testResult);
    
   } catch (error) {
    console.log(error);
    
   }  */

   try {
    const sendResult = await transport.sendMail({
      from:SMTP_EMAIL_ADMIN_FULLNAME,
      to:SMTP_EMAIL_ADMIN,
      subject,
      html:body
    })
    return sendResult.messageId
   } catch (error) {
    console.log(error);
    return
   }
}
