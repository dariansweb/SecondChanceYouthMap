"use client";

import MatrixGrid from "@/components/MatrixGrid";

export default function MatrixPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 px-6 py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-blue-800">
          Second Chance Youth Matrix
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed text-slate-700 ">
          Explore how states across the U.S. handle critical decision points in
          their juvenile justice systems—
          <br />
          from risk assessment and diversion, to education, family involvement,
          custody, reentry, and more.
        </p>

        <p className="text-md sm:text-lg leading-relaxed text-slate-600 mb-2">
          Each entry reveals how state policy, practice, and discretion shape
          the trajectory of a young person’s life. Tap into the glossary for
          definitions of tools, frameworks, and state-specific approaches.
        </p>
      </div>
      <MatrixGrid />
    </main>
  );
}
