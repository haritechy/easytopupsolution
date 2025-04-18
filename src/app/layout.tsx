"use client";

import "../css/satoshi.css";
import "../css/style.css";
import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import dynamic from "next/dynamic";
import { Sidebar } from "@/components/Layouts/sidebar";
import { Header } from "@/components/Layouts/header";

import { Providers } from "./providers";
import { usePathname } from "next/navigation";
import { useState, type PropsWithChildren } from "react";
import Head from "./head";
import ContactFloatingButton from "@/components/ConatctModal/FloatingButton";
import ContactModal from "@/components/ConatctModal/ContactModal";
import { TabsNavigation } from "@/components/Layouts/tabsNavigation";
import { ToastContainer } from "react-toastify";

const TopLoader = dynamic(() => import("nextjs-toploader"), { ssr: false });

export default function RootLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const isSigninPage = pathname === "/";
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body className="flex min-h-screen flex-col bg-white dark:bg-[#020d1a]">
        <Providers>
          <TopLoader color="#5750F1" showSpinner={true} />

          <div className="flex flex-1">
            {!isSigninPage && <Sidebar />}

            <div className="flex w-full flex-col">
              {!isSigninPage && <Header />}
              {!isSigninPage && <TabsNavigation />}

              <main className="isolate mx-auto w-full max-w-screen-2xl flex-1 p-4 md:p-6 2xl:p-10">
                {children}
                <ToastContainer position="top-right" autoClose={3000} />
              </main>
            </div>
            {/* <ContactFloatingButton onClick={() => setIsContactOpen(true)} />
            <ContactModal
              isOpen={isContactOpen}
              onClose={() => setIsContactOpen(false)}
            /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
