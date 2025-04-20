"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Arkansas",
    "Texas",
    "Missouri",
    "Louisiana",
    "Oklahoma",
    "Mississippi",
    "Tennessee",
  ],
  datasets: [
    {
      label: "High Confidence",
      data: [1, 1, 1, 0, 1, 0, 0],
      backgroundColor: "#22c55e",
    },
    {
      label: "Medium Confidence",
      data: [0, 1, 0, 1, 0, 1, 1],
      backgroundColor: "#eab308",
    },
    {
      label: "Low Confidence",
      data: [0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#ef4444",
    },
  ],
};

const options = {
  responsive: true,
  indexAxis: "y" as const,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "🧪 Confidence Levels by State",
      color: "#1e3a8a",
      font: {
        size: 18,
      },
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

export default function ConfidenceChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <motion.div>
        <Bar data={data} options={options} />
      </motion.div>
    </div>
  );
}
