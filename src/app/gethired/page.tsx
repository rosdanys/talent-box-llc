import Breadcrumb from "@/components/Common/Breadcrumb";
import GetHired from "@/components/GetHired";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Hired ",
  description: "",
  // other metadata
};

const GetHiredPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Get Hired"
        description=""
      />
      <GetHired />
    </>
  );
};

export default GetHiredPage;
