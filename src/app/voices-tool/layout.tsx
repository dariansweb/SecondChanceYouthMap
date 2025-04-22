// src/app/voices-tool/layout.tsx

"use client";

import { VoicesContextProvider } from "@/context/voices-tool/VoicesContext";

export default function VoicesToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VoicesContextProvider>
      <div className="min-h-screen bg-gray-50">{children}</div>
    </VoicesContextProvider>
  );
}
