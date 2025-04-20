"use client";

import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import TopSourcesChart from "@/components/dashboard/TopSourcesChart";
import Link from "next/link";

export default function TopSourcesPage() {
  return (
    <ChartArticleLayout title="Most Cited Sources Across States">
      <p>
        This chart highlights which states contributed the richest set of
        verified sources — from policy PDFs and risk assessment manuals, to
        education audits and mental health screening protocols. Every citation
        is a breadcrumb in the story of reform.
      </p>

      <p className="mt-4">
        SCYM doesn&apos;t treat references as footnotes — we see them as the
        backbone of responsible design. States with more source citations
        typically allowed deeper exploration, clearer alignment to intake
        workflows, and a broader lens on how youth justice is structured.
      </p>

      <div className="my-10">
        <TopSourcesChart />
      </div>

      <p className="mt-4 text-sm italic text-slate-500">
        💡 <strong>Coming soon:</strong> Click any bar in the chart to reveal
        that state&apos;s full source archive, including links to documents,
        publishing dates, and SCYM research notes.
      </p>

      <p className="mt-6 text-slate-700">
        Want to view the <strong>full set of links</strong> by state, agency, or
        document type? Visit our{" "}
        <Link
          href="/docs/references"
          className="text-blue-700 underline hover:text-blue-900 font-medium"
        >
          📚 Reference Library
        </Link>{" "}
        to explore all the materials that helped build the SCYM model.
      </p>

      <p className="mt-4 italic text-slate-500 text-sm">
        Transparency is a design feature. States with more sources don&apos;t
        just show more — they invite trust, civic participation, and honest
        analysis. That&apos;s a trend worth watching.
      </p>

      <p className="mt-6 font-semibold text-blue-700">
        At SCYM, we believe that reform starts with research — but it ends in
        shared understanding. These sources are the scaffolding of everything
        we&apos;ve built. And now, they&apos;re yours too.
      </p>
    </ChartArticleLayout>
  );
}
