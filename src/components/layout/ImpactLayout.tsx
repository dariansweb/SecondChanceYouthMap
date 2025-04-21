"use client";

import { ReactNode } from "react";

export default function ImpactLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-slate-800 bg-white min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800">
          {title}
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          A tribute to the work, impact, and unseen decisions that shape lives.
        </p>
      </header>

      <article className="prose prose-slate max-w-none">{children}</article>

      <footer className="mt-20 text-center text-slate-400 text-xs italic">
        You are the difference. Thank you for the work you do.
      </footer>
    </main>
  );
}
