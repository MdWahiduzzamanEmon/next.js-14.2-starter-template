"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 200,
      duration: 500,
    });
  }, []);
  return <div>{children}</div>;
};

export default AOSProvider;
