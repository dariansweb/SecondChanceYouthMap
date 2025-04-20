"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import ConfidenceChart from "@/components/dashboard/ConfidenceChart";

export default function ConfidencePage() {
  return (
    <ChartArticleLayout title="Confidence Level by State">
      <p>
        Not all juvenile policy data is created equal. Some states publish
        clear, up-to-date frameworks online. Others rely on internal memos,
        informal guidance, or verbal traditions passed between officers.
        This chart visualizes SCYM&apos;s confidence level for each state&apos;s
        policy mappings — not based on assumptions, but on traceable documentation.
      </p>

      <div className="my-10">
        <ConfidenceChart />
      </div>

      <p className="mt-6">
        Confidence levels are determined by three interdependent signals:
      </p>
      <ul className="list-disc list-inside mt-2 ml-4">
        <li>📄 Public documentation (laws, PDFs, manuals)</li>
        <li>📅 Recency of information (last known update)</li>
        <li>📊 Clarity and completeness of the intake process</li>
      </ul>

      <p className="mt-6">
        A <strong>High</strong> confidence rating means we&apos;ve been able to confirm
        the state&apos;s process through official publications. A{" "}
        <strong>Medium</strong> rating indicates partial visibility — a chart in a PowerPoint,
        a brief reference in a report. <strong>Low</strong> confidence means most
        processes are undocumented or rely on secondhand information.
      </p>

      <p className="mt-4 italic text-sm text-slate-500">
        These are not judgments of quality — only of accessibility. A state can
        have strong practices behind the scenes and still score low on confidence
        due to lack of transparency. The inverse is also true.
      </p>

      <p className="mt-6">
        Why does this matter? Because youth don&apos;t just need good policy —
        they need visible, predictable systems. Without documentation, no one
        knows if they&apos;re following best practices — or just habits.
        Transparency fuels consistency. And consistency protects youth.
      </p>

      <p className="mt-6 font-semibold text-blue-700">
        At SCYM, we believe that what we don&apos;t know can still shape outcomes.
        Confidence helps us decide where to press in, where to verify, and where
        to shine a light next.
      </p>
    </ChartArticleLayout>
  );
}
