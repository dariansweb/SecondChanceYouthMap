"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";

export default function JuvenileDefendersPage() {
  return (
    <ImpactLayout title="Juvenile Defense Attorneys: Protecting Rights, Preserving Futures">
      <p>
        You are the voice when a youth has none. In rooms where jargon echoes
        louder than pain, you interpret law into dignity. You don&apos;t just
        defend against charges — you defend potential, humanity, and the right
        to be seen as more than a case file.
      </p>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “The court didn&apos;t listen to me until she spoke for me. She knew
        what I meant even when I couldn&apos;t say it right.”
        <br />— Youth reflection from post-adjudication exit survey
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🛡️ What You’re Changing
      </h2>
      <p>
        You advocate for fairness in a system where volume and velocity can
        silence nuance. You ask the hard questions, challenge inconsistencies,
        request evaluations, and fight for appropriate placements, not just
        procedural checkboxes. You slow the machine to make space for justice.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/recommendations"
            className="text-blue-600 underline"
          >
            Recommendation Breakdown After Intake
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            State-Level Confidence in Legal Transparency
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/diversion"
            className="text-blue-600 underline"
          >
            Diversion vs. Custody Decision Patterns
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
