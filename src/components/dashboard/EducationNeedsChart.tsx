"use client";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  TooltipItem,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(...[BarElement, CategoryScale, LinearScale, Legend, Tooltip]);

const educationNeedsData = [
  { state: "Arkansas", truancy: 12, iep: 18 },
  { state: "Texas", truancy: 20, iep: 25 },
  { state: "Missouri", truancy: 10, iep: 17 },
  { state: "Louisiana", truancy: 14, iep: 11 },
  { state: "Oklahoma", truancy: 8, iep: 14 },
  { state: "Mississippi", truancy: 16, iep: 9 },
  { state: "Tennessee", truancy: 11, iep: 13 },
];

const data = {
  labels: educationNeedsData.map((d) => d.state),
  datasets: [
    {
      label: "Truancy Concerns",
      data: educationNeedsData.map((d) => d.truancy),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "IEP / 504 Plan",
      data: educationNeedsData.map((d) => d.iep),
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    tooltip: {
      callbacks: {
        label: (ctx: TooltipItem<'bar'>) => `${ctx.dataset.label}: ${ctx.raw}`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5,
      },
    },
  },
};

export default function EducationNeedsChart() {
  return (
    <div className="bg-white p-6 rounded shadow border border-slate-200">
      <h2 className="text-xl font-semibold text-blue-700 mb-4 flex items-center gap-2">
        🎓 Truancy & IEP Plans by State
      </h2>
      <motion.div>
        <Bar data={data} options={options} />
      </motion.div>
    </div>
  );
}
