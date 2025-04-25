// File: src/app/voices-tool/layout.tsx

"use client";

import { VoicesContextProvider } from "@/context/voices-tool/VoicesContext";
import { FlowStateProvider } from "@/context/voices-tool/FlowStateContext";

export default function VoicesToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FlowStateProvider>
      <VoicesContextProvider>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </VoicesContextProvider>
    </FlowStateProvider>
  );
}
