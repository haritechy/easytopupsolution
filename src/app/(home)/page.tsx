import Signin from "@/components/Auth/Signin";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EasyTopup Solution - Sign In",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "EasyTopup Solution – Fast and secure sign-in to manage your mobile top-up and services.",
};

export default function SignIn() {
  return (
    <div className="rounded-[10px] dark:bg-gray-dark dark:shadow-card min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Logo at top - visible on mobile */}
      <div className="block xl:hidden mb-6">
        <Link href="/">
          <Image
            src="https://www.easytopup.com.sg/wp-content/uploads/2021/09/easytopup-logo-380x72-2.svg"
            alt="Logo"
            width={176}
            height={32}
          />
        </Link>
      </div>

      <div className="flex flex-wrap items-center w-full max-w-6xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="w-full xl:w-1/2 flex items-center justify-center py-10">
          <div className="w-full max-w-md px-4 sm:px-8">
            <Signin />
          </div>
        </div>

        {/* Right Side - Info Panel */}
        <div className="hidden w-full xl:block xl:w-1/2 p-10">
          <div className="rounded-2xl px-6 pt-6 dark:!bg-dark-2 dark:bg-none">
            <Link className="mb-10 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src="https://www.easytopup.com.sg/wp-content/uploads/2021/09/easytopup-logo-380x72-2.svg"
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src="https://www.easytopup.com.sg/wp-content/uploads/2021/09/easytopup-logo-380x72-2.svg"
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>

            <p className="mb-3 text-xl font-medium text-dark dark:text-white">
              Sign in to your account
            </p>

            <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
              Welcome Back!
            </h1>

            <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
              Please sign in to your account by completing the necessary
              fields below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
