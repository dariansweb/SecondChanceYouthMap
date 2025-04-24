// File: src/app/voices-tool/intake-officer/page.tsx

"use client";

import React from "react";
import FlowPlayer from "@/components/voices-tool/FormEngine/FlowPlayer";
import intakeFlow from "@/data/voices-tool/intake-flow.json";

export default function IntakeOfficerPage() {
  return (
    <main className="min-h-screen py-10 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Intake Officer Workflow
        </h1>
        <FlowPlayer flow={intakeFlow} startNodeId="start" />
      </div>
    </main>
  );
}
