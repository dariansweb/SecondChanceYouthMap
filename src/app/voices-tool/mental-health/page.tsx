// File: src/app/voices-tool/mental-health/page.tsx

"use client";

import React from "react";
import FlowPlayer from "@/components/voices-tool/FormEngine/FlowPlayer";
import mentalHealthFlow from "@/data/voices-tool/mental-health-flow.json";
import { FormStateProvider } from "@/context/voices-tool/FormStateContext";

export default function MentalHealthPage() {
  return (
    <FormStateProvider>
      <main className="relative min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-slate-200 p-10 sm:p-14 transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight mb-2">
            Mental Health Evaluation & Services Workflow
          </h1>
          <FlowPlayer
            flow={mentalHealthFlow}
            startNodeId="evaluation-referral"
          />
        </div>
      </main>
    </FormStateProvider>
  );
}
