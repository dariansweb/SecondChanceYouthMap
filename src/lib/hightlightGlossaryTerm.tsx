import GlossaryTooltip from "@/components/GlossaryToolTip";
import { GlossaryEntry } from "@/context/GlossaryContext";
import React from "react";

export function highlightGlossaryTerms(
  text: string,
  glossary: GlossaryEntry[]
) {
  const parts: (string | JSX.Element)[] = [text];

  glossary.forEach((entry) => {
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (typeof part === "string") {
        const regex = new RegExp(`\\b(${entry.term})\\b`, "gi");
        if (regex.test(part)) {
          const split = part.split(regex);
          const withTooltips = split.map((seg, j) =>
            regex.test(seg) ? (
              <GlossaryTooltip key={`${entry.term}-${j}`} term={seg} />
            ) : (
              seg
            )
          );
          parts.splice(i, 1, ...withTooltips);
          break;
        }
      }
    }
  });

  return <>{parts}</>;
}
