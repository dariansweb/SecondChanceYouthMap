"use client";
import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import EducationNeedsChart from "@/components/dashboard/EducationNeedsChart";

export default function EducationPage() {
  return (
      <ChartArticleLayout title="Truancy & IEP Patterns">
        <p>
          Educational instability is one of the clearest indicators of youth
          justice involvement. Many youth in intake report a mix of{" "}
          <strong>chronic truancy</strong> and learning support needs like{" "}
          <strong>IEPs or 504 Plans</strong>.
        </p>

        <p className="mt-4">
          This chart shows the percentage of youth flagged for IEPs and truancy
          concerns during intake assessments. States like Arkansas and Missouri
          use this data to accelerate education services while others may not
          track it at all.
        </p>

        <div className="my-8">
          <EducationNeedsChart />
        </div>

        <h2 className="mt-6">📌 Why It Matters</h2>
        <p>
          Missed days often mask unmet needs. Ignoring truancy means missing the
          signal. This is why SCYM embeds these fields directly in the intake
          form, not as a post-custody audit.
        </p>
      </ChartArticleLayout>
  );
}
