import Breadcrumb from "@/components/Common/Breadcrumb";
import PharmaManufacturing from "@/components/PharmaManufacturing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const PharmaPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pharma Manufacturing"
        description=""
      />
      <PharmaManufacturing />
    </>
  );
};

export default PharmaPage;