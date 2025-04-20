// components/dashboard/DiversionChart.tsx
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { diversionStats } from "@/data/dashboardMetrics";

export default function DiversionChart() {
  return (
    <div className="bg-white p-4 rounded shadow border border-slate-200">
      <h3 className="text-blue-800 font-semibold mb-3 text-lg">
        ⚖️ Diversion vs Custody by State
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={diversionStats}>
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="diverted" fill="#38bdf8" name="Diversion" />
          <Bar dataKey="custody" fill="#f87171" name="Custody" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
