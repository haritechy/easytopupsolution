import { Suspense } from "react";
import { TopupCountryCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
export default async function Easypay() {
  return (
    <>
      <Breadcrumb pageName="Topup Country" />
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <TopupCountryCardsGroup />
      </Suspense>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5"></div>
    </>
  );
}





