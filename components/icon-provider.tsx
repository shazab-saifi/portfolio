"use client";

import type { ReactNode } from "react";
import { IconContext } from "@phosphor-icons/react";

export function IconProvider({ children }: { children: ReactNode }) {
  return (
    <IconContext.Provider value={{ weight: "bold" }}>
      {children}
    </IconContext.Provider>
  );
}
