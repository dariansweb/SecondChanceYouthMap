export function loadAllFlowData(): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = localStorage.getItem("voicesToolFlowData");
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error("[loadAllFlowData] Error loading flow data:", error);
    return null;
  }
}
