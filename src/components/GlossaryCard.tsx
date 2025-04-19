import React from "react";

type GlossaryCardProps = {
  term: string;
  definition: string;
  category?: string;
  state?: string;
  source?: string;
};

export default function GlossaryCard({
  term,
  definition,
  category,
  state,
  source,
}: GlossaryCardProps) {
  return (
    <div className="bg-neutral-50 border border-slate-300 rounded-md px-6 py-4 shadow-sm font-serif">
      <h2 className="text-2xl font-semibold text-slate-800 mb-1 tracking-tight">
        <span className="italic">{term}</span>
      </h2>

      {category && (
        <span className="inline-block text-[0.65rem] uppercase tracking-wide font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded mb-2">
          {category}
        </span>
      )}

      <p className="text-[0.95rem] leading-relaxed text-slate-800 mb-3">
        {definition}
      </p>

      {state && state !== "" && (
        <p className="text-xs text-slate-600 mb-1">
          <span className="font-medium">State:</span> {state}
        </p>
      )}

      {source && source !== "" && (
        <p className="text-xs text-slate-600">
          <span className="font-medium">Source:</span>{" "}
          <a
            href={`https://${source}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline underline-offset-2 hover:text-blue-900 transition"
          >
            {source}
          </a>
        </p>
      )}
    </div>
  );
}
