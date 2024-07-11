import Breadcrumb from "@/components/Common/Breadcrumb";
import SecureTalent from "@/components/SecureTalent";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Talent ",
  description: "",
  // other metadata
};

const SecureTalentPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Secure Talent"
        description=""
      />
      <SecureTalent />
    </>
  );
};

export default SecureTalentPage;
