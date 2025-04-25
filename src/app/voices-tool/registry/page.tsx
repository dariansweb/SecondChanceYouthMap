// File: src/app/voices-tool/registry/page.tsx

"use client";

import React from "react";
import FlowsRegistry from "@/components/voices-tool/FlowsRegistry";

export default function RegistryPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Voices Journey Registry
        </h1>
        <FlowsRegistry />
      </div>
    </main>
  );
}
