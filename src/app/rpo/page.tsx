import Breadcrumb from "@/components/Common/Breadcrumb";
import Rpo from "@/components/Rpo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const RpoPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Recruitment Process Outsourcing (RPO)"
        description=""
      />
      <Rpo />
    </>
  );
};

export default RpoPage;