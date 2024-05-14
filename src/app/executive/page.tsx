import Breadcrumb from "@/components/Common/Breadcrumb";
import Executive from "@/components/Executive";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ExecutivePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Executive and Professional Search"
        description=""
      />
      <Executive />
    </>
  );
};

export default ExecutivePage;