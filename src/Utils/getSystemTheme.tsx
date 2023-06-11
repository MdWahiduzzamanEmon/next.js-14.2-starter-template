"use client";
// const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

const getStystemPreference = () => {
  
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default getStystemPreference;
