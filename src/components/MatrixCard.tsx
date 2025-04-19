"use client";

import { useState } from "react";

type StateValue = {
  value: string | boolean | number;
  notes: string;
  source: string;
  confidence: "low" | "medium" | "high";
};

type MatrixEntry = {
  decisionPoint: string;
  [state: string]: StateValue | string;
};

const confidenceColors: Record<string, string> = {
  high: "bg-green-200 text-green-800",
  medium: "bg-yellow-200 text-yellow-800",
  low: "bg-red-200 text-red-800",
};

type Props = {
  entry: MatrixEntry;
  visibleStates: string[];
};

export default function MatrixCard({ entry, visibleStates }: Props) {
  const [open, setOpen] = useState(false);

  const formatValue = (value: string | boolean | number) => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "number") return `${value} days`;
    return value;
  };

  return (
    <div className="rounded-lg shadow-md bg-white text-slate-800 p-4 border border-gray-200 transition-all">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        {entry.decisionPoint}
      </h2>

      <div className="space-y-3">
        {visibleStates.map((state) => {
          const val = entry[state] as StateValue | undefined;
          if (!val) return null;

          return (
            <div key={state} className="border-b border-slate-200 pb-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{state}</span>
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    typeof val.value === "boolean"
                      ? val.value
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                      : "bg-blue-100 text-blue-900"
                  }`}
                >
                  {formatValue(val.value)}
                </span>
              </div>

              {open && (
                <div className="mt-2 ml-2 text-sm text-slate-600 bg-slate-100 p-2 rounded space-y-1">
                  <p>
                    <span className="font-medium">Notes:</span> {val.notes}
                  </p>
                  <p>
                    <span className="font-medium">Source:</span>{" "}
                    <a
                      href={`https://${val.source}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {val.source}
                    </a>
                  </p>
                  <p>
                    <span className="font-medium">Confidence:</span>{" "}
                    <span
                      className={`px-2 py-0.5 rounded ${
                        confidenceColors[val.confidence]
                      }`}
                    >
                      {val.confidence.charAt(0).toUpperCase() +
                        val.confidence.slice(1)}
                    </span>
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="mt-4 text-sm font-medium text-blue-600 hover:underline"
      >
        {open ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
}
