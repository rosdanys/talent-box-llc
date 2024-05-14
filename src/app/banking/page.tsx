import Banking from "@/components/Banking";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const BankingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Banking and Finance"
        description=""
      />
      <Banking />
    </>
  );
};

export default BankingPage;