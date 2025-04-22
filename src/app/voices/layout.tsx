"use client";

import { ReactNode } from "react";

export default function VoicesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-slate-50 min-h-screen px-6 py-12 text-slate-800">
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </main>
  );
}
