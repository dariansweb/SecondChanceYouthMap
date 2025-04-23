// src/app/voices-tool/probation-officer/page.tsx

"use client";

import ProbationFlow from "@/components/voices-tool/FlowEngines/ProbationFlow";

export default function ProbationOfficerPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Probation Officer Workflow</h2>
      <ProbationFlow />
    </div>
  );
}
