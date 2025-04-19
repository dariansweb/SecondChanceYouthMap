// src/context/FormContext.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Contact {
  name: string;
  role: string;
  organization: string;
  email: string;
  notes: string;
}

export interface FormData {
  // Step 1 – Youth Info
  pronouns: string;
  guardianName: string;
  guardianRelationship: string;
  county: string;
  birthplace: string;
  citizenship: string;
  hasIEP: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  raceEthnicity: string;
  gradeLevel: string;
  language: string;
  school: string;
  intakeDate: string;

  // Step 2 – Offense & Risk
  referralType: string;
  offense: string;
  offenseDate: string;
  severity: string;
  riskScore: number;
  riskToolUsed: string;

  // Step 3 – Contacts
  contacts: Contact[]; // array of people involved

  // Step 4 – Education
  schoolStatus: string;
  hasIEP504: string;
  estimatedCredits: number;
  truancyNotes: string;
  learningStyleNotes: string;
  suspensionNotes: string;
  schoolContact: string;
  specialPrograms: string;

  // Step 5 – Recommendation
  recommendation: string;
  recommendationReason: string;
  restitution: string;
  courtDate: string;
  recommendationNotes: string;
  evals: {
    psychological: boolean;
    substance: boolean;
    family: boolean;
  };
  placementRegion: string;
  willingToComply: string;
  phone: string;
  tags: string[];
  region: string;
  
}

interface FormContextProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const defaultFormData: FormData = {
  // Step 1
  firstName: "",
  lastName: "",
  pronouns: "",
  dob: "",
  gender: "",
  raceEthnicity: "",
  gradeLevel: "",
  school: "",
  guardianName: "",
  guardianRelationship: "",
  county: "",
  birthplace: "",
  language: "",
  citizenship: "",
  hasIEP: "",
  intakeDate: "",

  // Step 2
  referralType: "",
  offense: "",
  offenseDate: "",
  severity: "",
  riskScore: 0,
  riskToolUsed: "",

  // Step 3
  contacts: [],

  // Step 4
  schoolStatus: "",
  hasIEP504: "",
  estimatedCredits: 0,
  truancyNotes: "",
  learningStyleNotes: "",
  suspensionNotes: "",
  schoolContact: "",
  specialPrograms: "",

  // Step 5
  recommendation: "",
  recommendationReason: "",
  restitution: "",
  courtDate: "",
  recommendationNotes: "",
  evals: {
    psychological: false,
    substance: false,
    family: false,
  },
  placementRegion: "",
  willingToComply: "",
  phone: "",
  tags: [],
  region: "",
  
};

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
