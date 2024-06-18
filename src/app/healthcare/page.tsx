import Breadcrumb from "@/components/Common/Breadcrumb";
import HealthCare from "@/components/HealthCare";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare",
  description: "",
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