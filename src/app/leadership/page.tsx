import Breadcrumb from "@/components/Common/Breadcrumb";
import LeaderShip from "@/components/LeaderShip";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LeaderShip",
  description: "",
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
