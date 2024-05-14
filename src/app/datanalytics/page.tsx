import Breadcrumb from "@/components/Common/Breadcrumb";
import DataAnalytics from "@/components/DataAnalytics";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
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