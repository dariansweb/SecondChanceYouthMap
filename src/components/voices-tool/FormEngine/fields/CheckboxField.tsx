import React from "react";

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onJuvenileChange?: (name: string, value: boolean) => void; // NEW
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  name,
  checked,
  onChange,
  onJuvenileChange,
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
        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
