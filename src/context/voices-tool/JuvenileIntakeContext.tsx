"use client";

import React, { createContext, useContext, useState } from "react";
import { JuvenileIntakeRecord } from "@/components/voices-tool/FormEngine/utils/JuvenileIntakeRecord";

interface JuvenileIntakeContextType {
  juvenileRecord: JuvenileIntakeRecord;
  updateJuvenileRecord: (updates: Partial<JuvenileIntakeRecord>) => void;
}

const JuvenileIntakeContext = createContext<
  JuvenileIntakeContextType | undefined
>(undefined);

export const JuvenileIntakeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [juvenileRecord, setJuvenileRecord] = useState<JuvenileIntakeRecord>(
    {}
  );

  const updateJuvenileRecord = (updates: Partial<JuvenileIntakeRecord>) => {
    setJuvenileRecord((prev) => ({ ...prev, ...updates }));
  };

  return (
    <JuvenileIntakeContext.Provider
      value={{ juvenileRecord, updateJuvenileRecord }}
    >
      {children}
    </JuvenileIntakeContext.Provider>
  );
};

export const useJuvenileIntakeRecord = () => {
  const context = useContext(JuvenileIntakeContext);
  if (!context) {
    throw new Error(
      "useJuvenileIntakeRecord must be used within a JuvenileIntakeProvider"
    );
  }
  return context;
};
