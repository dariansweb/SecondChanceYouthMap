"use client";

import MatrixGrid from "@/components/MatrixGrid";

export default function MatrixPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-6">
      <h1 className="text-3xl font-bold mb-4">SCYM Matrix Comparison</h1>
      <p className="mb-8 text-slate-600">
        Compare key decision points in juvenile justice systems across states.
        Expand cards to view notes, citations, and confidence ratings.
      </p>
      <MatrixGrid />
    </main>
  );
}
