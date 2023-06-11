"use client";
import React from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import getStystemPreference from "@/Utils/getSystemTheme";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const isSystem = theme === "system";
  const isDark = theme === "dark";
  const isLight = theme === "light";

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-10 h-10 p-3  rounded "
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isSystem === true && getStystemPreference() === true && (
        <BsFillMoonFill
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
        />
      )}

      {isSystem === true && getStystemPreference() === false && (
        <BsFillSunFill
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
        />
      )}

      {isLight && (
        <BsFillSunFill
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
        />
      )}
      {isDark && (
        <BsFillMoonFill
          className="w-4 h-4 text-gray-800 dark:text-gray-200"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeToggleButton;
