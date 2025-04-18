"use client";

import { useSearch } from "@/context/searchContext";
import { topupCountries } from "../../fetch";
import { TopupCountryCard } from "./card";

export function TopupCountryCardsGroup() {
  const { query } = useSearch();

  const filteredCountries = topupCountries.filter((country) =>
    country.country.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {filteredCountries.map((country) => (
        <TopupCountryCard key={country.id} country={country} />
      ))}
    </div>
  );
}
