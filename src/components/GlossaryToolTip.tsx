"use client";

import { useGlossary } from "@/context/GlossaryContext";
import { useState } from "react";

export default function GlossaryTooltip({ term }: { term: string }) {
  const glossary = useGlossary();
  const entry = glossary.find(
    (item) => item.term.toLowerCase() === term.toLowerCase()
  );

  const [show, setShow] = useState(false);

  if (!entry) return <>{term}</>;

  return (
    <span
      className="relative group cursor-help text-blue-600 underline"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {term}
      {show && (
        <div className="absolute z-10 mt-2 w-64 p-2 bg-white border border-gray-300 shadow-lg text-sm text-slate-800 rounded">
          <strong>{entry.term}</strong>
          <span className="block mt-1">{entry.definition}</span>
        </div>
      )}
    </span>
  );
}
