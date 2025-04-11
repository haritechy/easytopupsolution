"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { compactFormat, standardFormat } from "@/lib/format-number";
import { cn } from "@/lib/utils";
import Image from "next/image";

import { useEffect, useState } from "react";
import { useSearch } from "@/context/searchContext";
import { getTopChannels } from "@/components/Tables/fetch";
import { SearchIcon } from "@/assets/icons";

export default function OrderSearchPage({ className }: { className?: string }) {
  const { query, setQuery } = useSearch();
  const [searchText, setSearchText] = useState(query);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [allData, setAllData] = useState<any[]>([]);

  useEffect(() => {
   
    async function fetchData() {
      const data = await getTopChannels();
      setAllData(data);
      setFilteredData(data); // default
    }
    fetchData();
  }, []);
  useEffect(() => {
    const trimmed = searchText.trim().toLowerCase();
  
    if (trimmed === "") {
      setFilteredData(allData); 
    }
  }, [searchText, allData]);
  
  // Handle actual search
  const handleSearch = () => {
    const filtered = allData.filter((channel: any) =>
      channel.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    setQuery("")
    // setQuery(searchText); // update global context if needed
  };

  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5",
        className,
      )}
    >
      <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
        My Easy Search
      </h2>

      <div className="w-full overflow-x-auto">
        {/* Search box */}
        <div className="relative mb-4 w-full max-w-[300px]">
          <input
            type="search"
            placeholder="Mobile number"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex w-full items-center gap-3.5 rounded-full border bg-gray-2 py-3 pl-[53px] pr-5 outline-none transition-colors focus-visible:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-dark-4 dark:hover:bg-dark-3 dark:hover:text-dark-6 dark:focus-visible:border-primary"
          />
          <SearchIcon
            onClick={handleSearch}
            className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer max-[1015px]:size-5"
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-none uppercase text-xs sm:text-sm [&>th]:text-center">
              <TableHead className="min-w-[120px] !text-left">Source</TableHead>
              <TableHead>Visitors</TableHead>
              <TableHead className="!text-right">Revenues</TableHead>
              <TableHead>Sales</TableHead>
              <TableHead>Conversion</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredData.map((channel, i) => (
              <TableRow
                className="text-center text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base"
                key={channel.name + i}
              >
                <TableCell className="flex min-w-fit items-center gap-2 sm:gap-3">
                  <Image
                    src={channel.logo}
                    className="rounded-full object-cover w-6 h-6 sm:w-8 sm:h-8"
                    width={40}
                    height={40}
                    alt={channel.name + " Logo"}
                    role="presentation"
                  />
                  <div className="truncate max-w-[120px] sm:max-w-none">
                    {channel.name}
                  </div>
                </TableCell>

                <TableCell>{compactFormat(channel.visitors)}</TableCell>
                <TableCell className="!text-right text-green-light-1">
                  ${standardFormat(channel.revenues)}
                </TableCell>
                <TableCell>{channel.sales}</TableCell>
                <TableCell>{channel.conversion}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
