import Breadcrumb from "@/components/Common/Breadcrumb";
import PharmaManufacturing from "@/components/PharmaManufacturing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharma Manufacturing",
  description: "",
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