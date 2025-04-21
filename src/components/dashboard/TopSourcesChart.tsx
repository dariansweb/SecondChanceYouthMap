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
import { topSourcesData } from "@/data/topSourcesData";
import { useState } from "react";
import Modal from "@/components/modals/TopSourcesModal"; // You’ll create this next

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TopSourcesChart = () => {
  const states = Object.keys(topSourcesData) as Array<
    keyof typeof topSourcesData
  >;
  const sourceCounts = states.map((state) => topSourcesData[state].length);
  const [selectedState, setSelectedState] = useState<
    keyof typeof topSourcesData | null
  >(null);
  const [showModal, setShowModal] = useState(false);

  const chartData = {
    labels: states,
    datasets: [
      {
        label: "Cited Sources",
        data: sourceCounts,
        backgroundColor: "#3b82f6",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          precision: 0,
        },
      },
    },
  };

  const onBarClick = (evt: React.MouseEvent<HTMLCanvasElement>) => {
    const chart = ChartJS.getChart(evt.currentTarget);
    if (!chart) return;

    const elements = chart.getElementsAtEventForMode(
      evt.nativeEvent,
      "nearest",
      { intersect: true },
      false
    );

    if (elements.length === 0) return;

    const index = elements[0].index;
    const clickedState = states[index];
    setSelectedState(clickedState);
    setShowModal(true);
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded shadow p-4">
      <h3 className="text-lg font-semibold text-blue-700 mb-3">
        📖 Top Cited Sources by State
      </h3>
      <Bar data={chartData} options={options} onClick={onBarClick} />
      {showModal && selectedState && (
        <Modal
          state={selectedState}
          sources={topSourcesData[selectedState]}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TopSourcesChart;
