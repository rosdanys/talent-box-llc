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
    const { NEXT_PUBLIC_SMTP_PASSWORD,NEXT_PUBLIC_SMTP_EMAIL_ADMIN, NEXT_PUBLIC_SMTP_EMAIL_ADMIN_FULLNAME} = process.env
    const transport = nodemailer.createTransport({
      service:"gmail",
      secure: true,
      auth:{
        user:NEXT_PUBLIC_SMTP_EMAIL_ADMIN,
        pass:NEXT_PUBLIC_SMTP_PASSWORD
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
      from:NEXT_PUBLIC_SMTP_EMAIL_ADMIN_FULLNAME,
      to:NEXT_PUBLIC_SMTP_EMAIL_ADMIN,
      subject,
      html:body
    })
    return sendResult.messageId
   } catch (error) {
    console.log(error);
    return
   }
}
