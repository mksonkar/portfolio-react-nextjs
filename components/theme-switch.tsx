"use client";

import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

type theme = "light" | "dark";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      className="hover:scale-115 fixed bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full border border-white border-opacity-80 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all active:scale-105"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
