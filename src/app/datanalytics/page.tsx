import Breadcrumb from "@/components/Common/Breadcrumb";
import DataAnalytics from "@/components/DataAnalytics";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analytics, Engineering, and Technology",
  description: "",
  // other metadata
};

const DataAnalyticsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Data Analytics, Engineering, and Technology"
        description=""
      />
      <DataAnalytics />
    </>
  );
};

export default DataAnalyticsPage;