import React from "react";

interface DateFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJuvenileChange?: (name: string, value: string) => void; // NEW
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  name,
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
      <input
        id={name}
        name={name}
        type="date"
        value={value}
        onChange={(e) => {
          onChange(e);
          onJuvenileChange?.(e.target.name, e.target.value);
        }}
        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default DateField;
