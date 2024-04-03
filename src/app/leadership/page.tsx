import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import FormContact from "@/components/Contact";
import LeaderShip from "@/components/LeaderShip";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeaderShip",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="LeaderShip"
        description="Great leadership orchestrates strategy with precision, nurtures relationships with sincerity, and defines success through collective achievement, not individual accolades."
      />
      <LeaderShip />
    </>
  );
};

export default ContactPage;
