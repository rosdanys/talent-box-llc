import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
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

export const ViewEmail = ({
  firstName,
  lastName,
  email,
  phone,
  iam,
  workPlace,
  taxStatus,
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
                New Get Hired
              </Text>
              <Text>First Name: <Text style={footer}>{firstName}</Text></Text>
              <Text>LastName: <Text style={footer}>{lastName}</Text></Text>

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
              <Text >I am: <Text style={footer}>{iam}</Text></Text>
              <Text >Workplace preference: <Text style={footer}>{workPlace}</Text></Text>
              <Text >Tax Status: <Text style={footer}>{taxStatus}</Text></Text>
              <Hr style={hr} />
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ViewEmail;

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
