import Banking from "@/components/Banking";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Banking and Finance",
  description: "",
  // other metadata
};

const BankingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Banking and Finance"
        description=""
      />
      <Banking />
    </>
  );
};

export default BankingPage;