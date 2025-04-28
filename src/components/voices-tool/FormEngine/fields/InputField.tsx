// File: src/components/voices-tool/FormEngine/fields/InputField.tsx

"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void;
  highlighted?: boolean; // 👈 Add highlight prop
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  onJuvenileChange,
  highlighted = false, // default to false
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.value);
        }}
        className={`block w-full rounded-md shadow-sm py-2 px-3 text-gray-900 focus:outline-none focus:ring-2 ${
          highlighted
            ? "border-yellow-400 bg-yellow-50 animate-pulse focus:ring-yellow-500 focus:border-yellow-500"
            : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        }`}
      />
    </div>
  );
};

export default InputField;
