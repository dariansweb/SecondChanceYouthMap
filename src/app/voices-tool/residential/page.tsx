// src/app/voices-tool/residential/page.tsx

"use client";

import ResidentialFlow from "@/components/voices-tool/FlowEngines/ResidentialFlow";

export default function ResidentialPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Residential Staff Workflow
      </h2>
      <ResidentialFlow />
    </div>
  );
}
