// File: src/context/voices-tool/FormStateContext.tsx

'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";

interface FormData {
  [key: string]: string | number | boolean | null | undefined;
}

interface FormStateContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetForm?: () => void;
}

export const FormStateContext = createContext<FormStateContextProps>({
  formData: {},
  setFormData: () => {},
  resetForm: () => {},
});

export const useFormState = () => useContext(FormStateContext);

export const FormStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({});

  const resetForm = () => setFormData({});

  return (
    <FormStateContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormStateContext.Provider>
  );
};
