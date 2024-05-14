import Banking from "@/components/Banking";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Culture from "@/components/Culture";
import Diversity from "@/components/Diversity";
import Executive from "@/components/Executive";

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
        pageName="Banking and Finance Services"
        description=""
      />
      <Banking />
    </>
  );
};

export default BankingPage;