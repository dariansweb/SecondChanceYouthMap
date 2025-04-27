// src/components/voices-tool/FlowEngines/ProbationFlow.tsx

"use client";

import { useEffect, useState } from "react";
import ProbationIntakeForm from "@/components/voices-tool/Forms/ProbationIntakeForm";
import SupervisionPlan from "@/components/voices-tool/Forms/SupervisionPlan";
import ComplianceCheck from "@/components/voices-tool/Forms/ComplianceCheck";

type Node = {
  id: string;
  label: string;
  next?: string[];
};

export default function ProbationFlow() {
  const [flowData, setFlowData] = useState<Node[]>([]);
  const [currentNode, setCurrentNode] = useState<string>("start");

  useEffect(() => {
    const loadFlow = async () => {
      try {
        const res = await import("@/data/voices-tool/probation-flow.json");
        setFlowData(Object.values(res.default));
      } catch (error) {
        console.error("Error loading probation flow:", error);
      }
    };

    loadFlow();
  }, []);

  const current = flowData.find((n) => n.id === currentNode);

  const handleNext = (id: string) => {
    setCurrentNode(id);
  };

  const renderForm = () => {
    switch (current?.id) {
      case "probation-intake":
        return <ProbationIntakeForm />;
      case "supervision-plan":
        return <SupervisionPlan />;
      case "compliance-check":
        return <ComplianceCheck />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-6 border rounded p-6 bg-white shadow">
      <h3 className="text-xl font-semibold text-green-700 mb-2">
        Current Step:
      </h3>
      <p className="text-lg text-blue-700 mb-4">
        {current?.label || "Loading..."}
      </p>

      {renderForm()}

      <div className="mt-4 space-x-4">
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
