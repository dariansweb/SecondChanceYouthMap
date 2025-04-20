"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import TopSourcesChart from "@/components/dashboard/TopSourcesChart";
import Link from "next/link";

export default function TopSourcesPage() {
  return (
      <ChartArticleLayout title="Most Cited Sources Across States">
        <p>
          This chart showcases which states had the richest set of cited sources —
          ranging from official policy PDFs, to intake toolkits, to public
          education audits and mental health screening protocols.
        </p>

        <p className="mt-4">
          Rather than treat references as a footnote, we view them as the backbone
          of informed design. More sources often mean deeper exploration and a
          wider lens on youth justice practices.
        </p>

        <div className="my-10">
          <TopSourcesChart />
        </div>

        <p className="mt-6 text-slate-700">
          Want to view the <strong>full set of links</strong> by state, agency, or document
          type? Visit our{" "}
          <Link
            href="/docs/references"
            className="text-blue-700 underline hover:text-blue-900 font-medium"
          >
            📚 Reference Library
          </Link>{" "}
          to explore all the real-world materials that helped shape SCYM.
        </p>

        <p className="mt-4 italic text-slate-500 text-sm">
          Pro-tip: States with more sources may also reflect transparency or
          digital accessibility of their materials — a trend worth noting in
          itself.
        </p>
      </ChartArticleLayout>
  );
}
