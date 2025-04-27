import { JuvenileIntakeRecord } from "./JuvenileIntakeRecord";

export function resolvePrefill(
  field: { name: string },
  selectedPrefillRecord: JuvenileIntakeRecord | null
): string | number | boolean | undefined {
  if (!field || !field.name) {
    console.warn("Attempted to prefill a field without a valid name:", field);
    return undefined;
  }

  if (!selectedPrefillRecord) {
    return undefined;
  }

  return selectedPrefillRecord[field.name as keyof JuvenileIntakeRecord];
}

export function safeUpdateJuvenileRecord(
  juvenileRecord: JuvenileIntakeRecord,
  updateJuvenileRecord: (updates: Partial<JuvenileIntakeRecord>) => void,
  fieldName: string,
  value: string | number | boolean | null
) {
  const existingValue = juvenileRecord[fieldName as keyof JuvenileIntakeRecord];

  if (
    existingValue !== undefined &&
    existingValue !== "" &&
    existingValue !== null
  ) {
    console.warn(`Field "${fieldName}" already has a value.`, {
      existingValue,
      newValue: value,
    });
    // (Optional: in the future show user a modal before overwrite)
  } else {
    updateJuvenileRecord({ [fieldName]: value });
  }
}
