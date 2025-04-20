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
      data: [40, 25, 15, 10, 5], // Placeholder counts, customize as needed
      backgroundColor: [
        "#34d399", // emerald for diversion
        "#3b82f6", // blue for probation
        "#f59e0b", // amber for custody
        "#ef4444", // red for detention
        "#9ca3af", // gray for undecided
      ],
      borderColor: "#fff",
      borderWidth: 2,
      maintainAspectRatio: false,
    },
  ],
};

export default function RecommendationPieChart() {
  return (
    <div className="bg-white p-6 rounded shadow-md border border-slate-200">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">
        🥧 Recommendation Outcomes
      </h3>
      <div className="max-w-[300px] mx-auto">
        <motion.div>
          <Pie data={recommendationData} />
        </motion.div>
      </div>
    </div>
  );
}
