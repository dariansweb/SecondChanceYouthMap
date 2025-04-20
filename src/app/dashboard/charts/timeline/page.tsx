"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";

export default function TimelinePage() {
  return (
      <ChartArticleLayout title="Intake-to-Outcome Timeline">
        <p>
          Every step in the youth intake process builds upon the last — from
          referral to custody, from education planning to community reentry.
          This timeline maps out a model flow of decisions that influence a
          youth’s path.
        </p>

        <div className="my-10">
          {/* Timeline component placeholder */}
          <div className="p-6 text-center border border-dashed border-slate-300 rounded-md text-slate-500 italic">
            ⏳ Animated intake-to-outcome flow coming soon — decision gates,
            progress lines, and service touchpoints.
          </div>
        </div>

        <h2 className="mt-6">🧭 The Goal of This Timeline</h2>
        <p>
          It’s not just a map — it’s a mirror. Intake without reflection often
          leads to overreach. By visualizing the path, we highlight critical
          opportunities for diversion, intervention, or support.
        </p>
      </ChartArticleLayout>
  );
}
