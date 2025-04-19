"use client";

import { useGlossary } from "@/context/GlossaryContext";
import GlossaryTooltip from "@/components/GlossaryToolTip";

type Props = {
  text: string;
};

export default function GlossaryRichText({ text }: Props) {
  const glossary = useGlossary();
  const terms = glossary
    .map((g) => g.term)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length); // longer first to avoid partial overlap

  if (!text || typeof text !== "string") return null;

  const regex = new RegExp(`\\b(${terms.join("|")})\\b`, "gi");
  const segments = text.split(regex);

  return (
    <>
      {segments.map((segment, index) => {
        if (!segment) return null;

        const match = glossary.find(
          (entry) => entry?.term?.toLowerCase?.() === segment.toLowerCase()
        );

        if (match) {
          return <GlossaryTooltip key={index} term={match.term} />;
        }

        return <span key={index}>{segment}</span>;
      })}
    </>
  );
}
