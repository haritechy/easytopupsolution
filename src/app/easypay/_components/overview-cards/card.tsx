"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type TopupCategoryType = {
  CategoryID: number;
  CategoryName: string;
  CategoryImage: string;
  Currency?: string; 
};

export function TopupCountryCard({ country }: { country: TopupCategoryType }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/topup/${country.CategoryID}`);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-[10px] bg-white p-4 shadow-md dark:bg-gray-dark transition hover:shadow-lg cursor-pointer"
    >
      <div className="w-full h-40 relative overflow-hidden rounded-lg mb-4">
      <Image
  src={`https://easytopup.sg/agent/flags/4x3/${country.CategoryImage}.svg`}
  alt={country.CategoryName}
  fill
  className="object-cover rounded-lg"
  sizes="100vw"
/>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-dark dark:text-white">
          {country.CategoryName}
        </h3>
        {country.Currency && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Currency: {country.Currency}
          </p>
        )}
      </div>
    </div>
  );
}
