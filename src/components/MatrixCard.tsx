"use client";

import GlossaryRichText from "@/components/GlossaryRichText";
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
  onOpenModal?: (entry: MatrixEntry) => void;
};

export default function MatrixCard({
  entry,
  visibleStates,
  onOpenModal,
}: Props) {
  const [open] = useState(false);

  const formatValue = (value: string | boolean | number) => {
    if (typeof value === "boolean") return value ? "Yes" : "No";
    if (typeof value === "number") return `${value} days`;
    return value;
  };

  return (
    <div
      className="
    group
    relative
    flex flex-col
    h-full
    rounded-xl
    bg-white
    text-slate-800
    border border-slate-200
    shadow-sm
    p-5
    transition-all duration-300
    hover:shadow-xl
    hover:border-blue-500
    hover:scale-[1.015]
    focus-within:ring-2
    focus-within:ring-blue-400
  "
    >
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
                  <span className="text-sm text-slate-600">
                    <strong>Notes:</strong>{" "}
                    <GlossaryRichText text={val.notes} />
                  </span>

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
      <div
        className="
    group relative flex flex-col h-full
    rounded-xl bg-white text-slate-800
    border border-slate-200 shadow-sm p-5
    transition-all duration-300 hover:shadow-xl
    hover:border-blue-500 hover:scale-[1.015]
    focus-within:ring-2 focus-within:ring-blue-400
  "
      >
        {/* <button
          onClick={() => setOpen(!open)}
          className="w-full inline-block text-sm px-4 py-2 rounded-md border border-blue-600 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
        >
          {open ? "Hide Details" : "Show Details"}
        </button> */}
        {onOpenModal && (
          <div className="mt-auto pt-4">
            <button
              onClick={() => onOpenModal?.(entry)}
              className="w-full inline-block text-sm px-4 py-2 rounded-md border border-blue-600 text-blue-700 font-semibold hover:bg-blue-600 hover:text-white transition-colors shadow-sm"
            >
              View Full Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
