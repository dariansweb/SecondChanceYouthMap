// src/components/voices-tool/FlowEngines/ProsecutorFlow.tsx

"use client";

import { useEffect, useState } from "react";
import ChargeReviewForm from "@/components/voices-tool/Forms/ChargeReviewForm";
import DiversionEvaluationForm from "@/components/voices-tool/Forms/DiversionEvaluationForm";
import PetitionDraftForm from "@/components/voices-tool/Forms/PetitionDraftForm";

type Node = {
  id: string;
  label: string;
  next?: string[];
  conditions?: string[];
};

export default function ProsecutorFlow() {
  const [flowData, setFlowData] = useState<Node[]>([]);
  const [currentNode, setCurrentNode] = useState<string>("start");

  useEffect(() => {
    const loadFlow = async () => {
      const res = await import("@/data/voices-tool/prosecutor-flow.json");
      setFlowData(res.default);
    };
    loadFlow();
  }, []);

  const current = flowData.find((n) => n.id === currentNode);

  const handleNext = (id: string) => {
    setCurrentNode(id);
  };

  const renderForm = () => {
    switch (current?.id) {
      case "charge-review":
        return <ChargeReviewForm />;
      case "diversion-eval":
        return <DiversionEvaluationForm />;
      case "petition-draft":
        return <PetitionDraftForm />;
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
