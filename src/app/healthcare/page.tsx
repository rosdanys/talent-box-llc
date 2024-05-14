import Breadcrumb from "@/components/Common/Breadcrumb";
import HealthCare from "@/components/HealthCare";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const HealthCarePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Healthcare"
        description=""
      />
      <HealthCare />
    </>
  );
};

export default HealthCarePage;