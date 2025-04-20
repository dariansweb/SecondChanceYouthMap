"use client";

import matrixData from "@/data/heat-map-data.json";

const tools = ["SAVRY", "RAI", "YLS/CMI", "YASI", "Other"];

interface MatrixEntry {
  [state: string]:
    | {
        tool?: string;
        confidence?: string;
      }
    | string;
}

function getToolUsage(data: MatrixEntry[]) {
  const states: Record<string, Record<string, string>> = {};

  data.forEach((entry) => {
    Object.entries(entry).forEach(([state, value]) => {
      const typedValue = value as { tool?: string; confidence?: string };
      if (state === "decisionPoint") return;
      if (typeof typedValue === "object" && typedValue.tool) {
        const tool = typedValue.tool
          ? String(typedValue.tool).toUpperCase()
          : "";
        const confidence = String(
          (value as { confidence: string }).confidence
        ).toLowerCase();

        if (!states[state]) {
          states[state] = {};
        }

        states[state][tool] = confidence;
      }
    });
  });

  return states;
}

function getColor(confidence: string) {
  switch (confidence) {
    case "high":
      return "bg-green-500 text-white";
    case "medium":
      return "bg-yellow-400 text-slate-900";
    case "low":
      return "bg-red-500 text-white";
    default:
      return "bg-slate-200 text-slate-400";
  }
}

export default function RiskToolHeatmap() {
  const usage = getToolUsage(matrixData);
  const stateNames = Object.keys(usage);

  return (
    <div className="bg-white p-6 rounded shadow border border-slate-200 overflow-x-auto">
      <h2 className="text-lg font-bold text-slate-700 mb-4">
        🧠 Risk Tool Usage & Confidence by State
      </h2>

      <table className="min-w-full text-sm text-center border border-slate-200">
        <thead>
          <tr className="bg-white text-slate-700 font-semibold">
            <th className="p-2 border-r text-left bg-white sticky left-0 z-10 shadow-md">
              State
            </th>
            {tools.map((tool) => (
              <th
                key={tool}
                className="p-2 border-r bg-white whitespace-nowrap"
              >
                {tool}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stateNames.map((state) => (
            <tr key={state} className="border-t even:bg-slate-50">
              <td className="p-2 font-medium text-left bg-slate-50 sticky left-0 z-0 text-slate-700 whitespace-nowrap">
                {state}
              </td>
              {tools.map((tool) => {
                const confidence = usage[state][tool];
                return (
                  <td
                    key={tool}
                    className={`p-2 transition-all duration-150 ease-in-out ${getColor(
                      confidence
                    )} rounded-sm text-white font-semibold`}
                  >
                    {confidence
                      ? confidence.charAt(0).toUpperCase() + confidence.slice(1)
                      : "—"}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
