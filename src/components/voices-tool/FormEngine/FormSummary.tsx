// File: src/components/voices-tool/FormEngine/FormSummary.tsx

"use client";

import React from "react";
import { useFormState } from "@/context/voices-tool/FormStateContext";

interface FieldConfig {
  type: string;
  name: string;
  label: string;
}

interface StepNode {
  id: string;
  label: string;
  fields: FieldConfig[];
}

export interface FlowMap {
  [key: string]: StepNode;
}

interface FormSummaryProps {
  flow: FlowMap;
}

const FormSummary: React.FC<FormSummaryProps> = ({ flow }) => {
  const { formData } = useFormState();

  return (
    <div className="mt-10 bg-gray-100 border border-gray-300 rounded-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Summary of the Journey
      </h2>

      {Object.keys(flow).map((nodeId) => {
        const node = flow[nodeId];
        return (
          <div key={nodeId} className="mb-6">
            <h3 className="text-lg font-bold text-blue-700 mb-2">
              {node.label}
            </h3>
            <ul className="text-sm text-gray-800 space-y-1">
              {node.fields.map((field) => {
                const value = formData[field.name];
                return (
                  <li
                    key={field.name}
                    className="pl-2 border-l-2 border-blue-300"
                  >
                    <strong>{field.label}:</strong>{" "}
                    {value !== undefined && value !== "" ? (
                      String(value)
                    ) : (
                      <span className="italic text-gray-500">No response</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default FormSummary;
