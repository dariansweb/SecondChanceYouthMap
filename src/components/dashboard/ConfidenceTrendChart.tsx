"use client";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Q1 2023", "Q2 2023", "Q3 2023", "Q4 2023", "Q1 2024", "Q2 2024"],
  datasets: [
    {
      label: "High Confidence",
      data: [2, 3, 4, 5, 6, 6],
      borderColor: "#22c55e",
      backgroundColor: "#22c55e",
      tension: 0.3,
    },
    {
      label: "Medium Confidence",
      data: [3, 2, 1, 1, 1, 2],
      borderColor: "#eab308",
      backgroundColor: "#eab308",
      tension: 0.3,
    },
    {
      label: "Low Confidence",
      data: [2, 1, 1, 0, 0, 0],
      borderColor: "#ef4444",
      backgroundColor: "#ef4444",
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "📈 Confidence Level Trends Over Time",
      color: "#1e3a8a",
      font: { size: 18 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 1,
      },
    },
  },
};

export default function ConfidenceTrendChart() {
  return (
    <div className="bg-white rounded shadow p-4">
      <motion.div>
        <Line data={data} options={options} />
      </motion.div>
    </div>
  );
}
