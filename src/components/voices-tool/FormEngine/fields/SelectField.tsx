// File: src/components/voices-tool/FormEngine/fields/SelectField.tsx

"use client";

import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void;
  highlighted?: boolean; // NEW
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  value,
  options,
  onChange,
  onJuvenileChange,
  highlighted = false,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
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
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
