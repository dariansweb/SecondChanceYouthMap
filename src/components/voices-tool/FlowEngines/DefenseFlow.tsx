// src/components/voices-tool/FlowEngines/DefenseFlow.tsx

"use client";

import { useEffect, useState } from "react";
import DefenseCaseReviewForm from "@/components/voices-tool/Forms/DefenseCaseReviewForm";
import PleaNegotiationForm from "@/components/voices-tool/Forms/PleaNegotiationForm";
import AlternativeInterventionForm from "@/components/voices-tool/Forms/AlternativeInterventionForm";

type Node = {
  id: string;
  label: string;
  next?: string[];
  conditions?: string[];
};

export default function DefenseFlow() {
  const [flowData, setFlowData] = useState<Node[]>([]);
  const [currentNode, setCurrentNode] = useState<string>("start");

  useEffect(() => {
    const loadFlow = async () => {
      const res = await import("@/data/voices-tool/defense-flow.json");
      const nodes: Node[] = Object.values(res.default);
      setFlowData(nodes);
    };
    loadFlow();
  }, []);

  const current = flowData.find((n) => n.id === currentNode);

  const handleNext = (id: string) => {
    setCurrentNode(id);
  };

  const renderForm = () => {
    switch (current?.id) {
      case "case-review":
        return <DefenseCaseReviewForm />;
      case "plea-negotiation":
        return <PleaNegotiationForm />;
      case "alt-intervention":
        return <AlternativeInterventionForm />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-6 border rounded p-6 bg-white shadow">
      <h3 className="text-xl font-semibold text-blue-700 mb-2">
        Current Step:
      </h3>
      <p className="text-lg text-blue-700 mb-2">
        {current?.label || "Loading..."}
      </p>

      {current?.conditions && current.conditions.length > 0 && (
        <>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            Conditions:
          </h4>
          <ul className="mb-4 list-disc list-inside text-sm text-gray-600">
            {current.conditions.map((cond, idx) => (
              <li key={idx}>{cond}</li>
            ))}
          </ul>
        </>
      )}

      {renderForm()}

      <div className="mt-6 space-x-4">
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
