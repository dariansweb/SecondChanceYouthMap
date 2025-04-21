"use client";

import { ReactNode } from "react";

export default function VoicesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-slate-50 min-h-screen px-6 py-12 text-slate-800">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-blue-900">SCYM Voices</h1>
          <p className="mt-2 text-slate-600 text-sm max-w-2xl mx-auto">
            These pages honor the people who guide youth through the system —
            intake officers, probation staff, judges, educators, advocates, and
            more. Each one helps youth find their path through care, courage,
            and consistency.
          </p>
        </header>
        {children}
      </div>
    </main>
  );
}
