import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const ViewEmailContact = ({
  fullName,
  email,
  phone,
  message,
}: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>  
          <Hr style={hr} />
          <Section>
            <Row>
              <Text style={{ ...paragraph, fontWeight: "700" }}>
                New Contact Form
              </Text>
              <Text>Full Name: <Text style={footer}>{fullName}</Text></Text>

              <Text> Email:
                <Link href={`mailto:${email}`} style={link}>
                  {email}
                </Link>
              </Text>
              <Text> Phone:
                <Link href={`tel:${phone}`} style={link}>
                  {phone}
                </Link>
              </Text>
              <Text >Message: </Text>
              <Text style={footer}>{message}</Text>
              <Hr style={hr} />
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ViewEmailContact;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const review = {
  ...paragraph,
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
