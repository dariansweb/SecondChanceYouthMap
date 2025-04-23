// src/app/voices-tool/workforce/page.tsx

"use client";

import WorkforceFlow from "@/components/voices-tool/FlowEngines/WorkforceFlow";

export default function WorkforceAgentPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Workforce Agent Workflow
      </h2>
      <WorkforceFlow />
    </div>
  );
}
