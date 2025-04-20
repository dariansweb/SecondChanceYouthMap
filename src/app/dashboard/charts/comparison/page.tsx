"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";

export default function ComparisonPage() {
  return (
      <ChartArticleLayout title="Multi-State Comparison: Policy Duel">
        <p>
          What happens when Arkansas and Texas go head-to-head on risk tools? Or
          when Missouri’s diversion criteria is stacked against Oklahoma’s
          custody triggers? This tool allows you to compare multiple states in
          real time.
        </p>

        <p className="mt-4">
          This comparison interface is perfect for presentations, stakeholder
          buy-in, or understanding how one state’s decisions differ from
          another’s — even with similar youth populations.
        </p>

        <div className="my-10">
          {/* Placeholder for future ComparisonChart or interactive toggle UI */}
          <div className="p-6 text-center border border-dashed border-slate-300 rounded-md text-slate-500 italic">
            🚧 State comparison chart coming soon — visual duels, toggle pairs,
            and matrix overlays in the works!
          </div>
        </div>

        <h2 className="mt-6">⚖️ Why This Matters</h2>
        <p>
          Youth outcomes aren’t determined just by actions — they’re shaped by
          the systems in place. This view helps uncover gaps, mismatches, or
          over-corrections across jurisdictions.
        </p>
      </ChartArticleLayout>
  );
}
