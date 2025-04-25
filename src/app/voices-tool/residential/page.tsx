// File: src/app/voices-tool/residential/page.tsx

"use client";

import React from "react";
import FlowPlayer from "@/components/voices-tool/FormEngine/FlowPlayer";
import residentialFlow from "@/data/voices-tool/residential-flow.json";
import { FormStateProvider } from "@/context/voices-tool/FormStateContext";

export default function ResidentialPage() {
  return (
    <FormStateProvider>
      <main className="relative min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl border border-slate-200 p-10 sm:p-14 transition-all duration-300">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight mb-2">
            Residential Care Workflow
          </h1>
          <FlowPlayer flow={residentialFlow} startNodeId="intake-orientation" />
        </div>
      </main>
    </FormStateProvider>
  );
}
