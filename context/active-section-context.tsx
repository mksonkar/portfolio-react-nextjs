import React, { useState } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return children;
}
