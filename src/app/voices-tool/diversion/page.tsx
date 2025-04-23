// src/app/voices-tool/diversion/page.tsx

"use client";

import DiversionFlow from "@/components/voices-tool/FlowEngines/DiversionFlow";

export default function DiversionPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Diversion Specialist Workflow
      </h2>
      <DiversionFlow />
    </div>
  );
}
