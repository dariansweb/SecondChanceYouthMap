"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import RecommendationPieChart from "@/components/dashboard/RecommendationPieChart";

export default function ProbationOfficersPage() {
  return (
    <ImpactLayout title="Probation Officers: The Bridge Between Justice and Growth">
      <p>
        You work in the space between accountability and compassion. For many
        youth, you&apos;re not just an officer — you&apos;re the first adult who
        listens, checks in, and shows up. SCYM data shows that youth on
        probation experience better outcomes when they&apos;re paired with
        proactive, consistent support.
      </p>

      <div className="my-10">
        <RecommendationPieChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          In several states, more than half of all intake outcomes result in
          probation — not custody. That means the majority of youth move forward
          under your care.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “He showed up to my school conference and told them I was doing better.
        Nobody ever vouched for me like that.”
        <br />— Youth on probation, anonymous exit interview
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        Youth on probation are often balancing trauma, school pressure, and
        unstable home environments. Your structure, your belief in their
        potential, and your willingness to enforce boundaries *and* celebrate
        growth — it&apos;s transformative.
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
            View Intake Recommendation Outcomes
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            Confidence Levels in Probation-Driven States
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            See Youth Progress Through Intake to Reentry
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
