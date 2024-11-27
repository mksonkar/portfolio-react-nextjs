"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="hover:scale-115 fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 border-opacity-80 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all active:scale-105 dark:border-white/20 dark:bg-gray-950 dark:text-yellow-100"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
