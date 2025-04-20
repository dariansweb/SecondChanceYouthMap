import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import RecommendationPieChart from "@/components/dashboard/RecommendationPieChart";

export default function RecommendationPage() {
  return (
      <ChartArticleLayout title="Intake Recommendations Breakdown">
        <p>
          What happens after intake? This pie chart shows the breakdown of
          outcomes: Diversion, Probation, Custody, or Evaluation.
        </p>
        <RecommendationPieChart />
        <p>
          The balance of these outcomes reflects a jurisdiction’s orientation —
          punitive or restorative. Diversion-heavy outcomes align with national
          best practices for youth justice.
        </p>
      </ChartArticleLayout>
  );
}
