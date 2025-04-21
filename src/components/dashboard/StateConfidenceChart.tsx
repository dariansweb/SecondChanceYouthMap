"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import matrixData from "@/data/matrix-data.json";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function aggregateConfidenceByState(data: { [key: string]: { confidence?: string } | string }[]) {
  const stateCounts: Record<string, { high: number; medium: number; low: number }> = {};

  data.forEach((entry) => {
    Object.entries(entry).forEach(([key, value]) => {
      if (key === "decisionPoint") return;

      if (typeof value === "object" && value !== null && "confidence" in value) {
        const state = key;
        const confidence = String(value.confidence).toLowerCase();

        if (!stateCounts[state]) {
          stateCounts[state] = { high: 0, medium: 0, low: 0 };
        }

        if (confidence === "high") stateCounts[state].high++;
        else if (confidence === "medium") stateCounts[state].medium++;
        else if (confidence === "low") stateCounts[state].low++;
      }
    });
  });

  return stateCounts;
}

export default function StateConfidenceChart() {
  const stateConfidence = aggregateConfidenceByState(matrixData);

  const labels = Object.keys(stateConfidence);

  const data = {
    labels,
    datasets: [
      {
        label: "High",
        data: labels.map((state) => stateConfidence[state].high),
        backgroundColor: "#22c55e", // green-500
      },
      {
        label: "Medium",
        data: labels.map((state) => stateConfidence[state].medium),
        backgroundColor: "#facc15", // yellow-400
      },
      {
        label: "Low",
        data: labels.map((state) => stateConfidence[state].low),
        backgroundColor: "#ef4444", // red-500
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y" as const,
    plugins: {
      legend: { position: "bottom" as const },
    },
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded shadow p-4">
      <h2 className="text-lg font-bold text-slate-700 mb-4">
        📊 Confidence Levels by State
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
}
