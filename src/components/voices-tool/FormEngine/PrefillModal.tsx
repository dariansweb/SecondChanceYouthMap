// src/components/voices-tool/FormEngine/PrefillModal.tsx

"use client";

import React, { useState } from "react";

interface PrefillModalProps {
  availableFlows: { flowId: string; label: string; summary: string }[];
  onSelect: (flowId: string) => void;
  onClose: () => void;
}

const PrefillModal: React.FC<PrefillModalProps> = ({
  availableFlows,
  onSelect,
  onClose,
}) => {
  const [selectedFlowId, setSelectedFlowId] = useState<string | null>(null);

  const handleConfirm = () => {
    if (selectedFlowId) {
      onSelect(selectedFlowId);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-bold mb-4 text-blue-800">
          Prefill Juvenile Intake
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Choose a previous flow to prefill this Juvenile Intake form.
        </p>

        <div className="space-y-2 max-h-64 overflow-y-auto mb-6">
          {availableFlows.map((flow) => (
            <button
              key={flow.flowId}
              onClick={() => setSelectedFlowId(flow.flowId)}
              className={`block w-full text-left px-4 py-2 rounded ${
                selectedFlowId === flow.flowId
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              <div className="font-semibold">{flow.label}</div>
              <div className="text-xs text-gray-500">{flow.summary}</div>
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedFlowId}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded disabled:opacity-50"
          >
            Prefill
          </button>
        </div>

        {/* Close X button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default PrefillModal;
