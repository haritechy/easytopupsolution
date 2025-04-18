"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_DATA } from "../sidebar/data";

export function TabsNavigation() {
  const pathname = usePathname();

  return (
    
    <nav className="hidden lg:flex sticky top-21 z-20 justify-center w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 ">
      <div className="flex overflow-x-auto lg:justify-center gap-2 sm:gap-4 px-2 sm:px-4 py-2 sm:py-3">
        {NAV_DATA.flatMap((section) =>
          section.items
            .filter(
              (item) =>
                item.title.toLowerCase() !== "logout" &&
                item.title.toLowerCase() !== "profile"
            )
            .map((item) => {
              const href = item.url || "/" + item.title.toLowerCase().replace(/\s+/g, "-");
              const isActive = pathname === href;

              return (
                <Link
                  key={item.title}
                  href={href}
                  className={cn(
                    "flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "bg-white dark:bg-gray-700 text-orange-500 shadow dark:text-white"
                      : "text-[#394499] hover:text-black dark:text-gray-300 dark:hover:text-white"
                  )}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.title}</span>
                </Link>
              );
            })
        )}
      </div>
    </nav>
  );
}
