"use client";

import { useState } from "react";
import { loadAllFlowData } from "@/components/voices-tool/FormEngine/utils/localStorageHelpers";
import ViewDetailsModal from "@/components/voices-tool/FormEngine/ViewDetailsModal";

export default function CompletedFlowsPage() {
  const allFlows = loadAllFlowData();
  const [selectedFlowId, setSelectedFlowId] = useState<string | null>(null);

  const flows = allFlows ? Object.entries(allFlows) : [];

  if (flows.length === 0) {
    return (
      <div className="p-8 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">
          Completed Flows
        </h1>
        <p className="text-gray-500">
          No flows completed yet. Complete a workflow to see it here!
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">
        📝 Completed Flows ({flows.length})
      </h1>

      <div className="space-y-6">
        {flows.map(([flowId, flowData]) => {
          const fieldCount = Object.keys(flowData ?? {}).length;
          const flowLabel = flowId
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <div
              key={flowId}
              className="bg-white p-6 rounded-lg shadow flex justify-between items-center hover:shadow-lg transition"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-700">
                  {flowLabel}
                </h2>
                <p className="text-gray-500">{fieldCount} fields captured</p>
              </div>

              <button
                onClick={() => setSelectedFlowId(flowId)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                View Details
              </button>
            </div>
          );
        })}
      </div>

      {selectedFlowId && (
        <ViewDetailsModal
          flowId={selectedFlowId}
          flowData={
            (allFlows?.[selectedFlowId] ?? {}) as Record<string, unknown>
          }
          onClose={() => setSelectedFlowId(null)}
        />
      )}
    </div>
  );
}
