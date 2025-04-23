// src/app/voices-tool/prosecutor/page.tsx

"use client";

import ProsecutorFlow from "@/components/voices-tool/FlowEngines/ProsecutorFlow";

export default function ProsecutorPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Prosecutor Workflow
      </h2>
      <ProsecutorFlow />
    </div>
  );
}
