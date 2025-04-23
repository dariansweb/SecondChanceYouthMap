// src/app/voices-tool/defense/page.tsx

"use client";

import DefenseFlow from "@/components/voices-tool/FlowEngines/DefenseFlow";

export default function DefenseAttorneyPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Defense Attorney Workflow
      </h2>
      <DefenseFlow />
    </div>
  );
}
