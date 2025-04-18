import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { TopChannels } from "@/components/Tables/top-channels";
import { TopChannelsSkeleton } from "@/components/Tables/top-channels/skeleton";


import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "My Order",
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="My Order" />

      <div className="space-y-10">
        <Suspense fallback={<TopChannelsSkeleton />}>

          <TopChannels />
        </Suspense>
        
     
      </div>
    </>
  );
};

export default TablesPage;
