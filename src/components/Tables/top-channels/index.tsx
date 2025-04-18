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
import { getTopChannels } from "../fetch";

import { useEffect, useState } from "react";
import { useSearch } from "@/context/searchContext";

export function TopChannels({ className }: { className?: string }) {
  const { query } = useSearch();
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchAndFilter() {
      const data = await getTopChannels();
      const result = data.filter((channel: any) =>
        channel.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(result);
    }

    fetchAndFilter();
  }, [query]);

  
  return (
    <div
      className={cn(
        "grid rounded-[10px] bg-white px-4 py-4 shadow-md dark:bg-gray-dark dark:shadow-card sm:px-6 md:px-7.5 md:py-7.5",
        className,
      )}
    >
      <h2 className="mb-4 text-lg font-bold text-dark dark:text-white sm:text-xl md:text-2xl">
        My Easy Order
      </h2>

      <div className="w-full overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-none uppercase text-xs sm:text-sm [&>th]:text-center">
              <TableHead className="min-w-[120px] !text-left">
                Date
              </TableHead>
              <TableHead>Ref no</TableHead>
              <TableHead className="!text-right">Descriptions</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Balance</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
  {filteredData.map((channel, i) => (
    <TableRow
      className="text-center text-xs font-medium text-dark dark:text-white sm:text-sm md:text-base py-1"
      key={channel.name + i}
    >
      <TableCell className="flex min-w-fit items-center gap-2 sm:gap-3 py-2 px-2 leading-tight">
        <Image
          src={channel.logo}
          className="rounded-full object-cover w-6 h-6 sm:w-6 sm:h-6"
          width={24}
          height={24}
          alt={channel.name + " Logo"}
          role="presentation"
        />
        <div className="truncate max-w-[120px] sm:max-w-none">
          {channel.name}
        </div>
      </TableCell>

      <TableCell className="py-2 px-2 leading-tight">{compactFormat(channel.visitors)}</TableCell>

      <TableCell className="!text-right text-green-light-1 py-1 px-2 leading-tight">
        ${standardFormat(channel.revenues)}
      </TableCell>

      <TableCell className="py-2 px-2 leading-tight">{channel.sales}</TableCell>

      <TableCell className="py-2s px-2 leading-tight">{channel.conversion}%</TableCell>
      <TableCell className="py-2s px-2 leading-tight">{channel.conversion}%</TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </div>
    </div>
  );
}
