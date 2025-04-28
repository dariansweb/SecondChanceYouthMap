// File: FlowMemory.ts

/**
 * Handles saving and loading flow form data to/from localStorage.
 * Future upgrade: Replace with real API or database.
 */

const STORAGE_KEY = "voicesTool.flowMemory";

export type FlowMemory = {
  [flowId: string]: Record<
    string,
    string | number | boolean | null | undefined
  >;
};

export function saveFlowData(flowId: string, data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const existing: FlowMemory = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );
    existing[flowId] = data as Record<string, string | number | boolean | null | undefined>;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error("Failed to save flow data:", error);
  }
}

export function loadFlowData(flowId: string): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;
  try {
    const existing: FlowMemory = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );
    return existing[flowId] || null;
  } catch (error) {
    console.error("Failed to load flow data:", error);
    return null;
  }
}

export function loadAllFlowData(): FlowMemory {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    console.error("Failed to load all flow data:", error);
    return {};
  }
}

export function clearFlowData(flowId: string) {
  if (typeof window === "undefined") return;
  try {
    const existing: FlowMemory = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );
    delete existing[flowId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error("Failed to clear flow data:", error);
  }
}
