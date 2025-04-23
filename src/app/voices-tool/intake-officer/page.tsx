// src/app/voices-tool/intake-officer/page.tsx

"use client";

import IntakeFlow from "@/components/voices-tool/FlowEngines/IntakeFlow";

export default function IntakeOfficerPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Intake Officer Workflow
      </h2>
      <IntakeFlow />
    </div>
  );
}
