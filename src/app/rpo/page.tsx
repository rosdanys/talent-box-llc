import Breadcrumb from "@/components/Common/Breadcrumb";
import Rpo from "@/components/Rpo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruitment Process Outsourcing (RPO)",
  description: "",
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