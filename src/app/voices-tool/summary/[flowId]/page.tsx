// File: src/app/voices-tool/summary/[flowId]/page.tsx

"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { FlowStateContext } from "@/context/voices-tool/FlowStateContext";

export default function FlowSummaryPage() {
  const { flowId } = useParams();
  const { completedFlowData } = useContext(FlowStateContext);

  const data = completedFlowData[flowId as string];

  return (
    <main className="min-h-screen py-10 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {flowId} Flow Summary
        </h2>
        {data ? (
          <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-500">No data available yet for this flow.</p>
        )}
      </div>
    </main>
  );
}
