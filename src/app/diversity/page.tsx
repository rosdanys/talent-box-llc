import Breadcrumb from "@/components/Common/Breadcrumb";
import Culture from "@/components/Culture";
import Diversity from "@/components/Diversity";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const DiversityPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Diversity, Equity, and Inclusion (DEI)"
        description=""
      />
      <Diversity />
    </>
  );
};

export default DiversityPage;