"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import ConfidenceChart from "@/components/dashboard/ConfidenceChart";

export default function JudgesPage() {
  return (
    <ImpactLayout title="Judges: The Stewards of Equitable Outcomes">
      <p>
        In juvenile courtrooms, the gavel doesn&apos;t just fall — it shapes a
        life. Your decisions carry the weight of law and the potential for
        transformation. SCYM data shows that states with clear, transparent
        guidance see more consistent outcomes across counties, reducing
        disparities and increasing youth success.
      </p>

      <div className="my-10">
        <ConfidenceChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          In states with published intake protocols, judges reported fewer
          delays and more alignment between risk scores and dispositional
          outcomes.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “She didn&apos;t dismiss the case — but she gave me a chance to speak.
        That changed the whole tone. I felt seen.”
        <br />— Youth testimony, Missouri family court transcript
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        You have the power to humanize policy. When you consider clinical flags,
        listen to intake officers, and weigh structured risk tools against lived
        context — you build a system that doesn&apos;t just process youth, but
        *protects them.*
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            Confidence Levels by State
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/risk-tools"
            className="text-blue-600 underline"
          >
            Risk Tool Usage & Judicial Alignment
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/recommendations"
            className="text-blue-600 underline"
          >
            Dispositional Trends by Intake Recommendation
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
