"use client";

import { useEffect, useState } from "react";
import { useFlowState } from "@/context/voices-tool/FlowStateContext";

export default function CompletedFlowsPage() {
  const { completedFlows }: { completedFlows: string[] } = useFlowState();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="p-8 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8 text-blue-700">
          📝 Completed Flows
        </h1>
        <p className="text-gray-500">Loading your completed flows...</p>
      </div>
    );
  }
  const flowIds = completedFlows || [];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-blue-700">Completed Flows</h1>

      {flowIds.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center text-gray-500">
          No completed flows yet.
        </div>
      ) : (
        <div className="space-y-6">
          {flowIds.map((flowId) => (
            <div
              key={flowId}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-2"
            >
              <h2 className="text-2xl font-semibold text-blue-700">{flowId}</h2>
              <p className="text-sm text-gray-500">{0} fields captured</p>

              {/* Expandable details could go here later */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
