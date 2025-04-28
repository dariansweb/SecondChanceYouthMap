"use client";

import { useEffect, useState } from "react";
import FormRenderer from "@/components/voices-tool/FormEngine/FormRenderer";
import juvenileIntakeFlow from "@/data/voices-tool/juvenile-intake-flow.json";
import PrefillModal from "@/components/voices-tool/FormEngine/PrefillModal";
import { mapFlowDataToJuvenile } from "@/components/voices-tool/FormEngine/utils/mapFlowDataToJuvenile";
import { useJuvenileIntakeRecord } from "@/context/voices-tool/JuvenileIntakeContext";
import { useFlowState } from "@/context/voices-tool/FlowStateContext";
import { loadFlowData } from "@/components/voices-tool/FormEngine/utils/FlowMemory"; // 👈 Add this at top

// Define or import the FieldConfig type
type FieldConfig = {
  name: string;
  type: string;
  label: string;
  source?: string;
  options?: { label: string; value: string }[];
  rows?: number;
  [key: string]: string | number | boolean | object | null | undefined;
};
type NodeConfig = {
  step: string;
  label: string;
  fields: FieldConfig[];
  [key: string]: string | number | boolean | object | null | undefined;
};

export default function JuvenileIntakePage() {
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);
  const [prefillModalOpen, setPrefillModalOpen] = useState(false);

  const { juvenileRecord, updateJuvenileRecord } = useJuvenileIntakeRecord();
  const { completedFlows } = useFlowState();

  const currentStep = juvenileIntakeFlow[selectedStepIndex] as NodeConfig;

  useEffect(() => {
    try {
      const storedFlows = localStorage.getItem("voicesToolFlowData");

      if (!storedFlows) return;

      const parsed = JSON.parse(storedFlows);
      const mergedUpdates: Record<string, unknown> = { ...juvenileRecord };

      Object.entries(parsed).forEach(([flowId, flowData]) => {
        const mappedUpdates = mapFlowDataToJuvenile(
          flowData as Record<
            string,
            string | number | boolean | null | undefined
          >,
          flowId
        );

        for (const [key, value] of Object.entries(mappedUpdates)) {
          if (
            mergedUpdates[key] === undefined ||
            mergedUpdates[key] === "" ||
            mergedUpdates[key] === null
          ) {
            mergedUpdates[key] = value;
          }
        }
      });

      console.log(
        "[JuvenileIntake] Applying smart merged flow updates:",
        mergedUpdates
      );
      updateJuvenileRecord(mergedUpdates);
    } catch (err) {
      console.error("[JuvenileIntake] Failed to load flow data:", err);
    }
  }, [juvenileRecord, updateJuvenileRecord]);

  const availableFlows = Object.keys(completedFlows).map((flowId) => ({
    flowId,
    label: flowId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()), // Prettify
    summary: "Completed Flow", // (Optional: add real summaries later)
  }));

  const handlePrefillSelect = (flowId: string) => {
    console.log(`Attempting prefill from completed flow: ${flowId}`);

    const flowData = loadFlowData(flowId);

    if (!flowData) {
      alert("No saved data found for this flow yet. Complete the flow first!");
      return;
    }

    const mappedUpdates = mapFlowDataToJuvenile(
      flowData as Record<string, string | number | boolean | null | undefined>,
      flowId
    );

    console.log("Mapped Updates:", mappedUpdates);

    updateJuvenileRecord(mappedUpdates);

    setPrefillModalOpen(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setPrefillModalOpen(true)}
          className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded text-sm"
        >
          🔄 Prefill from Flow
        </button>
      </div>

      <h1 className="text-3xl text-blue-700 font-bold mb-8">
        Juvenile Intake Form
      </h1>

      {/* Stepper Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {juvenileIntakeFlow.map((step, index) => (
          <button
            key={index}
            onClick={() => setSelectedStepIndex(index)}
            className={`px-4 py-2 rounded transition ${
              index === selectedStepIndex
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {step.step}
          </button>
        ))}
      </div>

      {/* Render the form step */}
      {currentStep && (
        <div className="bg-slate-100 text-blue-500 p-6 rounded shadow">
          <FormRenderer key={selectedStepIndex} node={currentStep} />
        </div>
      )}

      {/* Debug Panel (Dev Only) */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-2">Juvenile Record Snapshot</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
          {JSON.stringify(juvenileRecord, null, 2)}
        </pre>
      </div>
      {prefillModalOpen && (
        <PrefillModal
          availableFlows={availableFlows}
          onSelect={handlePrefillSelect}
          onClose={() => setPrefillModalOpen(false)}
        />
      )}
    </div>
  );
}
