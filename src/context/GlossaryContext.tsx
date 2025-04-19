"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import glossaryData from "@/data/glossary.json";

export type GlossaryEntry = {
  term: string;
  definition: string;
  category?: string;
  state?: string;
  source?: string;
};

const GlossaryContext = createContext<GlossaryEntry[]>([]);

export const useGlossary = () => useContext(GlossaryContext);

export function GlossaryProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<GlossaryEntry[]>([]);

  useEffect(() => {
    setEntries(glossaryData);
  }, []);

  return (
    <GlossaryContext.Provider value={entries}>
      {children}
    </GlossaryContext.Provider>
  );
}
