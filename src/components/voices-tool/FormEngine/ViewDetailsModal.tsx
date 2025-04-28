"use client";

import React from "react";

interface ViewDetailsModalProps {
  flowId: string;
  flowData: Record<string, unknown>;
  onClose: () => void;
}

const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({
  flowId,
  flowData,
  onClose,
}) => {
  const prettyFlowName = flowId
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl shadow-2xl relative">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
          {prettyFlowName} - Details
        </h2>

        <div className="overflow-y-auto max-h-[60vh] space-y-4">
          {Object.entries(flowData).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center border-b pb-2"
            >
              <span className="font-semibold text-gray-700">{key}</span>
              <span className="text-gray-500">{String(value)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
