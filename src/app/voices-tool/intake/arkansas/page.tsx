// src/app/voices-tool/intake/arkansas/page.tsx

"use client";
import IntakeFlow from "@/components/FlowEngines/IntakeFlow";

export default function ArkansasIntakePage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold">Arkansas Intake Workflow</h2>
      <IntakeFlow jurisdiction="arkansas" />
    </div>
  );
}
