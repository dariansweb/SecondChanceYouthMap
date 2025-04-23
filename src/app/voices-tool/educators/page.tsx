// src/app/voices-tool/educators/page.tsx

"use client";

import EducatorFlow from "@/components/voices-tool/FlowEngines/EducatorFlow";

export default function EducatorPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Educator Workflow
      </h2>
      <EducatorFlow />
    </div>
  );
}
