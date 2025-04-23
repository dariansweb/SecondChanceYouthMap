// src/components/voices-tool/FlowEngines/IntakeFlow.tsx

"use client";

import { useEffect, useState } from "react";

type Node = {
  id: string;
  label: string;
  next?: string[];
  conditions?: string[];
};

type Props = {
  jurisdiction: string;
};

export default function IntakeFlow({ jurisdiction }: Props) {
  const [flowData, setFlowData] = useState<Node[]>([]);
  const [currentNode, setCurrentNode] = useState<string>("start");

  useEffect(() => {
    const fetchFlow = async () => {
      try {
        const response = await import(
          `@/data/voices-tool/${jurisdiction}-intake-flow.json`
        );
        setFlowData(response.default);
      } catch (error) {
        console.error("Error loading flow JSON:", error);
      }
    };

    fetchFlow();
  }, [jurisdiction]);

  const current = flowData.find((n) => n.id === currentNode);

  const handleNext = (nextId: string) => {
    setCurrentNode(nextId);
  };

  return (
    <div className="mt-6 border rounded p-6 bg-white shadow">
      <h3 className="text-xl font-semibold text-green-700 mb-2">Current Step:</h3>
      <p className="text-lg text-blue-700 mb-4">
        {current?.label || "Loading..."}
      </p>

      <div className="space-x-4">
        {current?.next?.map((nxt) => (
          <button
            key={nxt}
            onClick={() => handleNext(nxt)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to: {nxt}
          </button>
        ))}
      </div>
    </div>
  );
}
