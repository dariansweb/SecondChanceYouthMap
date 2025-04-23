// src/app/voices-tool/reentry/page.tsx

"use client";

import ReentryFlow from "@/components/voices-tool/FlowEngines/ReentryFlow";

export default function ReentryCoordinatorPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Reentry Coordinator Workflow
      </h2>
      <ReentryFlow />
    </div>
  );
}
