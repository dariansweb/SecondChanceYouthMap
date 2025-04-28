"use client";

import { useFlowState } from "@/context/voices-tool/FlowStateContext";

export default function SummaryPage() {
  const { completedFlows } = useFlowState();

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">
        📝 Completed Flows Summary
      </h1>

      {Object.keys(completedFlows).length === 0 ? (
        <p className="text-slate-600">
          No flows completed yet. Go conquer some first! 🚀
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(completedFlows).map(([flowId, flowData]) => (
            <div key={flowId} className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-2 capitalize">
                {flowId.replace(/-/g, " ")}
              </h2>
              <pre className="text-xs bg-gray-100 p-4 rounded overflow-x-auto">
                {JSON.stringify(flowData, null, 2)}
              </pre>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
