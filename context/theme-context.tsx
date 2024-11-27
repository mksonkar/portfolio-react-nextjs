"use client";

import React, { createContext, useEffect, useState } from "react";

type theme = "light" | "dark";
type ThemeContextProviderProps = {
  children: React.ReactNode;
};
type ThemeContextType = {
  theme: theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider",
    );
  }
  return context;
}
