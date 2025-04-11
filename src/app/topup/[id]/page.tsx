// app/topup/[id]/page.tsx

import { topupCountries, topupOperatorsByCountry } from "@/app/easypay/fetch";

type Props = {
  params: {
    id: string;
  };
};

export default function TopupOperatorPage({ params }: Props) {
  const { id } = params;

  const selectedCountry = topupCountries.find((country) => country.id === id);
  const operators = topupOperatorsByCountry[id] || [];

  if (!selectedCountry) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Country not found</h1>
        <p>Please go back and choose a valid country.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Topup in {selectedCountry.country}</h1>
      <p className="mb-6 text-gray-600">Select an operator to continue:</p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 2xl:gap-6">
        {operators.map((operator) => (
          <div
            key={operator.code}
            className="rounded-[10px] bg-white p-4 shadow-md transition hover:shadow-lg cursor-pointer dark:bg-gray-dark"
          >
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-xl font-bold text-primary border border-gray-300">
                {operator.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white">
                {operator.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Code: {operator.code}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
