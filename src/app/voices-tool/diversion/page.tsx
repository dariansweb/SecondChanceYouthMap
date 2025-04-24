// File: src/app/voices-tool/diversion/page.tsx

"use client";

import React from "react";
import FlowPlayer from "@/components/voices-tool/FormEngine/FlowPlayer";
import diversionFlow from "@/data/voices-tool/diversion-flow.json";

export default function DiversionPage() {
  return ( 
    <main className="min-h-screen py-10 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Diversion Agreement
        </h1>
        <FlowPlayer flow={diversionFlow} startNodeId="diversion" />
      </div>
    </main>
  );
}
