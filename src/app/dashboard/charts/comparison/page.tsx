"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";

export default function ComparisonPage() {
  return (
    <ChartArticleLayout title="Multi-State Comparison: Policy Duel">
      <p>
        What happens when Arkansas and Texas go head-to-head on risk tool policy?
        Or when Missouri&apos;s diversion standards are stacked against Oklahoma&apos;s
        custody triggers? This tool lets you compare states in real-time — and
        see how even small legislative shifts create huge youth outcomes.
      </p>

      <p className="mt-4">
        This comparison interface is perfect for presentations, agency alignment,
        or onboarding new reform-minded staff. By toggling between states, users
        can visually explore how one system&apos;s philosophy, funding model, or intake
        criteria diverge from another — even when serving similar populations.
      </p>

      <div className="my-10">
        {/* Placeholder for future ComparisonChart or interactive toggle UI */}
        <div className="p-6 text-center border border-dashed border-slate-300 rounded-md text-slate-500 italic">
          🚧 State comparison chart coming soon —
          visual duels, toggle pairs, and matrix overlays in the works!
        </div>
      </div>

      <p className="mt-4 text-sm italic text-slate-500">
        💡 <strong>Coming soon:</strong> Click any bar to reveal detailed policy
        notes, statutes, or SCYM findings for that state — straight from our research archive.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-blue-700">⚖️ Why This Matters</h2>

      <p className="mt-4">
        Youth outcomes aren&apos;t shaped solely by individual behavior —
        they&apos;re deeply influenced by the policies around them. Two identical
        youth might receive diversion in one state and detention in another,
        simply because the tools, thresholds, or court culture differ.
      </p>

      <p className="mt-4">
        This comparative view isn&apos;t about competition — it&apos;s about clarity.
        We learn best not by pretending our systems are perfect, but by holding
        them up to the light, side-by-side. And through that contrast, we discover
        what&apos;s working, what&apos;s missing, and what might be possible.
      </p>

      <p className="mt-6 font-semibold text-blue-700">
        At SCYM, we believe that policy clarity creates equity. The more
        accessible our comparisons, the more likely leaders are to adopt what
        works — and abandon what doesn&apos;t.
      </p>
    </ChartArticleLayout>
  );
}
