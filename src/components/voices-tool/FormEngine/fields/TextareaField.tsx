import React from "react";

interface TextareaFieldProps {
  label: string;
  name: string;
  value: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void; // NEW
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  name,
  value,
  rows = 4,
  onChange,
  onJuvenileChange,
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.value);
        }}
        rows={rows}
        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default TextareaField;
