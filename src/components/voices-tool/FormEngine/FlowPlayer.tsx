// File: src/components/voices-tool/FormEngine/FlowPlayer.tsx

"use client";

import React, { useState } from "react";
import { useFlowState } from "@/context/voices-tool/FlowStateContext";
import { useFormState } from "@/context/voices-tool/FormStateContext";
import { useRouter } from "next/navigation";
import FormRenderer from "./FormRenderer";
import FormSummary from "./FormSummary";

interface FieldConfig {
  type: string;
  name: string;
  label: string;
  options?: { label: string; value: string }[];
  rows?: number;
  showIf?: string;
}

interface StepNode {
  id: string;
  label: string;
  fields: FieldConfig[];
  next?: string[];
}

interface FlowMap {
  [key: string]: StepNode;
}

interface FlowPlayerProps {
  flow: FlowMap;
  startNodeId: string;
}

const FlowPlayer: React.FC<FlowPlayerProps> = ({ flow, startNodeId }) => {
  const [currentNodeId, setCurrentNodeId] = useState(startNodeId);
  const [history, setHistory] = useState<string[]>([]);
  const { formData } = useFormState();
  const { markFlowCompleted } = useFlowState();

  const currentNode = flow[currentNodeId];
  const router = useRouter();

  const handleBack = () => {
    if (history.length === 0) return;
    const last = history[history.length - 1];
    setHistory((prev) => prev.slice(0, -1));
    setCurrentNodeId(last);
  };

  const handleNext = (nextId: string) => {
    if (nextId === "dashboard") {
      router.push("/voices-tool");
      return;
    }

    if (flow[nextId]) {
      setHistory((prev) => [...prev, currentNodeId]);
      setCurrentNodeId(nextId);
    }
  };

  return (
    <div className="space-y-6">
      <FormRenderer node={currentNode} />

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-4">
        <button
          onClick={handleBack}
          disabled={history.length === 0}
          className={`px-4 py-2 rounded shadow transition-all ${
            history.length === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-700"
          }`}
        >
          Back
        </button>

        {(currentNode.next ?? []).length > 1 ? (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            {(currentNode.next ?? []).map((nextId) => (
              <button
                key={nextId}
                onClick={() => handleNext(nextId)}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all w-full sm:w-auto"
              >
                {flow[nextId]?.label
                  ? `Continue to: ${flow[nextId].label}`
                  : `Next: ${nextId}`}
              </button>
            ))}
          </div>
        ) : currentNode.next?.length === 1 ? (
          (() => {
            const nextId = currentNode.next?.[0] ?? "";
            return (
              <button
                onClick={() => handleNext(nextId)}
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition-all"
              >
                {nextId === "dashboard"
                  ? "🎉 Finish & Return to Registry"
                  : "Next"}
              </button>
            );
          })()
        ) : (
          <button
            onClick={() => {
              markFlowCompleted(startNodeId, formData);
              router.push(`/voices-tool/summary/${startNodeId}`);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700"
          >
            ✅ Complete
          </button>
        )}
      </div>

      {/* Render summary at end of flow */}
      {!currentNode.next?.length && <FormSummary flow={flow} />}
    </div>
  );
};

export default FlowPlayer;
