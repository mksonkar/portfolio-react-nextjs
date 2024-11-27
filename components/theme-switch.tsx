"use client";

import { useThemeContext } from "@/context/theme-context";
import React from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className="hover:scale-115 fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#99582A] border-opacity-10 bg-[#BB9457] bg-opacity-40 shadow-2xl backdrop-blur-[0.5rem] transition-all active:scale-105  dark:bg-[#FFE6A7]/20 dark:text-[#ffe6a7]/70"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun size={22} /> : <BsMoonStars size={22} />}
    </button>
  );
}
