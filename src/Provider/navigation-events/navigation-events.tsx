"use client";
// import Footer from "@/Global_Component/Footer/Footer";
// import Header from "@/Global_Component/Header/Header";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function NavigationEvents({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? null : ""}
      {children}
      {pathname === "/login" || pathname === "/signup" ? null : ""}
    </>
  );
}
