"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import { useSidebarContext } from "../sidebar/sidebar-context";
import { MenuIcon } from "./icons";
import { ThemeToggleSwitch } from "./theme-toggle";
import { UserInfo } from "./user-info";
import { WalletIcon } from "lucide-react";
import { useSearch } from "@/context/searchContext";
import { Sidebar } from "../sidebar";


export function Header() {
  const { toggleSidebar, isMobile } = useSidebarContext();
  const [walletAmount, setWalletAmount] = useState<number | null>(null);
  

  const { query, setQuery } = useSearch();
  useEffect(() => {
    async function fetchWalletAmount() {
      const mockAmount = 250.75;
      setWalletAmount(mockAmount);
    }

    fetchWalletAmount();
  }, []);

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-stroke bg-gradient-to-r from-gray-200  to-blue-200 px-4 py-5 shadow-1 dark:border-stroke-dark dark:bg-gray-dark md:px-5 2xl:px-10">
      <button
        onClick={toggleSidebar}
        className="rounded-lg border px-1.5 py-1 dark:border-stroke-dark dark:bg-[#020D1A] hover:dark:bg-[#FFFFFF1A] md:hidden"
      >
        <MenuIcon />
        {/* <span className="sr-only">Toggle Sidebar</span> */}
      </button>

      {!isMobile && (
        <Link href={"/"} className="ml-2 max-[430px]:hidden min-[375px]:ml-4">
          <Image
            src={"https://easytopup.sg/agent/images/easytopup_logo.png"}
            width={200}
            height={32}
            alt=""
            role="presentation"
          />
        </Link>
      )}

      {/* <div className="max-xl:hidden">
        <h1 className="mb-0.5 text-heading-5 font-bold text-dark dark:text-white">
   
        </h1>
        <p className="font-medium">Easy Topup Solutions</p>
      </div> */}

      <div className="flex flex-1 items-center justify-end gap-2 min-[375px]:gap-4">
        {/* Search */}
        <div className="relative w-full max-w-[400px]">
        <input
    type="search"
    placeholder="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)} 
    className="flex w-full items-center gap-3.5 rounded-full border bg-gray-2 py-3 pl-[53px] pr-5 outline-none transition-colors focus-visible:border-primary dark:border-dark-3 dark:bg-dark-2 dark:hover:border-dark-4 dark:hover:bg-dark-3 dark:hover:text-dark-6 dark:focus-visible:border-primary"
  />
          <SearchIcon className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 max-[1015px]:size-5" />
        </div>

        {/* Wallet Info */}
        {walletAmount !== null && (
          <div className="flex items-center gap-2 rounded-full border bg-gray-2 px-4 py-3 text-sm font-medium text-dark dark:border-dark-3 dark:bg-dark-2 dark:text-white">
            <WalletIcon className="h-5 w-5 text-primary" />
            <span className="whitespace-nowrap">
              ${walletAmount.toFixed(2)}
            </span>
          </div>
        )}

        {/* <ThemeToggleSwitch /> */}
       
        <div className="shrink-0">
          <UserInfo />
        </div>
      </div>
    </header>
  );
}
