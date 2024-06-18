import Breadcrumb from "@/components/Common/Breadcrumb";
import SimpleOutSourcing from "@/components/SimpleOutSourcing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Outsourcing",
  description: "",
  // other metadata
};

const SimpleOutSourcingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Simple Outsourcing"
        description=""
      />
      <SimpleOutSourcing />
    </>
  );
};

export default SimpleOutSourcingPage;