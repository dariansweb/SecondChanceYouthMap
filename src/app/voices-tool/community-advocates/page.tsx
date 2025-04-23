// src/app/voices-tool/community-advocates/page.tsx

"use client";

import CommunityAdvocateFlow from "@/components/voices-tool/FlowEngines/CommunityAdvocateFlow";

export default function CommunityAdvocatePage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Community Advocate Workflow
      </h2>
      <CommunityAdvocateFlow />
    </div>
  );
}
