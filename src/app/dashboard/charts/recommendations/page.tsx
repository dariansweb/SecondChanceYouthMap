import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import RecommendationPieChart from "@/components/dashboard/RecommendationPieChart";

export default function RecommendationPage() {
  return (
    <ChartArticleLayout title="Intake Recommendations Breakdown">
      <p>
        What happens after intake isn&apos;t just a bureaucratic checkbox —
        it&apos;s the system revealing its intent. This pie chart shows the
        distribution of initial recommendations: <strong>Diversion</strong>,{" "}
        <strong>Probation</strong>, <strong>Custody</strong>, or{" "}
        <strong>Evaluation</strong>. These outcomes don&apos;t just reflect
        youth behavior — they reflect institutional culture.
      </p>

      <div className="my-10">
        <RecommendationPieChart />
      </div>

      <p className="mt-4">
        A diversion-heavy outcome typically signals a restorative and
        community-based philosophy. These jurisdictions prioritize second
        chances, family-centered alternatives, and youth rehabilitation outside
        of confinement. National research affirms this: systems that invest in
        diversion — especially early — report reduced recidivism, improved
        mental health outcomes, and lower system costs.
      </p>

      <p className="mt-4">
        On the other hand, a chart dominated by custody or probation signals a
        system still anchored in control and surveillance. These jurisdictions
        may lack access to robust community programming — or simply lack the
        trust to use it.
      </p>

      <p className="mt-4 text-sm italic text-slate-500">
        Every wedge in this chart is a mirror. It doesn&apos;t just reflect a
        youth&apos;s options — it reflects a jurisdiction&apos;s values.
      </p>

      <p className="mt-6 font-semibold text-blue-700">
        At SCYM, we believe intake should be a decision point that centers a
        youth&apos;s future — not their past. The recommendation isn&apos;t the
        end of the story, it&apos;s the start of a new one. How we begin that
        story matters.
      </p>
    </ChartArticleLayout>
  );
}
