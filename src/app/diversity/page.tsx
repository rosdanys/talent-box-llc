import Breadcrumb from "@/components/Common/Breadcrumb";
import Diversity from "@/components/Diversity";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diversity, Equity, and Inclusion (DEI)",
  description: "",
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