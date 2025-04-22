// src/context/voices-tool/VoicesContext.tsx

"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type VoicesContextType = {
  selectedVoice: string | null;
  setSelectedVoice: (voice: string) => void;
};

const VoicesContext = createContext<VoicesContextType | undefined>(undefined);

export const VoicesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedVoice, setSelectedVoice] = useState<string | null>(null);

  return (
    <VoicesContext.Provider value={{ selectedVoice, setSelectedVoice }}>
      {children}
    </VoicesContext.Provider>
  );
};

export const useVoicesContext = () => {
  const context = useContext(VoicesContext);
  if (!context) {
    throw new Error(
      "useVoicesContext must be used within a VoicesContextProvider"
    );
  }
  return context;
};
