// File: src/components/voices-tool/FormEngine/fields/CheckboxField.tsx

"use client";

import React from "react";

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJuvenileChange?: (name: string, value: boolean) => void;
  highlighted?: boolean; // 👈 NEW for glow effect
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  checked,
  onChange,
  onJuvenileChange,
  highlighted = false,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.checked);
        }}
        className={`h-5 w-5 rounded border-gray-300 ${
          highlighted
            ? "bg-yellow-100 border-yellow-400 focus:ring-yellow-500 animate-pulse"
            : "text-blue-600 focus:ring-blue-500"
        }`}
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
