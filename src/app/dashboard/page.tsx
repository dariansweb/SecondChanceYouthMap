"use client";

import { useState } from "react";
import Link from "next/link";
import DiversionChart from "@/components/dashboard/DiversionChart";
import RiskToolUsageChart from "@/components/dashboard/RiskToolUsageChart";
import EducationNeedsChart from "@/components/dashboard/EducationNeedsChart";
import RecommendationPieChart from "@/components/dashboard/RecommendationPieChart";
import ConfidenceChart from "@/components/dashboard/ConfidenceChart";
import ConfidenceTrendChart from "@/components/dashboard/ConfidenceTrendChart";
import RiskToolHeatmap from "@/components/dashboard/RiskToolHeatmap";
import TopSourcesChart from "@/components/dashboard/TopSourcesChart";


export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="bg-slate-50 min-h-screen p-6 space-y-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-900">
          📊 SCYM Intake Insights Dashboard
        </h1>
        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
          Explore live trends from SCYM&apos;s matrix and intake tools. This
          dashboard turns data into decisions.
        </p>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="text-sm font-semibold text-blue-700 border border-blue-200 px-4 py-2 rounded-md bg-blue-50 hover:bg-blue-100 hover:text-blue-900 hover:shadow-sm transition duration-200 ease-in-out"
          >
            🔍 Learn about this data
          </button>
        </div>
      </header>

      {/* Chart Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <DiversionChart />
        <RiskToolUsageChart />
        <EducationNeedsChart />
        <RecommendationPieChart />
        <ConfidenceChart />
        <ConfidenceTrendChart />
        <RiskToolHeatmap />
        <TopSourcesChart />
      </div>
      {/* 🔮 Modal Overlay */}
      {showModal && (
        <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative max-h-[80vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-red-600 font-bold text-lg"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-blue-800 mb-4">
              🔍 Understanding the Data Behind SCYM
            </h2>
            <p className="mb-4 text-slate-700 text-sm leading-relaxed">
              These charts aren’t just decoration — they are a visual summary of
              hours of research, cross-state comparisons, and a deep dive into
              real juvenile justice practices. Every data point reflects
              policies and procedures drawn directly from seven Southern states,
              interpreted through legal documents, intake protocols, agency
              handbooks, and state-published guidance. While this isn’t scraped
              from a live backend, the structure is real, the patterns are
              intentional, and the insights are built to reflect the operational
              truth behind the system.
            </p>

            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
              <li>
                <strong>Matrix Confidence Levels</strong> come from public
                records and tool usage guides
              </li>
              <li>
                <strong>Risk Tools</strong> reflect officially documented
                practices, e.g., SAVRY in Arkansas, YLS/CMI in Louisiana
              </li>
              <li>
                <strong>Glossary</strong> terms match language in state
                diversion documents and judicial training materials
              </li>
            </ul>

            <p className="mt-4 text-sm italic text-slate-500">
              <Link href="/docs/references" className="text-blue-600 underline">
                full references section
              </Link>{" "}
              to explore our source documents and policies.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
