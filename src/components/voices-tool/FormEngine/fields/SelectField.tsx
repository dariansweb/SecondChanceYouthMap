import React from "react";

interface SelectFieldProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void; // NEW
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  options,
  value,
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
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.value);
        }}
        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
      >
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
