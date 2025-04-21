"use client";

import ImpactLayout from "@/components/layout/ImpactLayout";
import TopSourcesChart from "@/components/dashboard/TopSourcesChart";

export default function CommunityAdvocatesPage() {
  return (
    <ImpactLayout title="Community Advocates: The Voice Between Systems">
      <p>
        You show up when others don&apos;t. You speak up when the court is
        silent. You call, mentor, drive, knock, explain — over and over. SCYM
        data shows that in states with strong community-based diversion and
        mentoring programs, youth outcomes improve dramatically. Your presence
        creates possibility.
      </p>

      <div className="my-10">
        <TopSourcesChart />
        <p className="text-sm mt-2 text-slate-600 italic">
          The strongest data footprints came from states with well-documented
          partnerships between justice systems and community nonprofits. You are
          part of what makes those records — and those results — real.
        </p>
      </div>

      <blockquote className="border-l-4 border-blue-600 pl-4 italic text-slate-700 my-6">
        “I had a mentor who told me I wasn&apos;t just a case number. He knew
        what it was like. And I didn&apos;t want to let him down.”
        <br />— Youth voice from community-based diversion report
      </blockquote>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🌱 What You&apos;re Changing
      </h2>
      <p>
        You build the bridge. You hold the line. You sit in the lobby and
        advocate for a second call, a delayed placement, a better plan. You are
        the thread connecting systems to souls. And without your work, justice
        is incomplete.
      </p>

      <h2 className="text-xl font-semibold text-blue-700 mt-10">
        🔗 Related Resources
      </h2>
      <ul className="list-disc list-inside">
        <li>
          <a
            href="/dashboard/charts/sources"
            className="text-blue-600 underline"
          >
            Research Source Depth & Community Footprints
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/diversion"
            className="text-blue-600 underline"
          >
            Diversion Outcome Trends
          </a>
        </li>
        <li>
          <a
            href="/dashboard/charts/comparison"
            className="text-blue-600 underline"
          >
            State-Level Reform Models
          </a>
        </li>
      </ul>
    </ImpactLayout>
  );
}
