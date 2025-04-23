// src/app/voices-tool/judges/page.tsx

"use client";

import JudgeFlow from "@/components/voices-tool/FlowEngines/JudgeFlow";

export default function JudgePage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Judge Workflow</h2>
      <JudgeFlow />
    </div>
  );
}
