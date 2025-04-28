"use client";

import React, { createContext, useContext, useState } from "react";
import { JuvenileIntakeRecord } from "@/components/voices-tool/FormEngine/utils/JuvenileIntakeRecord";

interface JuvenileIntakeContextType {
  juvenileRecord: JuvenileIntakeRecord;
  updateJuvenileRecord: (updates: Partial<JuvenileIntakeRecord>) => void;
  prefilledFields: Set<string>;
  markFieldPrefilled: (fieldName: string) => void;
  clearPrefilledFields: () => void;
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
  const [prefilledFields, setPrefilledFields] = useState<Set<string>>(
    new Set()
  );

  const updateJuvenileRecord = (updates: Partial<JuvenileIntakeRecord>) => {
    setJuvenileRecord((prev) => ({
      ...prev,
      ...updates,
    }));

    // 🔥 Automatically mark fields as prefilled when updating
    Object.keys(updates).forEach((fieldName) => {
      setPrefilledFields((prev) => new Set(prev).add(fieldName));
    });
  };

  const markFieldPrefilled = (fieldName: string) => {
    setPrefilledFields((prev) => new Set(prev).add(fieldName));
  };

  const clearPrefilledFields = () => {
    setPrefilledFields(new Set());
  };

  return (
    <JuvenileIntakeContext.Provider
      value={{
        juvenileRecord,
        updateJuvenileRecord,
        prefilledFields,
        markFieldPrefilled,
        clearPrefilledFields,
      }}
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
