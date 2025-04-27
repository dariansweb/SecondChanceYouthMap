// src/components/voices-tool/FormEngine/utils/mapFlowDataToJuvenile.ts

import { flowToJuvenileMappings } from "./flowToJuvenileMapping";

/**
 * Dynamically maps incoming flow data to Juvenile Intake fields.
 *
 * @param flowData - Raw data object from a flow (e.g., probation officer, prosecutor).
 * @param flowId - String ID of the flow (must match key in flowToJuvenileMappings).
 * @returns Object containing mapped Juvenile Intake field values.
 */
export function mapFlowDataToJuvenile(
  flowData: Record<string, string | number | boolean | null | undefined>,
  flowId: string
): Record<string, unknown> {
  const mappings = flowToJuvenileMappings[flowId as keyof typeof flowToJuvenileMappings];
  const result: Record<string, unknown> = {};

  if (!mappings) {
    console.warn(
      `[mapFlowDataToJuvenile] No mappings found for flow: ${flowId}`
    );
    return result;
  }

  for (const [flowField, juvenileField] of Object.entries(mappings)) {
    if (flowData[flowField] !== undefined && flowData[flowField] !== null) {
      // Handle nested fields like "evals.psychological"
      if (juvenileField.includes(".")) {
        const [parentKey, childKey] = juvenileField.split(".");
        if (!result[parentKey]) {
          result[parentKey] = {};
        }
        (result[parentKey] as Record<string, unknown>)[childKey] = flowData[flowField];
      } else {
        result[juvenileField] = flowData[flowField];
      }
    }
  }

  return result;
}
