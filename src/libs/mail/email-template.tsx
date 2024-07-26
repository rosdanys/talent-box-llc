import * as React from "react";

interface EmailTemplateProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  iam?: string;
  workPlace?: string;
  taxStatus?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  iam,
  workPlace,
  taxStatus,
}) => (
  <>
    <br />
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>
      Email: <a href={`"mailto:${email}"`}>{email}</a>
    </p>
    <p>
      Phone: <a href={`"tel:${phone}"`}>{phone}</a>
    </p>
    <p>I am: {iam}</p>
    <p>Workplace preference: {workPlace}</p>
    <p>Tax Status: {taxStatus}</p>
  </>
);
