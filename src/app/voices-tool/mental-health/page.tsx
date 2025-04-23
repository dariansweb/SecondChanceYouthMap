// src/app/voices-tool/mental-health/page.tsx

"use client";

import MentalHealthFlow from "@/components/voices-tool/FlowEngines/MentalHealthFlow";

export default function MentalHealthPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Mental Health Specialist Workflow
      </h2>
      <MentalHealthFlow />
    </div>
  );
}
