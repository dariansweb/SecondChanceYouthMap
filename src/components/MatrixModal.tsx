"use client";
import { useEffect } from "react";

interface MatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  entry: {
    decisionPoint: string;
    [key: string]:
      | {
          value: string | number;
          notes: string;
          source: string;
          confidence: string | number;
        }
      | string;
  } | null;
}

const validStates = [
  "Arkansas",
  "Texas",
  "Missouri",
  "Louisiana",
  "Oklahoma",
  "Mississippi",
  "Tennessee",
];

export default function MatrixModal({
  isOpen,
  onClose,
  entry,
}: MatrixModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !entry) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 sm:px-0">
      <div className="relative bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 border border-slate-200">
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-red-500 text-2xl font-bold transition"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-3">
          {entry.decisionPoint}
        </h2>

        <div className="space-y-8">
          {Object.entries(entry).map(([key, val]) => {
            if (key === "decisionPoint" || !validStates.includes(key))
              return null;

            return (
              <div
                key={key}
                className="pb-6 border-b last:border-b-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-lg shadow-sm px-4 pt-4"
              >
                <h3 className="text-lg font-bold text-slate-800 mb-3 tracking-wide underline decoration-blue-200 underline-offset-4">
                  {key}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-700">
                  <div>
                    <span className="block text-xs tracking-wide uppercase text-slate-600 font-semibold mb-1 border-l-4 border-blue-400 pl-2">
                      🧾 Value
                    </span>

                    <span className="pl-1">
                      {typeof val === "object" && "value" in val
                        ? String(val.value)
                        : "N/A"}
                    </span>
                  </div>

                  <div>
                    <span className="block text-xs tracking-wide uppercase text-slate-600 font-semibold mb-1 border-l-4 border-blue-400 pl-2">
                      Confidence
                    </span>
                    <li className="pl-1 list-none" >
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                          typeof val === "object" && "confidence" in val
                            ? val.confidence === "high"
                              ? "bg-green-100 text-green-800"
                              : val.confidence === "medium"
                              ? "bg-yellow-100 text-yellow-800"
                              : val.confidence === "low"
                              ? "bg-red-100 text-red-800"
                              : "bg-gray-100 text-gray-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {typeof val === "object" && "confidence" in val
                          ? String(val.confidence).charAt(0).toUpperCase() +
                            String(val.confidence).slice(1)
                          : "N/A"}
                      </span>
                    </li>
                  </div>

                  <div className="md:col-span-2">
                    <li className="mb-3 list-none">
                      <span className="block text-xs tracking-wide uppercase text-slate-600 font-semibold mb-1 border-l-4 border-blue-400 pl-2">
                        Notes
                      </span>
                      <p className="pl-1 text-[15px] leading-relaxed text-slate-700 italic bg-blue-50 p-3 rounded-md shadow-sm border border-blue-100">
                        {typeof val === "object" && "notes" in val
                          ? val.notes
                          : "N/A"}
                      </p>
                    </li>
                  </div>

                  <div className="md:col-span-2">
                    <span className="block text-xs tracking-wide uppercase text-slate-600 font-semibold mb-1 border-l-4 border-blue-400 pl-2">
                      Source
                    </span>
                    {typeof val === "object" && "source" in val ? (
                      <a
                        href={`https://${val.source}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline decoration-dotted"
                      >
                        {val.source}
                      </a>
                    ) : (
                      <span>N/A</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
