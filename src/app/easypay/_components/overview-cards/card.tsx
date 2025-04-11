"use client";

import { useRouter } from "next/navigation";

type TopupCountryType = {
  id: string;
  country: string;
  currency: string;
  flag: string;
};

export function TopupCountryCard({ country }: { country: TopupCountryType }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/topup/${country.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-[10px] bg-white p-4 shadow-md dark:bg-gray-dark transition hover:shadow-lg cursor-pointer"
    >
      <div className="w-full h-40 relative overflow-hidden rounded-lg mb-4">
        <img
          src={country.flag}
          alt={country.country}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center">
        <h3 className="text-lg font-semibold text-dark dark:text-white">
          {country.country}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Currency: {country.currency}
        </p>
      </div>
    </div>
  );
}
