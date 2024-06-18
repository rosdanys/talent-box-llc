import Breadcrumb from "@/components/Common/Breadcrumb";
import Executive from "@/components/Executive";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive and Professional Search",
  description: "",
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