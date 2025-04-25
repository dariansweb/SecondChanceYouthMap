// File: src/app/voices-tool/defense/page.tsx

"use client";

import React from "react";
import FlowPlayer from "@/components/voices-tool/FormEngine/FlowPlayer";
import defenseFlow from "@/data/voices-tool/defense-flow.json";
import { FormStateProvider } from "@/context/voices-tool/FormStateContext";

export default function DefensePage() {
  return (
    <FormStateProvider>
      <main className="relative min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-slate-200 p-10 sm:p-14 transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight mb-2">
            Youth Defense Workflow
          </h1>
          <FlowPlayer flow={defenseFlow} startNodeId="representation-intake" />
        </div>
      </main>
    </FormStateProvider>
  );
}
