import Breadcrumb from "@/components/Common/Breadcrumb";
import Culture from "@/components/Culture";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Culture"
        description=""
      />
      <Culture />
    </>
  );
};

export default ContactPage;