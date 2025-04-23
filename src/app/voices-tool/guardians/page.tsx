// src/app/voices-tool/guardians/page.tsx

"use client";

import GuardianFlow from "@/components/voices-tool/FlowEngines/GuardianFlow";

export default function GuardianPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Guardian / Parent Workflow
      </h2>
      <GuardianFlow />
    </div>
  );
}
