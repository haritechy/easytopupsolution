"use client";

import { useSearch } from "@/context/searchContext";
import { TopupCountryCard } from "./card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Categorycountryfetch } from "@/redux/actions/dashboardActions";
import { AppDispatch, RootState } from "@/redux/store";

export function TopupCountryCardsGroup() {
  const { query } = useSearch();
  const dispatch = useDispatch<AppDispatch>();

  const { data: categories = [], loading, error } = useSelector(
    (state: RootState) => state.category
  );

  useEffect(() => {
    dispatch(Categorycountryfetch("1222", 0));
  }, [dispatch]);

  const filteredCountries = categories.filter((country: any) =>
    country.CategoryName?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {loading && <p className="col-span-full text-center">Loading...</p>}
      {error && <p className="col-span-full text-red-500 text-center">Error: {error}</p>}
      {!loading && !error && filteredCountries.length === 0 && (
        <p className="col-span-full text-center">No countries found.</p>
      )}
      {!loading &&
        !error &&
        filteredCountries.map((country: any) => (
          <TopupCountryCard key={country.CategoryID} country={country} />
        ))}
    </div>
  );
}
