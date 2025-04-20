"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const riskToolData = [
  { name: "SAVRY", value: 45 },
  { name: "RAI", value: 30 },
  { name: "YLS/CMI", value: 10 },
  { name: "YASI", value: 7 },
  { name: "Other", value: 8 },
];

const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#6366f1", "#e11d48"];

export default function RiskToolUsageChart() {
  return (
    <div className="bg-white p-4 rounded shadow border border-slate-200">
      <h3 className="text-blue-800 font-semibold mb-3 text-lg">
        🧠 Risk Assessment Tool Usage
      </h3>
      <motion.div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={riskToolData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {riskToolData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
