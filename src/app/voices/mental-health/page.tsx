"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import RiskToolUsageChart from "@/components/dashboard/RiskToolUsageChart";

export default function MentalHealthPage() {
  return (
    <ImpactLayout title="Mental Health Professionals: Translating Risk Into Relationship">
      <p>
        You sit with the stories that others skim past. The trauma. The
        dissociation. The flags that systems sometimes treat as noise.
        SCYM&apos;s research shows that mental health screening is one of the
        strongest protective interventions — and one of the most inconsistently
        applied. Your work doesn&apos;t just treat symptoms; it redirects lives.
      </p>

      <div className="my-10">
        <RiskToolUsageChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          Some states embed SAVRY or YLS/CMI into every youth intake. Others
          rely on “professional judgment.” But the strongest results occur when
          clinical eyes guide the process — not just score it.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “The counselor asked me if I felt safe at home. Nobody ever asked that
        before. I told her the truth, and I didn&apos;t go back to jail. I went
        to therapy instead.”
        <br />— Youth reflection, post-disposition treatment file
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        Every override you document. Every screening you complete with
        gentleness. Every silent moment you sit with a youth while they struggle
        to speak — it counts. You are the emotional architecture behind every
        second chance.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/risk-tools"
            className="text-blue-600 underline"
          >
            Risk Tool Usage & Clinical Override Patterns
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/heatmap"
            className="text-blue-600 underline"
          >
            Tool Confidence Heatmap (By Documentation)
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            SCYM Policy Clarity Ratings
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
