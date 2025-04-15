"use client";

import "../css/satoshi.css";
import "../css/style.css";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";
import dynamic from "next/dynamic";
import { Providers } from "./providers";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import Head from "./head";
import { TabsNavigation } from "@/components/Layouts/tabsNavigation";

const TopLoader = dynamic(() => import("nextjs-toploader"), { ssr: false });

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isSigninPage = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Providers>
          <TopLoader color="#5750F1" showSpinner={true} />
          <div className="flex min-h-screen">
          {!isSigninPage && <Sidebar />}
        
            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              {!isSigninPage && <Header />}
              {!isSigninPage && <TabsNavigation />}
              <main className="isolate mx-auto w-full max-w-screen-2xl overflow-hidden p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
