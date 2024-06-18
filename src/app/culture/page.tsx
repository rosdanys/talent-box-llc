import Breadcrumb from "@/components/Common/Breadcrumb";
import Culture from "@/components/Culture";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Culture",
  description: "",
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