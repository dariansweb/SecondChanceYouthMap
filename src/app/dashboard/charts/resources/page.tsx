import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import Link from "next/link";

export default function SourcesPage() {
  return (
    <ChartArticleLayout title="Top Cited Sources by State">
      <p>
        While we&apos;ve embedded citations across the app, this page serves as
        a launchpad for full source transparency and civic accountability.
        Behind every visual is a reference — and behind every reference is a
        researcher who asked a hard question and found an answer worth sharing.
      </p>

      <p className="mt-4">
        Please visit the{" "}
        <Link href="/docs/references" className="text-blue-700 hover:underline">
          full References page
        </Link>{" "}
        to explore every URL, statute, intake manual, and policy document used
        in this project. If a state&apos;s score confused you — this is where we
        trace it.
      </p>

      <p className="mt-4">
        SCYM&apos;s glossary and decision matrix were built by hand through
        hundreds of cross-state citations — from local circuit forms to
        statewide risk manuals. This isn&apos;t AI-generated filler — it&apos;s
        human-curated, source-anchored architecture for justice clarity.
      </p>

      <p className="mt-4 text-sm italic text-slate-500">
        💡 <strong>Coming soon:</strong> Click any bar in the source chart to
        reveal direct links, document titles, and citation contexts per state.
      </p>

      <p className="mt-6 font-semibold text-blue-700">
        We believe transparency earns trust. And trust builds systems worth
        following. Our research doesn&apos;t exist in secret — it&apos;s open,
        visible, and ready for civic audit. That&apos;s how reform should work.
      </p>
    </ChartArticleLayout>
  );
}
