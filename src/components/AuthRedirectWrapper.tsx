"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export function AuthRedirectWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Or use context if you're using AuthProvider
    const isAuthPage = pathname.startsWith("/signin");

    if (!token && !isAuthPage) {
      router.replace("/signin");
    }
  }, [pathname]);

  return <>{children}</>;
}
