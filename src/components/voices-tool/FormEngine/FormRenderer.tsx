// File: src/components/voices-tool/FormEngine/FormRenderer.tsx

import React, { useContext } from "react";
import InputField from "./fields/InputField";
import SelectField from "./fields/SelectField";
import TextareaField from "./fields/TextareaField";
import CheckboxField from "./fields/CheckboxField";
import DateField from "./fields/DateField";
import ConditionalGroup from "./fields/ConditionalGroup";
import { FormStateContext } from "@/context/voices-tool/FormStateContext";
import { useJuvenileIntakeRecord } from "@/context/voices-tool/JuvenileIntakeContext";
import { resolvePrefill } from "@/components/voices-tool/FormEngine/utils/prefillHelpers";

interface FieldConfig {
  type: string;
  name: string;
  label: string;
  options?: { label: string; value: string }[];
  rows?: number;
  showIf?: string;
  source?: string;
  highlighted?: boolean;
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
    >,
    field: FieldConfig
  ) => {
    const { name, type, value } = e.target;
    const checked =
      type === "checkbox" && (e.target as HTMLInputElement).checked;

    const finalValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));

    if (field.source === "juvenile") {
      updateJuvenileRecord({ [name]: finalValue });
    }
  };

  const { juvenileRecord, updateJuvenileRecord } = useJuvenileIntakeRecord();

  // Define prefilledFields as an empty Set or populate it as needed.
  const prefilledFields = new Set<string>();

  return (
    <div className="form-renderer">
      <h2 className="form-title">{node.label}</h2>

      {node.fields.map((field) => {
        const prefilledValue =
          resolvePrefill(field, juvenileRecord) ?? formData[field.name];
        const isVisible = field.showIf ? Boolean(formData[field.showIf]) : true;

        const isHighlighted = prefilledFields.has(field.name); // 👈 New: detect prefilled fields

        return (
          <ConditionalGroup key={field.name} show={isVisible}>
            {(() => {
              switch (field.type) {
                case "input":
                  return (
                    <InputField
                      {...field}
                      value={String(prefilledValue ?? "")}
                      highlighted={isHighlighted} // 👈 New: pass highlight flag
                      onChange={(e) => handleChange(e, field)}
                    />
                  );
                case "select":
                  return (
                    <SelectField
                      {...field}
                      options={field.options ?? []}
                      value={String(prefilledValue ?? "")}
                      highlighted={isHighlighted} // 👈 New: pass highlight
                      onChange={(e) => handleChange(e, field)}
                    />
                  );
                case "textarea":
                  return (
                    <TextareaField
                      {...field}
                      value={String(prefilledValue ?? "")}
                      highlighted={isHighlighted} // 👈 New: pass highlight
                      onChange={(e) => handleChange(e, field)}
                    />
                  );
                case "checkbox":
                  return (
                    <CheckboxField
                      {...field}
                      checked={!!prefilledValue}
                      highlighted={isHighlighted} // 👈 New: pass highlight
                      onChange={(e) => handleChange(e, field)}
                    />
                  );
                case "date":
                  return (
                    <DateField
                      {...field}
                      value={String(prefilledValue ?? "")}
                      highlighted={isHighlighted} // 👈 New: pass highlight
                      onChange={(e) => handleChange(e, field)}
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
