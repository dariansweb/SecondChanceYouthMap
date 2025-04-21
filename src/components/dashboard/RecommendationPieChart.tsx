"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

const recommendationData = {
  labels: ["Diversion", "Probation", "State Custody", "Detention", "Undecided"],
  datasets: [
    {
      label: "Recommendation Outcomes",
      data: [40, 25, 15, 10, 5],
      backgroundColor: [
        "#34d399", // emerald
        "#3b82f6", // blue
        "#f59e0b", // amber
        "#ef4444", // red
        "#9ca3af", // gray
      ],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        color: "#374151", // slate-700
        padding: 16,
        font: {
          size: 12,
        },
      },
    },
  },
};

export default function RecommendationPieChart() {
  return (
    <div className="bg-white p-6 rounded shadow-md border border-slate-200">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">
        🥧 Recommendation Outcomes
      </h3>
      <div className="w-full h-[300px]">
        <motion.div className="relative h-full">
          <Pie data={recommendationData} options={chartOptions} />
        </motion.div>
      </div>
    </div>
  );
}
