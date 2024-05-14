import Breadcrumb from "@/components/Common/Breadcrumb";
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
        description=""
      />
      <LeaderShip />
    </>
  );
};

export default ContactPage;
