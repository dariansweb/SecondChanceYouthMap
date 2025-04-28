// File: src/components/voices-tool/FormEngine/fields/TextareaField.tsx

"use client";

import React from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void;
  highlighted?: boolean; // NEW
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  rows = 4,
  onChange,
  onJuvenileChange,
  highlighted = false,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.value);
        }}
        className={`block w-full border rounded-md shadow-sm py-2 px-3 text-gray-900 ${
          highlighted
            ? "bg-yellow-100 border-yellow-400 focus:ring-yellow-500 animate-pulse"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        }`}
      />
    </div>
  );
};

export default TextareaField;
