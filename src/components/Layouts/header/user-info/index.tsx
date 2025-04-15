"use client";

import { ChevronUpIcon } from "@/assets/icons";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogOutIcon, SettingsIcon, UserIcon } from "./icons";

export function UserInfo() {
  const [isOpen, setIsOpen] = useState(false);

  const USER = {
    name: "demouser",
    email: "johnson@nextadmin.com",
    img: "data:image/jpeg;base64,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",
  };

  return (
    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen}>
      <DropdownTrigger className="rounded align-middle outline-none ring-primary ring-offset-2 focus-visible:ring-1 dark:ring-offset-gray-dark">
        <span className="sr-only">My Account</span>

        <figure className="flex items-center gap-3">
          <Image
            src={USER.img}
            className="size-12"
            alt={`Avatar of ${USER.name}`}
            role="presentation"
            width={200}
            height={200}
          />
          <figcaption className="flex items-center gap-1 font-medium text-dark dark:text-dark-6 max-[1024px]:sr-only">
            <span>{USER.name}</span>

            <ChevronUpIcon
              aria-hidden
              className={cn(
                "rotate-180 transition-transform",
                isOpen && "rotate-0",
              )}
              strokeWidth={1.5}
            />
          </figcaption>
        </figure>
      </DropdownTrigger>

      <DropdownContent
        className="border border-stroke bg-white shadow-md dark:border-dark-3 dark:bg-gray-dark min-[230px]:min-w-[17.5rem]"
        align="end"
      >
        <h2 className="sr-only">User information</h2>

        <figure className="flex items-center gap-2.5 px-5 py-3.5">
          <Image
            src={USER.img}
            className="size-12"
            alt={`Avatar for ${USER.name}`}
            role="presentation"
            width={200}
            height={200}
          />

          <figcaption className="space-y-1 text-base font-medium">
            <div className="mb-2 leading-none text-dark dark:text-white">
              {USER.name}
            </div>

            <div className="leading-none text-gray-6">{USER.email}</div>
          </figcaption>
        </figure>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6 [&>*]:cursor-pointer">
          <Link
            href={"/profile"}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
          >
            <UserIcon />

            <span className="mr-auto text-base font-medium">View profile</span>
          </Link>

          <Link
            href={"/pages/settings"}
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
          >
            <SettingsIcon />

            <span className="mr-auto text-base font-medium">
              Account Settings
            </span>
          </Link>
        </div>

        <hr className="border-[#E8E8E8] dark:border-dark-3" />

        <div className="p-2 text-base text-[#4B5563] dark:text-dark-6">
          <button
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-[9px] hover:bg-gray-2 hover:text-dark dark:hover:bg-dark-3 dark:hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <LogOutIcon />

            <span className="text-base font-medium">Log out</span>
          </button>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
