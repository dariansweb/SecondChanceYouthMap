import ChartArticleLayout from "@/components/layout/ChartArticleLayout";
import DiversionChart from "@/components/dashboard/DiversionChart";

export default function DiversionPage() {
  return (
      <ChartArticleLayout title="Diversion Outcomes by State">
        <p>
          This chart visualizes how frequently youth are recommended for
          diversion programs, versus probation or custody, based on cross-state
          decision matrices.
        </p>
        <DiversionChart />
        <p>
          Diversion-first philosophies are key to modern juvenile justice
          reform, especially in states like Missouri and Louisiana. High
          diversion rates often signal both community trust and program
          availability.
        </p>
      </ChartArticleLayout>
  );
}
