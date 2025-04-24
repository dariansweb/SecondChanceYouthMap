// File: src/components/voices-tool/FormEngine/FormRenderer.tsx

import React, { useContext } from "react";
import InputField from "./fields/InputField";
import SelectField from "./fields/SelectField";
import TextareaField from "./fields/TextareaField";
import CheckboxField from "./fields/CheckboxField";
import DateField from "./fields/DateField";
import ConditionalGroup from "./fields/ConditionalGroup";
import { FormStateContext } from "@/context/voices-tool/FormStateContext";

interface FieldConfig {
  type: string;
  name: string;
  label: string;
  options?: { label: string; value: string }[];
  rows?: number;
  showIf?: string;
}

interface NodeConfig {
  label: string;
  fields: FieldConfig[];
}

const FormRenderer: React.FC<{ node: NodeConfig }> = ({ node }) => {
  const { formData, setFormData } = useContext(FormStateContext);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value } = e.target;
    const checked =
      type === "checkbox" && (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="form-renderer">
      <h2 className="form-title">{node.label}</h2>

      {node.fields.map((field) => {
        const value = formData[field.name];
        const isVisible = field.showIf ? Boolean(formData[field.showIf]) : true;

        return (
          <ConditionalGroup key={field.name} show={isVisible}>
            {(() => {
              switch (field.type) {
                case "input":
                  return (
                    <InputField
                      {...field}
                      value={String(value ?? "")}
                      onChange={handleChange}
                    />
                  );
                case "select":
                  return (
                    <SelectField
                      {...field}
                      options={field.options ?? []}
                      value={String(value ?? "")}
                      onChange={handleChange}
                    />
                  );
                case "textarea":
                  return (
                    <TextareaField
                      {...field}
                      value={String(value ?? "")}
                      onChange={handleChange}
                    />
                  );
                case "checkbox":
                  return (
                    <CheckboxField
                      {...field}
                      checked={!!value}
                      onChange={handleChange}
                    />
                  );
                case "date":
                  return (
                    <DateField
                      {...field}
                      value={String(value ?? "")}
                      onChange={handleChange}
                    />
                  );
                default:
                  return null;
              }
            })()}
          </ConditionalGroup>
        );
      })}
    </div>
  );
};

export default FormRenderer;
