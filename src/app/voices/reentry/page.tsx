"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import ConfidenceTrendChart from "@/components/dashboard/ConfidenceTrendChart";

export default function ReentryPage() {
  return (
    <ImpactLayout title="Reentry & Aftercare Teams: You Walk Them Home">
      <p>
        You are the final contact — but for many youth, you are the *first real
        ally.* You track services, follow up, reroute, reschedule, check in, and
        hold steady when the post-disposition fog sets in. SCYM&apos;s analysis
        reveals a major insight: states that emphasize reentry coordination have
        significantly fewer reoffenses.
      </p>

      <div className="my-10">
        <ConfidenceTrendChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          Our trend data shows where reentry planning is codified in policy,
          youth experience smoother transitions and stronger long-term outcomes.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “She didn&apos;t just send me home. She checked on my school, my meds,
        and even called the shelter to make sure they had space.”
        <br />— Youth testimonial from Arkansas reentry survey
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        You make sure the end of custody isn&apos;t the beginning of collapse.
        You ensure there are hands to catch, counselors to meet, and hope to
        follow. When reentry works — it&apos;s because someone like you made
        sure it was real.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/timeline"
            className="text-blue-600 underline"
          >
            Intake-to-Outcome Timeline
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/confidence"
            className="text-blue-600 underline"
          >
            State Reentry Confidence Ratings
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/education"
            className="text-blue-600 underline"
          >
            IEP Flags & Reentry School Planning
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
