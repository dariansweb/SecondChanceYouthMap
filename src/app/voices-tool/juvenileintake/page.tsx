"use client";

import { useState } from "react";
import FormRenderer from "@/components/voices-tool/FormEngine/FormRenderer";
import juvenileIntakeFlow from "@/data/voices-tool/juvenile-intake-flow.json";
import PrefillModal from "@/components/voices-tool/FormEngine/PrefillModal";
import { mapFlowDataToJuvenile } from "@/components/voices-tool/FormEngine/utils/mapFlowDataToJuvenile";
import { useJuvenileIntakeRecord } from "@/context/voices-tool/JuvenileIntakeContext";

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
  const currentStep = juvenileIntakeFlow[selectedStepIndex] as NodeConfig;
  const [prefillModalOpen, setPrefillModalOpen] = useState(false);
  const { juvenileRecord, updateJuvenileRecord } = useJuvenileIntakeRecord();

  const availableFlows = [
    {
      flowId: "intake-officer-flow",
      label: "Intake Officer",
      summary: "Initial intake interview and details.",
    },
    {
      flowId: "probation-officer-flow",
      label: "Probation Officer",
      summary: "Probation case notes and updates.",
    },
    {
      flowId: "prosecutor-flow",
      label: "Prosecutor",
      summary: "Charges, restitution, and court status.",
    },
    // ⚡ add more mock flows here if needed
  ];

  const handlePrefillSelect = (flowId: string) => {
    console.log(`Prefilling from flow: ${flowId}`);

    // TODO: Replace this with real flow data lookup
    const mockFlowData = {
      firstName: "Jane",
      lastName: "Doe",
      dob: "2007-09-10",
      county: "Pulaski",
      offense: "Theft",
      referralType: "arrest",
      intakeDate: "2024-05-01",
      guardianName: "Sarah Doe",
      school: "Central High School",
      riskScore: 45,
      riskToolUsed: "SAVRY",
      recommendation: "diversion",
      recommendationReason: "Low risk, family support present.",
    };

    const mappedUpdates = mapFlowDataToJuvenile(mockFlowData, flowId);

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

      <h1 className="text-3xl font-bold mb-8">Juvenile Intake Form</h1>

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
        <div className="bg-white p-6 rounded shadow">
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
