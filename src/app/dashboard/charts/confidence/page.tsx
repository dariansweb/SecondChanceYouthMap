"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import ConfidenceChart from "@/components/dashboard/ConfidenceChart";

export default function ConfidencePage() {
  return (
      <ChartArticleLayout title="Confidence Level by State">
        <p>
          Not all juvenile policy data is created equal. Some states publish
          clear, up-to-date frameworks online — while others rely on informal
          guidance, internal memos, or word-of-mouth practice. This chart
          visualizes how confident we are in each state&apos;s policy mappings within
          SCYM.
        </p>

        <div className="my-10">
          <ConfidenceChart />
        </div>

        {/* 🔧 FIXED: UL removed from inside <p> */}
        <p className="mt-6">
          Confidence levels are determined by three factors:
        </p>
        <ul className="list-disc list-inside mt-2 ml-4">
          <li>📄 Public documentation (laws, PDFs, manuals)</li>
          <li>📅 Recency of information (last known update)</li>
          <li>📊 Clarity and completeness of the intake process</li>
        </ul>

        <p className="mt-6">
          This chart helps teams prioritize where to focus research or
          validation. A <strong>High</strong> rating means the policy mapping is
          well-supported by public sources. A <strong>Low</strong> rating means
          more verification is needed before relying on that data.
        </p>

        <p className="mt-4 italic text-sm text-slate-500">
          These ratings are not judgments of policy quality — only of data
          confidence. Some states do great work behind the scenes, but lack
          published documentation.
        </p>
      </ChartArticleLayout>
  );
}
